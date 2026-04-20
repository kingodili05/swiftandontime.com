"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Zap, Clock, Globe, Truck, Building2, Package,
  CheckCircle2, ArrowRight, MapPin, Shield, BarChart3,
} from "lucide-react"
import Link from "next/link"

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.1 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms` }}>
      {children}
    </div>
  )
}

const SERVICES = [
  {
    id: "same-day",
    icon: <Zap className="w-7 h-7" />,
    gradient: "from-yellow-500 to-orange-500",
    badge: "Most Popular",
    title: "Same-Day Delivery",
    tagline: "Delivered within hours, not days",
    desc: "Our same-day delivery service ensures your packages reach their destination on the very day they're picked up. Ideal for urgent documents, medical supplies, legal papers, and last-minute gifts.",
    features: ["Pickup within 1 hour", "Delivery in 2–4 hours", "Real-time GPS tracking", "Proof of delivery", "Available 7 days a week"],
    price: "From $25",
  },
  {
    id: "express",
    icon: <Clock className="w-7 h-7" />,
    gradient: "from-blue-500 to-blue-700",
    title: "Overnight Express",
    tagline: "Guaranteed next business day",
    desc: "Need it there by morning? Our overnight express service guarantees next business day delivery to any address nationwide. Schedule before 6 PM for next-day arrival.",
    features: ["Next business day guaranteed", "Morning delivery available", "Signature confirmation", "Insurance included", "Live tracking portal"],
    price: "From $18",
  },
  {
    id: "international",
    icon: <Globe className="w-7 h-7" />,
    gradient: "from-indigo-500 to-violet-600",
    title: "International Shipping",
    tagline: "200+ countries, seamless delivery",
    desc: "Ship confidently to over 200 countries and territories. We handle customs documentation, duties, and cross-border logistics so you don't have to.",
    features: ["200+ countries served", "Customs clearance included", "Door-to-door service", "Full tracking visibility", "Competitive rates"],
    price: "From $45",
  },
  {
    id: "freight",
    icon: <Truck className="w-7 h-7" />,
    gradient: "from-green-500 to-emerald-600",
    title: "Freight Services",
    tagline: "Heavy loads, handled with care",
    desc: "For large shipments, pallets, and oversized items, our freight service provides reliable transportation with specialized handling equipment and trained professionals.",
    features: ["Up to 10,000 lbs capacity", "Liftgate service available", "Palletized freight", "White glove handling", "Warehouse to warehouse"],
    price: "Custom quote",
  },
  {
    id: "business",
    icon: <Building2 className="w-7 h-7" />,
    gradient: "from-pink-500 to-rose-500",
    title: "Business Solutions",
    tagline: "Scale your deliveries with us",
    desc: "Tailored logistics solutions for businesses of all sizes. Get volume discounts, dedicated account management, API integration, and monthly invoicing.",
    features: ["Volume discounts", "Dedicated account manager", "API / webhook integration", "Monthly billing", "Priority dispatch"],
    price: "Contact us",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative bg-gray-950 py-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="relative container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/5 text-blue-400 border-white/10 animate-fade-in">Our Services</Badge>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 animate-fade-in-up">
            Shipping solutions for<br /><span className="gradient-text">every need</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            From same-day local deliveries to complex international freight — we have the expertise and network to get it done.
          </p>
          <div className="flex flex-wrap gap-3 justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition-transform">
              <Link href="/quote">Get a Quote <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
            <Button variant="outline" asChild className="border-white/10 text-white hover:bg-white/10 bg-transparent">
              <Link href="/contact">Talk to an expert</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 60}>
              <div id={s.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover-lift group">
                <div className="grid md:grid-cols-5 gap-0">
                  <div className={`md:col-span-2 bg-gradient-to-br ${s.gradient} p-8 flex flex-col justify-between`}>
                    <div>
                      <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-4">
                        {s.icon}
                      </div>
                      {s.badge && <Badge className="bg-white/20 text-white border-0 mb-3">{s.badge}</Badge>}
                      <h2 className="text-2xl font-black text-white mb-1">{s.title}</h2>
                      <p className="text-white/70 text-sm">{s.tagline}</p>
                    </div>
                    <div className="mt-6">
                      <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Starting at</p>
                      <p className="text-3xl font-black text-white">{s.price}</p>
                    </div>
                  </div>
                  <div className="md:col-span-3 p-8">
                    <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition-transform">
                      <Link href={s.id === "business" ? "/business-solutions" : "/quote"}>
                        {s.id === "business" ? "Contact Sales" : "Book Now"} <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Trust section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Every shipment includes</h2>
            <p className="text-gray-500">No matter which service you choose, these come standard.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: <MapPin className="w-5 h-5" />, title: "Live GPS Tracking", desc: "Know where your package is at all times" },
              { icon: <Shield className="w-5 h-5" />, title: "Full Insurance", desc: "100% coverage against loss or damage" },
              { icon: <Package className="w-5 h-5" />, title: "Proof of Delivery", desc: "Digital signature and photo confirmation" },
              { icon: <BarChart3 className="w-5 h-5" />, title: "Delivery Reports", desc: "Full history and analytics dashboard" },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover-lift text-center">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mx-auto mb-3">
                    {item.icon}
                  </div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
