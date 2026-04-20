"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"
import { Cookie, Settings, Shield, BarChart, Target, Info } from "lucide-react"

export default function CookiesPage() {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Always enabled
    functional: true,
    analytics: false,
    marketing: false,
  })

  const handlePreferenceChange = (category: string, enabled: boolean) => {
    if (category === "necessary") return // Cannot disable necessary cookies

    setCookiePreferences((prev) => ({
      ...prev,
      [category]: enabled,
    }))
  }

  const savePreferences = () => {
    // In a real implementation, this would save to localStorage/cookies
    alert("Cookie preferences saved successfully!")
  }

  const acceptAllCookies = () => {
    setCookiePreferences({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    })
    alert("All cookies accepted!")
  }

  const rejectAllCookies = () => {
    setCookiePreferences({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    })
    alert("Optional cookies rejected!")
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-orange-500 text-white mb-4">Cookies</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Cookie
              <span className="text-orange-400"> Policy</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Learn about how we use cookies and similar technologies to improve your experience on our website.
            </p>
            <p className="text-sm text-blue-200 mt-4">Last updated: January 15, 2024</p>
          </div>
        </div>
      </section>

      {/* Cookie Preferences Panel */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-blue-600" />
                  Cookie Preferences
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">
                  Manage your cookie preferences below. You can enable or disable different types of cookies based on
                  your preferences.
                </p>

                <div className="space-y-6">
                  {/* Necessary Cookies */}
                  <div className="flex items-start justify-between p-4 bg-white rounded-lg border">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-5 w-5 text-green-600" />
                        <h4 className="font-semibold">Necessary Cookies</h4>
                        <Badge variant="outline" className="text-xs">
                          Always Active
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        Essential for website functionality, security, and basic features. These cannot be disabled.
                      </p>
                    </div>
                    <Switch checked={cookiePreferences.necessary} disabled />
                  </div>

                  {/* Functional Cookies */}
                  <div className="flex items-start justify-between p-4 bg-white rounded-lg border">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Settings className="h-5 w-5 text-blue-600" />
                        <h4 className="font-semibold">Functional Cookies</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Enable enhanced functionality like remembering your preferences and providing personalized
                        features.
                      </p>
                    </div>
                    <Switch
                      checked={cookiePreferences.functional}
                      onCheckedChange={(checked) => handlePreferenceChange("functional", checked)}
                    />
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-start justify-between p-4 bg-white rounded-lg border">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart className="h-5 w-5 text-purple-600" />
                        <h4 className="font-semibold">Analytics Cookies</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Help us understand how visitors use our website so we can improve performance and user
                        experience.
                      </p>
                    </div>
                    <Switch
                      checked={cookiePreferences.analytics}
                      onCheckedChange={(checked) => handlePreferenceChange("analytics", checked)}
                    />
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-start justify-between p-4 bg-white rounded-lg border">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="h-5 w-5 text-orange-600" />
                        <h4 className="font-semibold">Marketing Cookies</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Used to deliver relevant advertisements and track the effectiveness of our marketing campaigns.
                      </p>
                    </div>
                    <Switch
                      checked={cookiePreferences.marketing}
                      onCheckedChange={(checked) => handlePreferenceChange("marketing", checked)}
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button onClick={savePreferences} className="flex-1">
                    Save Preferences
                  </Button>
                  <Button onClick={acceptAllCookies} variant="outline" className="flex-1 bg-transparent">
                    Accept All
                  </Button>
                  <Button onClick={rejectAllCookies} variant="outline" className="flex-1 bg-transparent">
                    Reject Optional
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Section 1 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-blue-600" />
                    1. What Are Cookies?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you
                    visit a website. They are widely used to make websites work more efficiently and provide information
                    to website owners.
                  </p>
                  <p>
                    Cookies can be "session cookies" (which are deleted when you close your browser) or "persistent
                    cookies" (which remain on your device until they expire or you delete them).
                  </p>
                  <p>
                    We also use similar technologies such as web beacons, pixels, and local storage to enhance your
                    experience on our website.
                  </p>
                </CardContent>
              </Card>

              {/* Section 2 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cookie className="h-5 w-5 text-blue-600" />
                    2. How We Use Cookies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Swift & On Time Courier Services uses cookies for several purposes:</p>

                  <h4 className="font-semibold">2.1 Necessary Cookies</h4>
                  <p>These cookies are essential for our website to function properly:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Authentication and security</li>
                    <li>Shopping cart functionality</li>
                    <li>Form submission and data validation</li>
                    <li>Load balancing and performance optimization</li>
                    <li>Fraud prevention and security measures</li>
                  </ul>

                  <h4 className="font-semibold">2.2 Functional Cookies</h4>
                  <p>These cookies enhance your experience by:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Remembering your login status</li>
                    <li>Storing your language and region preferences</li>
                    <li>Maintaining your shipping preferences</li>
                    <li>Customizing content based on your location</li>
                    <li>Providing personalized features and recommendations</li>
                  </ul>

                  <h4 className="font-semibold">2.3 Analytics Cookies</h4>
                  <p>We use analytics cookies to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Understand how visitors use our website</li>
                    <li>Measure website performance and loading times</li>
                    <li>Identify popular content and features</li>
                    <li>Track conversion rates and user journeys</li>
                    <li>Improve our website design and functionality</li>
                  </ul>

                  <h4 className="font-semibold">2.4 Marketing Cookies</h4>
                  <p>Marketing cookies help us:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Display relevant advertisements</li>
                    <li>Measure advertising campaign effectiveness</li>
                    <li>Prevent showing the same ad repeatedly</li>
                    <li>Provide personalized marketing content</li>
                    <li>Track social media interactions</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Section 3 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>3. Third-Party Cookies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Our website may contain cookies from third-party services that we use to enhance functionality and
                    analyze performance:
                  </p>

                  <h4 className="font-semibold">3.1 Analytics Services</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Google Analytics - Website traffic and user behavior analysis</li>
                    <li>Hotjar - User experience and heatmap analysis</li>
                    <li>Adobe Analytics - Advanced web analytics and reporting</li>
                  </ul>

                  <h4 className="font-semibold">3.2 Marketing and Advertising</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Google Ads - Advertising and remarketing campaigns</li>
                    <li>Facebook Pixel - Social media advertising and tracking</li>
                    <li>LinkedIn Insight Tag - Professional network advertising</li>
                  </ul>

                  <h4 className="font-semibold">3.3 Customer Support</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Zendesk - Customer support chat functionality</li>
                    <li>Intercom - Live chat and customer messaging</li>
                  </ul>

                  <p className="text-sm text-gray-600">
                    These third-party services have their own privacy policies and cookie practices. We recommend
                    reviewing their policies for more information.
                  </p>
                </CardContent>
              </Card>

              {/* Section 4 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>4. Managing Your Cookie Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h4 className="font-semibold">4.1 Cookie Preference Center</h4>
                  <p>
                    You can manage your cookie preferences using our Cookie Preference Center above. Your choices will
                    be saved and applied to your future visits to our website.
                  </p>

                  <h4 className="font-semibold">4.2 Browser Settings</h4>
                  <p>Most web browsers allow you to control cookies through their settings:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Block all cookies</li>
                    <li>Block third-party cookies only</li>
                    <li>Delete existing cookies</li>
                    <li>Receive notifications when cookies are set</li>
                  </ul>

                  <h4 className="font-semibold">4.3 Browser-Specific Instructions</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">Chrome:</p>
                      <p className="text-sm text-gray-600">Settings → Privacy and Security → Cookies</p>
                    </div>
                    <div>
                      <p className="font-medium">Firefox:</p>
                      <p className="text-sm text-gray-600">Options → Privacy & Security → Cookies</p>
                    </div>
                    <div>
                      <p className="font-medium">Safari:</p>
                      <p className="text-sm text-gray-600">Preferences → Privacy → Cookies</p>
                    </div>
                    <div>
                      <p className="font-medium">Edge:</p>
                      <p className="text-sm text-gray-600">Settings → Cookies and Site Permissions</p>
                    </div>
                  </div>

                  <h4 className="font-semibold">4.4 Mobile Devices</h4>
                  <p>
                    On mobile devices, you can manage cookies through your browser app settings or device privacy
                    settings. The exact steps vary by device and browser.
                  </p>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> Disabling certain cookies may affect website functionality and your user
                      experience. Some features may not work properly if necessary cookies are blocked.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Section 5 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>5. Cookie Retention and Expiration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Different types of cookies have different retention periods:</p>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 p-3 text-left">Cookie Type</th>
                          <th className="border border-gray-300 p-3 text-left">Retention Period</th>
                          <th className="border border-gray-300 p-3 text-left">Purpose</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3">Session Cookies</td>
                          <td className="border border-gray-300 p-3">Until browser closes</td>
                          <td className="border border-gray-300 p-3">Authentication, cart functionality</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Preference Cookies</td>
                          <td className="border border-gray-300 p-3">1 year</td>
                          <td className="border border-gray-300 p-3">Language, region settings</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Analytics Cookies</td>
                          <td className="border border-gray-300 p-3">2 years</td>
                          <td className="border border-gray-300 p-3">Usage statistics, performance</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">Marketing Cookies</td>
                          <td className="border border-gray-300 p-3">30-90 days</td>
                          <td className="border border-gray-300 p-3">Advertising, remarketing</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Section 6 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>6. Updates to This Cookie Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in our practices, technology,
                    or legal requirements. When we make changes, we will:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Update the "Last updated" date at the top of this policy</li>
                    <li>Notify you through our website or email if changes are significant</li>
                    <li>Request your consent again if required by law</li>
                    <li>Provide clear information about what has changed</li>
                  </ul>
                  <p>
                    We encourage you to review this Cookie Policy periodically to stay informed about how we use
                    cookies.
                  </p>
                </CardContent>
              </Card>

              {/* Section 7 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>7. Contact Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>If you have questions about our use of cookies or this Cookie Policy, please contact us:</p>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p>
                      <strong>Swift & On Time Courier Services</strong>
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
                    For technical issues with cookie settings, please contact our customer support team.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Footer Actions */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Need help with cookie settings or have privacy concerns? We're here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <a href="mailto:privacy@swiftandontime.com">Contact Privacy Team</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/terms">Terms & Conditions</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/privacy">Privacy Policy</Link>
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
