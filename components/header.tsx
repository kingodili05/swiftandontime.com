"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Package, Phone, Mail } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+1 (540) 594-6863</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>support@swiftandontime.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>24/7 Customer Support Available</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Package className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl text-blue-900">Swift & On Time</div>
                <div className="text-xs text-gray-600">Courier Services</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className="px-4 py-2 hover:text-blue-600 transition-colors">
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] p-4 gap-3">
                      <Link href="/services" className="block p-3 hover:bg-gray-50 rounded-lg">
                        <div className="font-medium">All Services</div>
                        <div className="text-sm text-gray-600">Complete service overview</div>
                      </Link>
                      <Link href="/services#same-day" className="block p-3 hover:bg-gray-50 rounded-lg">
                        <div className="font-medium">Same-Day Delivery</div>
                        <div className="text-sm text-gray-600">Fast local delivery</div>
                      </Link>
                      <Link href="/services#international" className="block p-3 hover:bg-gray-50 rounded-lg">
                        <div className="font-medium">International Shipping</div>
                        <div className="text-sm text-gray-600">Global delivery solutions</div>
                      </Link>
                      <Link href="/business-solutions" className="block p-3 hover:bg-gray-50 rounded-lg">
                        <div className="font-medium">Business Solutions</div>
                        <div className="text-sm text-gray-600">Corporate accounts</div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/track" className="px-4 py-2 hover:text-blue-600 transition-colors">
                      Track Package
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/about" className="px-4 py-2 hover:text-blue-600 transition-colors">
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/contact" className="px-4 py-2 hover:text-blue-600 transition-colors">
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-2">
              <Button variant="outline" asChild>
                <Link href="/quote">Get Quote</Link>
              </Button>
              <Button asChild>
                <Link href="/pickup">Schedule Pickup</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden bg-transparent">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-8">
                  <Link href="/" className="text-lg font-medium" onClick={handleNavClick}>
                    Home
                  </Link>
                  <Link href="/services" className="text-lg font-medium" onClick={handleNavClick}>
                    Services
                  </Link>
                  <Link href="/track" className="text-lg font-medium" onClick={handleNavClick}>
                    Track Package
                  </Link>
                  <Link href="/about" className="text-lg font-medium" onClick={handleNavClick}>
                    About
                  </Link>
                  <Link href="/contact" className="text-lg font-medium" onClick={handleNavClick}>
                    Contact
                  </Link>
                  <Link href="/quote" className="text-lg font-medium" onClick={handleNavClick}>
                    Get Quote
                  </Link>
                  <Link href="/pickup" className="text-lg font-medium" onClick={handleNavClick}>
                    Schedule Pickup
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
