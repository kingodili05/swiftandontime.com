import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Scale, Shield, AlertTriangle, FileText } from "lucide-react"

export default function TermsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-orange-500 text-white mb-4">Legal</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Terms &<span className="text-orange-400"> Conditions</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our courier and logistics services.
            </p>
            <p className="text-sm text-blue-200 mt-4">Last updated: January 15, 2024</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Important Notice */}
            <Card className="mb-8 border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-orange-800 mb-2">Important Notice</h3>
                    <p className="text-orange-700 text-sm">
                      By using Swift & On Time Courier Services, you agree to be bound by these terms and conditions. If
                      you do not agree with any part of these terms, you may not use our services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none">
              {/* Section 1 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    1. Definitions and Interpretation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    <strong>"Company," "we," "us," or "our"</strong> refers to Swift & On Time Courier Services, a
                    logistics company incorporated under the laws of New York.
                  </p>
                  <p>
                    <strong>"Customer," "you," or "your"</strong> refers to any individual or entity using our courier
                    and logistics services.
                  </p>
                  <p>
                    <strong>"Services"</strong> refers to all courier, logistics, warehousing, and related services
                    provided by the Company.
                  </p>
                  <p>
                    <strong>"Shipment"</strong> refers to any package, document, or goods tendered to the Company for
                    transportation.
                  </p>
                  <p>
                    <strong>"Consignee"</strong> refers to the person or entity designated to receive the shipment.
                  </p>
                </CardContent>
              </Card>

              {/* Section 2 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="h-5 w-5 text-blue-600" />
                    2. Service Agreement
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h4 className="font-semibold">2.1 Acceptance of Shipments</h4>
                  <p>
                    The Company reserves the right to refuse any shipment that does not comply with our shipping
                    guidelines, contains prohibited items, or poses safety risks. All shipments are subject to
                    inspection.
                  </p>

                  <h4 className="font-semibold">2.2 Service Commitment</h4>
                  <p>
                    We commit to providing reliable courier and logistics services with reasonable care and diligence.
                    Delivery times are estimates and not guaranteed unless specifically stated in writing.
                  </p>

                  <h4 className="font-semibold">2.3 Customer Responsibilities</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate and complete shipping information</li>
                    <li>Properly package items to prevent damage during transit</li>
                    <li>Declare the true value and contents of shipments</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Pay all charges when due</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Section 3 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    3. Prohibited Items
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>The following items are prohibited from shipment:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Hazardous materials and dangerous goods</li>
                      <li>Explosives, firearms, and ammunition</li>
                      <li>Illegal drugs and controlled substances</li>
                      <li>Live animals (except as specifically permitted)</li>
                      <li>Perishable items without proper packaging</li>
                    </ul>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Currency, negotiable instruments over $500</li>
                      <li>Precious metals and stones (unless declared)</li>
                      <li>Pornographic or obscene materials</li>
                      <li>Items violating intellectual property rights</li>
                      <li>Any items prohibited by law</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-600">
                    For a complete list of prohibited items and restrictions, please contact our customer service team.
                  </p>
                </CardContent>
              </Card>

              {/* Section 4 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>4. Pricing and Payment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h4 className="font-semibold">4.1 Pricing</h4>
                  <p>
                    Shipping rates are based on weight, dimensions, destination, service type, and current fuel
                    surcharges. Prices are subject to change without notice. Dimensional weight pricing applies when
                    dimensional weight exceeds actual weight.
                  </p>

                  <h4 className="font-semibold">4.2 Payment Terms</h4>
                  <p>
                    Payment is due upon shipment unless credit terms have been established. Business accounts may be
                    eligible for NET 30 payment terms subject to credit approval. Late payments may incur interest
                    charges of 1.5% per month.
                  </p>

                  <h4 className="font-semibold">4.3 Additional Charges</h4>
                  <p>
                    Additional charges may apply for special services including but not limited to: fuel surcharges,
                    remote area delivery, oversized packages, signature required, and customs clearance fees.
                  </p>
                </CardContent>
              </Card>

              {/* Section 5 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>5. Liability and Insurance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h4 className="font-semibold">5.1 Limitation of Liability</h4>
                  <p>
                    Our liability for loss or damage to any shipment is limited to the lesser of: (a) the actual value
                    of the shipment, (b) the declared value, or (c) $100 unless additional insurance is purchased. We
                    are not liable for indirect, consequential, or special damages.
                  </p>

                  <h4 className="font-semibold">5.2 Insurance Coverage</h4>
                  <p>
                    Basic coverage up to $100 is included at no charge. Additional insurance is available at $1 per $100
                    of declared value. High-value items may require special handling and third-party insurance.
                  </p>

                  <h4 className="font-semibold">5.3 Claims Process</h4>
                  <p>
                    Claims for loss or damage must be filed within 30 days of delivery or expected delivery date.
                    Written notice with supporting documentation is required. We reserve the right to inspect damaged
                    items and packaging.
                  </p>
                </CardContent>
              </Card>

              {/* Section 6 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>6. Delivery Terms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h4 className="font-semibold">6.1 Delivery Attempts</h4>
                  <p>
                    We will make reasonable attempts to deliver shipments during normal business hours. If delivery
                    cannot be completed, we will leave a delivery notice and attempt redelivery or hold the package for
                    pickup as requested.
                  </p>

                  <h4 className="font-semibold">6.2 Delivery Authorization</h4>
                  <p>
                    Delivery to the address specified constitutes completion of our service obligation. Customers may
                    authorize delivery to specific locations or individuals by providing written instructions.
                  </p>

                  <h4 className="font-semibold">6.3 Undeliverable Packages</h4>
                  <p>
                    Packages that cannot be delivered due to incorrect addresses, refused delivery, or other customer
                    issues will be held for 7 days. After this period, packages may be returned to sender at customer
                    expense or disposed of at our discretion.
                  </p>
                </CardContent>
              </Card>

              {/* Section 7 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>7. Force Majeure</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We are not liable for delays or failures in performance due to circumstances beyond our reasonable
                    control, including but not limited to: natural disasters, weather conditions, labor disputes,
                    government actions, terrorism, pandemic, or other acts of God.
                  </p>
                  <p>
                    During force majeure events, we will make reasonable efforts to minimize delays and communicate with
                    customers about service disruptions.
                  </p>
                </CardContent>
              </Card>

              {/* Section 8 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>8. Privacy and Data Protection</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We collect and process personal information in accordance with our Privacy Policy. By using our
                    services, you consent to the collection, use, and disclosure of your information as described in our
                    Privacy Policy.
                  </p>
                  <p>
                    Customer data is used solely for providing courier services, customer support, and improving our
                    services. We do not sell or share customer information with third parties except as necessary to
                    provide services or as required by law.
                  </p>
                </CardContent>
              </Card>

              {/* Section 9 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>9. Dispute Resolution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h4 className="font-semibold">9.1 Governing Law</h4>
                  <p>
                    These terms are governed by the laws of the State of New York, without regard to conflict of law
                    principles. Any disputes will be resolved in the courts of New York County, New York.
                  </p>

                  <h4 className="font-semibold">9.2 Arbitration</h4>
                  <p>
                    For claims under $10,000, parties may elect binding arbitration through the American Arbitration
                    Association. Arbitration proceedings will be conducted in New York, NY.
                  </p>

                  <h4 className="font-semibold">9.3 Time Limitations</h4>
                  <p>
                    Any legal action against the Company must be commenced within one (1) year after the cause of action
                    accrues, or it will be forever barred.
                  </p>
                </CardContent>
              </Card>

              {/* Section 10 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>10. General Provisions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h4 className="font-semibold">10.1 Modifications</h4>
                  <p>
                    We reserve the right to modify these terms at any time. Changes will be posted on our website and
                    become effective immediately. Continued use of our services constitutes acceptance of modified
                    terms.
                  </p>

                  <h4 className="font-semibold">10.2 Severability</h4>
                  <p>
                    If any provision of these terms is found to be unenforceable, the remaining provisions will continue
                    in full force and effect.
                  </p>

                  <h4 className="font-semibold">10.3 Entire Agreement</h4>
                  <p>
                    These terms constitute the entire agreement between the parties and supersede all prior agreements
                    and understandings relating to the subject matter.
                  </p>

                  <h4 className="font-semibold">10.4 Contact Information</h4>
                  <p>
                    For questions about these terms, contact us at:
                    <br />
                    Swift & On Time Courier Services
                    <br />
                    123 Logistics Avenue, New York, NY 10001
                    <br />
                    Phone: +1 (555) 123-4567
                    <br />
                    Email: legal@swiftandontime.com
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Footer Actions */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Have questions about our terms and conditions? Our legal team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link href="/contact">Contact Legal Team</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/privacy">Privacy Policy</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/cookies">Cookie Policy</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
