export default function PickupDashboardLoading() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header Skeleton */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <div className="h-8 bg-gray-300 rounded mb-2 w-64 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-96 animate-pulse"></div>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <div className="h-10 bg-gray-300 rounded w-32 animate-pulse"></div>
            <div className="h-10 bg-gray-300 rounded w-32 animate-pulse"></div>
          </div>
        </div>

        {/* Statistics Cards Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="border rounded-lg p-4 text-center">
              <div className="h-8 bg-gray-300 rounded mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Filters Skeleton */}
        <div className="border rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 h-10 bg-gray-300 rounded animate-pulse"></div>
            <div className="w-full md:w-48 h-10 bg-gray-300 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Pickup Cards Skeleton */}
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="border rounded-lg p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-4 w-4 bg-gray-300 rounded animate-pulse"></div>
                    <div className="h-6 bg-gray-300 rounded w-48 animate-pulse"></div>
                    <div className="h-6 bg-gray-300 rounded w-20 animate-pulse"></div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    {[...Array(4)].map((_, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <div className="h-4 w-4 bg-gray-300 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="h-6 bg-gray-300 rounded w-32 animate-pulse"></div>
                    <div className="h-4 bg-gray-300 rounded w-48 animate-pulse"></div>
                  </div>
                </div>

                <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col gap-2">
                  <div className="h-8 bg-gray-300 rounded w-32 animate-pulse"></div>
                  <div className="flex gap-2">
                    <div className="h-8 w-8 bg-gray-300 rounded animate-pulse"></div>
                    <div className="h-8 w-8 bg-gray-300 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
