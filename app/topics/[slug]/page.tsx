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

async function getQuestionCount(topicId: string): Promise<number> {
  const { count } = await supabase
    .from('questions')
    .select('*', { count: 'exact', head: true })
    .eq('topic_id', topicId)
    .eq('verified', true)

  return count ?? 0
}

export default async function TopicPage({ params }: { params: { slug: string } }) {
  const topic = await getTopic(params.slug)
  if (!topic) notFound()

  const questionCount = await getQuestionCount(topic.id)

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

          <div className="bg-gray-50 rounded-lg p-4 mb-8 flex items-center gap-4">
            <div className="text-center shrink-0">
              <div className="text-2xl sm:text-3xl font-bold text-green-600">{questionCount}</div>
              <div className="text-xs text-gray-500">pytań w bazie</div>
            </div>
            <div className="text-gray-300 text-xl hidden sm:block">|</div>
            <div className="text-sm text-gray-600">
              Test losuje <strong>10 pytań</strong> z bazy i sprawdza Twoją wiedzę.
              Po zakończeniu zobaczysz wynik i wyjaśnienia błędów.
            </div>
          </div>

          {questionCount < 1 ? (
            <div className="text-center py-6 text-gray-400">
              Brak pytań dla tego tematu. Zajrzyj później!
            </div>
          ) : (
            <StartTestButton topicId={topic.id} isLoggedIn={isLoggedIn} />
          )}
        </div>

      </div>
    </main>
  )
}
