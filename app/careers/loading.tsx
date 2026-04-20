export default function CareersLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-12 bg-blue-500 rounded-lg mb-6 animate-pulse"></div>
            <div className="h-6 bg-blue-500 rounded mb-4 animate-pulse"></div>
            <div className="h-6 bg-blue-500 rounded mb-8 w-3/4 mx-auto animate-pulse"></div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="h-12 bg-blue-500 rounded w-48 animate-pulse"></div>
              <div className="h-12 bg-blue-500 rounded w-48 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <div className="h-12 bg-gray-300 rounded mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-300 rounded mb-4 w-1/2 mx-auto animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto animate-pulse"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="border rounded-lg p-6">
                <div className="h-12 w-12 bg-gray-300 rounded mb-4 animate-pulse"></div>
                <div className="h-6 bg-gray-300 rounded mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
