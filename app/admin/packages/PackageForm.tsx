"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Save, ArrowLeft } from "lucide-react"
import type { Package, PackageStatus } from "@/lib/types"
import { STATUS_LABELS } from "@/lib/types"

interface Props {
  pkg?: Package
  onSubmit: (data: Partial<Package>) => Promise<void>
}

export default function PackageForm({ pkg, onSubmit }: Props) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")

  const [form, setForm] = useState({
    tracking_number: pkg?.tracking_number ?? "",
    status: pkg?.status ?? "pending",
    service_type: pkg?.service_type ?? "",
    package_type: pkg?.package_type ?? "",
    weight: pkg?.weight?.toString() ?? "",
    dimensions: pkg?.dimensions ?? "",
    description: pkg?.description ?? "",
    origin: pkg?.origin ?? "",
    destination: pkg?.destination ?? "",
    current_location: pkg?.current_location ?? "",
    estimated_delivery: pkg?.estimated_delivery?.split("T")[0] ?? "",
    actual_delivery: pkg?.actual_delivery?.split("T")[0] ?? "",
    sender_name: pkg?.sender_name ?? "",
    sender_phone: pkg?.sender_phone ?? "",
    sender_email: pkg?.sender_email ?? "",
    sender_address: pkg?.sender_address ?? "",
    sender_city: pkg?.sender_city ?? "",
    sender_country: pkg?.sender_country ?? "",
    recipient_name: pkg?.recipient_name ?? "",
    recipient_phone: pkg?.recipient_phone ?? "",
    recipient_email: pkg?.recipient_email ?? "",
    recipient_address: pkg?.recipient_address ?? "",
    recipient_city: pkg?.recipient_city ?? "",
    recipient_state: pkg?.recipient_state ?? "",
    recipient_country: pkg?.recipient_country ?? "",
    recipient_zip: pkg?.recipient_zip ?? "",
    notes: pkg?.notes ?? "",
  })

  function set(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError("")
    try {
      const payload: Partial<Package> = {
        ...form,
        weight: form.weight ? parseFloat(form.weight) : undefined,
        estimated_delivery: form.estimated_delivery || undefined,
        actual_delivery: form.actual_delivery || undefined,
        status: form.status as PackageStatus,
      }
      // Clean up empty strings to undefined
      Object.keys(payload).forEach((k) => {
        const key = k as keyof typeof payload
        if (payload[key] === "") (payload as Record<string, unknown>)[key] = undefined
      })
      await onSubmit(payload)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong")
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-100 text-red-700 text-sm px-4 py-3 rounded-lg">{error}</div>
      )}

      {/* Tracking & Status */}
      <Section title="Tracking Information">
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Tracking Number" hint="Leave blank to auto-generate">
            <Input value={form.tracking_number} onChange={(e) => set("tracking_number", e.target.value.toUpperCase())} placeholder="SOT-AUTO-GENERATED" />
          </Field>
          <Field label="Status" required>
            <Select value={form.status} onValueChange={(v) => set("status", v)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {Object.entries(STATUS_LABELS).map(([key, label]) => (
                  <SelectItem key={key} value={key}>{label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
          <Field label="Current Location">
            <Input value={form.current_location} onChange={(e) => set("current_location", e.target.value)} placeholder="e.g. Chicago Sorting Facility" />
          </Field>
          <Field label="Service Type" required>
            <Select value={form.service_type} onValueChange={(v) => set("service_type", v)}>
              <SelectTrigger><SelectValue placeholder="Select service" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Same-Day Delivery">Same-Day Delivery</SelectItem>
                <SelectItem value="Next-Day Express">Next-Day Express</SelectItem>
                <SelectItem value="2-Day Express">2-Day Express</SelectItem>
                <SelectItem value="Standard Delivery">Standard Delivery</SelectItem>
                <SelectItem value="International Express">International Express</SelectItem>
                <SelectItem value="International Standard">International Standard</SelectItem>
                <SelectItem value="Freight">Freight</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field label="Origin">
            <Input value={form.origin} onChange={(e) => set("origin", e.target.value)} placeholder="e.g. New York, NY" />
          </Field>
          <Field label="Destination">
            <Input value={form.destination} onChange={(e) => set("destination", e.target.value)} placeholder="e.g. Los Angeles, CA" />
          </Field>
          <Field label="Estimated Delivery">
            <Input type="date" value={form.estimated_delivery} onChange={(e) => set("estimated_delivery", e.target.value)} />
          </Field>
          <Field label="Actual Delivery Date">
            <Input type="date" value={form.actual_delivery} onChange={(e) => set("actual_delivery", e.target.value)} />
          </Field>
        </div>
      </Section>

      {/* Package Details */}
      <Section title="Package Details">
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Package Type">
            <Select value={form.package_type} onValueChange={(v) => set("package_type", v)}>
              <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Envelope">Envelope</SelectItem>
                <SelectItem value="Small Box">Small Box</SelectItem>
                <SelectItem value="Medium Box">Medium Box</SelectItem>
                <SelectItem value="Large Box">Large Box</SelectItem>
                <SelectItem value="Pallet">Pallet</SelectItem>
                <SelectItem value="Crate">Crate</SelectItem>
                <SelectItem value="Document">Document</SelectItem>
                <SelectItem value="Fragile">Fragile Item</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field label="Weight (lbs)">
            <Input type="number" step="0.1" min="0" value={form.weight} onChange={(e) => set("weight", e.target.value)} placeholder="0.0" />
          </Field>
          <Field label="Dimensions (L × W × H)">
            <Input value={form.dimensions} onChange={(e) => set("dimensions", e.target.value)} placeholder='e.g. 12" × 10" × 8"' />
          </Field>
          <Field label="Contents / Description">
            <Input value={form.description} onChange={(e) => set("description", e.target.value)} placeholder="e.g. Electronics, clothing..." />
          </Field>
        </div>
      </Section>

      {/* Recipient */}
      <Section title="Recipient Information">
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Full Name" required>
            <Input value={form.recipient_name} onChange={(e) => set("recipient_name", e.target.value)} required placeholder="John Doe" />
          </Field>
          <Field label="Phone">
            <Input value={form.recipient_phone} onChange={(e) => set("recipient_phone", e.target.value)} placeholder="+1 (555) 000-0000" />
          </Field>
          <Field label="Email">
            <Input type="email" value={form.recipient_email} onChange={(e) => set("recipient_email", e.target.value)} placeholder="john@example.com" />
          </Field>
          <Field label="Street Address" required>
            <Input value={form.recipient_address} onChange={(e) => set("recipient_address", e.target.value)} required placeholder="123 Main St" />
          </Field>
          <Field label="City" required>
            <Input value={form.recipient_city} onChange={(e) => set("recipient_city", e.target.value)} required placeholder="New York" />
          </Field>
          <Field label="State / Province" required>
            <Input value={form.recipient_state} onChange={(e) => set("recipient_state", e.target.value)} required placeholder="NY" />
          </Field>
          <Field label="ZIP / Postal Code">
            <Input value={form.recipient_zip} onChange={(e) => set("recipient_zip", e.target.value)} placeholder="10001" />
          </Field>
          <Field label="Country" required>
            <Input value={form.recipient_country} onChange={(e) => set("recipient_country", e.target.value)} required placeholder="United States" />
          </Field>
        </div>
      </Section>

      {/* Sender */}
      <Section title="Sender Information">
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Full Name">
            <Input value={form.sender_name} onChange={(e) => set("sender_name", e.target.value)} placeholder="Jane Smith" />
          </Field>
          <Field label="Phone">
            <Input value={form.sender_phone} onChange={(e) => set("sender_phone", e.target.value)} placeholder="+1 (555) 000-0000" />
          </Field>
          <Field label="Email">
            <Input type="email" value={form.sender_email} onChange={(e) => set("sender_email", e.target.value)} placeholder="sender@example.com" />
          </Field>
          <Field label="Address">
            <Input value={form.sender_address} onChange={(e) => set("sender_address", e.target.value)} placeholder="456 Oak Ave" />
          </Field>
          <Field label="City">
            <Input value={form.sender_city} onChange={(e) => set("sender_city", e.target.value)} placeholder="Chicago" />
          </Field>
          <Field label="Country">
            <Input value={form.sender_country} onChange={(e) => set("sender_country", e.target.value)} placeholder="United States" />
          </Field>
        </div>
      </Section>

      {/* Notes */}
      <Section title="Internal Notes">
        <Textarea
          value={form.notes}
          onChange={(e) => set("notes", e.target.value)}
          placeholder="Any special instructions or notes visible to the customer..."
          rows={3}
        />
      </Section>

      {/* Actions */}
      <div className="flex items-center gap-3 pt-2">
        <Button type="submit" disabled={saving} className="min-w-[120px]">
          {saving ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Saving...
            </div>
          ) : (
            <><Save className="w-4 h-4 mr-2" /> Save Package</>
          )}
        </Button>
        <Button type="button" variant="ghost" onClick={() => router.back()}>
          <ArrowLeft className="w-4 h-4 mr-2" /> Cancel
        </Button>
      </div>
    </form>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-5 py-3 border-b border-gray-50 bg-gray-50/50">
        <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}

function Field({ label, required, hint, children }: { label: string; required?: boolean; hint?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-gray-700 text-sm">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      {children}
      {hint && <p className="text-xs text-gray-400">{hint}</p>}
    </div>
  )
}
