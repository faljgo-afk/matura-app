export default function TopicLoading() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12">

        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-8" />

        <div className="bg-white rounded-xl p-5 sm:p-8 shadow-sm border border-gray-200">
          <div className="h-8 w-56 bg-gray-200 rounded animate-pulse mb-2" />
          <div className="h-4 w-80 bg-gray-100 rounded animate-pulse mb-8" />

          <div className="mb-6">
            <div className="h-6 w-28 bg-blue-100 rounded-full animate-pulse mb-3" />
            <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center gap-4">
              <div className="text-center shrink-0">
                <div className="h-7 w-8 bg-gray-200 rounded animate-pulse mx-auto mb-1" />
                <div className="h-3 w-16 bg-gray-100 rounded animate-pulse" />
              </div>
              <div className="flex-1 space-y-2">
                <div className="h-3 w-full bg-gray-100 rounded animate-pulse" />
                <div className="h-3 w-3/4 bg-gray-100 rounded animate-pulse" />
              </div>
            </div>
            <div className="h-14 w-full bg-gray-100 rounded-xl animate-pulse" />
          </div>

          <div className="border-t border-gray-100 my-6" />

          <div>
            <div className="h-6 w-32 bg-violet-100 rounded-full animate-pulse mb-3" />
            <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center gap-4">
              <div className="text-center shrink-0">
                <div className="h-7 w-8 bg-gray-200 rounded animate-pulse mx-auto mb-1" />
                <div className="h-3 w-12 bg-gray-100 rounded animate-pulse" />
              </div>
              <div className="flex-1 space-y-2">
                <div className="h-3 w-full bg-gray-100 rounded animate-pulse" />
                <div className="h-3 w-2/3 bg-gray-100 rounded animate-pulse" />
              </div>
            </div>
            <div className="h-12 w-full bg-violet-100 rounded-lg animate-pulse" />
          </div>
        </div>

      </div>
    </main>
  )
}
