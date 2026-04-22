import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const trackingNumber = searchParams.get('number')

  if (!trackingNumber) {
    return NextResponse.json({ error: 'Tracking number required' }, { status: 400 })
  }

  const { data, error } = await supabase
    .from('packages')
    .select('*, tracking_events(*)')
    .eq('tracking_number', trackingNumber.toUpperCase().trim())
    .single()

  if (error || !data) {
    return NextResponse.json({ error: 'Package not found' }, { status: 404 })
  }

  if (data.tracking_events) {
    data.tracking_events.sort(
      (a: { timestamp: string }, b: { timestamp: string }) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    )
  }

  return NextResponse.json(data)
}
