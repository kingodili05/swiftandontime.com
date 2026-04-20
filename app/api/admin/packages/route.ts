import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

function isAuthenticated(request: NextRequest) {
  const adminAuth = request.cookies.get('admin_auth')
  const validToken = process.env.ADMIN_TOKEN ?? 'swift_admin_token'
  return adminAuth?.value === validToken
}

export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const search = searchParams.get('search')
  const status = searchParams.get('status')

  let query = supabase
    .from('packages')
    .select('*')
    .order('created_at', { ascending: false })

  if (search) {
    query = query.or(
      `tracking_number.ilike.%${search}%,recipient_name.ilike.%${search}%,recipient_city.ilike.%${search}%`
    )
  }

  if (status && status !== 'all') {
    query = query.eq('status', status)
  }

  const { data, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()

  if (!body.tracking_number) {
    const rand = Math.random().toString(36).substring(2, 7).toUpperCase()
    body.tracking_number = `SOT-${Date.now().toString(36).toUpperCase()}-${rand}`
  } else {
    body.tracking_number = body.tracking_number.toUpperCase().trim()
  }

  const { data, error } = await supabase
    .from('packages')
    .insert(body)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  await supabase.from('tracking_events').insert({
    package_id: data.id,
    status: data.status,
    location: data.origin ?? data.current_location,
    description: 'Package registered in our system.',
  })

  return NextResponse.json(data, { status: 201 })
}
