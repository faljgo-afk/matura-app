import { supabase } from '@/lib/supabase'
import { createClient } from '@/lib/supabase-server'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import BrowseClient from './BrowseClient'

export const dynamic = 'force-dynamic'

async function getTopic(slug: string) {
  const { data } = await supabase
    .from('topics')
    .select('id, name, slug')
    .eq('slug', slug)
    .single()
  return data
}

async function getSubtopics(topicId: string) {
  const { data } = await supabase
    .from('subtopics')
    .select('id, name')
    .eq('topic_id', topicId)
    .order('name')
  return data ?? []
}

async function getQuestions(topicId: string) {
  const { data } = await supabase
    .from('questions')
    .select('id, question_text, question_type, options, correct_answer, explanation, subtopic_id, model_answer')
    .eq('topic_id', topicId)
    .eq('verified', true)
    .order('question_type')
  return data ?? []
}

export default async function BrowsePage({ params }: { params: { slug: string } }) {
  const serverClient = createClient()
  const { data: { user } } = await serverClient.auth.getUser()
  if (!user) redirect(`/login?next=/topics/${params.slug}/browse`)

  const topic = await getTopic(params.slug)
  if (!topic) notFound()

  const [subtopics, rawQuestions] = await Promise.all([
    getSubtopics(topic.id),
    getQuestions(topic.id),
  ])

  // Build subtopic id→name map
  const subtopicMap: Record<string, string> = {}
  for (const s of subtopics) subtopicMap[s.id] = s.name

  // Shape questions for client
  const questions = rawQuestions.map(q => {
    const subtopic_name = q.subtopic_id ? (subtopicMap[q.subtopic_id] ?? null) : null
    if (q.question_type === 'open') {
      return {
        id: q.id,
        kind: 'open' as const,
        question_text: q.question_text,
        sample_answer: q.model_answer ?? q.explanation ?? '',
        explanation: null,
        subtopic_name,
      }
    }
    return {
      id: q.id,
      kind: 'closed' as const,
      question_text: q.question_text,
      question_type: q.question_type,
      options: q.options ?? [],
      correct_answer: q.correct_answer ?? [],
      explanation: q.explanation ?? '',
      subtopic_name,
    }
  })

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <Link
          href={`/topics/${params.slug}`}
          className="text-green-600 hover:text-green-800 text-sm mb-6 inline-block"
        >
          ← {topic.name}
        </Link>

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{topic.name}</h1>
          <p className="text-gray-500 text-sm mt-1">
            Przeglądaj pytania i odpowiedzi — {questions.length} pytań
          </p>
        </div>

        <BrowseClient questions={questions} subtopics={subtopics} />

      </div>
    </main>
  )
}
