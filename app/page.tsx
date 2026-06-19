import { supabase } from '@/lib/supabase'
import Link from 'next/link'

type Topic = {
  id: string
  name: string
  slug: string
  description: string
  order_index: number
}

const TOPIC_ICONS: Record<number, string> = {
  1:  '🔬',
  2:  '🧬',
  3:  '🧩',
  4:  '⚡',
  5:  '🌍',
  6:  '🌿',
  7:  '🦎',
  8:  '🌱',
  9:  '🫀',
  10: '🫁',
  11: '🧠',
  12: '🦴',
  13: '👁️',
  14: '🩹',
  15: '🐣',
  16: '♻️',
  17: '🦕',
  18: '🧪',
}

async function getTopics(): Promise<Topic[]> {
  const { data, error } = await supabase
    .from('topics')
    .select('*')
    .order('order_index')

  if (error) return []
  return data ?? []
}

export default async function HomePage() {
  const topics = await getTopics()

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Biologia na 100%
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Trenuj i sprawdzaj swoją wiedzę z biologii — testy tematyczne i sprawdziany z całego materiału
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mb-8">
            <a href="#topics" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-green-400 hover:shadow-md transition-all cursor-pointer group">
              <div className="text-2xl mb-2">📗</div>
              <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-green-700">Testy tematyczne</h3>
              <p className="text-sm text-gray-500">Ćwicz konkretne tematy z programu CKE — genetyka, ekologia, fizjologia i więcej</p>
            </a>
            <a href="/mock-exam" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-green-400 hover:shadow-md transition-all cursor-pointer group">
              <div className="text-2xl mb-2">📝</div>
              <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-green-700">Ogólny sprawdzian</h3>
              <p className="text-sm text-gray-500">Kompleksowy test ze wszystkich tematów — z limitem czasu lub we własnym tempie</p>
            </a>
            <a href="/dashboard" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-green-400 hover:shadow-md transition-all cursor-pointer group">
              <div className="text-2xl mb-2">📈</div>
              <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-green-700">Śledzenie postępów</h3>
              <p className="text-sm text-gray-500">Oznaczaj opanowane pytania i śledź swój postęp w każdym temacie</p>
            </a>
          </div>
        </div>

        {/* Topic list */}
        <h2 id="topics" className="text-xl font-bold text-gray-800 mb-4 scroll-mt-6">Testy tematyczne</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              href={`/topics/${topic.slug}`}
              className="bg-white rounded-xl p-4 border border-gray-200 hover:border-green-400 hover:shadow-md transition-all group flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-2xl shrink-0 group-hover:bg-green-100 transition-colors">
                {TOPIC_ICONS[topic.order_index] ?? '📚'}
              </div>
              <div className="min-w-0">
                <h2 className="text-base font-semibold text-gray-800 group-hover:text-green-700 leading-snug">
                  {topic.name}
                </h2>
                {topic.description && (
                  <p className="text-sm text-gray-500 mt-0.5 truncate">{topic.description}</p>
                )}
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
