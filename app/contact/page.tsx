"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ArrowRight, MessageSquare, Zap } from "lucide-react"

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

const CHANNELS = [
  { icon: <Phone className="w-5 h-5" />, color: "bg-blue-50 text-blue-600", title: "Call Us", value: "+1 (540) 594-6863", note: "24/7 support", href: "tel:+15405946863" },
  { icon: <Mail className="w-5 h-5" />, color: "bg-indigo-50 text-indigo-600", title: "Email", value: "support@swiftandontime.cc", note: "Reply within 2h", href: "mailto:support@swiftandontime.cc" },
  { icon: <MapPin className="w-5 h-5" />, color: "bg-violet-50 text-violet-600", title: "Office", value: "123 Logistics Ave, NY", note: "Mon–Fri 8AM–6PM", href: "#" },
  { icon: <Clock className="w-5 h-5" />, color: "bg-pink-50 text-pink-600", title: "Hours", value: "Mon–Sat, 8AM–6PM", note: "Support 24/7", href: "#" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", subject: "", message: "", inquiryType: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const set = (field: string, value: string) => setFormData(prev => ({ ...prev, [field]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "", inquiryType: "" })
      }, 4000)
    }, 1500)
  }

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative bg-gray-950 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-600/15 rounded-full blur-3xl" />
        <div className="relative container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/5 text-blue-400 border-white/10 animate-fade-in">Contact Us</Badge>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 animate-fade-in-up">
            Let's talk<br /><span className="gradient-text">shipping</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Our team is ready to help — whether you need a quote, have a question, or want a business solution.
          </p>
        </div>
      </section>

      {/* Contact channels */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {CHANNELS.map((c, i) => (
              <Reveal key={c.title} delay={i * 70}>
                <a href={c.href} className="block bg-gray-50 rounded-2xl p-5 border border-gray-100 hover-lift group">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${c.color}`}>
                    {c.icon}
                  </div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">{c.title}</p>
                  <p className="text-gray-700 text-sm font-medium">{c.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{c.note}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">

            {/* Form */}
            <div className="lg:col-span-3">
              <Reveal>
                <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                  <Badge className="mb-4 bg-blue-50 text-blue-600 border-blue-100">Send a message</Badge>
                  <h2 className="text-3xl font-black text-gray-900 mb-2">We'd love to hear<br />from you</h2>
                  <p className="text-gray-500 text-sm mb-8">Fill in the form and we'll respond within 2 hours.</p>

                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Message sent!</h3>
                      <p className="text-gray-500 text-sm">We'll get back to you within 2 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Full Name *</label>
                          <Input value={formData.name} onChange={e => set("name", e.target.value)} placeholder="John Smith" required className="border-gray-200 focus:border-blue-400 rounded-xl" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Email *</label>
                          <Input type="email" value={formData.email} onChange={e => set("email", e.target.value)} placeholder="john@example.com" required className="border-gray-200 focus:border-blue-400 rounded-xl" />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Phone</label>
                          <Input type="tel" value={formData.phone} onChange={e => set("phone", e.target.value)} placeholder="+1 (555) 000-0000" className="border-gray-200 focus:border-blue-400 rounded-xl" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Company</label>
                          <Input value={formData.company} onChange={e => set("company", e.target.value)} placeholder="Your company" className="border-gray-200 focus:border-blue-400 rounded-xl" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Inquiry Type *</label>
                        <Select value={formData.inquiryType} onValueChange={v => set("inquiryType", v)}>
                          <SelectTrigger className="border-gray-200 rounded-xl">
                            <SelectValue placeholder="Select a topic" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="quote">Request a Quote</SelectItem>
                            <SelectItem value="business">Business Solutions</SelectItem>
                            <SelectItem value="tracking">Package Tracking Issue</SelectItem>
                            <SelectItem value="complaint">Complaint / Claim</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Subject *</label>
                        <Input value={formData.subject} onChange={e => set("subject", e.target.value)} placeholder="How can we help?" required className="border-gray-200 focus:border-blue-400 rounded-xl" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Message *</label>
                        <Textarea value={formData.message} onChange={e => set("message", e.target.value)} placeholder="Tell us more about your needs..." rows={5} required className="border-gray-200 focus:border-blue-400 rounded-xl resize-none" />
                      </div>
                      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.02] transition-transform">
                        {isSubmitting ? (
                          <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending…</span>
                        ) : (
                          <span className="flex items-center gap-2"><Send className="w-4 h-4" /> Send Message <ArrowRight className="w-4 h-4" /></span>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Side info */}
            <div className="lg:col-span-2 space-y-4">
              <Reveal delay={100}>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                      <Zap className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-gray-900">Quick response</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-gray-600">
                    {[
                      "Email replies within 2 hours",
                      "Phone support 24 hours a day",
                      "Live chat on weekdays",
                      "Business quotes in 30 minutes",
                    ].map(t => (
                      <li key={t} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-gray-900">Department contacts</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    {[
                      { dept: "Customer Service", email: "support@swiftandontime.cc" },
                      { dept: "Business Sales", email: "sales@swiftandontime.cc" },
                      { dept: "Claims & Issues", email: "claims@swiftandontime.cc" },
                    ].map(d => (
                      <div key={d.dept} className="pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                        <p className="font-semibold text-gray-800">{d.dept}</p>
                        <a href={`mailto:${d.email}`} className="text-blue-500 hover:underline text-xs">{d.email}</a>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={220}>
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
                  <h3 className="font-bold mb-2">Need urgent help?</h3>
                  <p className="text-blue-100 text-sm mb-4">Call our 24/7 emergency line for time-sensitive shipments.</p>
                  <Button asChild size="sm" className="bg-white text-blue-700 hover:bg-blue-50 w-full">
                    <a href="tel:+15405946863" className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" /> +1 (540) 594-6863
                    </a>
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
