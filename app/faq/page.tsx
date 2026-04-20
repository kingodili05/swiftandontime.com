"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Search, Package, Globe, Shield, CreditCard, Clock, Phone, Mail, HelpCircle } from "lucide-react"

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredFAQs, setFilteredFAQs] = useState<any[]>([])

  const faqCategories = {
    shipping: {
      title: "Shipping & Delivery",
      icon: Package,
      color: "bg-blue-100 text-blue-600",
      questions: [
        {
          id: "ship-1",
          question: "What are your delivery timeframes?",
          answer:
            "Our delivery times vary by service: Same-day delivery within 4-6 hours citywide, Next-day delivery by 10:30 AM, 2-3 day standard delivery, International express 1-3 business days, International standard 5-10 business days. Times may vary based on destination and customs processing.",
        },
        {
          id: "ship-2",
          question: "What size and weight limits do you have?",
          answer:
            'We accept packages up to 70 lbs (32 kg) and maximum dimensions of 48" x 36" x 36" for standard services. For oversized or heavier items, we offer freight services with no weight limits. International shipments may have different restrictions based on destination country regulations.',
        },
        {
          id: "ship-3",
          question: "Do you deliver on weekends and holidays?",
          answer:
            "Yes! We offer weekend delivery for same-day and next-day services at no extra charge. Holiday delivery is available for urgent shipments with a small surcharge. Our customer service operates 24/7 to assist with scheduling.",
        },
        {
          id: "ship-4",
          question: "What items are prohibited from shipping?",
          answer:
            "We cannot ship hazardous materials, flammable liquids, explosives, firearms, illegal substances, perishable food items without proper packaging, live animals, or items valued over $50,000 without special arrangements. Contact us for specific item questions.",
        },
        {
          id: "ship-5",
          question: "Can I schedule a specific delivery time?",
          answer:
            "Yes! We offer time-definite delivery options including morning delivery (8-10 AM), afternoon delivery (12-2 PM), and evening delivery (4-6 PM) for an additional fee. Same-day deliveries can be scheduled within 1-hour windows.",
        },
        {
          id: "ship-6",
          question: "What happens if no one is available to receive the package?",
          answer:
            "We'll leave a delivery notice and attempt redelivery the next business day. You can also authorize us to leave the package in a safe location, redirect to a neighbor, or hold it at our facility for pickup. We'll hold packages for up to 7 days free of charge.",
        },
      ],
    },
    tracking: {
      title: "Package Tracking",
      icon: Globe,
      color: "bg-orange-100 text-orange-600",
      questions: [
        {
          id: "track-1",
          question: "How do I track my package?",
          answer:
            "Enter your tracking number on our tracking page or homepage. You'll receive real-time updates via SMS and email. You can also call our customer service at +1 (555) 123-4567 or use our mobile app for instant tracking updates.",
        },
        {
          id: "track-2",
          question: "When will my tracking information appear?",
          answer:
            "Tracking information typically appears within 2-4 hours of pickup for domestic shipments. International shipments may take up to 24 hours to show initial tracking data due to customs processing and international carrier handoffs.",
        },
        {
          id: "track-3",
          question: "Why hasn't my package moved in several days?",
          answer:
            "Packages may stay at facilities for various reasons: sorting delays, weather conditions, customs clearance for international shipments, or weekend/holiday holds. If there's no update for 48+ hours, contact our customer service for investigation.",
        },
        {
          id: "track-4",
          question: "What do the different tracking statuses mean?",
          answer:
            "Package Received: We've received your shipment. In Transit: Package is moving through our network. Out for Delivery: Package is on the delivery vehicle. Delivered: Package has been successfully delivered. Exception: Delivery attempt failed or issue occurred. Contact us for clarification on any status.",
        },
        {
          id: "track-5",
          question: "Can I change the delivery address after shipping?",
          answer:
            "Address changes are possible before the package is out for delivery. There's a $10 fee for domestic changes and $25 for international. Contact customer service immediately with your tracking number and new address details.",
        },
        {
          id: "track-6",
          question: "How do I get proof of delivery?",
          answer:
            "Proof of delivery is automatically available in your tracking details once delivered, including recipient signature, delivery photo, and timestamp. You can download a PDF certificate from our website or request one via email or phone.",
        },
      ],
    },
    pricing: {
      title: "Pricing & Billing",
      icon: CreditCard,
      color: "bg-green-100 text-green-600",
      questions: [
        {
          id: "price-1",
          question: "How is shipping cost calculated?",
          answer:
            "Pricing is based on package weight, dimensions, destination distance, service speed, and any additional services. We use dimensional weight pricing (length × width × height ÷ 166) if it's greater than actual weight. Get instant quotes on our website or call for custom pricing.",
        },
        {
          id: "price-2",
          question: "Do you offer volume discounts?",
          answer:
            "Yes! Business customers shipping 50+ packages monthly qualify for volume discounts up to 30% off standard rates. We also offer custom pricing for high-volume shippers and dedicated account management for enterprise customers.",
        },
        {
          id: "price-3",
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and cash for walk-in customers. Business accounts can set up monthly invoicing with NET 30 payment terms after credit approval.",
        },
        {
          id: "price-4",
          question: "Are there any hidden fees?",
          answer:
            "No hidden fees! Our quotes include all standard charges. Additional fees may apply for: fuel surcharges (updated weekly), remote area delivery, oversized packages, signature required, or special handling. All fees are clearly disclosed before shipping.",
        },
        {
          id: "price-5",
          question: "Can I get a refund if my package is late?",
          answer:
            "Yes! We offer a money-back guarantee for late deliveries on time-definite services. Refunds are processed automatically for eligible shipments. Weather delays, natural disasters, and customs delays are excluded from our guarantee.",
        },
        {
          id: "price-6",
          question: "How do I set up a business account?",
          answer:
            "Contact our sales team at +1 (555) 123-4568 or email business@swiftandontime.com. You'll need business registration documents, tax ID, and credit references. Account setup typically takes 1-2 business days with immediate shipping privileges.",
        },
      ],
    },
    policies: {
      title: "Policies & Insurance",
      icon: Shield,
      color: "bg-purple-100 text-purple-600",
      questions: [
        {
          id: "policy-1",
          question: "What insurance coverage do you provide?",
          answer:
            "All shipments include basic coverage up to $100 at no extra cost. Additional insurance is available up to $50,000 value at $1 per $100 of declared value. High-value items require special handling and may need third-party insurance for amounts over $50,000.",
        },
        {
          id: "policy-2",
          question: "How do I file a claim for damaged or lost packages?",
          answer:
            "File claims within 30 days of delivery (or expected delivery for lost items) by calling +1 (555) 123-4570 or emailing claims@swiftandontime.com. Provide tracking number, photos of damage, original packaging, and proof of value. Most claims are resolved within 5-7 business days.",
        },
        {
          id: "policy-3",
          question: "What is your liability policy?",
          answer:
            "Our liability is limited to the declared value or actual value of contents, whichever is less, up to our maximum coverage limits. We're not liable for indirect, consequential, or special damages. Full terms are available in our shipping agreement.",
        },
        {
          id: "policy-4",
          question: "Can I cancel or modify a shipment after pickup?",
          answer:
            "Shipments can be cancelled or modified before they're dispatched from our facility, typically within 2-4 hours of pickup. Cancellation fees may apply: $10 for domestic, $25 for international. Contact customer service immediately with your tracking number.",
        },
        {
          id: "policy-5",
          question: "What are your terms and conditions?",
          answer:
            "Our complete terms and conditions cover shipping agreements, liability limits, prohibited items, payment terms, and dispute resolution. They're available on our website and provided with every shipment. By using our services, you agree to these terms.",
        },
        {
          id: "policy-6",
          question: "How do you handle personal data and privacy?",
          answer:
            "We're committed to protecting your privacy and comply with all applicable data protection laws. Personal information is used only for shipping purposes and customer service. We never sell customer data to third parties. View our full privacy policy on our website.",
        },
      ],
    },
    international: {
      title: "International Shipping",
      icon: Globe,
      color: "bg-red-100 text-red-600",
      questions: [
        {
          id: "intl-1",
          question: "Which countries do you ship to?",
          answer:
            "We ship to 150+ countries worldwide including all major destinations in North America, Europe, Asia, Australia, and South America. Some restricted countries may have limited services. Check our country list or contact us for specific destination availability.",
        },
        {
          id: "intl-2",
          question: "What documents are needed for international shipping?",
          answer:
            "Required documents include: commercial invoice (3 copies), customs declaration, packing list, and any special permits for restricted items. We provide document templates and can assist with proper completion to avoid customs delays.",
        },
        {
          id: "intl-3",
          question: "Who pays customs duties and taxes?",
          answer:
            "By default, the recipient pays all customs duties, taxes, and clearance fees upon delivery. We offer Delivered Duty Paid (DDP) service where sender pays all charges upfront. Duties vary by country and product type - we can provide estimates.",
        },
        {
          id: "intl-4",
          question: "How long does customs clearance take?",
          answer:
            "Customs clearance typically takes 1-3 business days but can vary significantly by country, package contents, and local customs workload. High-value items, restricted goods, or incomplete documentation may cause additional delays.",
        },
        {
          id: "intl-5",
          question: "What items are restricted for international shipping?",
          answer:
            "Restrictions vary by destination country but commonly include: electronics without proper certification, food products, pharmaceuticals, cosmetics, and items over certain values. We provide country-specific restriction lists and can verify items before shipping.",
        },
        {
          id: "intl-6",
          question: "Can you help with customs documentation?",
          answer:
            "Yes! Our international specialists can assist with proper documentation, customs forms, and regulatory compliance. We offer document preparation services for complex shipments and can connect you with customs brokers for high-value items.",
        },
      ],
    },
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim() === "") {
      setFilteredFAQs([])
      return
    }

    const allFAQs = Object.values(faqCategories).flatMap((category) =>
      category.questions.map((q) => ({ ...q, category: category.title })),
    )

    const filtered = allFAQs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query.toLowerCase()) ||
        faq.answer.toLowerCase().includes(query.toLowerCase()),
    )

    setFilteredFAQs(filtered)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-orange-500 text-white mb-4">Help Center</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Frequently Asked
              <span className="text-orange-400"> Questions</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Find quick answers to common questions about our courier and logistics services. Can't find what you're
              looking for? Contact our support team.
            </p>

            {/* Search Bar */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Search FAQs..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="bg-white text-black pl-10 h-12"
                  />
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 px-8">Search</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {searchQuery && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">
                Search Results for "{searchQuery}" ({filteredFAQs.length} found)
              </h2>

              {filteredFAQs.length > 0 ? (
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFAQs.map((faq, index) => (
                    <Card key={faq.id}>
                      <AccordionItem value={`search-${index}`} className="border-none">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline">
                          <div className="text-left">
                            <div className="font-semibold text-lg">{faq.question}</div>
                            <Badge variant="outline" className="mt-1">
                              {faq.category}
                            </Badge>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Card>
                  ))}
                </Accordion>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No results found</h3>
                    <p className="text-gray-600 mb-6">
                      We couldn't find any FAQs matching your search. Try different keywords or browse our categories
                      below.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild>
                        <Link href="/contact">Contact Support</Link>
                      </Button>
                      <Button variant="outline" onClick={() => handleSearch("")}>
                        Clear Search
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Categories */}
      {!searchQuery && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
                <p className="text-gray-600">Select a category to find answers to your questions</p>
              </div>

              <Tabs defaultValue="shipping" className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
                  {Object.entries(faqCategories).map(([key, category]) => {
                    const IconComponent = category.icon
                    return (
                      <TabsTrigger key={key} value={key} className="flex items-center gap-2">
                        <IconComponent className="h-4 w-4" />
                        <span className="hidden sm:inline">{category.title}</span>
                      </TabsTrigger>
                    )
                  })}
                </TabsList>

                {Object.entries(faqCategories).map(([key, category]) => {
                  const IconComponent = category.icon
                  return (
                    <TabsContent key={key} value={key}>
                      <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-3 rounded-lg ${category.color}`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">{category.title}</h3>
                            <p className="text-gray-600">{category.questions.length} questions</p>
                          </div>
                        </div>
                      </div>

                      <Accordion type="single" collapsible className="space-y-4">
                        {category.questions.map((faq) => (
                          <Card key={faq.id}>
                            <AccordionItem value={faq.id} className="border-none">
                              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                                <span className="font-semibold text-lg text-left">{faq.question}</span>
                              </AccordionTrigger>
                              <AccordionContent className="px-6 pb-4">
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                              </AccordionContent>
                            </AccordionItem>
                          </Card>
                        ))}
                      </Accordion>
                    </TabsContent>
                  )
                })}
              </Tabs>
            </div>
          </div>
        </section>
      )}

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">150+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">99.8%</div>
              <div className="text-gray-600">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">2 Hours</div>
              <div className="text-gray-600">Average Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-blue-50 to-orange-50 border-none">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Can't find the answer you're looking for? Our customer support team is available 24/7 to assist you
                  with any questions or concerns.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Call Us</h3>
                      <p className="text-sm text-gray-600 mb-4">Speak with our support team</p>
                      <Button className="w-full" asChild>
                        <a href="tel:+15551234567">+1 (555) 123-4567</a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="h-6 w-6 text-orange-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Email Support</h3>
                      <p className="text-sm text-gray-600 mb-4">Get detailed assistance</p>
                      <Button className="w-full bg-transparent" variant="outline" asChild>
                        <a href="mailto:support@swiftandontime.com">Send Email</a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <HelpCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Contact Form</h3>
                      <p className="text-sm text-gray-600 mb-4">Detailed inquiry form</p>
                      <Button className="w-full bg-transparent" variant="outline" asChild>
                        <Link href="/contact">Contact Us</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    For urgent matters or package emergencies, call our 24/7 hotline:
                    <a href="tel:+15551234567" className="text-blue-600 hover:underline font-medium ml-1">
                      +1 (555) 123-4567
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Resources</h2>
              <p className="text-gray-600">Quick links to commonly needed information</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto p-4 justify-start bg-transparent" asChild>
                <Link href="/track">
                  <Package className="h-5 w-5 mr-2" />
                  Track Package
                </Link>
              </Button>

              <Button variant="outline" className="h-auto p-4 justify-start bg-transparent" asChild>
                <Link href="/quote">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Get Quote
                </Link>
              </Button>

              <Button variant="outline" className="h-auto p-4 justify-start bg-transparent" asChild>
                <Link href="/pickup">
                  <Clock className="h-5 w-5 mr-2" />
                  Schedule Pickup
                </Link>
              </Button>

              <Button variant="outline" className="h-auto p-4 justify-start bg-transparent" asChild>
                <Link href="/services">
                  <Globe className="h-5 w-5 mr-2" />
                  Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
