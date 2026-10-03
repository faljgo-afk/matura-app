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
    <main className="bg-canvas min-h-[70vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-8 sm:py-10 flex flex-col gap-6">

        <Link
          href={`/topics/${params.slug}`}
          className="self-start text-brand font-extrabold hover:underline"
        >
          ← Powrót do tematu
        </Link>

        <div>
          <div className="pill bg-[#e3dcff] text-[#3b2a9e] mb-3">
            Pytania otwarte
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight">{topic.name}</h1>
          <p className="text-muted text-lg mt-1">
            Pisz pełne odpowiedzi — AI oceni je według kryteriów CKE i pokaże co pominąłeś.
          </p>
        </div>

        {questions.length === 0 ? (
          <div className="card-game !rounded-[28px] p-8 text-center font-semibold text-muted">
            Brak pytań otwartych dla tego tematu. Zajrzyj później!
          </div>
        ) : (
          <OpenPractice questions={questions} />
        )}

      </div>
    </main>
  )
}
