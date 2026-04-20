"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Search, Package, Globe, Shield, CreditCard, Clock, Phone, Mail, ArrowRight, ChevronRight } from "lucide-react"

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

const CATEGORIES = [
  {
    key: "shipping", icon: <Package className="w-4 h-4" />, label: "Shipping", color: "bg-blue-50 text-blue-600",
    faqs: [
      { q: "What are your delivery timeframes?", a: "Same-day delivery within 4–6 hours citywide, Next-day by 10:30 AM, 2–3 day standard, International express 1–3 business days. Times may vary based on destination and customs." },
      { q: "What size and weight limits apply?", a: "Up to 70 lbs (32 kg) and max dimensions 48″×36″×36″ for standard services. For heavier or oversized items, our freight service handles unlimited weight." },
      { q: "Do you deliver on weekends?", a: "Yes! Weekend delivery is available for same-day and next-day services at no extra charge. Holiday delivery is available for urgent shipments with a small surcharge." },
      { q: "Can I schedule a specific delivery time?", a: "Yes — morning (8–10 AM), afternoon (12–2 PM), and evening (4–6 PM) windows are available for an additional fee. Same-day deliveries can be scheduled within 1-hour slots." },
      { q: "What if no one is home?", a: "We leave a notice and attempt redelivery next business day. You can authorize safe-place leave, redirect to a neighbor, or hold for pickup at our facility (free for 7 days)." },
    ],
  },
  {
    key: "tracking", icon: <Globe className="w-4 h-4" />, label: "Tracking", color: "bg-orange-50 text-orange-600",
    faqs: [
      { q: "How do I track my package?", a: "Enter your tracking number on our Track page. You'll get real-time updates via SMS and email. Phone support is also available 24/7." },
      { q: "When does tracking info appear?", a: "Domestic: within 2–4 hours of pickup. International: up to 24 hours due to customs processing and carrier handoffs." },
      { q: "Why hasn't my package moved?", a: "Common reasons include sorting delays, weather, customs clearance, or weekend holds. If no update for 48+ hours, contact us for investigation." },
      { q: "Can I change the delivery address?", a: "Yes, before the package is out for delivery. Fee applies: $10 domestic, $25 international. Contact customer service immediately with your tracking number." },
      { q: "How do I get proof of delivery?", a: "Proof of delivery (signature, photo, timestamp) is available in tracking details once delivered. Download a PDF certificate from our site or request via email." },
    ],
  },
  {
    key: "pricing", icon: <CreditCard className="w-4 h-4" />, label: "Pricing", color: "bg-green-50 text-green-600",
    faqs: [
      { q: "How is shipping cost calculated?", a: "Based on weight, dimensions, distance, speed, and add-ons. We use dimensional weight (L×W×H ÷ 166) if greater than actual weight. Get instant quotes on our website." },
      { q: "Do you offer volume discounts?", a: "Yes! Businesses shipping 50+ packages/month qualify for up to 30% off. Enterprise customers get custom pricing and dedicated account management." },
      { q: "What payment methods do you accept?", a: "All major credit cards, PayPal, bank transfers, and cash for walk-ins. Business accounts can set up NET 30 monthly invoicing after credit approval." },
      { q: "Are there hidden fees?", a: "No. Our quotes include all standard charges. Additional fees (fuel surcharge, remote area, oversized, signature) are clearly disclosed before you confirm." },
      { q: "Money-back if delivery is late?", a: "Yes — we offer a money-back guarantee for late deliveries on time-definite services. Weather delays, natural disasters, and customs delays are excluded." },
    ],
  },
  {
    key: "insurance", icon: <Shield className="w-4 h-4" />, label: "Insurance", color: "bg-purple-50 text-purple-600",
    faqs: [
      { q: "What insurance is included?", a: "All shipments include basic coverage up to $100 free. Additional coverage up to $50,000 is available at $1 per $100 declared value." },
      { q: "How do I file a claim?", a: "File within 30 days of delivery by calling +1 (540) 594-6863 or emailing claims@swiftandontime.cc. Provide tracking number, damage photos, and proof of value. Claims resolved in 5–7 business days." },
      { q: "Can I cancel after pickup?", a: "Cancellations or modifications are possible before dispatch (typically 2–4 hours after pickup). Fee: $10 domestic, $25 international. Contact support immediately." },
      { q: "How is my data protected?", a: "We comply with all data protection laws. Personal info is used only for shipping and customer service. We never sell customer data to third parties." },
    ],
  },
  {
    key: "international", icon: <Globe className="w-4 h-4" />, label: "International", color: "bg-rose-50 text-rose-600",
    faqs: [
      { q: "Which countries do you ship to?", a: "200+ countries and territories worldwide, including all major destinations in North America, Europe, Asia, Australia, and South America." },
      { q: "What documents are needed?", a: "Commercial invoice (3 copies), customs declaration, packing list, and any special permits. We provide templates and can assist with completion." },
      { q: "Who pays customs duties?", a: "By default, the recipient pays upon delivery. We offer Delivered Duty Paid (DDP) where the sender pays upfront — ask us for estimates." },
      { q: "How long is customs clearance?", a: "Typically 1–3 business days but varies by country and contents. Incomplete documentation or restricted goods may cause additional delays." },
    ],
  },
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("shipping")

  const allFaqs = CATEGORIES.flatMap(c => c.faqs.map(f => ({ ...f, category: c.label })))
  const searchResults = searchQuery.trim()
    ? allFaqs.filter(f => f.q.toLowerCase().includes(searchQuery.toLowerCase()) || f.a.toLowerCase().includes(searchQuery.toLowerCase()))
    : []

  const activeCat = CATEGORIES.find(c => c.key === activeCategory)!

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative bg-gray-950 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="relative container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/5 text-blue-400 border-white/10 animate-fade-in">Help Center</Badge>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 animate-fade-in-up">
            Got questions?<br /><span className="gradient-text">We have answers</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Browse our FAQ or search for what you need.
          </p>
          <div className="relative max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search FAQs…"
              className="pl-12 h-14 bg-white/10 border-white/10 text-white placeholder:text-gray-500 rounded-2xl focus:bg-white/15 focus:border-blue-500 text-base"
            />
          </div>
        </div>
      </section>

      {/* Search results */}
      {searchQuery.trim() && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <Reveal>
              <p className="text-sm text-gray-500 mb-6">{searchResults.length} result{searchResults.length !== 1 ? "s" : ""} for "<span className="text-gray-900 font-semibold">{searchQuery}</span>"</p>
              {searchResults.length > 0 ? (
                <Accordion type="single" collapsible className="space-y-2">
                  {searchResults.map((f, i) => (
                    <AccordionItem key={i} value={`sr-${i}`} className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden px-5">
                      <AccordionTrigger className="hover:no-underline py-4 font-semibold text-gray-900 text-left">
                        <span>{f.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 text-gray-600 leading-relaxed">{f.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-gray-500 mb-4">No FAQs matched your search.</p>
                  <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600">
                    <Link href="/contact">Ask our team <ArrowRight className="w-4 h-4 ml-1" /></Link>
                  </Button>
                </div>
              )}
            </Reveal>
          </div>
        </section>
      )}

      {/* Category tabs + accordion */}
      {!searchQuery.trim() && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <Reveal className="text-center mb-12">
              <Badge className="mb-4 bg-blue-50 text-blue-600 border-blue-100">Browse by topic</Badge>
              <h2 className="text-4xl font-black text-gray-900">Everything you need to know</h2>
            </Reveal>

            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {CATEGORIES.map(c => (
                <button
                  key={c.key}
                  onClick={() => setActiveCategory(c.key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeCategory === c.key ? "bg-gray-900 text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                >
                  {c.icon} {c.label}
                </button>
              ))}
            </div>

            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${activeCat.color}`}>{activeCat.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900">{activeCat.label}</h3>
                  <p className="text-xs text-gray-400">{activeCat.faqs.length} questions</p>
                </div>
              </div>
              <Accordion type="single" collapsible className="space-y-2">
                {activeCat.faqs.map((f, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden px-5">
                    <AccordionTrigger className="hover:no-underline py-4 font-semibold text-gray-900 text-left">
                      <span>{f.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600 leading-relaxed">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>
      )}

      {/* Stats strip */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto text-center">
            {[
              { value: "200+", label: "Countries served" },
              { value: "24/7", label: "Customer support" },
              { value: "99.8%", label: "On-time delivery" },
              { value: "2h", label: "Avg. email response" },
            ].map(s => (
              <div key={s.label}>
                <p className="text-3xl font-black text-gray-900">{s.value}</p>
                <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still need help CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-indigo-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="container mx-auto px-4 text-center relative">
          <Reveal>
            <h2 className="text-4xl font-black text-white mb-4">Still need help?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-lg mx-auto">Our support team is available 24/7 — just reach out.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" asChild className="bg-white text-blue-700 hover:bg-blue-50 hover:scale-105 transition-transform shadow-xl">
                <a href="tel:+15405946863" className="flex items-center gap-2"><Phone className="w-4 h-4" /> Call now</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                <Link href="/contact" className="flex items-center gap-2"><Mail className="w-4 h-4" /> Send a message <ChevronRight className="w-4 h-4" /></Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
