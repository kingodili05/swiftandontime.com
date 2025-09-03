"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Last-Mile Delivery: Trends to Watch in 2024",
      excerpt:
        "Explore the latest innovations and technologies shaping the future of package delivery, from drone deliveries to AI-powered logistics.",
      category: "Industry Trends",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      title: "How to Choose the Right Courier Service for Your Business",
      excerpt:
        "A comprehensive guide to selecting the perfect courier partner for your business needs, covering everything from pricing to reliability.",
      category: "Business Tips",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "7 min read",
      featured: false,
    },
    {
      id: 3,
      title: "Sustainable Shipping: Our Commitment to Green Logistics",
      excerpt:
        "Learn about our environmental initiatives and how we're reducing our carbon footprint while maintaining excellent service quality.",
      category: "Sustainability",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "4 min read",
      featured: false,
    },
    {
      id: 4,
      title: "International Shipping Made Simple: A Complete Guide",
      excerpt:
        "Everything you need to know about shipping internationally, including customs, documentation, and best practices.",
      category: "Shipping Guide",
      author: "David Wilson",
      date: "March 8, 2024",
      readTime: "8 min read",
      featured: false,
    },
    {
      id: 5,
      title: "Same-Day Delivery: When Speed Matters Most",
      excerpt:
        "Discover the industries and situations where same-day delivery can make all the difference for your business success.",
      category: "Service Spotlight",
      author: "Lisa Thompson",
      date: "March 5, 2024",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 6,
      title: "Package Tracking Technology: Behind the Scenes",
      excerpt:
        "Take a look at the advanced technology that powers our real-time tracking system and keeps you informed every step of the way.",
      category: "Technology",
      author: "James Park",
      date: "March 3, 2024",
      readTime: "5 min read",
      featured: false,
    },
  ]

  const categories = [
    "All Posts",
    "Industry Trends",
    "Business Tips",
    "Shipping Guide",
    "Technology",
    "Sustainability",
    "Service Spotlight",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-500 hover:bg-blue-400">Swift & On Time Blog</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Insights & Updates</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay informed with the latest news, tips, and insights from the world of courier services and logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Article</h2>
            <p className="text-xl text-gray-600">Our latest insights on the courier industry</p>
          </div>

          <Card className="max-w-4xl mx-auto hover:shadow-lg transition-shadow">
            <div className="grid md:grid-cols-2 gap-0">
              <Image
                src="/placeholder.svg?height=300&width=400&text=Future+of+delivery+technology+drones+and+automation"
                alt="Future of delivery technology"
                width={400}
                height={300}
                className="h-64 md:h-auto w-full object-cover"
              />
              <div className="p-8">
                <Badge className="mb-4 bg-blue-100 text-blue-800">{blogPosts[0].category}</Badge>
                <h3 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h3>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <Button>
                  Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All Posts" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">Expert insights and industry updates</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <Image
                  src={`/placeholder.svg?height=200&width=350&text=${post.category.replace(" ", "+")}+blog+post+image`}
                  alt={post.title}
                  width={350}
                  height={200}
                  className="h-48 w-full object-cover"
                />
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{post.excerpt}</CardDescription>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Button variant="ghost" size="sm">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter for the latest courier industry insights and company updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8">Subscribe</Button>
            </div>
            <p className="text-sm text-blue-200 mt-4">No spam, unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Ship?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Put our expertise to work for your business. Get started with Swift & On Time today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/quote">Get Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
