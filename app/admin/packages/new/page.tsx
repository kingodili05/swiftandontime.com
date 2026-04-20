"use client"

import { useRouter } from "next/navigation"
import PackageForm from "../PackageForm"
import type { Package } from "@/lib/types"

export default function NewPackagePage() {
  const router = useRouter()

  async function handleSubmit(data: Partial<Package>) {
    const res = await fetch("/api/admin/packages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (res.ok) {
      router.push("/admin/packages")
    } else {
      const err = await res.json()
      throw new Error(err.error ?? "Failed to create package")
    }
  }

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Add New Package</h2>
        <p className="text-sm text-gray-500 mt-1">Fill in the package details. A tracking number will be auto-generated if left blank.</p>
      </div>
      <PackageForm onSubmit={handleSubmit} />
    </div>
  )
}
