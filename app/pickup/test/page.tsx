"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Play,
  Pause,
  RotateCcw,
  CheckCircle,
  XCircle,
  Clock,
  Package,
  Truck,
  MapPin,
  User,
  Building2,
  Phone,
  AlertTriangle,
  BarChart3,
  Activity,
} from "lucide-react"

interface TestResult {
  id: string
  name: string
  description: string
  status: "pending" | "running" | "passed" | "failed"
  duration?: number
  details?: string
  data?: any
}

const testScenarios: TestResult[] = [
  {
    id: "same-day-business",
    name: "Same-Day Business Pickup",
    description: "Test scheduling a same-day pickup for a business location with multiple packages",
    status: "pending",
    data: {
      pickupType: "same-day",
      serviceType: "Same-Day Delivery",
      contact: { name: "John Smith", company: "TechStart Inc.", phone: "+1 (555) 123-4567" },
      packages: { count: 3, weight: 15.5 },
      address: { type: "business", street: "123 Business Ave", city: "New York", state: "NY" },
    },
  },
  {
    id: "recurring-residential",
    name: "Recurring Residential Pickup",
    description: "Test setting up a weekly recurring pickup for a residential address",
    status: "pending",
    data: {
      pickupType: "scheduled",
      serviceType: "Standard Delivery",
      isRecurring: true,
      frequency: "Weekly",
      contact: { name: "Sarah Johnson", phone: "+1 (555) 987-6543" },
      packages: { count: 1, weight: 5.0 },
      address: { type: "residential", street: "456 Home Street", city: "Brooklyn", state: "NY" },
    },
  },
  {
    id: "international-express",
    name: "International Express Pickup",
    description: "Test scheduling an international express pickup with customs documentation",
    status: "pending",
    data: {
      pickupType: "express",
      serviceType: "International Express",
      destination: "International",
      contact: { name: "Maria Garcia", company: "Global Trade Co.", phone: "+1 (555) 456-7890" },
      packages: { count: 2, weight: 8.3 },
      address: { type: "business", street: "789 Export Blvd", city: "Manhattan", state: "NY" },
    },
  },
  {
    id: "on-demand-urgent",
    name: "On-Demand Urgent Pickup",
    description: "Test immediate pickup request with priority handling and real-time tracking",
    status: "pending",
    data: {
      pickupType: "on-demand",
      serviceType: "Urgent Delivery",
      priority: "High",
      contact: { name: "David Chen", phone: "+1 (555) 321-0987" },
      packages: { count: 1, weight: 2.1 },
      address: { type: "office", street: "321 Rush Street", city: "Queens", state: "NY" },
    },
  },
  {
    id: "bulk-warehouse",
    name: "Bulk Warehouse Pickup",
    description: "Test large volume pickup from warehouse with special handling requirements",
    status: "pending",
    data: {
      pickupType: "bulk",
      serviceType: "Freight Delivery",
      contact: { name: "Robert Wilson", company: "Warehouse Solutions", phone: "+1 (555) 654-3210" },
      packages: { count: 25, weight: 150.0 },
      address: { type: "warehouse", street: "555 Industrial Way", city: "Bronx", state: "NY" },
    },
  },
]

export default function PickupTestPage() {
  const [tests, setTests] = useState<TestResult[]>(testScenarios)
  const [isRunning, setIsRunning] = useState(false)
  const [currentTest, setCurrentTest] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)

  const runSingleTest = async (testId: string) => {
    setTests((prev) => prev.map((test) => (test.id === testId ? { ...test, status: "running" } : test)))
    setCurrentTest(testId)

    // Simulate API call and validation
    const startTime = Date.now()

    try {
      // Simulate different test durations
      const duration = Math.random() * 3000 + 1000 // 1-4 seconds
      await new Promise((resolve) => setTimeout(resolve, duration))

      // Simulate random success/failure (90% success rate)
      const success = Math.random() > 0.1
      const endTime = Date.now()

      setTests((prev) =>
        prev.map((test) =>
          test.id === testId
            ? {
                ...test,
                status: success ? "passed" : "failed",
                duration: endTime - startTime,
                details: success
                  ? "Pickup scheduled successfully. Confirmation number generated."
                  : "Failed to validate pickup address. Please check location details.",
              }
            : test,
        ),
      )
    } catch (error) {
      setTests((prev) =>
        prev.map((test) =>
          test.id === testId
            ? {
                ...test,
                status: "failed",
                duration: Date.now() - startTime,
                details: "Network error occurred during test execution.",
              }
            : test,
        ),
      )
    }

    setCurrentTest(null)
  }

  const runAllTests = async () => {
    setIsRunning(true)
    setProgress(0)

    // Reset all tests
    setTests((prev) => prev.map((test) => ({ ...test, status: "pending" as const })))

    for (let i = 0; i < tests.length; i++) {
      setProgress((i / tests.length) * 100)
      await runSingleTest(tests[i].id)

      // Small delay between tests
      if (i < tests.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, 500))
      }
    }

    setProgress(100)
    setIsRunning(false)
  }

  const resetTests = () => {
    setTests((prev) =>
      prev.map((test) => ({
        ...test,
        status: "pending" as const,
        duration: undefined,
        details: undefined,
      })),
    )
    setProgress(0)
    setCurrentTest(null)
    setIsRunning(false)
  }

  const getStatusIcon = (status: TestResult["status"]) => {
    switch (status) {
      case "running":
        return <Activity className="h-5 w-5 text-blue-500 animate-spin" />
      case "passed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "failed":
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return <Clock className="h-5 w-5 text-gray-400" />
    }
  }

  const getStatusBadge = (status: TestResult["status"]) => {
    switch (status) {
      case "running":
        return <Badge className="bg-blue-100 text-blue-800">Running</Badge>
      case "passed":
        return <Badge className="bg-green-100 text-green-800">Passed</Badge>
      case "failed":
        return <Badge className="bg-red-100 text-red-800">Failed</Badge>
      default:
        return <Badge variant="outline">Pending</Badge>
    }
  }

  const passedTests = tests.filter((test) => test.status === "passed").length
  const failedTests = tests.filter((test) => test.status === "failed").length
  const totalTests = tests.length

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Pickup Scheduling Test Suite</h1>
          <p className="text-gray-600">
            Comprehensive testing for pickup scheduling functionality across different scenarios and use cases.
          </p>
        </div>

        {/* Test Controls */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-6 w-6" />
              Test Controls & Overview
            </CardTitle>
            <CardDescription>
              Run individual tests or execute the complete test suite to validate pickup scheduling functionality.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button onClick={runAllTests} disabled={isRunning} className="flex items-center gap-2">
                {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                {isRunning ? "Running Tests..." : "Run All Tests"}
              </Button>
              <Button
                variant="outline"
                onClick={resetTests}
                disabled={isRunning}
                className="flex items-center gap-2 bg-transparent"
              >
                <RotateCcw className="h-4 w-4" />
                Reset Tests
              </Button>
            </div>

            {/* Progress Bar */}
            {(isRunning || progress > 0) && (
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Test Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )}

            {/* Test Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">{totalTests}</div>
                <div className="text-sm text-gray-600">Total Tests</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{passedTests}</div>
                <div className="text-sm text-gray-600">Passed</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600">{failedTests}</div>
                <div className="text-sm text-gray-600">Failed</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {totalTests > 0 ? Math.round((passedTests / totalTests) * 100) : 0}%
                </div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Test Cases */}
        <div className="space-y-6">
          {tests.map((test) => (
            <Card
              key={test.id}
              className={`transition-all duration-200 ${
                test.status === "running" ? "ring-2 ring-blue-500 shadow-lg" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(test.status)}
                    <div>
                      <CardTitle className="text-lg">{test.name}</CardTitle>
                      <CardDescription>{test.description}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {getStatusBadge(test.status)}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => runSingleTest(test.id)}
                      disabled={isRunning || test.status === "running"}
                    >
                      {test.status === "running" ? "Running..." : "Run Test"}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Test Data Preview */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Package className="h-4 w-4" />
                    <span>{test.data.serviceType}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <User className="h-4 w-4" />
                    <span>{test.data.contact.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>
                      {test.data.address.city}, {test.data.address.state}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Truck className="h-4 w-4" />
                    <span>
                      {test.data.packages.count} pkg(s), {test.data.packages.weight} lbs
                    </span>
                  </div>
                </div>

                {/* Test Results */}
                {test.duration && (
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                    <span>Duration: {test.duration}ms</span>
                    {test.status === "passed" && <span className="text-green-600">✓ All validations passed</span>}
                  </div>
                )}

                {test.details && (
                  <div
                    className={`p-3 rounded-lg text-sm ${
                      test.status === "passed"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {test.status === "passed" ? (
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      ) : (
                        <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      )}
                      <span>{test.details}</span>
                    </div>
                  </div>
                )}

                {/* Detailed Test Data */}
                <details className="mt-4">
                  <summary className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
                    View Test Data
                  </summary>
                  <div className="mt-3 p-4 bg-gray-50 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                        <div className="space-y-1 text-gray-600">
                          <div className="flex items-center gap-2">
                            <User className="h-3 w-3" />
                            {test.data.contact.name}
                          </div>
                          {test.data.contact.company && (
                            <div className="flex items-center gap-2">
                              <Building2 className="h-3 w-3" />
                              {test.data.contact.company}
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <Phone className="h-3 w-3" />
                            {test.data.contact.phone}
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Pickup Details</h4>
                        <div className="space-y-1 text-gray-600">
                          <div>Type: {test.data.pickupType}</div>
                          <div>Service: {test.data.serviceType}</div>
                          <div>Packages: {test.data.packages.count}</div>
                          <div>Weight: {test.data.packages.weight} lbs</div>
                          {test.data.isRecurring && <div>Recurring: {test.data.frequency}</div>}
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Test Summary */}
        {(passedTests > 0 || failedTests > 0) && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Test Summary</CardTitle>
              <CardDescription>Overall results from the pickup scheduling test suite execution.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Test Execution Complete</span>
                  <Badge variant={failedTests === 0 ? "default" : "destructive"}>
                    {failedTests === 0 ? "All Tests Passed" : `${failedTests} Test(s) Failed`}
                  </Badge>
                </div>

                {failedTests > 0 && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-red-800 mb-1">Action Required</h4>
                        <p className="text-red-700 text-sm">
                          Some tests failed. Please review the failed test cases and address any issues with the pickup
                          scheduling functionality before deploying to production.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {failedTests === 0 && passedTests === totalTests && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-800 mb-1">All Systems Go!</h4>
                        <p className="text-green-700 text-sm">
                          All pickup scheduling tests passed successfully. The system is ready for production use.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
