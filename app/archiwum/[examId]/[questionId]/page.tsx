import { supabase } from '@/lib/supabase'
import { createClient } from '@/lib/supabase-server'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import MaturaQuestion from './MaturaQuestion'

type Question = {
  id: string
  zadanie_number: string
  image_url: string
  max_points: number
  key_points: string[]
  model_answer: string | null
  exam_id: string
  exam_year: number
  exam_session: string
}

type NavQuestion = { id: string; zadanie_number: string }

async function getQuestion(questionId: string): Promise<Question | null> {
  const { data } = await supabase
    .from('matura_questions')
    .select('id, zadanie_number, image_url, max_points, key_points, model_answer, exam_id, matura_exams(year, session)')
    .eq('id', questionId)
    .single()

  if (!data) return null
  return {
    ...data,
    exam_year: (data.matura_exams as { year: number } | null)?.year ?? 0,
    exam_session: (data.matura_exams as { session: string } | null)?.session ?? '',
  }
}

async function getExamQuestions(examId: string): Promise<NavQuestion[]> {
  const { data } = await supabase
    .from('matura_questions')
    .select('id, zadanie_number')
    .eq('exam_id', examId)
    .order('zadanie_number', { ascending: true })
  return data ?? []
}

const SESSION_LABEL: Record<string, string> = {
  czerwiec:  'Czerwiec',
  sierpien:  'Sierpień',
  dodatkowy: 'Termin dodatkowy',
}

export default async function MaturaQuestionPage({
  params,
}: {
  params: { examId: string; questionId: string }
}) {
  // Auth check — only logged in users
  const serverClient = createClient()
  const { data: { user } } = await serverClient.auth.getUser()
  if (!user) {
    redirect(`/login?next=/archiwum/${params.examId}/${params.questionId}`)
  }

  const [question, allQuestions] = await Promise.all([
    getQuestion(params.questionId),
    getExamQuestions(params.examId),
  ])

  if (!question) notFound()

  const currentIdx = allQuestions.findIndex(q => q.id === params.questionId)
  const prevQuestion = currentIdx > 0 ? allQuestions[currentIdx - 1] : null
  const nextQuestion = currentIdx < allQuestions.length - 1 ? allQuestions[currentIdx + 1] : null

  // image_url may be '|'-separated (multi-page)
  const imageUrls = question.image_url.split('|').filter(Boolean)

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/archiwum" className="hover:text-amber-600">Archiwum</Link>
          <span>/</span>
          <Link href={`/archiwum/${params.examId}`} className="hover:text-amber-600">
            Matura {question.exam_year} {SESSION_LABEL[question.exam_session] ?? ''}
          </Link>
          <span>/</span>
          <span className="text-gray-600 font-medium">Zadanie {question.zadanie_number}</span>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <span>Zadanie {currentIdx + 1} z {allQuestions.length}</span>
          <div className="flex gap-1">
            {allQuestions.map((q, i) => (
              <Link key={q.id} href={`/archiwum/${params.examId}/${q.id}`}>
                <div className={`h-2 rounded-full transition-all ${
                  i === currentIdx ? 'bg-amber-500 w-4' : 'bg-gray-300 w-2 hover:bg-amber-300'
                }`} />
              </Link>
            ))}
          </div>
        </div>

        {/* Question images */}
        <div className="mb-4 space-y-2">
          {imageUrls.map((url, i) => (
            <img
              key={i}
              src={url}
              alt={`Zadanie ${question.zadanie_number} — strona ${i + 1}`}
              className="w-full rounded-xl border border-gray-200 shadow-sm"
            />
          ))}
        </div>

        {/* Answer + evaluation */}
        <MaturaQuestion
          questionId={question.id}
          maxPoints={question.max_points}
          modelAnswer={question.model_answer ?? ''}
        />

        {/* Navigation */}
        <div className="flex gap-3 mt-6">
          {prevQuestion ? (
            <Link
              href={`/archiwum/${params.examId}/${prevQuestion.id}`}
              className="px-4 py-2.5 text-sm border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50"
            >
              ← Zad. {prevQuestion.zadanie_number}
            </Link>
          ) : <div />}
          {nextQuestion && (
            <Link
              href={`/archiwum/${params.examId}/${nextQuestion.id}`}
              className="flex-1 text-center py-2.5 text-sm font-semibold bg-amber-500 hover:bg-amber-600 text-white rounded-lg"
            >
              Zad. {nextQuestion.zadanie_number} →
            </Link>
          )}
        </div>

      </div>
    </main>
  )
}
