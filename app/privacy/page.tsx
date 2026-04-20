import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Eye, Lock, Users, Database, Settings } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-orange-500 text-white mb-4">Privacy</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Privacy
              <span className="text-orange-400"> Policy</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We are committed to protecting your privacy and personal information. Learn how we collect, use, and
              safeguard your data.
            </p>
            <p className="text-sm text-blue-200 mt-4">Last updated: January 15, 2024</p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Privacy Commitment */}
            <Card className="mb-8 border-green-200 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-800 mb-2">Our Privacy Commitment</h3>
                    <p className="text-green-700 text-sm">
                      Swift & On Time Courier Services respects your privacy and is committed to protecting your
                      personal information. This policy explains how we collect, use, and protect your data when you use
                      our services.
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
                    <Database className="h-5 w-5 text-blue-600" />
                    1. Information We Collect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h4 className="font-semibold">1.1 Personal Information</h4>
                  <p>We collect personal information that you provide directly to us, including:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Name, address, phone number, and email address</li>
                    <li>Business information (company name, tax ID, billing address)</li>
                    <li>Payment information (credit card details, billing address)</li>
                    <li>Shipping information (sender and recipient details)</li>
                    <li>Account credentials (username, password)</li>
                  </ul>

                  <h4 className="font-semibold">1.2 Shipment Information</h4>
                  <p>For each shipment, we collect:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Package contents, weight, and dimensions</li>
                    <li>Pickup and delivery addresses</li>
                    <li>Special handling instructions</li>
                    <li>Declared value and insurance information</li>
                    <li>Tracking and delivery confirmation data</li>
                  </ul>

                  <h4 className="font-semibold">1.3 Automatically Collected Information</h4>
                  <p>We automatically collect certain information when you use our website and services:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>IP address, browser type, and operating system</li>
                    <li>Website usage data and navigation patterns</li>
                    <li>Device information and mobile app usage</li>
                    <li>Location data (with your consent)</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Section 2 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-blue-600" />
                    2. How We Use Your Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h4 className="font-semibold">2.1 Service Provision</h4>
                  <p>We use your information to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Process and fulfill shipping requests</li>
                    <li>Provide tracking and delivery updates</li>
                    <li>Handle customer service inquiries</li>
                    <li>Process payments and manage accounts</li>
                    <li>Communicate about your shipments</li>
                  </ul>

                  <h4 className="font-semibold">2.2 Business Operations</h4>
                  <p>We may use your information for:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Improving our services and website functionality</li>
                    <li>Analyzing usage patterns and customer preferences</li>
                    <li>Developing new services and features</li>
                    <li>Conducting market research and surveys</li>
                    <li>Ensuring security and preventing fraud</li>
                  </ul>

                  <h4 className="font-semibold">2.3 Marketing Communications</h4>
                  <p>With your consent, we may use your information to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Send promotional emails and newsletters</li>
                    <li>Provide information about new services</li>
                    <li>Share special offers and discounts</li>
                    <li>Conduct customer satisfaction surveys</li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    You can opt out of marketing communications at any time by clicking the unsubscribe link in our
                    emails or contacting us directly.
                  </p>
                </CardContent>
              </Card>

              {/* Section 3 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    3. Information Sharing and Disclosure
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h4 className="font-semibold">3.1 Service Providers</h4>
                  <p>We may share your information with trusted third-party service providers who assist us in:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Transportation and logistics operations</li>
                    <li>Payment processing and financial services</li>
                    <li>Customer support and call center services</li>
                    <li>IT services and website maintenance</li>
                    <li>Marketing and advertising services</li>
                  </ul>

                  <h4 className="font-semibold">3.2 Legal Requirements</h4>
                  <p>We may disclose your information when required by law or to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Comply with legal processes and government requests</li>
                    <li>Enforce our terms and conditions</li>
                    <li>Protect our rights, property, and safety</li>
                    <li>Prevent fraud and security threats</li>
                    <li>Assist in law enforcement investigations</li>
                  </ul>

                  <h4 className="font-semibold">3.3 Business Transfers</h4>
                  <p>
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred to the
                    new entity. We will notify you of any such transfer and any changes to this privacy policy.
                  </p>

                  <h4 className="font-semibold">3.4 Consent</h4>
                  <p>
                    We may share your information with your explicit consent for purposes not covered in this policy.
                  </p>
                </CardContent>
              </Card>

              {/* Section 4 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-blue-600" />
                    4. Data Security and Protection
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h4 className="font-semibold">4.1 Security Measures</h4>
                  <p>We implement comprehensive security measures to protect your information:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure data centers with physical access controls</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Employee training on data protection practices</li>
                    <li>Multi-factor authentication for sensitive systems</li>
                  </ul>

                  <h4 className="font-semibold">4.2 Data Retention</h4>
                  <p>
                    We retain your personal information for as long as necessary to provide our services and comply with
                    legal obligations. Shipment data is typically retained for 7 years for business and legal purposes.
                  </p>

                  <h4 className="font-semibold">4.3 International Transfers</h4>
                  <p>
                    Your information may be transferred to and processed in countries other than your own. We ensure
                    appropriate safeguards are in place to protect your information during international transfers.
                  </p>
                </CardContent>
              </Card>

              {/* Section 5 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-blue-600" />
                    5. Your Rights and Choices
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h4 className="font-semibold">5.1 Access and Correction</h4>
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Access your personal information we hold</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Update your account information at any time</li>
                    <li>Request a copy of your data in a portable format</li>
                  </ul>

                  <h4 className="font-semibold">5.2 Deletion and Restriction</h4>
                  <p>You may request to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Delete your personal information (subject to legal requirements)</li>
                    <li>Restrict processing of your information</li>
                    <li>Object to certain uses of your information</li>
                    <li>Close your account and delete associated data</li>
                  </ul>

                  <h4 className="font-semibold">5.3 Marketing Preferences</h4>
                  <p>You can control marketing communications by:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Unsubscribing from email newsletters</li>
                    <li>Updating your communication preferences in your account</li>
                    <li>Contacting our customer service team</li>
                    <li>Opting out of SMS notifications</li>
                  </ul>

                  <h4 className="font-semibold">5.4 Cookie Controls</h4>
                  <p>
                    You can manage cookies through your browser settings. Please note that disabling certain cookies may
                    affect website functionality. See our Cookie Policy for more details.
                  </p>
                </CardContent>
              </Card>

              {/* Section 6 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>6. Children's Privacy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Our services are not intended for children under 13 years of age. We do not knowingly collect
                    personal information from children under 13. If we become aware that we have collected personal
                    information from a child under 13, we will take steps to delete such information.
                  </p>
                  <p>
                    If you are a parent or guardian and believe your child has provided us with personal information,
                    please contact us immediately.
                  </p>
                </CardContent>
              </Card>

              {/* Section 7 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>7. Third-Party Links and Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Our website may contain links to third-party websites and services. We are not responsible for the
                    privacy practices of these external sites. We encourage you to review the privacy policies of any
                    third-party sites you visit.
                  </p>
                  <p>
                    We may integrate with third-party services (such as payment processors, mapping services, and social
                    media platforms) that have their own privacy policies and terms of service.
                  </p>
                </CardContent>
              </Card>

              {/* Section 8 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>8. Changes to This Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We may update this privacy policy from time to time to reflect changes in our practices, technology,
                    legal requirements, or other factors. We will notify you of any material changes by:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Posting the updated policy on our website</li>
                    <li>Sending email notifications to registered users</li>
                    <li>Displaying prominent notices on our website</li>
                    <li>Providing in-app notifications for mobile users</li>
                  </ul>
                  <p>
                    Your continued use of our services after any changes indicates your acceptance of the updated
                    privacy policy.
                  </p>
                </CardContent>
              </Card>

              {/* Section 9 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>9. Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    If you have questions, concerns, or requests regarding this privacy policy or our data practices,
                    please contact us:
                  </p>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Privacy Officer</h4>
                    <p>
                      Swift & On Time Courier Services
                      <br />
                      123 Logistics Avenue
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </p>
                    <p className="mt-2">
                      <strong>Email:</strong> privacy@swiftandontime.com
                      <br />
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
                  </div>

                  <p className="text-sm text-gray-600">
                    We will respond to your privacy-related inquiries within 30 days of receipt.
                  </p>
                </CardContent>
              </Card>

              {/* Section 10 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>10. Jurisdiction and Compliance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h4 className="font-semibold">10.1 Governing Law</h4>
                  <p>
                    This privacy policy is governed by the laws of the State of New York and applicable federal laws of
                    the United States.
                  </p>

                  <h4 className="font-semibold">10.2 International Compliance</h4>
                  <p>
                    We comply with applicable international privacy laws, including the General Data Protection
                    Regulation (GDPR) for European Union residents and the California Consumer Privacy Act (CCPA) for
                    California residents.
                  </p>

                  <h4 className="font-semibold">10.3 Data Protection Authority</h4>
                  <p>
                    If you are located in the European Union, you have the right to lodge a complaint with your local
                    data protection authority if you believe we have not complied with applicable data protection laws.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Footer Actions */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Have questions about our privacy practices? We're here to help protect your privacy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <a href="mailto:privacy@swiftandontime.com">Contact Privacy Team</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/terms">Terms & Conditions</Link>
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
