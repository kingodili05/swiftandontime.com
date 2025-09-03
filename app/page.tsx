"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Shield, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-500 hover:bg-blue-400">Trusted Since 2010</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Swift & Reliable Courier Services</h1>
              <p className="text-xl mb-8 text-blue-100">
                Your packages delivered safely and on time, every time. Experience the difference with our professional
                courier services across the nation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link href="/quote">Get Quotesss</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  <Link href="/track">Track Package</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://i.imgur.com/cWGs7Qo.jpeg?height=400&width=600&text=Courier+delivery+truck+on+road+with+packages"
                alt="Courier delivery truck"
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Swift & On Time?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine speed, reliability, and exceptional service to deliver your packages with care and precision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Same-day and next-day delivery options available. Your urgent packages delivered when you need them
                  most.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>100% Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Full insurance coverage and real-time tracking. Your packages are protected every step of the way.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>5-Star Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Rated #1 by customers for reliability and customer service. Experience the difference quality makes.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive courier solutions for all your delivery needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <Image
                src="http://i.imgur.com/JVGxjpn.jpeg?height=200&width=300&text=Same+day+delivery+motorcycle+courier"
                alt="Same-day delivery service"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Same-Day Delivery</h3>
              <p className="text-gray-600">Urgent packages delivered within hours</p>
            </div>

            <div className="text-center group">
              <Image
                src="https://i.imgur.com/X5FqbX1.jpeg?height=200&width=300&text=Overnight+express+delivery+van"
                alt="Overnight express delivery"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Overnight Express</h3>
              <p className="text-gray-600">Next business day guaranteed delivery</p>
            </div>

            <div className="text-center group">
              <Image
                src="https://i.imgur.com/V5y3AYA.jpeg?height=200&width=300&text=International+shipping+cargo+plane"
                alt="International shipping"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">International</h3>
              <p className="text-gray-600">Worldwide shipping solutions</p>
            </div>

            <div className="text-center group">
              <Image
                src="/placeholder.svg?height=200&width=300&text=Freight+service+large+truck+warehouse"
                alt="Freight services"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Freight Services</h3>
              <p className="text-gray-600">Large shipments and bulk deliveries</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-blue-200">Packages Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.8%</div>
              <div className="text-blue-200">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Customer Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Swift & On Time has been our go-to courier service for over 3 years. Their reliability and customer
                  service is unmatched."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=48&width=48&text=Sarah+Johnson+Business+Owner"
                    alt="Sarah Johnson"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-sm text-gray-600">Business Owner</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "I needed same-day delivery for an important document. They delivered within 2 hours! Absolutely
                  fantastic service."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=48&width=48&text=Michael+Chen+Legal+Professional"
                    alt="Michael Chen"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">Michael Chen</div>
                    <div className="text-sm text-gray-600">Legal Professional</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Professional, reliable, and always on time. Swift & On Time handles all our company's shipping needs
                  perfectly."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=48&width=48&text=Emily+Rodriguez+Operations+Manager"
                    alt="Emily Rodriguez"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">Emily Rodriguez</div>
                    <div className="text-sm text-gray-600">Operations Manager</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Ship?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get your packages delivered quickly and safely with our professional courier services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/quote">Get Instant Quote</Link>
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
