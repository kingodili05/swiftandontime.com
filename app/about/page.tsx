"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Award, Globe, Heart } from "lucide-react"
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

const TEAM = [
  { name: "James Mitchell", role: "Founder & CEO", init: "JM", gradient: "from-blue-500 to-indigo-600" },
  { name: "Priya Sharma", role: "Head of Operations", init: "PS", gradient: "from-violet-500 to-purple-600" },
  { name: "Carlos Rivera", role: "Director of Logistics", init: "CR", gradient: "from-green-500 to-emerald-600" },
  { name: "Aisha Thompson", role: "Customer Experience Lead", init: "AT", gradient: "from-pink-500 to-rose-500" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative bg-gray-950 py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl" />
        <div className="relative container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/5 text-blue-400 border-white/10 animate-fade-in">Our Story</Badge>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 animate-fade-in-up">
            Built on trust,<br /><span className="gradient-text">driven by speed</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Since 2010, we've been redefining what reliable courier service looks like — one delivery at a time.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <Reveal>
              <Badge className="mb-4 bg-blue-50 text-blue-600 border-blue-100">Who We Are</Badge>
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                More than a courier —<br /><span className="gradient-text-dark">a promise kept</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Swift & On Time was founded with a single mission: to deliver packages the way people actually need them delivered — fast, safe, and with complete transparency.</p>
                <p>What started as a small local operation in New York City has grown into a nationwide network serving thousands of businesses and individuals every day.</p>
                <p>We believe that every package carries something important — a business deal, a gift, a medical necessity. That's why we treat every shipment like it matters, because it does.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { value: "2010", label: "Founded" },
                  { value: "50K+", label: "Packages delivered" },
                  { value: "200+", label: "Cities covered" },
                  { value: "99.8%", label: "On-time rate" },
                ].map((s) => (
                  <div key={s.label} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <p className="text-2xl font-black text-gray-900">{s.value}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150} className="space-y-4">
              {[
                { icon: <Users className="w-5 h-5" />, color: "bg-blue-50 text-blue-600", title: "People-first culture", desc: "Our team of 500+ professionals is trained to handle your shipments with care and professionalism." },
                { icon: <Globe className="w-5 h-5" />, color: "bg-indigo-50 text-indigo-600", title: "Global reach", desc: "A network spanning 200+ countries, with local expertise in every region we serve." },
                { icon: <Award className="w-5 h-5" />, color: "bg-yellow-50 text-yellow-600", title: "Award-winning service", desc: "Recognized as the #1 courier service in customer satisfaction for 3 consecutive years." },
                { icon: <Heart className="w-5 h-5" />, color: "bg-pink-50 text-pink-600", title: "Community commitment", desc: "We give back to local communities through our courier apprenticeship program." },
              ].map((item, i) => (
                <div key={item.title} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover-lift">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <Badge className="mb-4 bg-blue-50 text-blue-600 border-blue-100">Our Values</Badge>
            <h2 className="text-4xl font-black text-gray-900">What we stand for</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { emoji: "⚡", title: "Speed", desc: "We obsess over cutting every unnecessary minute from delivery time." },
              { emoji: "🔒", title: "Reliability", desc: "A promise made is a promise kept. 99.8% on-time, every time." },
              { emoji: "👁️", title: "Transparency", desc: "No surprises — real-time tracking and clear communication always." },
              { emoji: "💚", title: "Sustainability", desc: "Committed to reducing our carbon footprint with every route we optimize." },
              { emoji: "🤝", title: "Partnership", desc: "We grow when our customers grow. Your success is our mission." },
              { emoji: "⭐", title: "Excellence", desc: "We don't settle for good enough — we push for exceptional." },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 hover-lift text-center">
                  <div className="text-4xl mb-3">{v.emoji}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-16">
            <Badge className="mb-4 bg-blue-50 text-blue-600 border-blue-100">Leadership</Badge>
            <h2 className="text-4xl font-black text-gray-900">Meet the team</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 80}>
                <div className="text-center group">
                  <div className={`w-20 h-20 bg-gradient-to-br ${member.gradient} rounded-2xl flex items-center justify-center text-white font-black text-xl mx-auto mb-4 group-hover:scale-105 transition-transform shadow-lg`}>
                    {member.init}
                  </div>
                  <p className="font-bold text-gray-900">{member.name}</p>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-indigo-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="container mx-auto px-4 text-center relative">
          <Reveal>
            <h2 className="text-4xl font-black text-white mb-4">Ready to ship with us?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">Join thousands of satisfied customers who trust Swift & On Time.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" asChild className="bg-white text-blue-700 hover:bg-blue-50 hover:scale-105 transition-transform shadow-xl">
                <Link href="/quote">Get Started <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
