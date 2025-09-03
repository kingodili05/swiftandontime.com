import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { TrackingFloat } from "@/components/tracking-float"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Swift & On Time Courier Services - Fast, Reliable Delivery Solutions",
  description:
    "Professional courier and logistics services for domestic and international shipping. Same-day delivery, package tracking, and business solutions.",
  keywords: "courier, logistics, shipping, delivery, same-day, international, tracking, business solutions",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <TrackingFloat />
      </body>
    </html>
  )
}
