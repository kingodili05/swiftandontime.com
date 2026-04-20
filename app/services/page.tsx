"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Shield, CheckCircle, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-500 hover:bg-blue-400">Our Services</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Comprehensive Courier Solutions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From same-day local deliveries to international shipping, we offer a complete range of courier services
              tailored to meet your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600">Professional courier solutions for every delivery need</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Same-Day Delivery */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=64&width=64&text=Same+Day+Delivery+Icon"
                    alt="Same-day delivery"
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <CardTitle className="text-2xl">Same-Day Delivery</CardTitle>
                    <Badge variant="secondary">Most Popular</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Need it delivered today? Our same-day service ensures your urgent packages reach their destination
                  within hours, not days.
                </CardDescription>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Pickup within 1 hour</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Delivery within 4-6 hours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Real-time tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Proof of delivery</span>
                  </li>
                </ul>
                <div className="text-2xl font-bold text-blue-600 mb-4">Starting at $85</div>
                <Button className="w-full">
                  <Link href="/quote">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Overnight Express */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=64&width=64&text=Overnight+Express+Icon"
                    alt="Overnight express"
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <CardTitle className="text-2xl">Overnight Express</CardTitle>
                    <Badge variant="outline">Guaranteed</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Next business day delivery guaranteed. Perfect for important documents and time-sensitive packages.
                </CardDescription>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Next business day delivery</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Money-back guarantee</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Signature required</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Insurance included</span>
                  </li>
                </ul>
                <div className="text-2xl font-bold text-blue-600 mb-4">Starting at $95</div>
                <Button className="w-full">
                  <Link href="/quote">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>

            {/* International Shipping */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=64&width=64&text=International+Shipping+Icon"
                    alt="International shipping"
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <CardTitle className="text-2xl">International Shipping</CardTitle>
                    <Badge variant="secondary">Worldwide</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Ship anywhere in the world with our reliable international courier services. We handle customs and
                  documentation.
                </CardDescription>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>200+ countries served</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Customs clearance included</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Door-to-door service</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Express and economy options</span>
                  </li>
                </ul>
                <div className="text-2xl font-bold text-blue-600 mb-4">Starting at $250</div>
                <Button className="w-full">
                  <Link href="/quote">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Freight Services */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=64&width=64&text=Freight+Services+Icon"
                    alt="Freight services"
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <CardTitle className="text-2xl">Freight Services</CardTitle>
                    <Badge variant="outline">Large Items</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Large shipments, palletized goods, and bulk deliveries handled with care and precision.
                </CardDescription>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Up to 10,000 lbs capacity</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Specialized handling equipment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>White glove service available</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Appointment scheduling</span>
                  </li>
                </ul>
                <div className="text-2xl font-bold text-blue-600 mb-4">Custom Pricing</div>
                <Button className="w-full">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized Services</h2>
            <p className="text-xl text-gray-600">Tailored solutions for unique shipping requirements</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=64&width=64&text=Medical+Courier+Service"
                  alt="Medical courier service"
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-lg mx-auto mb-4 object-cover"
                />
                <CardTitle>Medical Courier</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  HIPAA-compliant medical specimen and pharmaceutical delivery with temperature-controlled transport.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=64&width=64&text=Legal+Courier+Service"
                  alt="Legal courier service"
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-lg mx-auto mb-4 object-cover"
                />
                <CardTitle>Legal Courier</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Court filings, legal documents, and time-sensitive legal deliveries with chain of custody
                  documentation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=64&width=64&text=Warehouse+Storage+Services"
                  alt="Warehousing services"
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-lg mx-auto mb-4 object-cover"
                />
                <CardTitle>Warehousing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Short and long-term storage solutions with inventory management and fulfillment services.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=64&width=64&text=Rush+Emergency+Delivery"
                  alt="Rush delivery service"
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-lg mx-auto mb-4 object-cover"
                />
                <CardTitle>Rush Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Emergency and critical deliveries with dedicated vehicles and priority handling.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=64&width=64&text=White+Glove+Premium+Service"
                  alt="White glove service"
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-lg mx-auto mb-4 object-cover"
                />
                <CardTitle>White Glove</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Premium handling for fragile, valuable, or high-priority items with extra care and attention.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=64&width=64&text=Scheduled+Route+Delivery"
                  alt="Scheduled routes service"
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-lg mx-auto mb-4 object-cover"
                />
                <CardTitle>Scheduled Routes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Regular pickup and delivery routes for businesses with recurring shipping needs.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included</h2>
            <p className="text-xl text-gray-600">Every service comes with these standard features</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
              <p className="text-gray-600">Track your package every step of the way with live updates</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Full Insurance</h3>
              <p className="text-gray-600">Complete coverage for your valuable packages and documents</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proof of Delivery</h3>
              <p className="text-gray-600">Digital signatures and photo confirmation of delivery</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer service and assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-xl text-blue-200">No hidden fees, no surprises - just honest pricing</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white text-gray-900">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Local</CardTitle>
                <div className="text-3xl font-bold text-blue-600">$65-85</div>
                <CardDescription>Same city delivery</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Within 25 miles</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Same-day available</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Real-time tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white text-gray-900 border-2 border-blue-500">
              <CardHeader className="text-center">
                <Badge className="mb-2 bg-blue-500">Most Popular</Badge>
                <CardTitle className="text-2xl">Regional</CardTitle>
                <div className="text-3xl font-bold text-blue-600">$45-65</div>
                <CardDescription>State-wide delivery</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Within state borders</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Next-day delivery</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Insurance included</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white text-gray-900">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">National</CardTitle>
                <div className="text-3xl font-bold text-blue-600">$65-95</div>
                <CardDescription>Nationwide delivery</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>All 50 states</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>2-3 day delivery</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Priority handling</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/quote">Get Detailed Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Ship?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose the service that fits your needs and get your packages delivered with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/quote">Get Quote Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <Link href="/contact">Speak with Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
