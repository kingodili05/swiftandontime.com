"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Package,
  Truck,
  MapPin,
  CheckCircle2,
  Clock,
  XCircle,
  RotateCcw,
  Phone,
  Mail,
  Weight,
  CalendarDays,
  ArrowRight,
  AlertCircle,
  PackageOpen,
} from "lucide-react"
import type { Package as PackageType, PackageStatus, TrackingEvent } from "@/lib/types"
import { STATUS_LABELS, STATUS_COLORS } from "@/lib/types"

const STEPS: { key: PackageStatus; label: string; icon: React.ReactNode }[] = [
  { key: "pending", label: "Registered", icon: <Package className="w-5 h-5" /> },
  { key: "picked_up", label: "Picked Up", icon: <PackageOpen className="w-5 h-5" /> },
  { key: "in_transit", label: "In Transit", icon: <Truck className="w-5 h-5" /> },
  { key: "out_for_delivery", label: "Out for Delivery", icon: <MapPin className="w-5 h-5" /> },
  { key: "delivered", label: "Delivered", icon: <CheckCircle2 className="w-5 h-5" /> },
]

const STEP_ORDER: PackageStatus[] = ["pending", "picked_up", "in_transit", "out_for_delivery", "delivered"]

function getStepIndex(status: PackageStatus) {
  if (status === "failed" || status === "returned") return -1
  return STEP_ORDER.indexOf(status)
}

function StatusIcon({ status }: { status: PackageStatus }) {
  const icons: Record<PackageStatus, React.ReactNode> = {
    pending: <Clock className="w-6 h-6" />,
    picked_up: <PackageOpen className="w-6 h-6" />,
    in_transit: <Truck className="w-6 h-6" />,
    out_for_delivery: <MapPin className="w-6 h-6" />,
    delivered: <CheckCircle2 className="w-6 h-6" />,
    failed: <XCircle className="w-6 h-6" />,
    returned: <RotateCcw className="w-6 h-6" />,
  }
  return <>{icons[status]}</>
}

function SkeletonCard() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
        <div className="flex items-center justify-between">
          <div className="h-6 bg-gray-200 rounded w-48" />
          <div className="h-6 bg-gray-200 rounded w-24" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-3 bg-gray-200 rounded w-20" />
              <div className="h-4 bg-gray-200 rounded w-32" />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full shrink-0" />
            <div className="flex-1 space-y-2 pt-1">
              <div className="h-4 bg-gray-200 rounded w-40" />
              <div className="h-3 bg-gray-200 rounded w-56" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function formatDate(dateStr: string | null) {
  if (!dateStr) return null
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

function formatDateTime(dateStr: string) {
  return new Date(dateStr).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
}

export default function TrackPage() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [loading, setLoading] = useState(false)
  const [pkg, setPkg] = useState<PackageType | null>(null)
  const [error, setError] = useState("")
  const [hasSearched, setHasSearched] = useState(false)

  async function handleTrack(e?: React.FormEvent) {
    e?.preventDefault()
    if (!trackingNumber.trim()) return

    setLoading(true)
    setError("")
    setPkg(null)
    setHasSearched(true)

    try {
      const res = await fetch(`/api/track?number=${encodeURIComponent(trackingNumber.trim())}`)
      if (!res.ok) {
        setError("No package found with that tracking number. Please check and try again.")
        return
      }
      const data = await res.json()
      setPkg(data)
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const currentStepIndex = pkg ? getStepIndex(pkg.status) : -1
  const isException = pkg?.status === "failed" || pkg?.status === "returned"

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Hero search */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Real-time package tracking
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
              Track Your Package
            </h1>
            <p className="text-blue-100 text-lg mb-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Enter your tracking number to get real-time delivery updates
            </p>

            <form
              onSubmit={handleTrack}
              className="flex gap-2 bg-white rounded-2xl p-2 shadow-2xl animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value.toUpperCase())}
                  placeholder="e.g. SOT-ABC123-XY9Z"
                  className="pl-12 h-12 border-0 bg-transparent text-gray-900 text-base focus-visible:ring-0 placeholder:text-gray-400"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={loading || !trackingNumber.trim()}
                className="bg-blue-600 hover:bg-blue-700 rounded-xl px-6 h-12 shrink-0 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Tracking...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    Track <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">

          {loading && <SkeletonCard />}

          {/* Error state */}
          {!loading && error && (
            <div className="animate-fade-in-up bg-white rounded-2xl p-8 shadow-sm border border-red-100 text-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Package Not Found</h3>
              <p className="text-gray-500">{error}</p>
              <p className="text-sm text-gray-400 mt-2">
                Example format: <span className="font-mono font-medium">SOT-ABC123-XY9Z</span>
              </p>
            </div>
          )}

          {/* Package result */}
          {!loading && pkg && (
            <div className="space-y-5">

              {/* Status banner */}
              <div className={`animate-fade-in-up rounded-2xl p-6 shadow-sm border ${
                isException ? "bg-red-50 border-red-100" :
                pkg.status === "delivered" ? "bg-green-50 border-green-100" :
                "bg-blue-50 border-blue-100"
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                      isException ? "bg-red-100 text-red-600" :
                      pkg.status === "delivered" ? "bg-green-100 text-green-600" :
                      "bg-blue-100 text-blue-600"
                    } ${pkg.status === "in_transit" ? "animate-pulse" : ""}`}>
                      <StatusIcon status={pkg.status} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Tracking Number</p>
                      <p className="text-xl font-bold text-gray-900 font-mono">{pkg.tracking_number}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={`text-sm px-3 py-1 rounded-full font-semibold ${STATUS_COLORS[pkg.status]}`}>
                      {STATUS_LABELS[pkg.status]}
                    </Badge>
                    {pkg.current_location && (
                      <p className="text-sm text-gray-500 mt-1 flex items-center justify-end gap-1">
                        <MapPin className="w-3 h-3" /> {pkg.current_location}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Progress stepper */}
              {!isException && (
                <div className="animate-fade-in-up bg-white rounded-2xl p-6 shadow-sm border border-gray-100" style={{ animationDelay: "0.05s" }}>
                  <h3 className="font-semibold text-gray-900 mb-6">Delivery Progress</h3>
                  <div className="relative">
                    <div className="absolute top-5 left-5 right-5 h-0.5 bg-gray-200 hidden sm:block" />
                    <div
                      className="absolute top-5 left-5 h-0.5 bg-blue-500 hidden sm:block transition-all duration-1000 ease-out"
                      style={{
                        width: currentStepIndex >= 0
                          ? `calc(${(currentStepIndex / (STEPS.length - 1)) * 100}% - 10px)`
                          : "0%",
                      }}
                    />
                    <div className="flex justify-between relative">
                      {STEPS.map((step, index) => {
                        const done = currentStepIndex > index
                        const active = currentStepIndex === index
                        return (
                          <div
                            key={step.key}
                            className="flex flex-col items-center gap-2 animate-fade-in-up"
                            style={{ animationDelay: `${0.1 + index * 0.08}s` }}
                          >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-500 ${
                              done ? "bg-blue-600 text-white shadow-md" :
                              active ? "bg-blue-600 text-white shadow-lg ring-4 ring-blue-100 scale-110" :
                              "bg-gray-100 text-gray-400"
                            }`}>
                              {done ? <CheckCircle2 className="w-5 h-5" /> : step.icon}
                            </div>
                            <p className={`text-xs font-medium text-center hidden sm:block ${
                              active ? "text-blue-600" : done ? "text-gray-700" : "text-gray-400"
                            }`}>
                              {step.label}
                            </p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Info grid */}
              <div className="grid md:grid-cols-2 gap-4">
                <InfoCard title="Delivery Info" icon={<CalendarDays className="w-4 h-4 text-blue-500" />} delay="0.15s">
                  <InfoRow label="Service" value={pkg.service_type} />
                  <InfoRow label="Origin" value={pkg.origin} />
                  <InfoRow label="Destination" value={pkg.destination} />
                  <InfoRow label="Est. Delivery" value={formatDate(pkg.estimated_delivery)} highlight />
                  <InfoRow label="Delivered On" value={formatDate(pkg.actual_delivery)} highlight />
                  <InfoRow label="Ship Date" value={formatDate(pkg.created_at)} />
                </InfoCard>

                <InfoCard title="Package Details" icon={<Weight className="w-4 h-4 text-blue-500" />} delay="0.2s">
                  <InfoRow label="Type" value={pkg.package_type} />
                  <InfoRow label="Weight" value={pkg.weight ? `${pkg.weight} lbs` : null} />
                  <InfoRow label="Dimensions" value={pkg.dimensions} />
                  <InfoRow label="Contents" value={pkg.description} />
                </InfoCard>

                <InfoCard title="Recipient" icon={<MapPin className="w-4 h-4 text-blue-500" />} delay="0.25s">
                  <InfoRow label="Name" value={pkg.recipient_name} />
                  <InfoRow
                    label="Address"
                    value={[pkg.recipient_address, pkg.recipient_city, pkg.recipient_state, pkg.recipient_zip, pkg.recipient_country]
                      .filter(Boolean).join(", ")}
                  />
                  <InfoRow label="Phone" value={pkg.recipient_phone} icon={<Phone className="w-3 h-3" />} />
                  <InfoRow label="Email" value={pkg.recipient_email} icon={<Mail className="w-3 h-3" />} />
                </InfoCard>

                {pkg.sender_name && (
                  <InfoCard title="Sender" icon={<Package className="w-4 h-4 text-blue-500" />} delay="0.3s">
                    <InfoRow label="Name" value={pkg.sender_name} />
                    <InfoRow
                      label="Address"
                      value={[pkg.sender_address, pkg.sender_city, pkg.sender_country].filter(Boolean).join(", ")}
                    />
                    <InfoRow label="Phone" value={pkg.sender_phone} />
                    <InfoRow label="Email" value={pkg.sender_email} />
                  </InfoCard>
                )}
              </div>

              {/* Tracking timeline */}
              {pkg.tracking_events && pkg.tracking_events.length > 0 && (
                <div className="animate-fade-in-up bg-white rounded-2xl p-6 shadow-sm border border-gray-100" style={{ animationDelay: "0.35s" }}>
                  <h3 className="font-semibold text-gray-900 mb-6">Tracking History</h3>
                  <div>
                    {pkg.tracking_events.map((event: TrackingEvent, index: number) => (
                      <div
                        key={event.id}
                        className="flex gap-4 animate-slide-in-left"
                        style={{ animationDelay: `${0.4 + index * 0.06}s` }}
                      >
                        <div className="flex flex-col items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 ${
                            index === 0 ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-400"
                          }`}>
                            <Truck className="w-4 h-4" />
                          </div>
                          {index < (pkg.tracking_events?.length ?? 0) - 1 && (
                            <div className="w-0.5 flex-1 bg-gray-100 my-1 min-h-[1.5rem]" />
                          )}
                        </div>
                        <div className="pb-5 flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                            <p className={`font-semibold ${index === 0 ? "text-blue-700" : "text-gray-800"}`}>
                              {event.description}
                            </p>
                            <p className="text-xs text-gray-400 shrink-0">{formatDateTime(event.timestamp)}</p>
                          </div>
                          {event.location && (
                            <p className="text-sm text-gray-500 flex items-center gap-1 mt-0.5">
                              <MapPin className="w-3 h-3" /> {event.location}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {pkg.notes && (
                <div className="animate-fade-in-up bg-amber-50 border border-amber-100 rounded-2xl p-5" style={{ animationDelay: "0.45s" }}>
                  <p className="text-sm font-semibold text-amber-800 mb-1">Note from courier</p>
                  <p className="text-sm text-amber-700">{pkg.notes}</p>
                </div>
              )}
            </div>
          )}

          {/* Default state */}
          {!loading && !hasSearched && (
            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              {[
                { icon: <Clock className="w-6 h-6 text-blue-500" />, title: "Real-time Updates", desc: "Get instant status updates as your package moves" },
                { icon: <MapPin className="w-6 h-6 text-blue-500" />, title: "Location Tracking", desc: "Know exactly where your package is at all times" },
                { icon: <CheckCircle2 className="w-6 h-6 text-blue-500" />, title: "Delivery Confirmation", desc: "Receive confirmation once your package is delivered" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

function InfoCard({ title, icon, delay, children }: { title: string; icon: React.ReactNode; delay: string; children: React.ReactNode }) {
  return (
    <div className="animate-fade-in-up bg-white rounded-2xl p-6 shadow-sm border border-gray-100" style={{ animationDelay: delay }}>
      <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">{icon} {title}</h3>
      <div className="space-y-3 text-sm">{children}</div>
    </div>
  )
}

function InfoRow({
  label,
  value,
  highlight,
  icon,
}: {
  label: string
  value: string | number | null | undefined
  highlight?: boolean
  icon?: React.ReactNode
}) {
  if (!value) return null
  return (
    <div className="flex justify-between gap-4">
      <span className="text-gray-400 shrink-0">{label}</span>
      <span className={`text-right font-medium flex items-center gap-1 ${highlight ? "text-blue-600" : "text-gray-700"}`}>
        {icon}{String(value)}
      </span>
    </div>
  )
}
