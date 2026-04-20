import Link from "next/link"
import { Package, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from "lucide-react"

const LINKS = {
  Services: [
    { href: "/services#same-day", label: "Same-Day Delivery" },
    { href: "/services#express", label: "Overnight Express" },
    { href: "/services#international", label: "International Shipping" },
    { href: "/services#freight", label: "Freight Services" },
    { href: "/business-solutions", label: "Business Solutions" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  Support: [
    { href: "/track", label: "Track Package" },
    { href: "/faq", label: "FAQ" },
    { href: "/quote", label: "Get a Quote" },
    { href: "/pickup", label: "Schedule Pickup" },
  ],
}

const SOCIAL = [
  { icon: <Facebook className="w-4 h-4" />, href: "#", label: "Facebook" },
  { icon: <Instagram className="w-4 h-4" />, href: "#", label: "Instagram" },
  { icon: <Linkedin className="w-4 h-4" />, href: "#", label: "LinkedIn" },
  { icon: <Twitter className="w-4 h-4" />, href: "#", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-xl">
                <Package className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg text-white leading-tight">Swift & On Time</div>
                <div className="text-xs text-gray-500">Courier Services</div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Your trusted partner for fast, reliable courier and logistics solutions. Delivering excellence across the nation and worldwide.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:+15405946863" className="flex items-center gap-2 hover:text-white transition-colors group">
                <div className="w-7 h-7 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                +1 (540) 594-6863
              </a>
              <a href="mailto:support@swiftandontime.cc" className="flex items-center gap-2 hover:text-white transition-colors group">
                <div className="w-7 h-7 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                support@swiftandontime.cc
              </a>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-white/5 rounded-lg flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                123 Logistics Ave, New York, NY 10001
              </div>
            </div>
            <div className="flex items-center gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 bg-white/5 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-blue-400" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Swift & On Time Courier Services. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-gray-300 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
