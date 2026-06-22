import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import OpenPractice from './OpenPractice'

type OpenQuestion = {
  id: string
  question_text: string
  max_points: number
  key_points: string[]
  model_answer: string
  source: string | null
}

async function getTopic(slug: string) {
  const { data } = await supabase
    .from('topics')
    .select('id, name, slug')
    .eq('slug', slug)
    .single()
  return data
}

async function getOpenQuestions(topicId: string): Promise<OpenQuestion[]> {
  const { data } = await supabase
    .from('questions')
    .select('id, question_text, max_points, key_points, model_answer, source')
    .eq('topic_id', topicId)
    .eq('question_type', 'open')
    .eq('verified', true)
    .order('created_at', { ascending: true })

  return (data ?? []) as OpenQuestion[]
}

export default async function OpenQuestionsPage({ params }: { params: { slug: string } }) {
  const topic = await getTopic(params.slug)
  if (!topic) notFound()

  const questions = await getOpenQuestions(topic.id)

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <Link
          href={`/topics/${params.slug}`}
          className="text-green-600 hover:text-green-800 text-sm mb-6 inline-block"
        >
          ← Powrót do tematu
        </Link>

        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-violet-700 bg-violet-100 px-3 py-1 rounded-full mb-3">
            Pytania otwarte
          </div>
          <h1 className="text-2xl font-bold text-gray-900">{topic.name}</h1>
          <p className="text-gray-500 mt-1 text-sm">
            Pisz pełne odpowiedzi — AI oceni je według kryteriów CKE i pokaże co pominąłeś.
          </p>
        </div>

        {questions.length === 0 ? (
          <div className="bg-white rounded-xl p-8 border border-gray-200 text-center text-gray-400">
            Brak pytań otwartych dla tego tematu. Zajrzyj później!
          </div>
        ) : (
          <OpenPractice questions={questions} />
        )}

      </div>
    </main>
  )
}
