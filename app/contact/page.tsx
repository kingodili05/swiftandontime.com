"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
          inquiryType: "",
        })
      }, 3000)
    }, 1500)
  }

  const handleLiveChat = () => {
    // Simulate opening live chat
    alert("Live chat would open here. Our support team is available 24/7!")
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-orange-500 text-white mb-4">Contact Us</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Get in
              <span className="text-orange-400"> Touch</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Have questions about our services? Need a custom quote? Our expert team is here to help you find the
              perfect logistics solution for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                <p className="text-gray-600 mb-3">Speak directly with our team</p>
                <a href="tel:+15551234567" className="text-blue-600 hover:underline font-medium">
                  +1 (540) 594-6863
                </a>
                <p className="text-sm text-gray-500 mt-1">24/7 Support Available</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                <p className="text-gray-600 mb-3">Send us your questions</p>
                <a href="mailto:support@swiftandontime.com" className="text-blue-600 hover:underline font-medium">
                  support@swiftandontime.com
                </a>
                <p className="text-sm text-gray-500 mt-1">Response within 2 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-3">Instant support online</p>
                <Button
                  onClick={handleLiveChat}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm"
                >
                  Start Chat
                </Button>
                <p className="text-sm text-gray-500 mt-1">Available 24/7</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-3">Come to our office</p>
                <p className="text-sm text-gray-700 font-medium">123 Logistics Ave</p>
                <p className="text-sm text-gray-700">New York, NY 10001</p>
                <p className="text-sm text-gray-500 mt-1">Mon-Fri: 8AM-6PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. For urgent matters, please call
                us directly.
              </p>

              {isSubmitted ? (
                <Card className="border-green-500 bg-green-50">
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                    <p className="text-green-700">
                      Thank you for contacting us. We'll respond to your inquiry within 2 hours during business hours.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+1 (540) 594-6863"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type *
                    </label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) => handleInputChange("inquiryType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Information</SelectItem>
                        <SelectItem value="quote">Request Quote</SelectItem>
                        <SelectItem value="business">Business Solutions</SelectItem>
                        <SelectItem value="tracking">Package Tracking</SelectItem>
                        <SelectItem value="complaint">Complaint/Issue</SelectItem>
                        <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                        <SelectItem value="careers">Career Opportunities</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Brief description of your inquiry"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Office Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Office</h2>

              {/* Office Details */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Headquarters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-gray-600">
                        Swift & On Time Courier Services
                        <br />
                        1424 Claxton Avenue
                        <br />
                        Business District
                        <br />
                        New York, NY 10001
                        <br />
                        United States
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-1 flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Business Hours
                      </h4>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                        <p className="text-sm text-blue-600 font-medium">Customer Support: 24/7</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Department Contacts */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Department Contacts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <div>
                        <p className="font-medium">Customer Service</p>
                        <p className="text-sm text-gray-600">General inquiries & support</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">+1 (540) 594-6863</p>
                        <p className="text-sm text-gray-600">support@swiftandontime.com</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <div>
                        <p className="font-medium">Sales Department</p>
                        <p className="text-sm text-gray-600">New accounts & quotes</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">+1 (555) 123-4568</p>
                        <p className="text-sm text-gray-600">sales@swiftandontime.com</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <div>
                        <p className="font-medium">Business Solutions</p>
                        <p className="text-sm text-gray-600">Corporate accounts</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">+1 (555) 123-4569</p>
                        <p className="text-sm text-gray-600">business@swiftandontime.com</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center py-2">
                      <div>
                        <p className="font-medium">Claims & Issues</p>
                        <p className="text-sm text-gray-600">Package problems</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">+1 (555) 123-4570</p>
                        <p className="text-sm text-gray-600">claims@swiftandontime.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card>
                <CardHeader>
                  <CardTitle>Find Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p className="font-medium">Interactive Map</p>
                      <p className="text-sm">1424 Claxton Avenue, New York, NY</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-3 bg-transparent"
                        onClick={() =>
                          window.open("https://maps.google.com/?q=123+Logistics+Avenue,+New+York,+NY+10001", "_blank")
                        }
                      >
                        Open in Google Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Support Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Immediate Help?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              For urgent matters or immediate assistance, use one of these quick contact options
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">Emergency Support</h3>
                <p className="text-sm text-gray-600 mb-4">For urgent delivery issues or emergencies</p>
                <Button className="bg-red-600 hover:bg-red-700" asChild>
                  <a href="tel:+15551234567">Call Now</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">WhatsApp Support</h3>
                <p className="text-sm text-gray-600 mb-4">Quick messaging support via WhatsApp</p>
                <Button className="bg-green-600 hover:bg-green-700" asChild>
                  <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
                    Message Us
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Priority Email</h3>
                <p className="text-sm text-gray-600 mb-4">Fast response for business customers</p>
                <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                  <a href="mailto:priority@swiftandontime.com">Send Email</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What are your response times?</h3>
                <p className="text-gray-600 text-sm">
                  We respond to emails within 2 hours during business hours and within 24 hours on weekends. Phone
                  support is available 24/7.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Do you offer same-day quotes?</h3>
                <p className="text-gray-600 text-sm">
                  Yes! Most quotes are provided within 30 minutes during business hours. Complex international shipments
                  may take up to 2 hours.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Can I visit your facility?</h3>
                <p className="text-gray-600 text-sm">
                  Our office is open Monday-Friday 8AM-6PM and Saturday 9AM-4PM. We recommend calling ahead for facility
                  tours.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How do I file a complaint?</h3>
                <p className="text-gray-600 text-sm">
                  Contact our claims department at +1 (555) 123-4570 or email claims@swiftandontime.com. We investigate
                  all issues within 24 hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
