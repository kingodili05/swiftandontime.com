"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
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

const CATEGORY_COLORS: Record<string, string> = {
  "Industry Trends": "bg-blue-50 text-blue-600",
  "Business Tips": "bg-violet-50 text-violet-600",
  "Sustainability": "bg-green-50 text-green-600",
  "Shipping Guide": "bg-orange-50 text-orange-600",
  "Service Spotlight": "bg-pink-50 text-pink-600",
  "Technology": "bg-indigo-50 text-indigo-600",
}

const POSTS = [
  {
    id: 1,
    title: "The Future of Last-Mile Delivery: Trends to Watch in 2025",
    excerpt: "Explore the latest innovations shaping package delivery — from drone fleets to AI-powered route optimization and what it means for shippers.",
    category: "Industry Trends",
    author: "Sarah Johnson",
    date: "Apr 10, 2025",
    readTime: "5 min",
    featured: true,
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    id: 2,
    title: "How to Choose the Right Courier Service for Your Business",
    excerpt: "A practical guide to selecting the perfect courier partner — covering pricing, reliability, coverage, and SLA guarantees.",
    category: "Business Tips",
    author: "Michael Chen",
    date: "Apr 7, 2025",
    readTime: "7 min",
    featured: false,
    gradient: "from-violet-500 to-purple-700",
  },
  {
    id: 3,
    title: "Sustainable Shipping: Our Commitment to Green Logistics",
    excerpt: "Learn about our carbon-reduction initiatives and how every optimized route contributes to a cleaner planet.",
    category: "Sustainability",
    author: "Emily Rodriguez",
    date: "Apr 3, 2025",
    readTime: "4 min",
    featured: false,
    gradient: "from-green-500 to-emerald-700",
  },
  {
    id: 4,
    title: "International Shipping Made Simple: A Complete Guide",
    excerpt: "Everything you need to know about shipping to 200+ countries — customs docs, duties, prohibited items, and timelines.",
    category: "Shipping Guide",
    author: "David Wilson",
    date: "Mar 28, 2025",
    readTime: "8 min",
    featured: false,
    gradient: "from-orange-500 to-amber-600",
  },
  {
    id: 5,
    title: "Same-Day Delivery: When Speed Matters Most",
    excerpt: "Discover the industries and scenarios where same-day delivery can be a genuine competitive advantage.",
    category: "Service Spotlight",
    author: "Lisa Thompson",
    date: "Mar 22, 2025",
    readTime: "6 min",
    featured: false,
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: 6,
    title: "Package Tracking Technology: Behind the Scenes",
    excerpt: "Take a look at the advanced GPS and data infrastructure powering our real-time tracking system.",
    category: "Technology",
    author: "James Park",
    date: "Mar 15, 2025",
    readTime: "5 min",
    featured: false,
    gradient: "from-indigo-500 to-blue-700",
  },
]

const CATEGORIES = ["All", ...Array.from(new Set(POSTS.map(p => p.category)))]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const filtered = activeCategory === "All" ? POSTS : POSTS.filter(p => p.category === activeCategory)
  const featured = POSTS.find(p => p.featured)!
  const rest = filtered.filter(p => !p.featured || activeCategory !== "All")

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative bg-gray-950 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="relative container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/5 text-blue-400 border-white/10 animate-fade-in">Insights & Updates</Badge>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 animate-fade-in-up">
            The Swift &amp; On Time<br /><span className="gradient-text">Blog</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Industry trends, shipping tips, and company updates — delivered straight to you.
          </p>
        </div>
      </section>

      {/* Featured post */}
      {activeCategory === "All" && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <Reveal>
              <div className={`bg-gradient-to-br ${featured.gradient} rounded-3xl overflow-hidden`}>
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-10 flex flex-col justify-between">
                    <div>
                      <Badge className="bg-white/20 text-white border-0 mb-4">{featured.category}</Badge>
                      <h2 className="text-3xl font-black text-white mb-4 leading-tight">{featured.title}</h2>
                      <p className="text-white/80 leading-relaxed mb-6">{featured.excerpt}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-4 text-white/60 text-sm mb-6">
                        <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" />{featured.author}</span>
                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{featured.date}</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featured.readTime} read</span>
                      </div>
                      <Button className="bg-white text-blue-700 hover:bg-blue-50 hover:scale-105 transition-transform shadow-lg">
                        Read Article <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center p-10 opacity-10">
                    <div className="text-[180px] font-black text-white leading-none select-none">01</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Category filter + grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-10">
              {CATEGORIES.map(c => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeCategory === c ? "bg-gray-900 text-white shadow-md" : "bg-white text-gray-600 border border-gray-100 hover:bg-gray-100"}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post, i) => (
              <Reveal key={post.id} delay={i * 60}>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover-lift group flex flex-col h-full">
                  <div className={`h-3 bg-gradient-to-r ${post.gradient}`} />
                  <div className="p-6 flex flex-col flex-1">
                    <Badge className={`w-fit mb-3 border-0 text-xs ${CATEGORY_COLORS[post.category] ?? "bg-gray-100 text-gray-600"}`}>
                      {post.category}
                    </Badge>
                    <h3 className="font-bold text-gray-900 text-lg leading-snug mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-50">
                      <span className="flex items-center gap-1.5"><User className="w-3 h-3" />{post.author}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{post.readTime} read</span>
                      <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{post.date}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-indigo-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="container mx-auto px-4 text-center relative">
          <Reveal>
            <h2 className="text-4xl font-black text-white mb-3">Stay in the loop</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-md mx-auto">Get the latest articles and shipping tips delivered to your inbox. No spam.</p>
            {subscribed ? (
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-2xl font-semibold">
                ✓ You're subscribed!
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); if (email) setSubscribed(true) }} className="flex gap-3 max-w-sm mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:border-white/50"
                />
                <Button type="submit" className="bg-white text-blue-700 hover:bg-blue-50 px-5 shrink-0 rounded-xl">
                  Subscribe
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-3xl font-black text-white mb-4">Ready to ship?</h2>
            <p className="text-gray-400 mb-8">Put our expertise to work for your business.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition-transform">
                <Link href="/quote">Get a Quote <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/10 text-white hover:bg-white/10 bg-transparent">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
