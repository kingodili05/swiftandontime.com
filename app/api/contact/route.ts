import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, company, subject, message, inquiryType } = await req.json()

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email to the business
    const bizHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="font-family:Arial,sans-serif;background:#f4f6f9;margin:0;padding:24px;">
  <div style="max-width:600px;margin:0 auto;background:white;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08);">
    <div style="background:linear-gradient(135deg,#1d4ed8,#4f46e5);padding:32px 40px;">
      <h1 style="color:white;margin:0;font-size:22px;">✉️ New Contact Form Submission</h1>
      <p style="color:#bfdbfe;margin:8px 0 0;font-size:14px;">Received from swiftandontime.com</p>
    </div>
    <div style="padding:32px 40px;">
      <table style="width:100%;border-collapse:collapse;">
        <tr><td colspan="2" style="padding:0 0 10px;font-weight:700;color:#1e40af;font-size:13px;text-transform:uppercase;letter-spacing:.05em;border-bottom:2px solid #e0e7ff;">Sender Details</td></tr>
        <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;width:35%;">Name</td><td style="padding:8px 0;font-weight:600;font-size:13px;">${name}</td></tr>
        <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Email</td><td style="padding:8px 0;font-weight:600;font-size:13px;"><a href="mailto:${email}" style="color:#2563eb;">${email}</a></td></tr>
        ${phone ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Phone</td><td style="padding:8px 0;font-weight:600;font-size:13px;">${phone}</td></tr>` : ""}
        ${company ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Company</td><td style="padding:8px 0;font-weight:600;font-size:13px;">${company}</td></tr>` : ""}
        ${inquiryType ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Inquiry Type</td><td style="padding:8px 0;font-weight:600;font-size:13px;text-transform:capitalize;">${inquiryType}</td></tr>` : ""}
        <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Subject</td><td style="padding:8px 0;font-weight:600;font-size:13px;">${subject}</td></tr>
      </table>

      <div style="margin-top:24px;">
        <p style="font-weight:700;color:#1e40af;font-size:13px;text-transform:uppercase;letter-spacing:.05em;border-bottom:2px solid #e0e7ff;padding-bottom:10px;">Message</p>
        <div style="background:#f8fafc;border-left:4px solid #3b82f6;padding:16px 20px;border-radius:0 8px 8px 0;margin-top:12px;">
          <p style="color:#374151;font-size:14px;line-height:1.7;margin:0;white-space:pre-wrap;">${message}</p>
        </div>
      </div>

      <div style="margin-top:24px;padding:16px;background:#eff6ff;border-radius:8px;">
        <p style="margin:0;font-size:13px;color:#1e40af;">
          💡 Reply directly to this email to respond to <strong>${name}</strong> at <a href="mailto:${email}" style="color:#2563eb;">${email}</a>
        </p>
      </div>
    </div>
    <div style="background:#f8fafc;padding:20px 40px;border-top:1px solid #e5e7eb;text-align:center;">
      <p style="color:#9ca3af;font-size:12px;margin:0;">Swift &amp; On Time Courier Services &bull; support@swiftandontime.cc</p>
    </div>
  </div>
</body>
</html>`

    // Automated reply to the client
    const clientHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="font-family:Arial,sans-serif;background:#f4f6f9;margin:0;padding:24px;">
  <div style="max-width:560px;margin:0 auto;background:white;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08);">
    <div style="background:linear-gradient(135deg,#1d4ed8,#4f46e5);padding:32px 40px;">
      <h1 style="color:white;margin:0;font-size:22px;">Thanks for reaching out!</h1>
      <p style="color:#bfdbfe;margin:8px 0 0;font-size:14px;">Swift &amp; On Time Courier Services</p>
    </div>
    <div style="padding:32px 40px;">
      <p style="color:#374151;font-size:15px;margin:0 0 12px;">Hi ${name},</p>
      <p style="color:#6b7280;font-size:14px;line-height:1.7;margin:0 0 20px;">
        Thank you for contacting us. We've received your message and a member of our team will get back to you within <strong style="color:#374151;">2 hours</strong> during business hours.
      </p>

      <div style="background:#f8fafc;border-radius:8px;padding:16px 20px;margin-bottom:24px;">
        <p style="margin:0 0 8px;font-weight:700;color:#374151;font-size:13px;">Your message summary</p>
        <p style="margin:0 0 4px;font-size:13px;color:#6b7280;"><strong style="color:#374151;">Subject:</strong> ${subject}</p>
        <p style="margin:0;font-size:13px;color:#6b7280;"><strong style="color:#374151;">Message:</strong> ${message.length > 120 ? message.substring(0, 120) + "…" : message}</p>
      </div>

      <p style="color:#6b7280;font-size:14px;line-height:1.7;margin:0 0 8px;">Need immediate help? You can also reach us at:</p>
      <p style="margin:0;font-size:14px;">
        📞 <a href="tel:+18052627073" style="color:#2563eb;text-decoration:none;">+1 (805) 262-7073</a> &nbsp;|&nbsp;
        💬 <a href="https://swiftandontime.com" style="color:#2563eb;text-decoration:none;">Live Chat on our website</a>
      </p>
    </div>
    <div style="background:#f8fafc;padding:20px 40px;border-top:1px solid #e5e7eb;text-align:center;">
      <p style="color:#9ca3af;font-size:12px;margin:0;">© Swift &amp; On Time Courier Services &bull; <a href="https://swiftandontime.com" style="color:#9ca3af;">swiftandontime.com</a></p>
    </div>
  </div>
</body>
</html>`

    // Send both emails in parallel
    const [bizRes, clientRes] = await Promise.all([
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "Swift & On Time <noreply@swiftandontime.cc>",
          to: ["support@swiftandontime.cc"],
          reply_to: email,
          subject: `New Contact: ${subject}`,
          html: bizHtml,
        }),
      }),
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "Swift & On Time <noreply@swiftandontime.cc>",
          to: [email],
          subject: "We received your message — Swift & On Time",
          html: clientHtml,
        }),
      }),
    ])

    if (!bizRes.ok) {
      const err = await bizRes.text()
      console.error("Resend error:", err)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Contact API error:", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
