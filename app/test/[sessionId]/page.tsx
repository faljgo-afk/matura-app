import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import TestScreen from './TestScreen'

export const dynamic = 'force-dynamic'

type Option = {
  id: string
  text: string
  is_correct: boolean
}

type Question = {
  id: string
  question_text: string
  question_type: string
  options: Option[]
}

async function getSessionWithQuestions(sessionId: string) {
  const { data: session, error } = await supabase
    .from('test_sessions')
    .select('*')
    .eq('id', sessionId)
    .single()

  if (error || !session) return null

  const questionIds: string[] = session.questions
  const isMock = session.session_type === 'mock_exam' || session.session_type === 'mock_exam_free'
  const table = isMock ? 'mock_questions' : 'questions'

  const { data: questions } = await supabase
    .from(table)
    .select('id, question_text, question_type, options')
    .in('id', questionIds)

  if (!questions) return null

  const ordered = questionIds
    .map(id => questions.find(q => q.id === id))
    .filter(Boolean) as Question[]

  return { session, questions: ordered }
}

const TIME_LIMITS: Record<string, number> = {
  mock_exam: 45 * 60,
}

export default async function TestPage({ params }: { params: { sessionId: string } }) {
  const result = await getSessionWithQuestions(params.sessionId)
  if (!result) notFound()

  const { session, questions } = result

  if (session.completed_at) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Ten test został już ukończony.</p>
          <a href={`/results/${session.id}`} className="text-green-600 underline">
            Zobacz wyniki →
          </a>
        </div>
      </main>
    )
  }

  const timeLimit = TIME_LIMITS[session.session_type] ?? undefined
  const reviewQuestionIds: string[] = session.review_question_ids ?? []

  return (
    <TestScreen
      sessionId={session.id}
      questions={questions}
      timeLimit={timeLimit}
      reviewQuestionIds={reviewQuestionIds}
    />
  )
}
