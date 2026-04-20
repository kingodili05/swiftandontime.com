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
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import {
  Clock,
  MapPin,
  Package,
  User,
  CalendarIcon,
  CheckCircle,
  Truck,
  Building,
  Home,
  AlertCircle,
  Phone,
  Mail,
} from "lucide-react"

interface PickupData {
  // Pickup Details
  pickupType: string
  serviceType: string
  packageCount: string
  totalWeight: string
  specialInstructions: string

  // Address Information
  addressType: string
  companyName: string
  contactName: string
  streetAddress: string
  city: string
  state: string
  zipCode: string
  country: string
  floor: string
  suite: string

  // Contact Information
  phone: string
  email: string
  alternatePhone: string

  // Schedule Information
  pickupDate: Date | undefined
  timeSlot: string
  isRecurring: boolean
  recurringFrequency: string
  recurringEndDate: Date | undefined

  // Special Requirements
  requiresSignature: boolean
  accessInstructions: string
  parkingInstructions: string
  securityRequirements: string
}

export default function PickupPage() {
  const [pickupData, setPickupData] = useState<PickupData>({
    pickupType: "",
    serviceType: "",
    packageCount: "",
    totalWeight: "",
    specialInstructions: "",
    addressType: "business",
    companyName: "",
    contactName: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "US",
    floor: "",
    suite: "",
    phone: "",
    email: "",
    alternatePhone: "",
    pickupDate: undefined,
    timeSlot: "",
    isRecurring: false,
    recurringFrequency: "",
    recurringEndDate: undefined,
    requiresSignature: false,
    accessInstructions: "",
    parkingInstructions: "",
    securityRequirements: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedAddress, setSelectedAddress] = useState<any>(null)

  // Sample saved addresses (in real app, this would come from user account)
  const savedAddresses = [
    {
      id: 1,
      name: "Main Office",
      type: "business",
      company: "TechStart Inc.",
      address: "123 Business Ave, New York, NY 10001",
      contact: "John Smith",
      phone: "+1 (555) 123-4567",
    },
    {
      id: 2,
      name: "Home Address",
      type: "residential",
      company: "",
      address: "456 Residential St, Brooklyn, NY 11201",
      contact: "Jane Doe",
      phone: "+1 (555) 987-6543",
    },
    {
      id: 3,
      name: "Warehouse",
      type: "business",
      company: "Storage Solutions LLC",
      address: "789 Industrial Blvd, Queens, NY 11101",
      contact: "Mike Johnson",
      phone: "+1 (555) 456-7890",
    },
  ]

  const pickupTypes = [
    {
      value: "one-time",
      label: "One-Time Pickup",
      description: "Single pickup for immediate shipping",
      icon: Package,
    },
    {
      value: "recurring",
      label: "Recurring Pickup",
      description: "Regular scheduled pickups",
      icon: Clock,
    },
    {
      value: "on-demand",
      label: "On-Demand Pickup",
      description: "Immediate pickup within 2 hours",
      icon: Truck,
    },
  ]

  const serviceTypes = [
    { value: "same-day", label: "Same-Day Delivery", price: "$25+" },
    { value: "next-day", label: "Next-Day Delivery", price: "$15+" },
    { value: "2-day", label: "2-Day Express", price: "$12+" },
    { value: "ground", label: "Ground Shipping", price: "$8+" },
    { value: "international", label: "International", price: "$25+" },
  ]

  const timeSlots = [
    { value: "8-10", label: "8:00 AM - 10:00 AM", available: true },
    { value: "10-12", label: "10:00 AM - 12:00 PM", available: true },
    { value: "12-14", label: "12:00 PM - 2:00 PM", available: false },
    { value: "14-16", label: "2:00 PM - 4:00 PM", available: true },
    { value: "16-18", label: "4:00 PM - 6:00 PM", available: true },
    { value: "18-20", label: "6:00 PM - 8:00 PM", available: true },
  ]

  const recurringOptions = [
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "bi-weekly", label: "Bi-weekly" },
    { value: "monthly", label: "Monthly" },
  ]

  const updatePickupData = (field: keyof PickupData, value: string | boolean | Date | undefined) => {
    setPickupData((prev) => ({ ...prev, [field]: value }))
  }

  const handleAddressSelect = (address: any) => {
    setSelectedAddress(address)
    updatePickupData("addressType", address.type)
    updatePickupData("companyName", address.company)
    updatePickupData("contactName", address.contact)
    updatePickupData("phone", address.phone)
    // Parse address string (simplified)
    const addressParts = address.address.split(", ")
    updatePickupData("streetAddress", addressParts[0] || "")
    updatePickupData("city", addressParts[1] || "")
    updatePickupData("state", addressParts[2]?.split(" ")[0] || "")
    updatePickupData("zipCode", addressParts[2]?.split(" ")[1] || "")
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  const canSubmit = () => {
    return (
      pickupData.pickupType &&
      pickupData.serviceType &&
      pickupData.contactName &&
      pickupData.streetAddress &&
      pickupData.city &&
      pickupData.zipCode &&
      pickupData.phone &&
      pickupData.email &&
      pickupData.pickupDate &&
      pickupData.timeSlot
    )
  }

  const getMinDate = () => {
    const today = new Date()
    if (pickupData.pickupType === "on-demand") {
      return today
    }
    // For regular pickups, allow scheduling from tomorrow
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-12">
                <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-6" />
                <h1 className="text-3xl font-bold text-green-800 mb-4">Pickup Scheduled Successfully!</h1>
                <p className="text-green-700 mb-6">
                  Your pickup has been scheduled for{" "}
                  {pickupData.pickupDate && format(pickupData.pickupDate, "MMMM d, yyyy")} between{" "}
                  {timeSlots.find((slot) => slot.value === pickupData.timeSlot)?.label}.
                </p>

                <div className="bg-white p-6 rounded-lg mb-6">
                  <h3 className="font-semibold mb-4">Pickup Details</h3>
                  <div className="text-left space-y-2 text-sm">
                    <div>
                      <strong>Confirmation #:</strong> SOT-PU-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                    </div>
                    <div>
                      <strong>Service:</strong> {serviceTypes.find((s) => s.value === pickupData.serviceType)?.label}
                    </div>
                    <div>
                      <strong>Address:</strong> {pickupData.streetAddress}, {pickupData.city}, {pickupData.state}{" "}
                      {pickupData.zipCode}
                    </div>
                    <div>
                      <strong>Contact:</strong> {pickupData.contactName} - {pickupData.phone}
                    </div>
                    {pickupData.isRecurring && (
                      <div>
                        <strong>Recurring:</strong> {pickupData.recurringFrequency} until{" "}
                        {pickupData.recurringEndDate && format(pickupData.recurringEndDate, "MMMM d, yyyy")}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-600">
                    You'll receive a confirmation email shortly with all the details. Our driver will arrive during your
                    selected time window.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={() => setIsSubmitted(false)}>Schedule Another Pickup</Button>
                    <Button variant="outline" className="bg-transparent">
                      View My Pickups
                    </Button>
                  </div>

                  <div className="text-sm text-gray-500">
                    Need to make changes? Call us at{" "}
                    <a href="tel:+15551234567" className="text-blue-600 hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-orange-500 text-white mb-4">Pickup Scheduling</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Schedule Your
              <span className="text-orange-400"> Pickup</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Book a convenient pickup time for your packages. Our drivers will collect your shipments right from your
              location.
            </p>
          </div>
        </div>
      </section>

      {/* Pickup Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2 space-y-8">
                {/* Pickup Type Selection */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Truck className="h-6 w-6 text-blue-600" />
                      Pickup Type
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={pickupData.pickupType}
                      onValueChange={(value) => updatePickupData("pickupType", value)}
                    >
                      <div className="space-y-3">
                        {pickupTypes.map((type) => {
                          const IconComponent = type.icon
                          return (
                            <div
                              key={type.value}
                              className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50"
                            >
                              <RadioGroupItem value={type.value} id={type.value} />
                              <div className="flex items-center gap-3 flex-1">
                                <div className="bg-blue-100 p-2 rounded-lg">
                                  <IconComponent className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                  <Label htmlFor={type.value} className="font-medium cursor-pointer">
                                    {type.label}
                                  </Label>
                                  <p className="text-sm text-gray-600">{type.description}</p>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Service Type */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-6 w-6 text-blue-600" />
                      Service Type
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {serviceTypes.map((service) => (
                        <div
                          key={service.value}
                          className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                            pickupData.serviceType === service.value
                              ? "border-blue-500 bg-blue-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          onClick={() => updatePickupData("serviceType", service.value)}
                        >
                          <div className="font-medium">{service.label}</div>
                          <div className="text-sm text-gray-600">{service.price}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Package Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Package Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="packageCount">Number of Packages</Label>
                        <Input
                          id="packageCount"
                          type="number"
                          placeholder="1"
                          value={pickupData.packageCount}
                          onChange={(e) => updatePickupData("packageCount", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="totalWeight">Total Weight (lbs)</Label>
                        <Input
                          id="totalWeight"
                          type="number"
                          placeholder="5.0"
                          value={pickupData.totalWeight}
                          onChange={(e) => updatePickupData("totalWeight", e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="specialInstructions">Special Instructions</Label>
                      <Textarea
                        id="specialInstructions"
                        placeholder="Any special handling requirements or package details..."
                        value={pickupData.specialInstructions}
                        onChange={(e) => updatePickupData("specialInstructions", e.target.value)}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Address Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-6 w-6 text-blue-600" />
                      Pickup Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Saved Addresses */}
                    {savedAddresses.length > 0 && (
                      <div>
                        <Label className="text-base font-medium mb-3 block">Use Saved Address</Label>
                        <div className="grid gap-3">
                          {savedAddresses.map((address) => (
                            <div
                              key={address.id}
                              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                                selectedAddress?.id === address.id
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-200 hover:border-gray-300"
                              }`}
                              onClick={() => handleAddressSelect(address)}
                            >
                              <div className="flex items-start gap-3">
                                <div className="bg-gray-100 p-2 rounded-lg">
                                  {address.type === "business" ? (
                                    <Building className="h-4 w-4 text-gray-600" />
                                  ) : (
                                    <Home className="h-4 w-4 text-gray-600" />
                                  )}
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium">{address.name}</div>
                                  {address.company && <div className="text-sm text-gray-600">{address.company}</div>}
                                  <div className="text-sm text-gray-600">{address.address}</div>
                                  <div className="text-sm text-gray-600">
                                    {address.contact} • {address.phone}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="text-center mt-4">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedAddress(null)}
                            className="bg-transparent"
                          >
                            Use New Address
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Manual Address Entry */}
                    {!selectedAddress && (
                      <div className="space-y-4">
                        <div>
                          <Label className="text-base font-medium mb-3 block">Address Type</Label>
                          <RadioGroup
                            value={pickupData.addressType}
                            onValueChange={(value) => updatePickupData("addressType", value)}
                          >
                            <div className="flex gap-6">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="business" id="business" />
                                <Label htmlFor="business" className="cursor-pointer">
                                  Business
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="residential" id="residential" />
                                <Label htmlFor="residential" className="cursor-pointer">
                                  Residential
                                </Label>
                              </div>
                            </div>
                          </RadioGroup>
                        </div>

                        {pickupData.addressType === "business" && (
                          <div>
                            <Label htmlFor="companyName">Company Name</Label>
                            <Input
                              id="companyName"
                              placeholder="Your Company Name"
                              value={pickupData.companyName}
                              onChange={(e) => updatePickupData("companyName", e.target.value)}
                            />
                          </div>
                        )}

                        <div>
                          <Label htmlFor="contactName">Contact Name *</Label>
                          <Input
                            id="contactName"
                            placeholder="Full Name"
                            value={pickupData.contactName}
                            onChange={(e) => updatePickupData("contactName", e.target.value)}
                          />
                        </div>

                        <div>
                          <Label htmlFor="streetAddress">Street Address *</Label>
                          <Input
                            id="streetAddress"
                            placeholder="123 Main Street"
                            value={pickupData.streetAddress}
                            onChange={(e) => updatePickupData("streetAddress", e.target.value)}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="floor">Floor/Level</Label>
                            <Input
                              id="floor"
                              placeholder="2nd Floor"
                              value={pickupData.floor}
                              onChange={(e) => updatePickupData("floor", e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="suite">Suite/Unit</Label>
                            <Input
                              id="suite"
                              placeholder="Suite 200"
                              value={pickupData.suite}
                              onChange={(e) => updatePickupData("suite", e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="city">City *</Label>
                            <Input
                              id="city"
                              placeholder="New York"
                              value={pickupData.city}
                              onChange={(e) => updatePickupData("city", e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="state">State</Label>
                            <Input
                              id="state"
                              placeholder="NY"
                              value={pickupData.state}
                              onChange={(e) => updatePickupData("state", e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="zipCode">ZIP Code *</Label>
                            <Input
                              id="zipCode"
                              placeholder="10001"
                              value={pickupData.zipCode}
                              onChange={(e) => updatePickupData("zipCode", e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-6 w-6 text-blue-600" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={pickupData.phone}
                          onChange={(e) => updatePickupData("phone", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="alternatePhone">Alternate Phone</Label>
                        <Input
                          id="alternatePhone"
                          type="tel"
                          placeholder="+1 (555) 987-6543"
                          value={pickupData.alternatePhone}
                          onChange={(e) => updatePickupData("alternatePhone", e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={pickupData.email}
                        onChange={(e) => updatePickupData("email", e.target.value)}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Schedule Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-6 w-6 text-blue-600" />
                      Schedule Pickup
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label>Pickup Date *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal bg-transparent"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {pickupData.pickupDate ? format(pickupData.pickupDate, "PPP") : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={pickupData.pickupDate}
                              onSelect={(date) => updatePickupData("pickupDate", date)}
                              disabled={(date) => date < getMinDate()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div>
                        <Label htmlFor="timeSlot">Time Slot *</Label>
                        <Select
                          value={pickupData.timeSlot}
                          onValueChange={(value) => updatePickupData("timeSlot", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot.value} value={slot.value} disabled={!slot.available}>
                                <div className="flex items-center justify-between w-full">
                                  <span>{slot.label}</span>
                                  {!slot.available && (
                                    <Badge variant="outline" className="ml-2 text-xs">
                                      Full
                                    </Badge>
                                  )}
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Recurring Pickup */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="recurring"
                          checked={pickupData.isRecurring}
                          onCheckedChange={(checked) => updatePickupData("isRecurring", checked as boolean)}
                        />
                        <Label htmlFor="recurring" className="cursor-pointer">
                          Make this a recurring pickup
                        </Label>
                      </div>

                      {pickupData.isRecurring && (
                        <div className="grid md:grid-cols-2 gap-4 pl-6">
                          <div>
                            <Label htmlFor="recurringFrequency">Frequency</Label>
                            <Select
                              value={pickupData.recurringFrequency}
                              onValueChange={(value) => updatePickupData("recurringFrequency", value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select frequency" />
                              </SelectTrigger>
                              <SelectContent>
                                {recurringOptions.map((option) => (
                                  <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label>End Date</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className="w-full justify-start text-left font-normal bg-transparent"
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {pickupData.recurringEndDate ? (
                                    format(pickupData.recurringEndDate, "PPP")
                                  ) : (
                                    <span>Select end date</span>
                                  )}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <Calendar
                                  mode="single"
                                  selected={pickupData.recurringEndDate}
                                  onSelect={(date) => updatePickupData("recurringEndDate", date)}
                                  disabled={(date) => date < new Date()}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Special Requirements */}
                <Card>
                  <CardHeader>
                    <CardTitle>Special Requirements</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="signature"
                        checked={pickupData.requiresSignature}
                        onCheckedChange={(checked) => updatePickupData("requiresSignature", checked as boolean)}
                      />
                      <Label htmlFor="signature" className="cursor-pointer">
                        Signature required for pickup
                      </Label>
                    </div>

                    <div>
                      <Label htmlFor="accessInstructions">Access Instructions</Label>
                      <Textarea
                        id="accessInstructions"
                        placeholder="Building entry instructions, security codes, etc."
                        value={pickupData.accessInstructions}
                        onChange={(e) => updatePickupData("accessInstructions", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="parkingInstructions">Parking Instructions</Label>
                      <Textarea
                        id="parkingInstructions"
                        placeholder="Where can our driver park? Any restrictions?"
                        value={pickupData.parkingInstructions}
                        onChange={(e) => updatePickupData("parkingInstructions", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="securityRequirements">Security Requirements</Label>
                      <Textarea
                        id="securityRequirements"
                        placeholder="ID requirements, visitor registration, etc."
                        value={pickupData.securityRequirements}
                        onChange={(e) => updatePickupData("securityRequirements", e.target.value)}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Submit Button */}
                <Card>
                  <CardContent className="p-6">
                    <Button
                      onClick={handleSubmit}
                      disabled={!canSubmit() || isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Scheduling Pickup...
                        </div>
                      ) : (
                        <>
                          <CheckCircle className="h-5 w-5 mr-2" />
                          Schedule Pickup
                        </>
                      )}
                    </Button>
                    {!canSubmit() && (
                      <p className="text-sm text-gray-500 mt-2 text-center">
                        Please fill in all required fields to schedule your pickup
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Pickup Summary */}
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle className="text-lg">Pickup Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {pickupData.pickupType && (
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Type:</span>
                        <span className="text-sm font-medium">
                          {pickupTypes.find((t) => t.value === pickupData.pickupType)?.label}
                        </span>
                      </div>
                    )}

                    {pickupData.serviceType && (
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Service:</span>
                        <span className="text-sm font-medium">
                          {serviceTypes.find((s) => s.value === pickupData.serviceType)?.label}
                        </span>
                      </div>
                    )}

                    {pickupData.pickupDate && (
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Date:</span>
                        <span className="text-sm font-medium">{format(pickupData.pickupDate, "MMM d, yyyy")}</span>
                      </div>
                    )}

                    {pickupData.timeSlot && (
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Time:</span>
                        <span className="text-sm font-medium">
                          {timeSlots.find((t) => t.value === pickupData.timeSlot)?.label}
                        </span>
                      </div>
                    )}

                    {pickupData.packageCount && (
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Packages:</span>
                        <span className="text-sm font-medium">{pickupData.packageCount}</span>
                      </div>
                    )}

                    {pickupData.isRecurring && pickupData.recurringFrequency && (
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Recurring:</span>
                        <span className="text-sm font-medium">
                          {recurringOptions.find((r) => r.value === pickupData.recurringFrequency)?.label}
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Help & Support */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-sm text-gray-600">
                      Our customer support team is available 24/7 to assist with your pickup scheduling.
                    </div>

                    <div className="space-y-3">
                      <Button variant="outline" size="sm" className="w-full justify-start bg-transparent" asChild>
                        <a href="tel:+15551234567">
                          <Phone className="h-4 w-4 mr-2" />
                          Call Support
                        </a>
                      </Button>

                      <Button variant="outline" size="sm" className="w-full justify-start bg-transparent" asChild>
                        <a href="mailto:pickup@swiftandontime.com">
                          <Mail className="h-4 w-4 mr-2" />
                          Email Us
                        </a>
                      </Button>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                        <div className="text-xs text-blue-800">
                          <strong>Tip:</strong> For same-day pickups, please schedule at least 2 hours in advance.
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
