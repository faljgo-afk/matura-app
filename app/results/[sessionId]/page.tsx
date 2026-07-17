import { supabase } from '@/lib/supabase'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { createClient } from '@/lib/supabase-server'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import LearnButton from '@/components/LearnButton'
import BackButton from '@/components/BackButton'
import FeedbackWidget from '@/components/FeedbackWidget'
import ReportQuestionButton from '@/components/ReportQuestionButton'

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
  image_url?: string | null
}

async function getResults(sessionId: string, userId: string | null) {
  const { data: session, error } = await supabase
    .from('test_sessions')
    .select('*')
    .eq('id', sessionId)
    .single()

  if (error || !session) return null

  const questionIds: string[] = session.questions
  const isMock = session.session_type === 'mock_exam' || session.session_type === 'mock_exam_free'

  let questions: Question[] = []
  if (isMock) {
    const [{ data: mqData }, { data: qData }] = await Promise.all([
      supabase.from('mock_questions').select('id, question_text, question_type, options, correct_answer, explanation, image_url').in('id', questionIds),
      supabase.from('questions').select('id, question_text, question_type, options, correct_answer, explanation, image_url').in('id', questionIds),
    ])
    questions = [...(mqData ?? []), ...(qData ?? [])]
  } else {
    const { data } = await supabase
      .from('questions')
      .select('id, question_text, question_type, options, correct_answer, explanation, image_url')
      .in('id', questionIds)
    questions = data ?? []
  }

  if (questions.length === 0) return null

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

  // Check if feedback already submitted for this session (use admin client to bypass RLS)
  const { data: existingFeedback } = await supabaseAdmin
    .from('session_feedback')
    .select('id')
    .eq('session_id', session.id)
    .maybeSingle()
  const feedbackSubmitted = !!existingFeedback

  return { session, questions: ordered, topicSlug, learnedIds, feedbackSubmitted }
}

export default async function ResultsPage({ params }: { params: { sessionId: string } }) {
  const serverClient = createClient()
  const { data: { user } } = await serverClient.auth.getUser()

  const result = await getResults(params.sessionId, user?.id ?? null)
  if (!result) notFound()

  const { session, questions, topicSlug, learnedIds, feedbackSubmitted } = result
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
          <div className={`text-4xl sm:text-6xl font-bold mb-1 ${scoreColor}`}>{percent}%</div>
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

                {question.image_url && (
                  <div className="mb-3 rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                    <img
                      src={question.image_url}
                      alt="Ilustracja do pytania"
                      className="w-full max-h-52 object-contain p-2"
                    />
                  </div>
                )}

                <div className="space-y-2 mb-4">
                  {question.question_type === 'true_false' && correct.some((c: string) => c.includes('-')) ? (
                    question.options.map((option) => {
                      const correctVerdict = correct.find((c: string) => c.startsWith(option.id + '-'))?.split('-')[1] ?? ''
                      const userVerdict = userAnswer.find((a: string) => a.startsWith(option.id + '-'))?.split('-')[1] ?? null
                      const statementCorrect = userVerdict === correctVerdict

                      let style = 'border-gray-200 text-gray-500'
                      if (userVerdict) {
                        style = statementCorrect
                          ? 'border-green-400 bg-green-50 text-green-800'
                          : 'border-red-400 bg-red-50 text-red-800'
                      }

                      return (
                        <div key={option.id} className={`px-3 py-2 rounded-lg border text-sm flex items-center justify-between gap-3 ${style}`}>
                          <span>
                            <span className="font-semibold mr-1">{option.id}.</span>
                            {option.text}
                          </span>
                          <div className="flex items-center gap-1.5 shrink-0 text-xs font-bold whitespace-nowrap">
                            {userVerdict && (
                              <span className={statementCorrect ? 'text-green-700' : 'text-red-600'}>
                                Twój: {userVerdict}
                              </span>
                            )}
                            {!statementCorrect && (
                              <span className="text-green-700">→ ✓ {correctVerdict}</span>
                            )}
                          </div>
                        </div>
                      )
                    })
                  ) : (
                    question.options.map((option) => {
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
                        style = 'border-dashed border-green-400 bg-green-50/50 text-green-800'
                        badge = (
                          <span className="ml-2 font-semibold text-xs whitespace-nowrap">
                            <span className="text-green-600">✓ poprawna</span>
                            <span className="text-orange-500"> · nie wybrano</span>
                          </span>
                        )
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
                    })
                  )}
                </div>

                {!isCorrect && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800">
                    <span className="font-semibold">Wyjaśnienie: </span>
                    {question.explanation}
                  </div>
                )}

                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between flex-wrap gap-2">
                  {/* Learn button — only for logged-in users on correctly answered questions */}
                  {user && isCorrect ? (
                    <LearnButton
                      questionId={question.id}
                      initialLearned={learnedIds.has(question.id)}
                    />
                  ) : <div />}
                  <ReportQuestionButton questionId={question.id} sessionId={params.sessionId} />
                </div>
              </div>
            )
          })}
        </div>

        <FeedbackWidget sessionId={params.sessionId} alreadySubmitted={feedbackSubmitted} />

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
