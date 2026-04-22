"use client"

import { useEffect } from "react"

export function TawkChat() {
  useEffect(() => {
    const s1 = document.createElement("script")
    const s0 = document.getElementsByTagName("script")[0]
    s1.async = true
    s1.src = "https://embed.tawk.to/69e834acfed32e1c34e53363/1jmpgrhdp"
    s1.charset = "UTF-8"
    s1.setAttribute("crossorigin", "*")
    s0?.parentNode?.insertBefore(s1, s0)
  }, [])

  return null
}
