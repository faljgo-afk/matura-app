import { supabase } from '@/lib/supabase'
import { createClient } from '@/lib/supabase-server'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import LearnButton from '@/components/LearnButton'
import BackButton from '@/components/BackButton'

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
  correct_answer: string[]
  explanation: string
}

async function getResults(sessionId: string, userId: string | null) {
  const { data: session, error } = await supabase
    .from('test_sessions')
    .select('*')
    .eq('id', sessionId)
    .single()

  if (error || !session) return null

  const questionIds: string[] = session.questions
  const table = session.session_type === 'mock_exam' ? 'mock_questions' : 'questions'

  const { data: questions } = await supabase
    .from(table)
    .select('id, question_text, question_type, options, correct_answer, explanation')
    .in('id', questionIds)

  if (!questions) return null

  const ordered = questionIds
    .map(id => questions.find(q => q.id === id))
    .filter(Boolean) as Question[]

  let topicSlug = ''
  if (session.topic_id) {
    const { data: topic } = await supabase
      .from('topics')
      .select('slug')
      .eq('id', session.topic_id)
      .single()
    topicSlug = topic?.slug ?? ''
  }

  // Fetch which questions the user has already learned
  let learnedIds: Set<string> = new Set()
  if (userId) {
    const { data: learned } = await supabase
      .from('user_learned_questions')
      .select('question_id')
      .eq('user_id', userId)
      .in('question_id', questionIds)
    learnedIds = new Set(learned?.map(q => q.question_id) ?? [])
  }

  return { session, questions: ordered, topicSlug, learnedIds }
}

export default async function ResultsPage({ params }: { params: { sessionId: string } }) {
  const serverClient = createClient()
  const { data: { user } } = await serverClient.auth.getUser()

  const result = await getResults(params.sessionId, user?.id ?? null)
  if (!result) notFound()

  const { session, questions, topicSlug, learnedIds } = result
  const answers: Record<string, string[]> = session.answers ?? {}
  const score: number = session.score ?? 0
  const maxScore: number = session.max_score ?? questions.length
  const percent = Math.round((score / maxScore) * 100)

  const scoreColor =
    percent >= 75 ? 'text-green-600' :
    percent >= 50 ? 'text-yellow-600' :
    'text-red-600'

  const scoreBg =
    percent >= 75 ? 'bg-green-50 border-green-200' :
    percent >= 50 ? 'bg-yellow-50 border-yellow-200' :
    'bg-red-50 border-red-200'

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        <BackButton />

        {/* Score summary */}
        <div className={`rounded-xl p-6 border mb-8 text-center ${scoreBg}`}>
          <div className={`text-6xl font-bold mb-1 ${scoreColor}`}>{percent}%</div>
          <div className="text-gray-600 text-lg">
            {score} / {maxScore} poprawnych odpowiedzi
          </div>
          <div className="text-sm text-gray-500 mt-2">
            {percent >= 75 ? 'Świetny wynik! Dobra robota.' :
             percent >= 50 ? 'Nieźle, ale jest pole do poprawy.' :
             'Warto powtórzyć ten temat.'}
          </div>
        </div>

        {/* Question review */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">Przegląd odpowiedzi</h2>
        <div className="space-y-6">
          {questions.map((question, index) => {
            const userAnswer = answers[question.id] ?? []
            const correct = question.correct_answer
            const isCorrect =
              userAnswer.length === correct.length &&
              correct.every(id => userAnswer.includes(id))

            return (
              <div
                key={question.id}
                className={`bg-white rounded-xl p-5 border-2 ${
                  isCorrect ? 'border-green-200' : 'border-red-200'
                }`}
              >
                <div className="flex items-start gap-2 mb-3">
                  <span className={`text-lg font-bold ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                    {isCorrect ? '✓' : '✗'}
                  </span>
                  <p className="font-medium text-gray-900">
                    {index + 1}. {question.question_text}
                  </p>
                </div>

                <div className="space-y-2 mb-4">
                  {question.options.map((option) => {
                    const userPicked = userAnswer.includes(option.id)
                    const isCorrectOption = correct.includes(option.id)

                    let style = 'border-gray-200 text-gray-500'
                    let badge: React.ReactNode = null

                    if (userPicked && isCorrectOption) {
                      style = 'border-green-400 bg-green-50 text-green-800'
                      badge = <span className="ml-2 text-green-600 font-medium text-xs">✓ poprawna · Twój wybór</span>
                    } else if (userPicked && !isCorrectOption) {
                      style = 'border-red-400 bg-red-50 text-red-800'
                      badge = <span className="ml-2 text-red-500 font-medium text-xs">✗ Twój wybór (błędna)</span>
                    } else if (!userPicked && isCorrectOption) {
                      style = 'border-green-300 bg-green-50 text-green-700'
                      badge = <span className="ml-2 text-green-500 font-medium text-xs">✓ poprawna (nie wybrano)</span>
                    }

                    return (
                      <div key={option.id} className={`px-3 py-2 rounded-lg border text-sm flex items-center justify-between ${style}`}>
                        <span>
                          <span className="font-semibold mr-1">{option.id}.</span>
                          {option.text}
                        </span>
                        {badge}
                      </div>
                    )
                  })}
                </div>

                {!isCorrect && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800">
                    <span className="font-semibold">Wyjaśnienie: </span>
                    {question.explanation}
                  </div>
                )}

                {/* Learn button — only for logged-in users on correctly answered questions */}
                {user && isCorrect && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <LearnButton
                      questionId={question.id}
                      initialLearned={learnedIds.has(question.id)}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-8 flex gap-3">
          <Link
            href="/"
            className="flex-1 text-center py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Wybierz inny temat
          </Link>
          {topicSlug ? (
            <Link
              href={`/topics/${topicSlug}`}
              className="flex-1 text-center py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700"
            >
              Spróbuj ponownie
            </Link>
          ) : (
            <Link
              href="/mock-exam"
              className="flex-1 text-center py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700"
            >
              Nowy sprawdzian
            </Link>
          )}
        </div>

      </div>
    </main>
  )
}
