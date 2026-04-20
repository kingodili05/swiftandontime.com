"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import PackageForm from "../PackageForm"
import EventsPanel from "../EventsPanel"
import type { Package } from "@/lib/types"

export default function EditPackagePage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const [pkg, setPkg] = useState<Package | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/admin/packages/${id}`)
      .then((r) => r.json())
      .then((data) => { setPkg(data); setLoading(false) })
  }, [id])

  async function handleSubmit(data: Partial<Package>) {
    const res = await fetch(`/api/admin/packages/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (res.ok) {
      router.push("/admin/packages")
    } else {
      const err = await res.json()
      throw new Error(err.error ?? "Failed to update package")
    }
  }

  if (loading) {
    return (
      <div className="max-w-3xl space-y-4 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-48" />
        <div className="bg-white rounded-xl p-6 space-y-4 border border-gray-100">
          {[...Array(8)].map((_, i) => <div key={i} className="h-10 bg-gray-200 rounded" />)}
        </div>
      </div>
    )
  }

  if (!pkg) return <p className="text-gray-500">Package not found.</p>

  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Edit Package</h2>
        <p className="text-sm font-mono text-gray-500 mt-1">{pkg.tracking_number}</p>
      </div>
      <PackageForm pkg={pkg} onSubmit={handleSubmit} />
      <EventsPanel packageId={id} events={pkg.tracking_events ?? []} />
    </div>
  )
}
