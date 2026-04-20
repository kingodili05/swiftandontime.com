import Link from "next/link"
import { Package, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Package className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl">Swift & On Time</div>
                <div className="text-sm text-gray-400">Courier Services</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for fast, reliable courier and logistics solutions worldwide.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="outline" className="border-gray-600 hover:bg-blue-600 bg-transparent">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-gray-600 hover:bg-blue-600 bg-transparent">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-gray-600 hover:bg-blue-600 bg-transparent">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/services" className="block text-gray-400 hover:text-white transition-colors">
                Our Services
              </Link>
              <Link href="/track" className="block text-gray-400 hover:text-white transition-colors">
                Track Package
              </Link>
              <Link href="/quote" className="block text-gray-400 hover:text-white transition-colors">
                Get Quote
              </Link>
              <Link href="/pickup" className="block text-gray-400 hover:text-white transition-colors">
                Schedule Pickup
              </Link>
              <Link href="/business-solutions" className="block text-gray-400 hover:text-white transition-colors">
                Business Solutions
              </Link>
              <Link href="/careers" className="block text-gray-400 hover:text-white transition-colors">
                Careers
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <div className="space-y-2">
              <div className="text-gray-400">Same-Day Delivery</div>
              <div className="text-gray-400">International Shipping</div>
              <div className="text-gray-400">eCommerce Fulfillment</div>
              <div className="text-gray-400">Warehousing</div>
              <div className="text-gray-400">Last Mile Delivery</div>
              <div className="text-gray-400">Scheduled Pickups</div>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+1 (540) 594-6863</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>support@swiftandontime.com</span>
              </div>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="h-4 w-4 mt-1" />
                <span>
                  123 Logistics Ave
                  <br />
                  Business District
                  <br />
                  New York, NY 10001
                </span>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Newsletter</h4>
              <div className="flex gap-2">
                <Input placeholder="Your email" className="bg-gray-800 border-gray-600" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">© 2024 Swift & On Time Courier Services. All rights reserved.</div>
            <div className="flex gap-6 text-sm">
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
