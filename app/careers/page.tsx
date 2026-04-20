import type { Metadata } from "next"
import CareersClientPage from "./CareersClientPage"

export const metadata: Metadata = {
  title: "Careers | Swift & On Time Courier Services",
  description:
    "Join our team and help deliver excellence. Explore career opportunities in logistics, technology, and customer service.",
}

export default function CareersPage() {
  return <CareersClientPage />
}
