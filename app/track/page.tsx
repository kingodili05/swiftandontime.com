"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, MapPin, Clock, CheckCircle, Truck, Search, AlertCircle } from "lucide-react"

export default function TrackPage() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [trackingResult, setTrackingResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleTrack = async () => {
    if (!trackingNumber.trim()) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      // Mock tracking data based on tracking number
      const mockData = {
        SOT123456789: {
          status: "delivered",
          packageInfo: {
            trackingNumber: "SOT123456789",
            service: "Same-Day Delivery",
            weight: "2.5 kg",
            dimensions: "30x20x15 cm",
          },
          sender: {
            name: "TechStart Inc.",
            address: "123 Business Ave, New York, NY",
          },
          recipient: {
            name: "John Smith",
            address: "456 Residential St, Brooklyn, NY",
          },
          timeline: [
            {
              status: "Package picked up",
              location: "New York, NY",
              time: "2024-01-15 09:30 AM",
              completed: true,
            },
            {
              status: "In transit to sorting facility",
              location: "New York Distribution Center",
              time: "2024-01-15 10:15 AM",
              completed: true,
            },
            {
              status: "Out for delivery",
              location: "Brooklyn, NY",
              time: "2024-01-15 02:30 PM",
              completed: true,
            },
            {
              status: "Delivered",
              location: "456 Residential St, Brooklyn, NY",
              time: "2024-01-15 04:45 PM",
              completed: true,
              note: "Delivered to recipient - Signature obtained",
            },
          ],
        },
        SOT987654321: {
          status: "in-transit",
          packageInfo: {
            trackingNumber: "SOT987654321",
            service: "International Express",
            weight: "1.2 kg",
            dimensions: "25x15x10 cm",
          },
          sender: {
            name: "Global Exports Ltd.",
            address: "London, UK",
          },
          recipient: {
            name: "Maria Garcia",
            address: "789 Main St, Los Angeles, CA",
          },
          timeline: [
            {
              status: "Package picked up",
              location: "London, UK",
              time: "2024-01-14 11:00 AM",
              completed: true,
            },
            {
              status: "Departed origin country",
              location: "Heathrow Airport, London",
              time: "2024-01-14 08:30 PM",
              completed: true,
            },
            {
              status: "In transit",
              location: "JFK Airport, New York",
              time: "2024-01-15 06:45 AM",
              completed: true,
            },
            {
              status: "Customs clearance",
              location: "Los Angeles, CA",
              time: "2024-01-15 02:15 PM",
              completed: false,
              current: true,
            },
            {
              status: "Out for delivery",
              location: "Los Angeles, CA",
              time: "Estimated: 2024-01-16 10:00 AM",
              completed: false,
            },
          ],
        },
        SOT047648845: {
          status: "pending",
          packageInfo: {
            trackingNumber: "SOT047648845",
            service: "International Express",
            weight: "70.87 kg",
            dimensions: "30x15x10 cm",
          },
          sender: {
            name: "Ralphson Lucas",
            address: "35 Abdallah Ebn El-Tahra St. off Ahmed Fakhry; Makkram Ebeid, Cairo, Egypt",
          },
          recipient: {
            name: "Emma Mocasque",
            address: "290 W Middle Verde Rd, Camp Verde, AZ 86322",
            contact: "9282955890"
          },
          timeline: [
            {
              status: "Package picked up",
              location: "Cairo, Egypt",
              time: "2025-08-11 11:00 AM",
              completed: true,
            },
            {
              status: "Sorting Facility",
              location: "Luxor International Aiport",
              time: "2025-08-11 08:30 PM",
              completed: false,
              note: "Package currently on Hold at Sorting Facility, awaiting Insurance fee of $3,920.",
              current: true,
            },


            SOT0476443699: {
          status: "pending",
          packageInfo: {
            trackingNumber: "SOT0476443699",
            service: "International Express",
            weight: "70.87 kg",
            dimensions: "30x15x10 cm",
          },
          sender: {
            name: "Ralphson Lucas",
            address: "35 Abdallah Ebn El-Tahra St. off Ahmed Fakhry; Makkram Ebeid, Cairo, Egypt",
          },
          recipient: {
            name: "Emma Mocasque",
            address: "290 W Middle Verde Rd, Camp Verde, AZ 86322",
            contact: "9282955890"
          },
          timeline: [
            {
              status: "Package picked up",
              location: "Cairo, Egypt",
              time: "2025-08-11 11:00 AM",
              completed: true,
            },
            {
              status: "Sorting Facility",
              location: "Luxor International Aiport",
              time: "2025-08-11 08:30 PM",
              completed: false,
              note: "Package currently on Hold at Sorting Facility, awaiting Insurance fee of $3,920.",
              current: true,
            },

            
            // {
            //   status: "In transit",
            //   location: "JFK Airport, New York",
            //   time: "2024-01-15 06:45 AM",
            //   completed: true,
            // },
            // {
            //   status: "Customs clearance",
            //   location: "Los Angeles, CA",
            //   time: "2024-01-15 02:15 PM",
            //   completed: false,
            //   current: true,
            // },
            // {
            //   status: "Out for delivery",
            //   location: "Los Angeles, CA",
            //   time: "Estimated: 2024-01-16 10:00 AM",
            //   completed: false,
            // },
          ],
        },
      }

      setTrackingResult(mockData[trackingNumber as keyof typeof mockData] || null)
      setIsLoading(false)
    }, 1500)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-500"
      case "On Hold":
        return "bg-red-500"    
      case "in-transit":
        return "bg-blue-500"
      case "pending":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="h-5 w-5" />
      case "in-transit":
        return <Truck className="h-5 w-5" />
      case "pending":
        return <Clock className="h-5 w-5" />
      default:
        return <Package className="h-5 w-5" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-blue-800/50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="h-10 w-10" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Track Your
              <span className="text-orange-400"> Package</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Enter your tracking number below to get real-time updates on your package location and delivery status.
            </p>

            {/* Tracking Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
              <div className="flex gap-4">
                <Input
                  placeholder="Enter tracking number (e.g., SOT123456789)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="bg-white text-black text-lg h-12"
                  onKeyPress={(e) => e.key === "Enter" && handleTrack()}
                />
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 px-8"
                  onClick={handleTrack}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Search className="h-5 w-5 mr-2" />
                      Track
                    </>
                  )}
                </Button>
              </div>
              {/* <p className="text-blue-100 text-sm mt-4">Try sample tracking numbers: SOT123456789 or SOT987654321</p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Results */}
      {trackingResult && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Package Status Header */}
              <Card className="mb-8">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">
                        Tracking #{trackingResult.packageInfo.trackingNumber}
                      </CardTitle>
                      <p className="text-gray-600">{trackingResult.packageInfo.service}</p>
                    </div>
                    <Badge className={`${getStatusColor(trackingResult.status)} text-white px-4 py-2`}>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(trackingResult.status)}
                        {trackingResult.status === "delivered"
                          ? "Delivered"
                          : trackingResult.status === "in-transit"
                            ? "In Transit"
                            : "Pending"}
                      </div>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">From</h4>
                      <p className="text-sm text-gray-600">{trackingResult.sender.name}</p>
                      <p className="text-sm text-gray-600">{trackingResult.sender.address}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">To</h4>
                      <p className="text-sm text-gray-600">{trackingResult.recipient.name}</p>
                      <p className="text-sm text-gray-600">{trackingResult.recipient.address}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Package Details</h4>
                      <p className="text-sm text-gray-600">Weight: {trackingResult.packageInfo.weight}</p>
                      <p className="text-sm text-gray-600">Dimensions: {trackingResult.packageInfo.dimensions}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tracking Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle>Tracking History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {trackingResult.timeline.map((event: any, index: number) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              event.completed
                                ? "bg-green-500 text-white"
                                : event.current
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-300 text-gray-600"
                            }`}
                          >
                            {event.completed ? (
                              <CheckCircle className="h-5 w-5" />
                            ) : event.current ? (
                              <Clock className="h-5 w-5" />
                            ) : (
                              <div className="w-3 h-3 rounded-full bg-current"></div>
                            )}
                          </div>
                          {index < trackingResult.timeline.length - 1 && (
                            <div
                              className={`w-0.5 h-12 mt-2 ${event.completed ? "bg-green-500" : "bg-gray-300"}`}
                            ></div>
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold">{event.status}</h4>
                            {event.current && (
                              <Badge variant="outline" className="text-blue-600 border-blue-600">
                                Current
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="h-4 w-4" />
                            <span>{event.time}</span>
                          </div>
                          {event.note && (
                            <p className="text-sm text-gray-600 mt-2 bg-gray-50 p-2 rounded">{event.note}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {trackingNumber && trackingResult === null && !isLoading && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Card>
                <CardContent className="p-8">
                  <AlertCircle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Tracking Number Not Found</h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any information for tracking number "{trackingNumber}". Please check the number and
                    try again.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• Make sure you've entered the complete tracking number</p>
                    <p>• Tracking numbers are usually 10-12 characters long</p>
                    <p>• It may take up to 24 hours for new shipments to appear in our system</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tracking FAQ</h2>
              <p className="text-gray-600">Common questions about package tracking</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">When will my tracking information appear?</h3>
                  <p className="text-gray-600 text-sm">
                    Tracking information typically appears within 2-4 hours of pickup. For international shipments, it
                    may take up to 24 hours.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Why hasn't my package moved?</h3>
                  <p className="text-gray-600 text-sm">
                    Packages may stay at facilities for sorting, customs clearance, or weather delays. Contact us if
                    there's no update for 48+ hours.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">What if delivery fails?</h3>
                  <p className="text-gray-600 text-sm">
                    We'll attempt redelivery the next business day. You can also arrange pickup at our facility or
                    request delivery to a different address.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Can I change the delivery address?</h3>
                  <p className="text-gray-600 text-sm">
                    Address changes are possible before the package is out for delivery. Contact our customer service
                    team as soon as possible.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Need more help with your shipment?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="tel:+15551234567">Call Support</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:support@swiftandontime.com">Email Us</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
