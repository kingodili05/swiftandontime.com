"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Trash2, Plus, MapPin, Clock } from "lucide-react"
import type { TrackingEvent } from "@/lib/types"

interface Props {
  packageId: string
  events: TrackingEvent[]
}

export default function EventsPanel({ packageId, events: initial }: Props) {
  const [events, setEvents] = useState<TrackingEvent[]>(initial)
  const [adding, setAdding] = useState(false)
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({ description: "", location: "", timestamp: new Date().toISOString().slice(0, 16) })

  function formatDateTime(d: string) {
    return new Date(d).toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit", hour12: true })
  }

  async function handleAdd() {
    if (!form.description.trim()) return
    setSaving(true)
    const res = await fetch("/api/admin/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        package_id: packageId,
        description: form.description,
        location: form.location || null,
        timestamp: new Date(form.timestamp).toISOString(),
      }),
    })
    if (res.ok) {
      const newEvent = await res.json()
      setEvents((prev) => [newEvent, ...prev])
      setForm({ description: "", location: "", timestamp: new Date().toISOString().slice(0, 16) })
      setAdding(false)
    }
    setSaving(false)
  }

  async function handleDelete(id: string) {
    await fetch(`/api/admin/events?id=${id}`, { method: "DELETE" })
    setEvents((prev) => prev.filter((e) => e.id !== id))
  }

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-50 bg-gray-50/50">
        <h3 className="font-semibold text-gray-800 text-sm">Tracking Events</h3>
        <Button size="sm" variant="outline" onClick={() => setAdding(!adding)}>
          <Plus className="w-3.5 h-3.5 mr-1" /> Add Event
        </Button>
      </div>

      {adding && (
        <div className="p-5 border-b border-gray-100 bg-blue-50/30 space-y-3">
          <div className="space-y-1.5">
            <Label className="text-sm text-gray-700">Description <span className="text-red-500">*</span></Label>
            <Textarea
              value={form.description}
              onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              placeholder="e.g. Package arrived at Chicago sorting facility"
              rows={2}
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-sm text-gray-700">Location</Label>
              <Input value={form.location} onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))} placeholder="e.g. Chicago, IL" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-sm text-gray-700">Date & Time</Label>
              <Input type="datetime-local" value={form.timestamp} onChange={(e) => setForm((f) => ({ ...f, timestamp: e.target.value }))} />
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" onClick={handleAdd} disabled={saving || !form.description.trim()}>
              {saving ? "Saving..." : "Save Event"}
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setAdding(false)}>Cancel</Button>
          </div>
        </div>
      )}

      <div className="p-5">
        {events.length === 0 ? (
          <p className="text-gray-400 text-sm text-center py-4">No tracking events yet. Add the first one above.</p>
        ) : (
          <div className="space-y-0">
            {events.map((event, index) => (
              <div key={event.id} className="flex gap-3 group">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${index === 0 ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-400"}`}>
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  {index < events.length - 1 && <div className="w-0.5 flex-1 bg-gray-100 my-1 min-h-[1rem]" />}
                </div>
                <div className="pb-4 flex-1 flex items-start justify-between gap-2">
                  <div>
                    <p className={`text-sm font-medium ${index === 0 ? "text-blue-700" : "text-gray-800"}`}>{event.description}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-0.5">
                      {event.location && (
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {event.location}
                        </span>
                      )}
                      <span className="text-xs text-gray-400">{formatDateTime(event.timestamp)}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(event.id)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-red-400 hover:text-red-600 shrink-0 mt-0.5"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
