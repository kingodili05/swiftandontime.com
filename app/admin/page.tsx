"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Package, Truck, CheckCircle2, Clock, AlertCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Package as PackageType } from "@/lib/types"
import { STATUS_LABELS, STATUS_COLORS } from "@/lib/types"

export default function AdminDashboard() {
  const [packages, setPackages] = useState<PackageType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/admin/packages")
      .then((r) => r.json())
      .then((data) => { setPackages(Array.isArray(data) ? data : []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const stats = {
    total: packages.length,
    inTransit: packages.filter((p) => p.status === "in_transit" || p.status === "out_for_delivery").length,
    delivered: packages.filter((p) => p.status === "delivered").length,
    pending: packages.filter((p) => p.status === "pending" || p.status === "picked_up").length,
    failed: packages.filter((p) => p.status === "failed" || p.status === "returned").length,
  }

  const recent = packages.slice(0, 8)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
          <p className="text-sm text-gray-500 mt-1">Overview of all package activity</p>
        </div>
        <Button asChild>
          <Link href="/admin/packages/new">
            <Package className="w-4 h-4 mr-2" /> Add Package
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Packages", value: stats.total, icon: <Package className="w-5 h-5" />, color: "bg-blue-50 text-blue-600" },
          { label: "In Transit", value: stats.inTransit, icon: <Truck className="w-5 h-5" />, color: "bg-yellow-50 text-yellow-600" },
          { label: "Delivered", value: stats.delivered, icon: <CheckCircle2 className="w-5 h-5" />, color: "bg-green-50 text-green-600" },
          { label: "Pending", value: stats.pending, icon: <Clock className="w-5 h-5" />, color: "bg-gray-50 text-gray-600" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${stat.color}`}>
              {stat.icon}
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {loading ? <span className="animate-pulse bg-gray-200 rounded w-8 h-6 inline-block" /> : stat.value}
            </p>
            <p className="text-sm text-gray-500 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {stats.failed > 0 && (
        <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
          <p className="text-sm text-red-700">
            <span className="font-semibold">{stats.failed} package(s)</span> have failed delivery or been returned. Please review.
          </p>
          <Link href="/admin/packages?status=failed" className="ml-auto text-sm text-red-600 font-medium hover:underline shrink-0">
            View →
          </Link>
        </div>
      )}

      {/* Recent packages */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">Recent Packages</h3>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/admin/packages">View all <ArrowRight className="w-3 h-3 ml-1" /></Link>
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-50">
                <th className="text-left px-5 py-3 text-gray-400 font-medium">Tracking #</th>
                <th className="text-left px-5 py-3 text-gray-400 font-medium">Recipient</th>
                <th className="text-left px-5 py-3 text-gray-400 font-medium">Destination</th>
                <th className="text-left px-5 py-3 text-gray-400 font-medium">Status</th>
                <th className="text-left px-5 py-3 text-gray-400 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                [...Array(4)].map((_, i) => (
                  <tr key={i} className="border-b border-gray-50 animate-pulse">
                    <td className="px-5 py-3"><div className="h-4 bg-gray-200 rounded w-32" /></td>
                    <td className="px-5 py-3"><div className="h-4 bg-gray-200 rounded w-28" /></td>
                    <td className="px-5 py-3"><div className="h-4 bg-gray-200 rounded w-24" /></td>
                    <td className="px-5 py-3"><div className="h-4 bg-gray-200 rounded w-20" /></td>
                    <td className="px-5 py-3"><div className="h-4 bg-gray-200 rounded w-12" /></td>
                  </tr>
                ))
              ) : recent.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-5 py-8 text-center text-gray-400">
                    No packages yet. <Link href="/admin/packages/new" className="text-blue-600 hover:underline">Add your first package →</Link>
                  </td>
                </tr>
              ) : (
                recent.map((pkg) => (
                  <tr key={pkg.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="px-5 py-3 font-mono font-medium text-gray-900">{pkg.tracking_number}</td>
                    <td className="px-5 py-3 text-gray-700">{pkg.recipient_name}</td>
                    <td className="px-5 py-3 text-gray-500">{[pkg.recipient_city, pkg.recipient_country].filter(Boolean).join(", ")}</td>
                    <td className="px-5 py-3">
                      <Badge className={`text-xs ${STATUS_COLORS[pkg.status]}`}>
                        {STATUS_LABELS[pkg.status]}
                      </Badge>
                    </td>
                    <td className="px-5 py-3">
                      <Link href={`/admin/packages/${pkg.id}`} className="text-blue-600 hover:underline text-xs font-medium">
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
