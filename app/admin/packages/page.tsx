"use client"

import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel,
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
  AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Package, Plus, Search, Trash2, Pencil } from "lucide-react"
import type { Package as PackageType } from "@/lib/types"
import { STATUS_LABELS, STATUS_COLORS } from "@/lib/types"

export default function PackagesPage() {
  const [packages, setPackages] = useState<PackageType[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const load = useCallback(async () => {
    setLoading(true)
    const params = new URLSearchParams()
    if (search) params.set("search", search)
    if (statusFilter !== "all") params.set("status", statusFilter)
    const res = await fetch(`/api/admin/packages?${params}`)
    const data = await res.json()
    setPackages(Array.isArray(data) ? data : [])
    setLoading(false)
  }, [search, statusFilter])

  useEffect(() => { load() }, [load])

  async function handleDelete(id: string) {
    await fetch(`/api/admin/packages/${id}`, { method: "DELETE" })
    setPackages((prev) => prev.filter((p) => p.id !== id))
  }

  function formatDate(d: string) {
    return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Packages</h2>
          <p className="text-sm text-gray-500 mt-1">{packages.length} total packages</p>
        </div>
        <Button asChild>
          <Link href="/admin/packages/new">
            <Plus className="w-4 h-4 mr-2" /> Add Package
          </Link>
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-3 flex-col sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search by tracking number or recipient..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            {Object.entries(STATUS_LABELS).map(([key, label]) => (
              <SelectItem key={key} value={key}>{label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="text-left px-5 py-3 text-gray-500 font-medium">Tracking #</th>
                <th className="text-left px-5 py-3 text-gray-500 font-medium">Recipient</th>
                <th className="text-left px-5 py-3 text-gray-500 font-medium">Service</th>
                <th className="text-left px-5 py-3 text-gray-500 font-medium">Est. Delivery</th>
                <th className="text-left px-5 py-3 text-gray-500 font-medium">Status</th>
                <th className="text-left px-5 py-3 text-gray-500 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                [...Array(5)].map((_, i) => (
                  <tr key={i} className="border-b border-gray-50 animate-pulse">
                    {[...Array(6)].map((__, j) => (
                      <td key={j} className="px-5 py-4">
                        <div className="h-4 bg-gray-200 rounded w-full max-w-[120px]" />
                      </td>
                    ))}
                  </tr>
                ))
              ) : packages.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center">
                    <Package className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-400">No packages found</p>
                    <Link href="/admin/packages/new" className="text-blue-600 text-sm hover:underline mt-1 inline-block">
                      Add your first package →
                    </Link>
                  </td>
                </tr>
              ) : (
                packages.map((pkg) => (
                  <tr key={pkg.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="px-5 py-3 font-mono font-medium text-gray-900 text-xs">{pkg.tracking_number}</td>
                    <td className="px-5 py-3">
                      <p className="font-medium text-gray-900">{pkg.recipient_name}</p>
                      <p className="text-gray-400 text-xs">{[pkg.recipient_city, pkg.recipient_country].filter(Boolean).join(", ")}</p>
                    </td>
                    <td className="px-5 py-3 text-gray-600">{pkg.service_type}</td>
                    <td className="px-5 py-3 text-gray-500">
                      {pkg.estimated_delivery ? formatDate(pkg.estimated_delivery) : "—"}
                    </td>
                    <td className="px-5 py-3">
                      <Badge className={`text-xs ${STATUS_COLORS[pkg.status]}`}>
                        {STATUS_LABELS[pkg.status]}
                      </Badge>
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                          <Link href={`/admin/packages/${pkg.id}`}>
                            <Pencil className="w-3.5 h-3.5" />
                          </Link>
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-red-400 hover:text-red-600 hover:bg-red-50">
                              <Trash2 className="w-3.5 h-3.5" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete package?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This will permanently delete <strong>{pkg.tracking_number}</strong> and all its tracking events. This cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDelete(pkg.id)}
                                className="bg-red-600 hover:bg-red-700"
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
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
