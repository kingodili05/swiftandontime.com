"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import {
  Calculator,
  Package,
  MapPin,
  Clock,
  Shield,
  Truck,
  Plane,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Info,
  Star,
} from "lucide-react"

interface QuoteData {
  // Step 1: Package Details
  packageType: string
  weight: string
  length: string
  width: string
  height: string
  value: string
  description: string

  // Step 2: Addresses
  fromAddress: string
  fromCity: string
  fromState: string
  fromZip: string
  fromCountry: string
  toAddress: string
  toCity: string
  toState: string
  toZip: string
  toCountry: string

  // Step 3: Service Options
  serviceType: string
  deliverySpeed: string
  insurance: boolean
  signatureRequired: boolean
  saturdayDelivery: boolean

  // Step 4: Contact Info
  senderName: string
  senderEmail: string
  senderPhone: string
  recipientName: string
  recipientEmail: string
  recipientPhone: string
}

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [quoteData, setQuoteData] = useState<QuoteData>({
    packageType: "",
    weight: "",
    length: "",
    width: "",
    height: "",
    value: "",
    description: "",
    fromAddress: "",
    fromCity: "",
    fromState: "",
    fromZip: "",
    fromCountry: "US",
    toAddress: "",
    toCity: "",
    toState: "",
    toZip: "",
    toCountry: "US",
    serviceType: "",
    deliverySpeed: "",
    insurance: false,
    signatureRequired: false,
    saturdayDelivery: false,
    senderName: "",
    senderEmail: "",
    senderPhone: "",
    recipientName: "",
    recipientEmail: "",
    recipientPhone: "",
  })

  const [quote, setQuote] = useState<any>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const packageTypes = [
    { value: "envelope", label: "Envelope/Document", icon: "📄" },
    { value: "small-box", label: "Small Box", icon: "📦" },
    { value: "medium-box", label: "Medium Box", icon: "📦" },
    { value: "large-box", label: "Large Box", icon: "📦" },
    { value: "tube", label: "Tube/Roll", icon: "🗞️" },
    { value: "irregular", label: "Irregular Shape", icon: "📐" },
  ]

  const serviceTypes = [
    {
      value: "same-day",
      label: "Same-Day Delivery",
      description: "Delivered within 4-6 hours",
      icon: Clock,
      basePrice: 25,
      popular: false,
    },
    {
      value: "next-day",
      label: "Next-Day Delivery",
      description: "Delivered by 10:30 AM next business day",
      icon: Truck,
      basePrice: 15,
      popular: true,
    },
    {
      value: "2-day",
      label: "2-Day Express",
      description: "Delivered within 2 business days",
      icon: Package,
      basePrice: 12,
      popular: false,
    },
    {
      value: "ground",
      label: "Ground Shipping",
      description: "Delivered within 3-5 business days",
      icon: Truck,
      basePrice: 8,
      popular: false,
    },
    {
      value: "international-express",
      label: "International Express",
      description: "Delivered within 1-3 business days",
      icon: Plane,
      basePrice: 45,
      popular: false,
    },
    {
      value: "international-standard",
      label: "International Standard",
      description: "Delivered within 5-10 business days",
      icon: Plane,
      basePrice: 25,
      popular: false,
    },
  ]

  const countries = [
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
    { value: "MX", label: "Mexico" },
    { value: "GB", label: "United Kingdom" },
    { value: "DE", label: "Germany" },
    { value: "FR", label: "France" },
    { value: "AU", label: "Australia" },
    { value: "JP", label: "Japan" },
    { value: "CN", label: "China" },
    { value: "OTHER", label: "Other Country" },
  ]

  const updateQuoteData = (field: keyof QuoteData, value: string | boolean) => {
    setQuoteData((prev) => ({ ...prev, [field]: value }))
  }

  const calculateQuote = () => {
    setIsCalculating(true)

    // Simulate API call
    setTimeout(() => {
      const selectedService = serviceTypes.find((s) => s.value === quoteData.serviceType)
      const basePrice = selectedService?.basePrice || 10

      // Calculate dimensional weight
      const dimWeight =
        quoteData.length && quoteData.width && quoteData.height
          ? (Number.parseFloat(quoteData.length) *
              Number.parseFloat(quoteData.width) *
              Number.parseFloat(quoteData.height)) /
            166
          : 0

      const actualWeight = Number.parseFloat(quoteData.weight) || 1
      const billableWeight = Math.max(actualWeight, dimWeight)

      // Base calculation
      let totalPrice = basePrice + billableWeight * 2

      // Distance multiplier (simplified)
      const isInternational = quoteData.fromCountry !== quoteData.toCountry
      if (isInternational) {
        totalPrice *= 2.5
      }

      // Add-ons
      const addOns = []
      if (quoteData.insurance) {
        const insuranceValue = Number.parseFloat(quoteData.value) || 100
        const insuranceCost = Math.max(5, insuranceValue * 0.01)
        totalPrice += insuranceCost
        addOns.push({ name: "Insurance", cost: insuranceCost })
      }

      if (quoteData.signatureRequired) {
        totalPrice += 3
        addOns.push({ name: "Signature Required", cost: 3 })
      }

      if (quoteData.saturdayDelivery) {
        totalPrice += 15
        addOns.push({ name: "Saturday Delivery", cost: 15 })
      }

      // Fuel surcharge
      const fuelSurcharge = totalPrice * 0.08
      totalPrice += fuelSurcharge

      setQuote({
        service: selectedService,
        basePrice,
        weight: billableWeight,
        addOns,
        fuelSurcharge,
        subtotal: totalPrice - fuelSurcharge,
        total: totalPrice,
        estimatedDelivery: getEstimatedDelivery(quoteData.serviceType),
        transitTime: getTransitTime(quoteData.serviceType),
      })

      setIsCalculating(false)
    }, 2000)
  }

  const getEstimatedDelivery = (serviceType: string) => {
    const today = new Date()
    const deliveryDate = new Date(today)

    switch (serviceType) {
      case "same-day":
        deliveryDate.setHours(deliveryDate.getHours() + 6)
        return (
          deliveryDate.toLocaleDateString() +
          " by " +
          deliveryDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        )
      case "next-day":
        deliveryDate.setDate(deliveryDate.getDate() + 1)
        return deliveryDate.toLocaleDateString() + " by 10:30 AM"
      case "2-day":
        deliveryDate.setDate(deliveryDate.getDate() + 2)
        return deliveryDate.toLocaleDateString()
      case "ground":
        deliveryDate.setDate(deliveryDate.getDate() + 4)
        return deliveryDate.toLocaleDateString()
      case "international-express":
        deliveryDate.setDate(deliveryDate.getDate() + 3)
        return deliveryDate.toLocaleDateString()
      case "international-standard":
        deliveryDate.setDate(deliveryDate.getDate() + 7)
        return deliveryDate.toLocaleDateString()
      default:
        return "TBD"
    }
  }

  const getTransitTime = (serviceType: string) => {
    switch (serviceType) {
      case "same-day":
        return "4-6 hours"
      case "next-day":
        return "1 business day"
      case "2-day":
        return "2 business days"
      case "ground":
        return "3-5 business days"
      case "international-express":
        return "1-3 business days"
      case "international-standard":
        return "5-10 business days"
      default:
        return "TBD"
    }
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      calculateQuote()
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return quoteData.packageType && quoteData.weight
      case 2:
        return quoteData.fromCity && quoteData.fromZip && quoteData.toCity && quoteData.toZip
      case 3:
        return quoteData.serviceType
      case 4:
        return quoteData.senderName && quoteData.senderEmail && quoteData.recipientName
      default:
        return false
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-orange-500 text-white mb-4">Quote Calculator</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Get Your
              <span className="text-orange-400"> Instant Quote</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Calculate shipping costs instantly with our easy-to-use quote calculator. Get accurate pricing for all
              your delivery needs.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Calculator */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {!quote ? (
              <>
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Step {currentStep} of {totalSteps}
                    </span>
                    <span className="text-sm font-medium text-gray-700">{Math.round(progress)}% Complete</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="h-6 w-6 text-blue-600" />
                      {currentStep === 1 && "Package Details"}
                      {currentStep === 2 && "Shipping Addresses"}
                      {currentStep === 3 && "Service Options"}
                      {currentStep === 4 && "Contact Information"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Step 1: Package Details */}
                    {currentStep === 1 && (
                      <div className="space-y-6">
                        <div>
                          <Label className="text-base font-medium mb-3 block">Package Type</Label>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {packageTypes.map((type) => (
                              <div
                                key={type.value}
                                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                                  quoteData.packageType === type.value
                                    ? "border-blue-500 bg-blue-50"
                                    : "border-gray-200 hover:border-gray-300"
                                }`}
                                onClick={() => updateQuoteData("packageType", type.value)}
                              >
                                <div className="text-2xl mb-2">{type.icon}</div>
                                <div className="font-medium text-sm">{type.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="weight">Weight (lbs) *</Label>
                            <Input
                              id="weight"
                              type="number"
                              placeholder="Enter weight"
                              value={quoteData.weight}
                              onChange={(e) => updateQuoteData("weight", e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="value">Declared Value ($)</Label>
                            <Input
                              id="value"
                              type="number"
                              placeholder="Package value"
                              value={quoteData.value}
                              onChange={(e) => updateQuoteData("value", e.target.value)}
                            />
                          </div>
                        </div>

                        <div>
                          <Label className="text-base font-medium mb-3 block">Dimensions (inches)</Label>
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <Label htmlFor="length">Length</Label>
                              <Input
                                id="length"
                                type="number"
                                placeholder="L"
                                value={quoteData.length}
                                onChange={(e) => updateQuoteData("length", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="width">Width</Label>
                              <Input
                                id="width"
                                type="number"
                                placeholder="W"
                                value={quoteData.width}
                                onChange={(e) => updateQuoteData("width", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="height">Height</Label>
                              <Input
                                id="height"
                                type="number"
                                placeholder="H"
                                value={quoteData.height}
                                onChange={(e) => updateQuoteData("height", e.target.value)}
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="description">Package Description</Label>
                          <Textarea
                            id="description"
                            placeholder="Brief description of contents"
                            value={quoteData.description}
                            onChange={(e) => updateQuoteData("description", e.target.value)}
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 2: Addresses */}
                    {currentStep === 2 && (
                      <div className="space-y-8">
                        {/* From Address */}
                        <div>
                          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-blue-600" />
                            Ship From
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="md:col-span-2">
                              <Label htmlFor="fromAddress">Street Address</Label>
                              <Input
                                id="fromAddress"
                                placeholder="123 Main Street"
                                value={quoteData.fromAddress}
                                onChange={(e) => updateQuoteData("fromAddress", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="fromCity">City *</Label>
                              <Input
                                id="fromCity"
                                placeholder="City"
                                value={quoteData.fromCity}
                                onChange={(e) => updateQuoteData("fromCity", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="fromState">State/Province</Label>
                              <Input
                                id="fromState"
                                placeholder="State"
                                value={quoteData.fromState}
                                onChange={(e) => updateQuoteData("fromState", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="fromZip">ZIP/Postal Code *</Label>
                              <Input
                                id="fromZip"
                                placeholder="12345"
                                value={quoteData.fromZip}
                                onChange={(e) => updateQuoteData("fromZip", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="fromCountry">Country</Label>
                              <Select
                                value={quoteData.fromCountry}
                                onValueChange={(value) => updateQuoteData("fromCountry", value)}
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {countries.map((country) => (
                                    <SelectItem key={country.value} value={country.value}>
                                      {country.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        {/* To Address */}
                        <div>
                          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-orange-600" />
                            Ship To
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="md:col-span-2">
                              <Label htmlFor="toAddress">Street Address</Label>
                              <Input
                                id="toAddress"
                                placeholder="456 Oak Avenue"
                                value={quoteData.toAddress}
                                onChange={(e) => updateQuoteData("toAddress", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="toCity">City *</Label>
                              <Input
                                id="toCity"
                                placeholder="City"
                                value={quoteData.toCity}
                                onChange={(e) => updateQuoteData("toCity", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="toState">State/Province</Label>
                              <Input
                                id="toState"
                                placeholder="State"
                                value={quoteData.toState}
                                onChange={(e) => updateQuoteData("toState", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="toZip">ZIP/Postal Code *</Label>
                              <Input
                                id="toZip"
                                placeholder="67890"
                                value={quoteData.toZip}
                                onChange={(e) => updateQuoteData("toZip", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="toCountry">Country</Label>
                              <Select
                                value={quoteData.toCountry}
                                onValueChange={(value) => updateQuoteData("toCountry", value)}
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {countries.map((country) => (
                                    <SelectItem key={country.value} value={country.value}>
                                      {country.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Service Options */}
                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <div>
                          <Label className="text-base font-medium mb-4 block">Select Service Type</Label>
                          <RadioGroup
                            value={quoteData.serviceType}
                            onValueChange={(value) => updateQuoteData("serviceType", value)}
                          >
                            <div className="space-y-3">
                              {serviceTypes
                                .filter((service) => {
                                  const isInternational = quoteData.fromCountry !== quoteData.toCountry
                                  if (isInternational) {
                                    return service.value.includes("international")
                                  } else {
                                    return !service.value.includes("international")
                                  }
                                })
                                .map((service) => {
                                  const IconComponent = service.icon
                                  return (
                                    <div
                                      key={service.value}
                                      className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50"
                                    >
                                      <RadioGroupItem value={service.value} id={service.value} />
                                      <div className="flex items-center gap-3 flex-1">
                                        <div className="bg-blue-100 p-2 rounded-lg">
                                          <IconComponent className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div className="flex-1">
                                          <div className="flex items-center gap-2">
                                            <Label htmlFor={service.value} className="font-medium cursor-pointer">
                                              {service.label}
                                            </Label>
                                            {service.popular && (
                                              <Badge className="bg-orange-500 text-white text-xs">
                                                <Star className="h-3 w-3 mr-1" />
                                                Popular
                                              </Badge>
                                            )}
                                          </div>
                                          <p className="text-sm text-gray-600">{service.description}</p>
                                        </div>
                                        <div className="text-right">
                                          <div className="font-semibold">From ${service.basePrice}</div>
                                          <div className="text-xs text-gray-500">Base rate</div>
                                        </div>
                                      </div>
                                    </div>
                                  )
                                })}
                            </div>
                          </RadioGroup>
                        </div>

                        <Separator />

                        <div>
                          <Label className="text-base font-medium mb-4 block">Additional Services</Label>
                          <div className="space-y-4">
                            <div className="flex items-center space-x-3 p-3 border rounded-lg">
                              <Checkbox
                                id="insurance"
                                checked={quoteData.insurance}
                                onCheckedChange={(checked) => updateQuoteData("insurance", checked as boolean)}
                              />
                              <div className="flex-1">
                                <Label htmlFor="insurance" className="font-medium cursor-pointer">
                                  Additional Insurance
                                </Label>
                                <p className="text-sm text-gray-600">Protect your package with extra coverage</p>
                              </div>
                              <div className="text-sm text-gray-500">+$5.00</div>
                            </div>

                            <div className="flex items-center space-x-3 p-3 border rounded-lg">
                              <Checkbox
                                id="signature"
                                checked={quoteData.signatureRequired}
                                onCheckedChange={(checked) => updateQuoteData("signatureRequired", checked as boolean)}
                              />
                              <div className="flex-1">
                                <Label htmlFor="signature" className="font-medium cursor-pointer">
                                  Signature Required
                                </Label>
                                <p className="text-sm text-gray-600">Require signature upon delivery</p>
                              </div>
                              <div className="text-sm text-gray-500">+$3.00</div>
                            </div>

                            <div className="flex items-center space-x-3 p-3 border rounded-lg">
                              <Checkbox
                                id="saturday"
                                checked={quoteData.saturdayDelivery}
                                onCheckedChange={(checked) => updateQuoteData("saturdayDelivery", checked as boolean)}
                              />
                              <div className="flex-1">
                                <Label htmlFor="saturday" className="font-medium cursor-pointer">
                                  Saturday Delivery
                                </Label>
                                <p className="text-sm text-gray-600">Deliver on Saturday</p>
                              </div>
                              <div className="text-sm text-gray-500">+$15.00</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Contact Information */}
                    {currentStep === 4 && (
                      <div className="space-y-8">
                        {/* Sender Information */}
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Sender Information</h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="senderName">Full Name *</Label>
                              <Input
                                id="senderName"
                                placeholder="John Doe"
                                value={quoteData.senderName}
                                onChange={(e) => updateQuoteData("senderName", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="senderEmail">Email Address *</Label>
                              <Input
                                id="senderEmail"
                                type="email"
                                placeholder="john@example.com"
                                value={quoteData.senderEmail}
                                onChange={(e) => updateQuoteData("senderEmail", e.target.value)}
                              />
                            </div>
                            <div className="md:col-span-2">
                              <Label htmlFor="senderPhone">Phone Number</Label>
                              <Input
                                id="senderPhone"
                                type="tel"
                                placeholder="+1 (555) 123-4567"
                                value={quoteData.senderPhone}
                                onChange={(e) => updateQuoteData("senderPhone", e.target.value)}
                              />
                            </div>
                          </div>
                        </div>

                        <Separator />

                        {/* Recipient Information */}
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Recipient Information</h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="recipientName">Full Name *</Label>
                              <Input
                                id="recipientName"
                                placeholder="Jane Smith"
                                value={quoteData.recipientName}
                                onChange={(e) => updateQuoteData("recipientName", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="recipientEmail">Email Address</Label>
                              <Input
                                id="recipientEmail"
                                type="email"
                                placeholder="jane@example.com"
                                value={quoteData.recipientEmail}
                                onChange={(e) => updateQuoteData("recipientEmail", e.target.value)}
                              />
                            </div>
                            <div className="md:col-span-2">
                              <Label htmlFor="recipientPhone">Phone Number</Label>
                              <Input
                                id="recipientPhone"
                                type="tel"
                                placeholder="+1 (555) 987-6543"
                                value={quoteData.recipientPhone}
                                onChange={(e) => updateQuoteData("recipientPhone", e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-6">
                      <Button
                        variant="outline"
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        className="bg-transparent"
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>

                      <Button
                        onClick={nextStep}
                        disabled={!canProceed() || isCalculating}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        {isCalculating ? (
                          <div className="flex items-center gap-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            Calculating...
                          </div>
                        ) : currentStep === totalSteps ? (
                          "Calculate Quote"
                        ) : (
                          <>
                            Next
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              /* Quote Results */
              <div className="space-y-6">
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                      <div>
                        <h2 className="text-2xl font-bold text-green-800">Quote Generated Successfully!</h2>
                        <p className="text-green-700">Here's your shipping estimate</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Quote Details */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Package className="h-6 w-6 text-blue-600" />
                        Shipping Quote
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <div>
                          <div className="font-semibold">{quote.service?.label}</div>
                          <div className="text-sm text-gray-600">{quote.service?.description}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">${quote.total.toFixed(2)}</div>
                          <div className="text-sm text-gray-500">Total Cost</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Base Rate</span>
                          <span>${quote.basePrice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Weight ({quote.weight.toFixed(1)} lbs)</span>
                          <span>${(quote.weight * 2).toFixed(2)}</span>
                        </div>
                        {quote.addOns.map((addon: any, index: number) => (
                          <div key={index} className="flex justify-between">
                            <span>{addon.name}</span>
                            <span>${addon.cost.toFixed(2)}</span>
                          </div>
                        ))}
                        <div className="flex justify-between">
                          <span>Fuel Surcharge (8%)</span>
                          <span>${quote.fuelSurcharge.toFixed(2)}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total</span>
                          <span>${quote.total.toFixed(2)}</span>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-gray-600" />
                          <span className="font-medium">Estimated Delivery</span>
                        </div>
                        <div className="text-lg font-semibold">{quote.estimatedDelivery}</div>
                        <div className="text-sm text-gray-600">Transit Time: {quote.transitTime}</div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Shipment Summary */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Info className="h-6 w-6 text-orange-600" />
                        Shipment Summary
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Package Details</h4>
                        <div className="text-sm space-y-1">
                          <div>Type: {packageTypes.find((p) => p.value === quoteData.packageType)?.label}</div>
                          <div>Weight: {quoteData.weight} lbs</div>
                          {quoteData.length && (
                            <div>
                              Dimensions: {quoteData.length}" × {quoteData.width}" × {quoteData.height}"
                            </div>
                          )}
                          {quoteData.value && <div>Declared Value: ${quoteData.value}</div>}
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h4 className="font-semibold mb-2">Shipping Route</h4>
                        <div className="text-sm space-y-1">
                          <div>
                            <strong>From:</strong> {quoteData.fromCity}, {quoteData.fromState} {quoteData.fromZip}
                          </div>
                          <div>
                            <strong>To:</strong> {quoteData.toCity}, {quoteData.toState} {quoteData.toZip}
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h4 className="font-semibold mb-2">Contact Information</h4>
                        <div className="text-sm space-y-1">
                          <div>
                            <strong>Sender:</strong> {quoteData.senderName}
                          </div>
                          <div>
                            <strong>Recipient:</strong> {quoteData.recipientName}
                          </div>
                        </div>
                      </div>

                      <div className="pt-4">
                        <div className="flex gap-2">
                          <Button className="flex-1">Book This Shipment</Button>
                          <Button
                            variant="outline"
                            className="bg-transparent"
                            onClick={() => {
                              setQuote(null)
                              setCurrentStep(1)
                            }}
                          >
                            New Quote
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Quote Calculator?</h2>
              <p className="text-gray-600">Get accurate, transparent pricing with no hidden fees</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Instant Calculations</h3>
                <p className="text-gray-600">Get accurate quotes in seconds with our advanced pricing engine</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">No hidden fees - see exactly what you're paying for</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
                <p className="text-gray-600">Book your shipment directly from the quote results</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
