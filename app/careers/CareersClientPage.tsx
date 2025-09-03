"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Users,
  MapPin,
  Clock,
  DollarSign,
  Heart,
  Coffee,
  Zap,
  Award,
  Search,
  Building2,
  Shield,
  CheckCircle,
  ArrowRight,
  Upload,
} from "lucide-react"
import { useState } from "react"

const jobListings = [
  {
    id: 1,
    title: "Senior Logistics Coordinator",
    department: "Operations",
    location: "New York, NY",
    type: "Full-time",
    salary: "$65,000 - $80,000",
    posted: "2 days ago",
    description: "Lead logistics operations and coordinate with drivers and customers to ensure timely deliveries.",
    requirements: [
      "3+ years logistics experience",
      "Strong organizational skills",
      "Experience with logistics software",
      "Excellent communication skills",
    ],
    benefits: ["Health Insurance", "401k Match", "Paid Time Off", "Performance Bonuses"],
  },
  {
    id: 2,
    title: "Delivery Driver",
    department: "Operations",
    location: "Multiple Locations",
    type: "Full-time",
    salary: "$45,000 - $55,000",
    posted: "1 week ago",
    description: "Provide reliable delivery services while maintaining excellent customer relationships.",
    requirements: [
      "Valid driver's license",
      "Clean driving record",
      "Customer service experience",
      "Physical ability to lift 50lbs",
    ],
    benefits: ["Health Insurance", "Vehicle Provided", "Flexible Schedule", "Performance Bonuses"],
  },
  {
    id: 3,
    title: "Customer Service Representative",
    department: "Customer Service",
    location: "Remote",
    type: "Full-time",
    salary: "$40,000 - $50,000",
    posted: "3 days ago",
    description: "Provide exceptional customer support via phone, email, and chat channels.",
    requirements: [
      "2+ years customer service experience",
      "Excellent communication skills",
      "Problem-solving abilities",
      "Computer proficiency",
    ],
    benefits: ["Remote Work", "Health Insurance", "Professional Development", "Flexible Hours"],
  },
  {
    id: 4,
    title: "Software Engineer",
    department: "Technology",
    location: "New York, NY",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    posted: "5 days ago",
    description: "Develop and maintain our logistics platform and mobile applications.",
    requirements: [
      "Bachelor's in Computer Science",
      "3+ years software development",
      "React/Node.js experience",
      "API development experience",
    ],
    benefits: ["Health Insurance", "Stock Options", "Learning Budget", "Flexible PTO"],
  },
  {
    id: 5,
    title: "Business Development Manager",
    department: "Sales",
    location: "New York, NY",
    type: "Full-time",
    salary: "$70,000 - $90,000 + Commission",
    posted: "1 week ago",
    description: "Drive business growth by developing relationships with enterprise clients.",
    requirements: [
      "5+ years B2B sales experience",
      "Logistics industry knowledge",
      "Strong negotiation skills",
      "CRM experience",
    ],
    benefits: ["Commission Structure", "Health Insurance", "Car Allowance", "Performance Bonuses"],
  },
  {
    id: 6,
    title: "Data Analyst",
    department: "Analytics",
    location: "Remote",
    type: "Full-time",
    salary: "$60,000 - $75,000",
    posted: "4 days ago",
    description: "Analyze logistics data to optimize routes and improve operational efficiency.",
    requirements: [
      "Bachelor's in Data Science/Statistics",
      "SQL and Python experience",
      "Data visualization skills",
      "Logistics industry knowledge preferred",
    ],
    benefits: ["Remote Work", "Health Insurance", "Learning Budget", "Flexible Schedule"],
  },
]

export default function CareersClientPage() {
  const [selectedJob, setSelectedJob] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("all")
  const [locationFilter, setLocationFilter] = useState("all")

  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = departmentFilter === "all" || job.department === departmentFilter
    const matchesLocation = locationFilter === "all" || job.location.includes(locationFilter)

    return matchesSearch && matchesDepartment && matchesLocation
  })

  const departments = [...new Set(jobListings.map((job) => job.department))]
  const locations = [...new Set(jobListings.map((job) => job.location.split(",")[0]))]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl mb-8 text-blue-100">
              Help us deliver excellence every day. Build your career with a company that values innovation, teamwork,
              and making a real difference in people's lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                View Open Positions
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Employee Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Cities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in creating an environment where our team members can thrive, grow, and make a meaningful
              impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Great Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive health insurance, 401k matching, and generous PTO policies.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle>Growth Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Clear career paths, professional development, and learning opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Coffee className="h-12 w-12 text-brown-600 mx-auto mb-4" />
                <CardTitle>Work-Life Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Flexible schedules, remote work options, and a supportive team culture.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Performance bonuses, employee recognition programs, and advancement opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Benefits Package</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We invest in our people with benefits that support your health, wealth, and well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Health & Wellness</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Medical, Dental, Vision Insurance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mental Health Support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Wellness Programs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Gym Membership Discounts
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <DollarSign className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Financial Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    401(k) with Company Match
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Performance Bonuses
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Stock Options (Senior Roles)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Life Insurance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Time Off & Flexibility</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Generous PTO Policy
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Flexible Work Arrangements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Paid Holidays
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Parental Leave
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Professional Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Learning & Development Budget
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Conference Attendance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Certification Support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mentorship Programs
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-pink-600 mb-2" />
                <CardTitle>Work Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Collaborative Culture
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Modern Office Spaces
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Team Building Events
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Employee Recognition
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Coffee className="h-8 w-8 text-brown-600 mb-2" />
                <CardTitle>Perks & Extras</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Free Snacks & Coffee
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Employee Discounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Transportation Benefits
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Company Events
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find your next opportunity with us. We're always looking for talented individuals to join our growing
              team.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                        <Badge variant="secondary">{job.type}</Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Building2 className="h-4 w-4 mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {job.salary}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.posted}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.benefits.slice(0, 3).map((benefit, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                        {job.benefits.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{job.benefits.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6 flex flex-col gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline">View Details</Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl">{job.title}</DialogTitle>
                            <DialogDescription>
                              <div className="flex flex-wrap items-center gap-4 text-gray-600 mt-2">
                                <div className="flex items-center">
                                  <Building2 className="h-4 w-4 mr-1" />
                                  {job.department}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  {job.location}
                                </div>
                                <div className="flex items-center">
                                  <DollarSign className="h-4 w-4 mr-1" />
                                  {job.salary}
                                </div>
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Job Description</h4>
                              <p className="text-gray-600">{job.description}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                              <ul className="space-y-1">
                                {job.requirements.map((req, index) => (
                                  <li key={index} className="flex items-center text-gray-600">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    {req}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
                              <div className="flex flex-wrap gap-2">
                                {job.benefits.map((benefit, index) => (
                                  <Badge key={index} variant="outline">
                                    {benefit}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <Button className="w-full">
                              Apply for this Position
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button>Apply Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No positions match your search criteria.</p>
              <Button
                variant="outline"
                className="mt-4 bg-transparent"
                onClick={() => {
                  setSearchTerm("")
                  setDepartmentFilter("all")
                  setLocationFilter("all")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* General Application */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Don't See the Right Position?</h2>
              <p className="text-xl text-blue-100">
                We're always looking for talented individuals. Submit a general application and we'll keep you in mind
                for future opportunities.
              </p>
            </div>

            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle className="text-2xl text-center">General Application</CardTitle>
                <CardDescription className="text-center">
                  Tell us about yourself and we'll reach out when we have a position that matches your skills.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name *</Label>
                      <Input id="first-name" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name *</Label>
                      <Input id="last-name" placeholder="Smith" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="department-interest">Department of Interest</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="operations">Operations</SelectItem>
                          <SelectItem value="customer-service">Customer Service</SelectItem>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="sales">Sales</SelectItem>
                          <SelectItem value="analytics">Analytics</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience-level">Experience Level</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                          <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                          <SelectItem value="senior">Senior Level (6+ years)</SelectItem>
                          <SelectItem value="executive">Executive Level</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cover-letter">Tell Us About Yourself *</Label>
                    <Textarea
                      id="cover-letter"
                      placeholder="Share your background, skills, and what interests you about working with Swift & On Time..."
                      rows={6}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume/CV *</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Drag and drop your resume here, or click to browse</p>
                      <Button type="button" variant="outline">
                        Choose File
                      </Button>
                      <p className="text-sm text-gray-500 mt-2">PDF, DOC, or DOCX (max 5MB)</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="job-alerts" className="rounded" />
                    <Label htmlFor="job-alerts" className="text-sm">
                      I'd like to receive email notifications about new job opportunities
                    </Label>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    Submit Application
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
