"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Clock, Shield, Star, Truck, Globe, Package, Zap,
  CheckCircle2, ArrowRight, MapPin, Phone, HeadphonesIcon,
  BarChart3, Users, Award,
} from "lucide-react"
import Link from "next/link"

/* ── Animated counter ── */
function Counter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1800
        const steps = 60
        const increment = end / steps
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= end) { setCount(end); clearInterval(timer) }
          else setCount(Math.floor(current))
        }, duration / steps)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [end])

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
}

/* ── Reveal on scroll ── */
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect() }
    }, { threshold: 0.1 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-gray-950 overflow-hidden">
        {/* Blobs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-blob-delay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl" />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-blue-300 mb-8 animate-fade-in">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Trusted by 50,000+ customers worldwide
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.95] tracking-tight animate-fade-in-up">
              Deliver with{" "}
              <span className="gradient-text">Speed</span>
              <br />& Confidence
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Professional courier services that get your packages where they need to be — safely, on time, every time. Same-day, overnight, and international shipping.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" asChild
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-xl shadow-blue-900/50 hover:shadow-blue-700/50 transition-all duration-300 hover:scale-105 h-12 px-8 text-base">
                <Link href="/quote">Get Instant Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild
                className="border-white/10 text-white hover:bg-white/10 bg-transparent h-12 px-8 text-base backdrop-blur-sm">
                <Link href="/track">Track a Package</Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              {["No hidden fees", "Real-time tracking", "24/7 support", "Insured deliveries"].map((t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-400" /> {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-3 bg-white/40 rounded-full animate-fade-in-down" />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-white border-b border-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { end: 50000, suffix: "+", label: "Packages Delivered", icon: <Package className="w-5 h-5" /> },
              { end: 99, suffix: ".8%", label: "On-Time Delivery Rate", icon: <CheckCircle2 className="w-5 h-5" /> },
              { end: 15, suffix: "+", label: "Years of Experience", icon: <Award className="w-5 h-5" /> },
              { end: 24, suffix: "/7", label: "Customer Support", icon: <HeadphonesIcon className="w-5 h-5" /> },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-50 rounded-xl text-blue-600 mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-1">
                  <Counter end={stat.end} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES BENTO ── */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <Badge className="mb-4 bg-blue-50 text-blue-600 border-blue-100">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Every delivery need,<br /><span className="gradient-text-dark">covered</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">From urgent same-day parcels to international freight — we handle it all.</p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: <Zap className="w-6 h-6" />, color: "from-yellow-500 to-orange-500",
                title: "Same-Day Delivery", desc: "Get it there within hours. Perfect for urgent documents, medical supplies, and last-minute gifts.",
                badge: "Most Popular", href: "/services#same-day", large: true,
              },
              {
                icon: <Clock className="w-6 h-6" />, color: "from-blue-500 to-blue-600",
                title: "Overnight Express", desc: "Guaranteed next business day delivery nationwide.",
                href: "/services#express",
              },
              {
                icon: <Globe className="w-6 h-6" />, color: "from-indigo-500 to-violet-500",
                title: "International", desc: "Worldwide shipping with real-time tracking to 200+ countries.",
                href: "/services#international",
              },
              {
                icon: <Truck className="w-6 h-6" />, color: "from-green-500 to-emerald-500",
                title: "Freight Services", desc: "Heavy and oversized shipments handled with care.",
                href: "/services#freight",
              },
              {
                icon: <BarChart3 className="w-6 h-6" />, color: "from-pink-500 to-rose-500",
                title: "Business Solutions", desc: "Volume discounts, API integration, and dedicated account managers for businesses.",
                href: "/business-solutions",
              },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 60} className={s.large ? "md:col-span-2 lg:col-span-1" : ""}>
                <Link href={s.href} className="group block h-full">
                  <div className="bg-white rounded-2xl p-6 h-full border border-gray-100 hover-lift hover:border-blue-100 transition-colors relative overflow-hidden">
                    {s.badge && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-orange-50 text-orange-600 border-orange-100 text-xs">{s.badge}</Badge>
                      </div>
                    )}
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                      {s.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                    <div className="flex items-center gap-1 mt-4 text-sm text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <Badge className="mb-4 bg-blue-50 text-blue-600 border-blue-100">Why Choose Us</Badge>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                The standard others<br /><span className="gradient-text-dark">measure against</span>
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                For over 15 years, we've built our reputation on reliability, transparency, and genuine care for every shipment we handle.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Real-time GPS tracking", desc: "Know exactly where your package is at every moment." },
                  { title: "Full insurance coverage", desc: "Every shipment is protected against loss or damage." },
                  { title: "Dedicated support team", desc: "A real human to help you, any time of day." },
                  { title: "Eco-friendly fleet", desc: "We're reducing our carbon footprint with every delivery." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-green-100 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button size="lg" asChild className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition-transform shadow-lg shadow-blue-200">
                <Link href="/about">Learn our story <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </Reveal>

            {/* Visual grid */}
            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Zap className="w-7 h-7" />, label: "Lightning Fast", value: "2h avg delivery", color: "bg-yellow-50 text-yellow-600" },
                  { icon: <Shield className="w-7 h-7" />, label: "Fully Insured", value: "100% coverage", color: "bg-green-50 text-green-600" },
                  { icon: <MapPin className="w-7 h-7" />, label: "Live Tracking", value: "GPS precision", color: "bg-blue-50 text-blue-600" },
                  { icon: <Users className="w-7 h-7" />, label: "5-Star Rated", value: "4.9 / 5 stars", color: "bg-purple-50 text-purple-600" },
                ].map((card, i) => (
                  <div
                    key={card.label}
                    className="bg-gray-50 rounded-2xl p-5 hover-lift border border-gray-100"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${card.color}`}>
                      {card.icon}
                    </div>
                    <p className="font-bold text-gray-900 text-sm">{card.label}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{card.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="container mx-auto px-4 relative">
          <Reveal className="text-center mb-16">
            <Badge className="mb-4 bg-white/5 text-blue-400 border-white/10">How It Works</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Ship in <span className="gradient-text">3 simple steps</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Get a Quote", desc: "Enter your shipment details and get an instant price — no hidden fees.", icon: <BarChart3 className="w-6 h-6" /> },
              { step: "02", title: "Schedule Pickup", desc: "Choose a convenient time and we'll come to your door to collect the package.", icon: <Package className="w-6 h-6" /> },
              { step: "03", title: "Track & Receive", desc: "Real-time updates keep you informed until your package is safely delivered.", icon: <MapPin className="w-6 h-6" /> },
            ].map((step, i) => (
              <Reveal key={step.step} delay={i * 100}>
                <div className="glass rounded-2xl p-6 text-center hover-lift">
                  <div className="text-6xl font-black text-white/5 mb-2 leading-none">{step.step}</div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 -mt-4 shadow-lg shadow-blue-900/50">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-50 text-yellow-600 border-yellow-100">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Loved by <span className="gradient-text-dark">thousands</span>
            </h2>
            <p className="text-gray-500 text-lg">Don't take our word for it — here's what our customers say.</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson", role: "Business Owner",
                review: "Swift & On Time has been our go-to courier service for over 3 years. Their reliability and customer service is absolutely unmatched.",
                stars: 5,
              },
              {
                name: "Michael Chen", role: "Legal Professional",
                review: "I needed same-day delivery for an important document. They delivered within 2 hours! Absolutely fantastic service.",
                stars: 5,
              },
              {
                name: "Emily Rodriguez", role: "Operations Manager",
                review: "Professional, reliable, and always on time. Swift & On Time handles all our company's shipping needs perfectly.",
                stars: 5,
              },
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover-lift h-full flex flex-col">
                  <div className="flex items-center gap-0.5 mb-4">
                    {[...Array(t.stars)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">"{t.review}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="relative container mx-auto px-4 text-center">
          <Reveal>
            <Badge className="mb-6 bg-white/10 text-blue-200 border-white/10">Ready to ship?</Badge>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Start shipping smarter<br />today
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join 50,000+ customers who trust Swift & On Time for their most important deliveries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild
                className="bg-white text-blue-700 hover:bg-blue-50 shadow-xl h-12 px-8 text-base font-semibold hover:scale-105 transition-transform">
                <Link href="/quote">Get Instant Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild
                className="border-white/20 text-white hover:bg-white/10 bg-transparent h-12 px-8 text-base">
                <Link href="/contact"><Phone className="w-4 h-4 mr-2" /> Talk to us</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
