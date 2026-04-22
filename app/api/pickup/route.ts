import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    const {
      pickupType, serviceType, packageCount, totalWeight, specialInstructions,
      addressType, companyName, contactName, streetAddress, city, state, zipCode, country, floor, suite,
      phone, email, alternatePhone,
      pickupDate, timeSlot, isRecurring, recurringFrequency, recurringEndDate,
      requiresSignature, accessInstructions, parkingInstructions, securityRequirements,
    } = data

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    const confirmationNum = `SOT-PU-${Date.now().toString(36).toUpperCase()}`

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="font-family: Arial, sans-serif; background: #f4f6f9; margin: 0; padding: 24px;">
  <div style="max-width: 620px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">

    <div style="background: linear-gradient(135deg, #1d4ed8, #4f46e5); padding: 32px 40px;">
      <h1 style="color: white; margin: 0; font-size: 22px;">📦 New Pickup Request</h1>
      <p style="color: #bfdbfe; margin: 8px 0 0; font-size: 14px;">Confirmation: <strong style="color:white">${confirmationNum}</strong></p>
    </div>

    <div style="padding: 32px 40px;">

      <table style="width:100%; border-collapse:collapse; margin-bottom:24px;">
        <tr><td colspan="2" style="padding: 0 0 10px; font-weight:700; color:#1e40af; font-size:13px; text-transform:uppercase; letter-spacing:.05em; border-bottom:2px solid #e0e7ff;">Pickup Details</td></tr>
        <tr><td style="padding:8px 0; color:#6b7280; font-size:13px; width:40%;">Pickup Type</td><td style="padding:8px 0; font-weight:600; font-size:13px;">${pickupType || "—"}</td></tr>
        <tr><td style="padding:8px 0; color:#6b7280; font-size:13px;">Service Type</td><td style="padding:8px 0; font-weight:600; font-size:13px;">${serviceType || "—"}</td></tr>
        <tr><td style="padding:8px 0; color:#6b7280; font-size:13px;">Pickup Date</td><td style="padding:8px 0; font-weight:600; font-size:13px;">${pickupDate ? new Date(pickupDate).toDateString() : "—"}</td></tr>
        <tr><td style="padding:8px 0; color:#6b7280; font-size:13px;">Time Slot</td><td style="padding:8px 0; font-weight:600; font-size:13px;">${timeSlot || "—"}</td></tr>
        <tr><td style="padding:8px 0; color:#6b7280; font-size:13px;">Package Count</td><td style="padding:8px 0; font-weight:600; font-size:13px;">${packageCount || "—"}</td></tr>
        <tr><td style="padding:8px 0; color:#6b7280; font-size:13px;">Total Weight</td><td style="padding:8px 0; font-weight:600; font-size:13px;">${totalWeight ? `${totalWeight} lbs` : "—"}</td></tr>
        ${isRecurring ? `<tr><td style="padding:8px 0; color:#6b7280; font-size:13px;">Recurring</td><td style="padding:8px 0; font-weight:600; font-size:13px;">${recurringFrequency}${recurringEndDate ? ` until ${new Date(recurringEndDate).toDateString()}` : ""}</td></tr>` : ""}
      </table>

      <table style="width:100%; border-collapse:collapse; margin-bottom:24px;">
        <tr><td colspan="2" style="padding: 0 0 10px; font-weight:700; color:#1e40af; font-size:13px; text-transform:uppercase; letter-spacing:.05em; border-bottom:2px solid #e0e7ff;">Pickup Address</td></tr>
        <tr><td style="padding:8px 0; color:#6b7280; font-size:13px; width:40%;">Type</td><td style="padding:8px 0; font-weight:600; font-size:13px; text-transform:capitalize;">${addressType || "—"}</td></tr>
        ${companyName ? `<tr><td style="padding:8px 0; color:#6b7280; font-size:13px;">Company</td><td style="padding:8px 0; font-weight:600; font-size:13px;">${companyName}</td></tr>` : ""}
        <tr><td style="padding:8px 0; color:#6b7280; font-size:13px;">Contact Name</td><td style="padding:8px 0; font-weight:600; font-size:13px;">${contactName || "—"}</td></tr>
        <tr><td style="padding:8px 0; color:#6b7280; font-size:13px;">Address</td><td style="padding:8px 0; font-weight:600; font-size:13px;">${streetAddress}${floor ? `, Floor ${floor}` : ""}${suite ? `, ${suite}` : ""}<br/>${city}, ${state} ${zipCode}, ${country}</td></tr>
      </table>

      <table style="width:100%; border-collapse:collapse; margin-bottom:24px;">
        <tr><td colspan="2" style="padding: 0 0 10px; font-weight:700; color:#1e40af; font-size:13px; text-transform:uppercase; letter-spacing:.05em; border-bottom:2px solid #e0e7ff;">Contact Information</td></tr>
        <tr><td style="padding:8px 0; color:#6b7280; font-size:13px; width:40%;">Phone</td><td style="padding:8px 0; font-weight:600; font-size:13px;">${phone || "—"}</td></tr>
        ${alternatePhone ? `<tr><td style="padding:8px 0; color:#6b7280; font-size:13px;">Alt. Phone</td><td style="padding:8px 0; font-weight:600; font-size:13px;">${alternatePhone}</td></tr>` : ""}
        <tr><td style="padding:8px 0; color:#6b7280; font-size:13px;">Email</td><td style="padding:8px 0; font-weight:600; font-size:13px;">${email || "—"}</td></tr>
      </table>

      ${(specialInstructions || accessInstructions || parkingInstructions || securityRequirements || requiresSignature) ? `
      <table style="width:100%; border-collapse:collapse; margin-bottom:24px;">
        <tr><td colspan="2" style="padding: 0 0 10px; font-weight:700; color:#1e40af; font-size:13px; text-transform:uppercase; letter-spacing:.05em; border-bottom:2px solid #e0e7ff;">Special Requirements</td></tr>
        ${requiresSignature ? `<tr><td style="padding:8px 0; color:#6b7280; font-size:13px; width:40%;">Signature</td><td style="padding:8px 0; font-weight:600; font-size:13px;">Required</td></tr>` : ""}
        ${specialInstructions ? `<tr><td style="padding:8px 0; color:#6b7280; font-size:13px;">Package Notes</td><td style="padding:8px 0; font-size:13px;">${specialInstructions}</td></tr>` : ""}
        ${accessInstructions ? `<tr><td style="padding:8px 0; color:#6b7280; font-size:13px;">Access</td><td style="padding:8px 0; font-size:13px;">${accessInstructions}</td></tr>` : ""}
        ${parkingInstructions ? `<tr><td style="padding:8px 0; color:#6b7280; font-size:13px;">Parking</td><td style="padding:8px 0; font-size:13px;">${parkingInstructions}</td></tr>` : ""}
        ${securityRequirements ? `<tr><td style="padding:8px 0; color:#6b7280; font-size:13px;">Security</td><td style="padding:8px 0; font-size:13px;">${securityRequirements}</td></tr>` : ""}
      </table>` : ""}

    </div>

    <div style="background:#f8fafc; padding:20px 40px; border-top:1px solid #e5e7eb; text-align:center;">
      <p style="color:#9ca3af; font-size:12px; margin:0;">Swift &amp; On Time Courier Services &bull; support@swiftandontime.cc &bull; +1 (540) 594-6863</p>
    </div>
  </div>
</body>
</html>`

    // Send notification to the business
    const bizRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Swift & On Time <noreply@swiftandontime.cc>",
        to: ["support@swiftandontime.cc"],
        reply_to: email || undefined,
        subject: `New Pickup Request — ${confirmationNum}`,
        html,
      }),
    })

    if (!bizRes.ok) {
      const err = await bizRes.text()
      console.error("Resend error:", err)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    // Send confirmation to the customer
    if (email) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Swift & On Time <noreply@swiftandontime.cc>",
          to: [email],
          subject: `Pickup Confirmed — ${confirmationNum}`,
          html: `
<!DOCTYPE html>
<html>
<body style="font-family:Arial,sans-serif;background:#f4f6f9;margin:0;padding:24px;">
  <div style="max-width:560px;margin:0 auto;background:white;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08);">
    <div style="background:linear-gradient(135deg,#1d4ed8,#4f46e5);padding:32px 40px;">
      <h1 style="color:white;margin:0;font-size:22px;">✅ Pickup Confirmed!</h1>
      <p style="color:#bfdbfe;margin:8px 0 0;font-size:14px;">Confirmation: <strong style="color:white">${confirmationNum}</strong></p>
    </div>
    <div style="padding:32px 40px;">
      <p style="color:#374151;font-size:15px;">Hi ${contactName},</p>
      <p style="color:#6b7280;font-size:14px;line-height:1.6;">Your pickup has been scheduled. Our driver will arrive at your location during the selected time window.</p>
      <div style="background:#eff6ff;border-radius:8px;padding:16px 20px;margin:20px 0;">
        <p style="margin:0 0 6px;font-weight:700;color:#1e40af;font-size:13px;">Pickup Details</p>
        <p style="margin:4px 0;font-size:13px;color:#374151;"><strong>Date:</strong> ${pickupDate ? new Date(pickupDate).toDateString() : "—"}</p>
        <p style="margin:4px 0;font-size:13px;color:#374151;"><strong>Time:</strong> ${timeSlot}</p>
        <p style="margin:4px 0;font-size:13px;color:#374151;"><strong>Address:</strong> ${streetAddress}, ${city}, ${state} ${zipCode}</p>
        <p style="margin:4px 0;font-size:13px;color:#374151;"><strong>Service:</strong> ${serviceType}</p>
      </div>
      <p style="color:#6b7280;font-size:13px;">Need to make changes? Call us at <a href="tel:+15405946863" style="color:#2563eb;">+1 (540) 594-6863</a> or reply to this email.</p>
    </div>
    <div style="background:#f8fafc;padding:16px 40px;border-top:1px solid #e5e7eb;text-align:center;">
      <p style="color:#9ca3af;font-size:12px;margin:0;">Swift &amp; On Time Courier Services</p>
    </div>
  </div>
</body>
</html>`,
        }),
      })
    }

    return NextResponse.json({ success: true, confirmation: confirmationNum })
  } catch (err) {
    console.error("Pickup API error:", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
