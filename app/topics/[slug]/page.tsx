import { supabase } from '@/lib/supabase'
import { createClient } from '@/lib/supabase-server'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import StartTestButton from './StartTestButton'

type Topic = {
  id: string
  name: string
  slug: string
  description: string
}

async function getTopic(slug: string): Promise<Topic | null> {
  const { data, error } = await supabase
    .from('topics')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error || !data) return null
  return data
}

async function getClosedQuestionCount(topicId: string): Promise<number> {
  const { count } = await supabase
    .from('questions')
    .select('*', { count: 'exact', head: true })
    .eq('topic_id', topicId)
    .eq('verified', true)
    .in('question_type', ['single', 'multiple', 'true_false'])

  return count ?? 0
}

async function getOpenQuestionCount(topicId: string): Promise<number> {
  const { count } = await supabase
    .from('questions')
    .select('*', { count: 'exact', head: true })
    .eq('topic_id', topicId)
    .eq('verified', true)
    .eq('question_type', 'open')

  return count ?? 0
}

export default async function TopicPage({ params }: { params: { slug: string } }) {
  const topic = await getTopic(params.slug)
  if (!topic) notFound()

  const [closedCount, openCount] = await Promise.all([
    getClosedQuestionCount(topic.id),
    getOpenQuestionCount(topic.id),
  ])

  const serverClient = createClient()
  const { data: { user } } = await serverClient.auth.getUser()
  const isLoggedIn = !!user

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12">

        <Link href="/" className="text-green-600 hover:text-green-800 text-sm mb-8 inline-block">
          ← Powrót do listy tematów
        </Link>

        <div className="bg-white rounded-xl p-5 sm:p-8 shadow-sm border border-gray-200">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{topic.name}</h1>
          {topic.description && (
            <p className="text-gray-500 mb-6">{topic.description}</p>
          )}

          {/* Closed questions section */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">
                Pytania testowe
              </span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center gap-4">
              <div className="text-center shrink-0">
                <div className="text-xl font-semibold text-gray-600">{closedCount}</div>
                <div className="text-xs text-gray-400">pytań w bazie</div>
              </div>
              <div className="text-gray-300 text-xl hidden sm:block">|</div>
              <div className="text-sm text-gray-600">
                Test losuje <strong>10 pytań</strong> z bazy i sprawdza Twoją wiedzę.
                Po zakończeniu zobaczysz wynik i wyjaśnienia błędów.
              </div>
            </div>

            {closedCount < 1 ? (
              <div className="text-center py-4 text-gray-400 text-sm">
                Brak pytań dla tego tematu. Zajrzyj później!
              </div>
            ) : (
              <StartTestButton topicId={topic.id} isLoggedIn={isLoggedIn} />
            )}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 my-6" />

          {/* Open questions section */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-violet-700 bg-violet-100 px-2.5 py-1 rounded-full">
                Pytania otwarte
              </span>
              <span className="text-xs text-gray-400">jak na prawdziwej maturze</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center gap-4">
              <div className="text-center shrink-0">
                <div className="text-xl font-semibold text-gray-600">{openCount}</div>
                <div className="text-xs text-gray-400">pytań</div>
              </div>
              <div className="text-gray-300 text-xl hidden sm:block">|</div>
              <div className="text-sm text-gray-600">
                Pisz pełne odpowiedzi. AI oceni je według kryteriów CKE —
                tak jak prawdziwy egzaminator.
              </div>
            </div>

            {openCount < 1 ? (
              <div className="text-center py-4 text-gray-400 text-sm">
                Pytania otwarte dla tego tematu wkrótce!
              </div>
            ) : (
              <Link
                href={`/topics/${topic.slug}/open`}
                className="block w-full text-center py-3 rounded-lg bg-violet-600 text-white font-semibold hover:bg-violet-700 transition-colors"
              >
                Ćwicz pytania otwarte →
              </Link>
            )}
          </div>
        </div>

      </div>
    </main>
  )
}
