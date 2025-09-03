"use client"

import { Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function TrackingFloat() {
  return (
    <Button
      asChild
      className="fixed bottom-6 left-6 z-50 bg-blue-600 hover:bg-blue-700 rounded-full p-4 shadow-lg"
      size="icon"
    >
      <Link href="/track">
        <Package className="h-6 w-6" />
      </Link>
    </Button>
  )
}
