import { format } from "date-fns"

interface PickupConfirmationEmailProps {
  pickup: {
    confirmationNumber: string
    pickupType: string
    serviceType: string
    scheduledDate: string
    timeSlot: string
    contact: {
      name: string
      company?: string
      phone: string
      email: string
    }
    address: {
      street: string
      city: string
      state: string
      zipCode: string
      type: string
      floor?: string
      suite?: string
    }
    packages: {
      count: number
      weight: number
    }
    specialInstructions?: string
    accessInstructions?: string
    parkingInstructions?: string
    isRecurring: boolean
    recurringFrequency?: string
    recurringEndDate?: string
  }
}

export function PickupConfirmationEmail({ pickup }: PickupConfirmationEmailProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto", backgroundColor: "#ffffff" }}>
      {/* Header */}
      <div style={{ backgroundColor: "#1e40af", color: "white", padding: "20px", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
          <div style={{ backgroundColor: "#3b82f6", padding: "8px", borderRadius: "8px", marginRight: "12px" }}>📦</div>
          <div>
            <div style={{ fontSize: "24px", fontWeight: "bold" }}>Swift & On Time</div>
            <div style={{ fontSize: "14px", opacity: "0.9" }}>Courier Services</div>
          </div>
        </div>
        <h1 style={{ margin: "0", fontSize: "28px", fontWeight: "bold" }}>Pickup Confirmed! ✅</h1>
      </div>

      {/* Confirmation Details */}
      <div style={{ padding: "30px 20px" }}>
        <div
          style={{
            backgroundColor: "#10b981",
            color: "white",
            padding: "15px",
            borderRadius: "8px",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <div style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "5px" }}>Confirmation Number</div>
          <div style={{ fontSize: "24px", fontWeight: "bold", letterSpacing: "1px" }}>{pickup.confirmationNumber}</div>
        </div>

        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#374151", marginBottom: "25px" }}>
          Dear {pickup.contact.name},
        </p>

        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#374151", marginBottom: "25px" }}>
          Thank you for scheduling a pickup with Swift & On Time Courier Services. Your pickup has been confirmed and
          scheduled as requested.
        </p>

        {/* Pickup Details */}
        <div
          style={{
            backgroundColor: "#f9fafb",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "25px",
          }}
        >
          <h2
            style={{
              color: "#1f2937",
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "15px",
              borderBottom: "2px solid #3b82f6",
              paddingBottom: "8px",
            }}
          >
            📅 Pickup Details
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", marginBottom: "15px" }}>
            <div>
              <strong style={{ color: "#374151" }}>Date:</strong>
              <br />
              <span style={{ color: "#6b7280" }}>{format(new Date(pickup.scheduledDate), "EEEE, MMMM d, yyyy")}</span>
            </div>
            <div>
              <strong style={{ color: "#374151" }}>Time Window:</strong>
              <br />
              <span style={{ color: "#6b7280" }}>{pickup.timeSlot}</span>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
            <div>
              <strong style={{ color: "#374151" }}>Service Type:</strong>
              <br />
              <span style={{ color: "#6b7280" }}>{pickup.serviceType}</span>
            </div>
            <div>
              <strong style={{ color: "#374151" }}>Pickup Type:</strong>
              <br />
              <span style={{ color: "#6b7280" }}>
                {pickup.pickupType.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </span>
            </div>
          </div>

          {pickup.isRecurring && (
            <div style={{ marginTop: "15px", padding: "10px", backgroundColor: "#dbeafe", borderRadius: "6px" }}>
              <strong style={{ color: "#1e40af" }}>🔄 Recurring Pickup:</strong> {pickup.recurringFrequency}
              {pickup.recurringEndDate && (
                <span style={{ color: "#6b7280" }}>
                  {" "}
                  until {format(new Date(pickup.recurringEndDate), "MMMM d, yyyy")}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Contact & Address */}
        <div
          style={{
            backgroundColor: "#f9fafb",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "25px",
          }}
        >
          <h2
            style={{
              color: "#1f2937",
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "15px",
              borderBottom: "2px solid #3b82f6",
              paddingBottom: "8px",
            }}
          >
            📍 Pickup Location
          </h2>

          <div style={{ marginBottom: "15px" }}>
            <strong style={{ color: "#374151" }}>Contact:</strong>
            <br />
            <span style={{ color: "#6b7280" }}>{pickup.contact.name}</span>
            {pickup.contact.company && (
              <>
                <br />
                <span style={{ color: "#6b7280" }}>{pickup.contact.company}</span>
              </>
            )}
            <br />
            <span style={{ color: "#6b7280" }}>{pickup.contact.phone}</span>
          </div>

          <div>
            <strong style={{ color: "#374151" }}>Address:</strong>
            <br />
            <span style={{ color: "#6b7280" }}>
              {pickup.address.street}
              {pickup.address.floor && (
                <>
                  <br />
                  Floor: {pickup.address.floor}
                </>
              )}
              {pickup.address.suite && (
                <>
                  <br />
                  Suite: {pickup.address.suite}
                </>
              )}
              <br />
              {pickup.address.city}, {pickup.address.state} {pickup.address.zipCode}
            </span>
          </div>
        </div>

        {/* Package Information */}
        <div
          style={{
            backgroundColor: "#f9fafb",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "25px",
          }}
        >
          <h2
            style={{
              color: "#1f2937",
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "15px",
              borderBottom: "2px solid #3b82f6",
              paddingBottom: "8px",
            }}
          >
            📦 Package Information
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
            <div>
              <strong style={{ color: "#374151" }}>Number of Packages:</strong>
              <br />
              <span style={{ color: "#6b7280" }}>{pickup.packages.count}</span>
            </div>
            <div>
              <strong style={{ color: "#374151" }}>Total Weight:</strong>
              <br />
              <span style={{ color: "#6b7280" }}>{pickup.packages.weight} lbs</span>
            </div>
          </div>
        </div>

        {/* Special Instructions */}
        {(pickup.specialInstructions || pickup.accessInstructions || pickup.parkingInstructions) && (
          <div
            style={{
              backgroundColor: "#fef3c7",
              border: "1px solid #f59e0b",
              borderRadius: "8px",
              padding: "20px",
              marginBottom: "25px",
            }}
          >
            <h2 style={{ color: "#92400e", fontSize: "18px", fontWeight: "bold", marginBottom: "15px" }}>
              ⚠️ Special Instructions
            </h2>

            {pickup.specialInstructions && (
              <div style={{ marginBottom: "10px" }}>
                <strong style={{ color: "#92400e" }}>Package Instructions:</strong>
                <br />
                <span style={{ color: "#78350f" }}>{pickup.specialInstructions}</span>
              </div>
            )}

            {pickup.accessInstructions && (
              <div style={{ marginBottom: "10px" }}>
                <strong style={{ color: "#92400e" }}>Access Instructions:</strong>
                <br />
                <span style={{ color: "#78350f" }}>{pickup.accessInstructions}</span>
              </div>
            )}

            {pickup.parkingInstructions && (
              <div>
                <strong style={{ color: "#92400e" }}>Parking Instructions:</strong>
                <br />
                <span style={{ color: "#78350f" }}>{pickup.parkingInstructions}</span>
              </div>
            )}
          </div>
        )}

        {/* What to Expect */}
        <div
          style={{
            backgroundColor: "#ecfdf5",
            border: "1px solid #10b981",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "25px",
          }}
        >
          <h2 style={{ color: "#065f46", fontSize: "18px", fontWeight: "bold", marginBottom: "15px" }}>
            🚚 What to Expect
          </h2>

          <ul style={{ color: "#047857", margin: "0", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "8px" }}>Our driver will arrive during your selected time window</li>
            <li style={{ marginBottom: "8px" }}>You'll receive SMS notifications when the driver is on the way</li>
            <li style={{ marginBottom: "8px" }}>Please have your packages ready and properly labeled</li>
            <li style={{ marginBottom: "8px" }}>A pickup receipt will be provided upon collection</li>
            <li>You'll receive tracking information once packages are in transit</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div
          style={{
            backgroundColor: "#f3f4f6",
            border: "1px solid #d1d5db",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "25px",
          }}
        >
          <h2 style={{ color: "#374151", fontSize: "18px", fontWeight: "bold", marginBottom: "15px" }}>
            📞 Need to Make Changes?
          </h2>

          <p style={{ color: "#6b7280", marginBottom: "15px" }}>
            If you need to modify or cancel your pickup, please contact us at least 2 hours before your scheduled time:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
            <div>
              <strong style={{ color: "#374151" }}>Phone:</strong>
              <br />
              <a href="tel:+15551234567" style={{ color: "#3b82f6", textDecoration: "none" }}>
                +1 (555) 123-4567
              </a>
            </div>
            <div>
              <strong style={{ color: "#374151" }}>Email:</strong>
              <br />
              <a href="mailto:pickup@swiftandontime.com" style={{ color: "#3b82f6", textDecoration: "none" }}>
                pickup@swiftandontime.com
              </a>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <div style={{ display: "inline-block", margin: "0 10px" }}>
            <a
              href="https://swiftandontime.com/dashboard/pickups"
              style={{
                backgroundColor: "#3b82f6",
                color: "white",
                padding: "12px 24px",
                textDecoration: "none",
                borderRadius: "6px",
                fontWeight: "bold",
                display: "inline-block",
              }}
            >
              Manage Pickups
            </a>
          </div>
          <div style={{ display: "inline-block", margin: "0 10px" }}>
            <a
              href="https://swiftandontime.com/track"
              style={{
                backgroundColor: "#10b981",
                color: "white",
                padding: "12px 24px",
                textDecoration: "none",
                borderRadius: "6px",
                fontWeight: "bold",
                display: "inline-block",
              }}
            >
              Track Packages
            </a>
          </div>
        </div>

        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#374151" }}>
          Thank you for choosing Swift & On Time Courier Services. We appreciate your business and look forward to
          providing you with excellent service.
        </p>

        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#374151", marginTop: "20px" }}>
          Best regards,
          <br />
          <strong>The Swift & On Time Team</strong>
        </p>
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: "#f9fafb", padding: "20px", textAlign: "center", borderTop: "1px solid #e5e7eb" }}>
        <div style={{ marginBottom: "15px" }}>
          <strong style={{ color: "#374151" }}>Swift & On Time Courier Services</strong>
          <br />
          <span style={{ color: "#6b7280", fontSize: "14px" }}>
            123 Logistics Avenue, New York, NY 10001
            <br />
            Phone: +1 (555) 123-4567 | Email: info@swiftandontime.com
          </span>
        </div>

        <div style={{ fontSize: "12px", color: "#9ca3af", lineHeight: "1.4" }}>
          <p style={{ margin: "5px 0" }}>
            This email was sent to {pickup.contact.email} regarding your pickup confirmation.
          </p>
          <p style={{ margin: "5px 0" }}>© 2024 Swift & On Time Courier Services. All rights reserved.</p>
          <p style={{ margin: "5px 0" }}>
            <a href="#" style={{ color: "#6b7280", textDecoration: "none" }}>
              Unsubscribe
            </a>{" "}
            |
            <a href="#" style={{ color: "#6b7280", textDecoration: "none" }}>
              {" "}
              Privacy Policy
            </a>{" "}
            |
            <a href="#" style={{ color: "#6b7280", textDecoration: "none" }}>
              {" "}
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

// Example usage component for testing the email template
export function PickupConfirmationEmailPreview() {
  const samplePickup = {
    confirmationNumber: "SOT-PU-ABC123456",
    pickupType: "same-day",
    serviceType: "Same-Day Delivery",
    scheduledDate: "2024-01-16",
    timeSlot: "10:00 AM - 12:00 PM",
    contact: {
      name: "John Smith",
      company: "TechStart Inc.",
      phone: "+1 (555) 123-4567",
      email: "john@techstart.com",
    },
    address: {
      street: "123 Business Avenue",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      type: "business",
      floor: "5th Floor",
      suite: "Suite 500",
    },
    packages: {
      count: 3,
      weight: 15.5,
    },
    specialInstructions: "Fragile electronics - handle with care",
    accessInstructions: "Use main entrance, check in with security desk",
    parkingInstructions: "Visitor parking available in underground garage",
    isRecurring: false,
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Pickup Confirmation Email Template</h1>
          <p className="text-gray-600">Preview of the email sent to customers after scheduling a pickup</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <PickupConfirmationEmail pickup={samplePickup} />
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            This email template is automatically sent when customers schedule pickups through our system.
          </p>
        </div>
      </div>
    </div>
  )
}
