"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Target, Eye, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-500 hover:bg-blue-400">About Swift & On Time</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Your Trusted Courier Partner Since 2010</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We've built our reputation on reliability, speed, and exceptional customer service. Discover the story
              behind our commitment to delivering excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010 by logistics veterans John Swift and Maria Ontime, Swift & On Time Courier Services
                began with a simple mission: to provide reliable, fast, and secure package delivery services that
                businesses and individuals could depend on.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small local operation with just two delivery vans has grown into a nationwide network
                serving thousands of customers across the country. Our success is built on the foundation of trust,
                reliability, and an unwavering commitment to customer satisfaction.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to be one of the leading courier services in the region, handling everything from
                urgent same-day deliveries to complex international shipments.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://i.imgur.com/D4VVRRC.jpeg?height=400&width=600&text=Modern+courier+company+headquarters+building+with+delivery+trucks"
                alt="Swift & On Time company headquarters"
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To provide fast, reliable, and secure courier services that exceed customer expectations while
                  building lasting partnerships based on trust and excellence.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Eye className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To be the leading courier service provider, known for innovation, reliability, and exceptional
                  customer service in every market we serve.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Integrity, reliability, customer focus, innovation, and teamwork. These values drive our commitment to
                  delivering excellence in every package we handle.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the experienced professionals leading our company</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Image
                  src="https://i.imgur.com/HLxwq98.jpeg?height=128&width=128&text=Joseph+Freeman+CEO+Professional+Headshot"
                  alt="Joseph Freeman, CEO"
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Joseph Freeman</h3>
                <p className="text-blue-600 font-medium mb-2">CEO & Co-Founder</p>
                <p className="text-sm text-gray-600">
                  20+ years in logistics and supply chain management. Former operations director at major shipping
                  company.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Image
                  src="https://i.imgur.com/y3Z0OM6.jpeg?height=128&width=128&text=Maria+Ontime+COO+Professional+Headshot"
                  alt="Evan Chapman, COO"
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Evan Chapman</h3>
                <p className="text-blue-600 font-medium mb-2">COO & Co-Founder</p>
                <p className="text-sm text-gray-600">
                  Expert in operations optimization and customer service excellence. MBA in Business Operations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Image
                  src="https://i.imgur.com/xla1xJz.jpeg?height=128&width=128&text=David+Tech+CTO+Professional+Headshot"
                  alt="Davon Dyer, CTO"
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Davon Dyer</h3>
                <p className="text-blue-600 font-medium mb-2">CTO</p>
                <p className="text-sm text-gray-600">
                  Technology innovator specializing in logistics software and tracking systems. 15+ years in tech.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Image
                  src="https://i.imgur.com/vKMNJrD.jpeg?height=128&width=128&text=Sarah+Operations+Head+Professional+Headshot"
                  alt="Paige Watson, Head of Operations"
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Paige Watson</h3>
                <p className="text-blue-600 font-medium mb-2">Head of Operations</p>
                <p className="text-sm text-gray-600">
                  Logistics expert ensuring smooth daily operations and maintaining our high service standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-blue-200">Numbers that reflect our commitment to excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-blue-200">Packages Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <div className="text-blue-200">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.8%</div>
              <div className="text-blue-200">On-Time Delivery Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Swift & On Time?</h2>
            <p className="text-xl text-gray-600">The advantages that set us apart from the competition</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
                <p className="text-gray-600">
                  Over 15 years of consistent, reliable service with thousands of satisfied customers.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
                <p className="text-gray-600">
                  Real-time tracking, automated notifications, and digital proof of delivery.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Flexible Solutions</h3>
                <p className="text-gray-600">
                  Customized delivery options to meet your specific business needs and requirements.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">
                  Fair, transparent pricing with no hidden fees. Get the best value for your shipping needs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock customer support to assist you whenever you need help.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Nationwide Network</h3>
                <p className="text-gray-600">
                  Extensive coverage across the country with local expertise in every market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Swift & On Time for their courier needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/quote">Get Started Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
