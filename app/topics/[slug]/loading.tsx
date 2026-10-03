export default function TopicLoading() {
  const block = 'bg-line/70 animate-pulse'
  return (
    <main className="bg-canvas min-h-[70vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-8 sm:py-10 flex flex-col gap-8">

        <div className={`h-5 w-48 rounded-full ${block}`} />

        <div className="flex flex-col gap-3">
          <div className={`h-12 w-72 rounded-2xl ${block}`} />
          <div className={`h-5 w-96 max-w-full rounded-full ${block}`} />
        </div>

        {[0, 1].map((i) => (
          <div key={i} className="card-game !rounded-[32px] p-6 sm:p-8 flex flex-col gap-5">
            <div className={`h-7 w-36 rounded-full ${block}`} />
            <div className={`h-20 w-full rounded-2xl ${block}`} />
            <div className={`h-14 w-full rounded-2xl ${block}`} />
          </div>
        ))}

      </div>
    </main>
  )
}
