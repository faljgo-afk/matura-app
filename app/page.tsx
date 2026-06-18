import { supabase } from '@/lib/supabase'
import Link from 'next/link'

type Topic = {
  id: string
  name: string
  slug: string
  description: string
  order_index: number
}

async function getTopics(): Promise<Topic[]> {
  const { data, error } = await supabase
    .from('topics')
    .select('*')
    .order('order_index')

  if (error) {
    console.error('Error fetching topics:', error)
    return []
  }
  return data ?? []
}

export default async function HomePage() {
  const topics = await getTopics()

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Biologia na 100%
          </h1>
          <p className="text-lg text-gray-600">
            Ćwicz biologię rozszerzoną — testy tematyczne i sprawdziany z całego materiału
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              href={`/topics/${topic.slug}`}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:border-green-400 hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-green-500 group-hover:scale-110 transition-transform">
                  {topic.order_index}.
                </span>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 group-hover:text-green-700">
                    {topic.name}
                  </h2>
                  {topic.description && (
                    <p className="text-sm text-gray-500 mt-1">{topic.description}</p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-green-600 rounded-xl p-6 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Sprawdzian z całego materiału</h2>
          <p className="text-green-100 mb-4">
            20 pytań ze wszystkich tematów — kompleksowy test wiedzy
          </p>
          <Link
            href="/mock-exam"
            className="inline-block bg-white text-green-700 font-semibold px-8 py-3 rounded-lg hover:bg-green-50 transition-colors"
          >
            Rozpocznij sprawdzian
          </Link>
        </div>

      </div>
    </main>
  )
}
