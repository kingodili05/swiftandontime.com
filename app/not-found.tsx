import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { Home, Search, Package, Phone, ArrowLeft, MapPin, Clock, Truck } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Main 404 Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* 404 Illustration */}
            <div className="mb-8">
              <Image
                src="/placeholder.svg?height=300&width=400&text=Lost%20delivery%20truck%20with%20question%20marks%20404"
                alt="Lost delivery truck - 404 error"
                width={400}
                height={300}
                className="mx-auto"
              />
            </div>

            {/* Error Message */}
            <div className="mb-12">
              <h1 className="text-6xl lg:text-8xl font-bold text-blue-900 mb-4">404</h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Oops! This Package Got
                <span className="text-orange-500"> Lost</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                The page you're looking for seems to have taken a wrong turn. Don't worry, our delivery team is much
                more reliable than our web pages!
              </p>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              <Button asChild className="h-auto p-4 flex-col gap-2">
                <Link href="/">
                  <Home className="h-6 w-6" />
                  <span>Go Home</span>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2 bg-transparent">
                <Link href="/track">
                  <Package className="h-6 w-6" />
                  <span>Track Package</span>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2 bg-transparent">
                <Link href="/services">
                  <Truck className="h-6 w-6" />
                  <span>Our Services</span>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-auto p-4 flex-col gap-2 bg-transparent">
                <Link href="/contact">
                  <Phone className="h-6 w-6" />
                  <span>Get Help</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Looking for Something Specific?</h3>
            <p className="text-gray-600 mb-8">Try searching for what you need or browse our popular pages below.</p>

            {/* Search Bar */}
            <div className="flex gap-2 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input placeholder="Search our website..." className="pl-10 h-12" />
              </div>
              <Button size="lg" className="px-8">
                Search
              </Button>
            </div>

            {/* Popular Searches */}
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-3">Popular searches:</p>
              <div className="flex flex-wrap justify-center gap-2">
                <Link
                  href="/track"
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors"
                >
                  Track Package
                </Link>
                <Link
                  href="/quote"
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors"
                >
                  Get Quote
                </Link>
                <Link
                  href="/services#same-day"
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors"
                >
                  Same Day Delivery
                </Link>
                <Link
                  href="/services#international"
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors"
                >
                  International Shipping
                </Link>
                <Link
                  href="/pickup"
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors"
                >
                  Schedule Pickup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Pages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Popular Pages</h3>
              <p className="text-gray-600">Here are some pages our customers visit most often</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Package className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Track Your Package</h4>
                  <p className="text-gray-600 mb-4">
                    Get real-time updates on your shipment location and delivery status.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/track">Track Now</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Truck className="h-6 w-6 text-orange-600" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Our Services</h4>
                  <p className="text-gray-600 mb-4">Explore our complete range of courier and logistics solutions.</p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/services">View Services</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Schedule Pickup</h4>
                  <p className="text-gray-600 mb-4">Book a convenient pickup time for your packages and documents.</p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/pickup">Schedule Now</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Get a Quote</h4>
                  <p className="text-gray-600 mb-4">Calculate shipping costs instantly with our online quote tool.</p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/quote">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Contact Support</h4>
                  <p className="text-gray-600 mb-4">Get help from our 24/7 customer support team.</p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Search className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Help Center</h4>
                  <p className="text-gray-600 mb-4">Find answers to frequently asked questions and guides.</p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/faq">Browse FAQ</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Still Can't Find What You're Looking For?</h3>
            <p className="text-xl text-blue-100 mb-8">
              Our customer support team is available 24/7 to help you with any questions or concerns.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 mx-auto mb-3 text-orange-400" />
                  <h4 className="font-semibold mb-2">Call Us</h4>
                  <p className="text-blue-100 text-sm mb-3">24/7 phone support</p>
                  <Button asChild className="bg-orange-500 hover:bg-orange-600">
                    <a href="tel:+15551234567">+1 (555) 123-4567</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Package className="h-8 w-8 mx-auto mb-3 text-orange-400" />
                  <h4 className="font-semibold mb-2">Live Chat</h4>
                  <p className="text-blue-100 text-sm mb-3">Instant online support</p>
                  <Button className="bg-green-600 hover:bg-green-700">Start Chat</Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-3 text-orange-400" />
                  <h4 className="font-semibold mb-2">Email Us</h4>
                  <p className="text-blue-100 text-sm mb-3">Response within 2 hours</p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
                  >
                    <a href="mailto:support@swiftandontime.com">Send Email</a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                <Link href="/">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Return to Homepage
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
