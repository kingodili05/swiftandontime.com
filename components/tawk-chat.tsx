"use client"

import { useEffect } from "react"

export function TawkChat() {
  useEffect(() => {
    const propertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID
    const widgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID

    if (!propertyId || !widgetId) return

    const s1 = document.createElement("script")
    const s0 = document.getElementsByTagName("script")[0]
    s1.async = true
    s1.src = `https://embed.tawk.to/${propertyId}/${widgetId}`
    s1.charset = "UTF-8"
    s1.setAttribute("crossorigin", "*")
    s0?.parentNode?.insertBefore(s1, s0)
  }, [])

  return null
}
