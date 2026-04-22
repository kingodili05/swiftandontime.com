"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem,
  NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, Package, Phone, Mail, ChevronRight, Truck, Globe, Building2, LayoutGrid } from "lucide-react"

const SERVICES = [
  { href: "/services#same-day", label: "Same-Day Delivery", desc: "Delivered within hours", icon: <Truck className="w-4 h-4 text-blue-500" /> },
  { href: "/services#international", label: "International Shipping", desc: "Worldwide solutions", icon: <Globe className="w-4 h-4 text-indigo-500" /> },
  { href: "/business-solutions", label: "Business Solutions", desc: "Corporate accounts", icon: <Building2 className="w-4 h-4 text-violet-500" /> },
  { href: "/services", label: "All Services", desc: "View everything we offer", icon: <LayoutGrid className="w-4 h-4 text-gray-500" /> },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const isHome = pathname === "/"

  return (
    <>
      {/* Top bar */}
      <div className="bg-blue-950 text-white py-2 px-4 text-xs hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6 text-blue-200">
            <a href="tel:+18052627073" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="h-3 w-3" /> +1 (805) 262-7073
            </a>
            <a href="mailto:support@swiftandontime.cc" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="h-3 w-3" /> support@swiftandontime.cc
            </a>
          </div>
          <span className="text-blue-300">24/7 Customer Support Available</span>
        </div>
      </div>

      {/* Main header */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md shadow-black/5 border-b border-gray-100"
          : isHome ? "bg-transparent" : "bg-white border-b border-gray-100"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-xl shadow-md group-hover:shadow-blue-200 transition-shadow">
                <Package className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className={`font-bold text-lg leading-tight transition-colors ${
                  scrolled || !isHome ? "text-gray-900" : "text-white"
                }`}>Swift & On Time</div>
                <div className={`text-[10px] leading-tight transition-colors ${
                  scrolled || !isHome ? "text-gray-400" : "text-blue-200"
                }`}>Courier Services</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="gap-1">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/track", label: "Track" },
                  { href: "/contact", label: "Contact" },
                ].map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/10 ${
                          pathname === item.href
                            ? scrolled || !isHome ? "text-blue-600" : "text-white"
                            : scrolled || !isHome ? "text-gray-600 hover:text-gray-900 hover:bg-gray-50" : "text-blue-100 hover:text-white"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`text-sm font-medium bg-transparent transition-colors ${
                    scrolled || !isHome
                      ? "text-gray-600 hover:text-gray-900 data-[state=open]:text-blue-600"
                      : "text-blue-100 hover:text-white data-[state=open]:text-white"
                  }`}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-72 p-3 space-y-1">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-white shrink-0">
                            {s.icon}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{s.label}</div>
                            <div className="text-xs text-gray-400">{s.desc}</div>
                          </div>
                          <ChevronRight className="w-3 h-3 text-gray-300 ml-auto group-hover:text-blue-500 transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA buttons */}
            <div className="hidden md:flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className={`transition-colors ${
                  scrolled || !isHome
                    ? "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    : "text-blue-100 hover:text-white hover:bg-white/10"
                }`}
              >
                <Link href="/quote">Get Quote</Link>
              </Button>
              <Button
                size="sm"
                asChild
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-200 hover:shadow-blue-300 transition-all duration-200 hover:scale-105"
              >
                <Link href="/pickup">Schedule Pickup</Link>
              </Button>
            </div>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`lg:hidden ${scrolled || !isHome ? "text-gray-700" : "text-white hover:bg-white/10"}`}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <div className="bg-gradient-to-br from-blue-900 to-indigo-900 p-6">
                  <div className="flex items-center gap-2.5">
                    <div className="bg-white/20 p-2 rounded-xl">
                      <Package className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Swift & On Time</div>
                      <div className="text-xs text-blue-200">Courier Services</div>
                    </div>
                  </div>
                </div>
                <nav className="p-4 space-y-1">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/services", label: "Services" },
                    { href: "/track", label: "Track Package" },
                    { href: "/about", label: "About Us" },
                    { href: "/blog", label: "Blog" },
                    { href: "/faq", label: "FAQ" },
                    { href: "/contact", label: "Contact" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        pathname === item.href
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                      <ChevronRight className="w-4 h-4 text-gray-300" />
                    </Link>
                  ))}
                </nav>
                <div className="p-4 border-t border-gray-100 space-y-2">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/quote" onClick={() => setIsOpen(false)}>Get a Quote</Link>
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600" asChild>
                    <Link href="/pickup" onClick={() => setIsOpen(false)}>Schedule Pickup</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
