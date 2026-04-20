export type PackageStatus =
  | 'pending'
  | 'picked_up'
  | 'in_transit'
  | 'out_for_delivery'
  | 'delivered'
  | 'failed'
  | 'returned'

export interface TrackingEvent {
  id: string
  package_id: string
  status: string
  location: string | null
  description: string
  timestamp: string
}

export interface Package {
  id: string
  tracking_number: string
  status: PackageStatus

  sender_name: string | null
  sender_phone: string | null
  sender_email: string | null
  sender_address: string | null
  sender_city: string | null
  sender_country: string | null

  recipient_name: string
  recipient_phone: string | null
  recipient_email: string | null
  recipient_address: string
  recipient_city: string
  recipient_state: string
  recipient_country: string
  recipient_zip: string | null

  service_type: string
  package_type: string | null
  weight: number | null
  dimensions: string | null
  description: string | null

  current_location: string | null
  origin: string | null
  destination: string | null
  estimated_delivery: string | null
  actual_delivery: string | null
  notes: string | null

  created_at: string
  updated_at: string
  tracking_events?: TrackingEvent[]
}

export const STATUS_LABELS: Record<PackageStatus, string> = {
  pending: 'Pending',
  picked_up: 'Picked Up',
  in_transit: 'In Transit',
  out_for_delivery: 'Out for Delivery',
  delivered: 'Delivered',
  failed: 'Delivery Failed',
  returned: 'Returned',
}

export const STATUS_COLORS: Record<PackageStatus, string> = {
  pending: 'bg-gray-100 text-gray-700',
  picked_up: 'bg-blue-100 text-blue-700',
  in_transit: 'bg-yellow-100 text-yellow-700',
  out_for_delivery: 'bg-orange-100 text-orange-700',
  delivered: 'bg-green-100 text-green-700',
  failed: 'bg-red-100 text-red-700',
  returned: 'bg-purple-100 text-purple-700',
}
