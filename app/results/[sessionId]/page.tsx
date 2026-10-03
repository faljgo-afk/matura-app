import { supabase } from '@/lib/supabase'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { createClient } from '@/lib/supabase-server'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import LearnButton from '@/components/LearnButton'
import BackButton from '@/components/BackButton'
import FeedbackWidget from '@/components/FeedbackWidget'
import ReportQuestionButton from '@/components/ReportQuestionButton'
import Mascot from '@/components/Mascot'

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

  const ringColor = percent >= 75 ? '#ffd23f' : percent >= 50 ? '#35c4e0' : '#ff7aa8'
  const heading =
    percent >= 75 ? 'Świetny wynik! Dobra robota.' :
    percent >= 50 ? 'Nieźle, ale jest pole do poprawy.' :
    'Warto powtórzyć ten temat.'
  const wrongCount = questions.filter(q => {
    const ua = answers[q.id] ?? []
    return !(ua.length === q.correct_answer.length && q.correct_answer.every(id => ua.includes(id)))
  }).length

  return (
    <main className="bg-canvas">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-8 sm:py-10 flex flex-col gap-8">

        <BackButton />

        {/* Score summary */}
        <section className="relative overflow-hidden rounded-[26px] border-2 border-brand-deep shadow-hard-lg mb-2 text-white bg-gradient-to-br from-[#0b5a33] to-[#12803f] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
          <div
            className="w-[168px] h-[168px] rounded-full shrink-0 border-2 border-brand-deep flex items-center justify-center"
            style={{ background: `conic-gradient(${ringColor} ${percent}%, rgba(255,255,255,.2) 0)` }}
          >
            <div className="w-[132px] h-[132px] rounded-full bg-[#0b5a33] flex flex-col items-center justify-center">
              <div className="font-display font-bold text-5xl leading-none">{percent}%</div>
              <div className="font-mono text-sm text-mint mt-1">{score} / {maxScore}</div>
            </div>
          </div>
          <div className="relative flex-1 text-center sm:text-left">
            <div className="text-sm font-extrabold uppercase tracking-wider text-sun">Twój wynik</div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl leading-tight mt-1">{heading}</h1>
            <p className="text-[#e9fbe0] mt-2">
              {score} / {maxScore} poprawnych odpowiedzi
              {wrongCount > 0 && <> · {wrongCount} do poprawy</>}
            </p>
          </div>
          <div className="hidden lg:block shrink-0 pointer-events-none">
            <Mascot width={190} />
          </div>
        </section>

        {/* Question review */}
        <h2 className="font-display font-bold text-3xl">Przegląd odpowiedzi</h2>
        <div className="flex flex-col gap-6">
          {questions.map((question, index) => {
            const userAnswer = answers[question.id] ?? []
            const correct = question.correct_answer
            const isCorrect =
              userAnswer.length === correct.length &&
              correct.every(id => userAnswer.includes(id))

            return (
              <article
                key={question.id}
                className={`card-game !rounded-[20px] p-5 sm:p-6 ${isCorrect ? '' : '!border-coral !shadow-[0_3px_0_#c93a2b]'}`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <span
                    className={`shrink-0 w-9 h-9 rounded-xl border-2 flex items-center justify-center font-black ${
                      isCorrect ? 'bg-brand text-white border-brand-deep' : 'bg-coral text-white border-coral'
                    }`}
                    aria-label={isCorrect ? 'Poprawnie' : 'Błędnie'}
                  >
                    {isCorrect ? '✓' : '✗'}
                  </span>
                  <p className="font-display font-semibold text-xl leading-snug pt-0.5">
                    {index + 1}. {question.question_text}
                  </p>
                </div>

                {question.image_url && (
                  <div className="mb-4 rounded-2xl overflow-hidden border-2 border-line bg-canvas">
                    <img
                      src={question.image_url}
                      alt="Ilustracja do pytania"
                      className="w-full max-h-52 object-contain p-2"
                    />
                  </div>
                )}

                <div className="flex flex-col gap-2 mb-4">
                  {question.question_type === 'true_false' && correct.some((c: string) => c.includes('-')) ? (
                    question.options.map((option) => {
                      const correctVerdict = correct.find((c: string) => c.startsWith(option.id + '-'))?.split('-')[1] ?? ''
                      const userVerdict = userAnswer.find((a: string) => a.startsWith(option.id + '-'))?.split('-')[1] ?? null
                      const statementCorrect = userVerdict === correctVerdict

                      let style = 'border-line bg-white text-muted'
                      if (userVerdict) {
                        style = statementCorrect
                          ? 'border-brand bg-mint text-brand-deep'
                          : 'border-coral bg-coral-bg text-coral'
                      }

                      return (
                        <div key={option.id} className={`px-4 py-3 rounded-2xl border-2 text-[15px] font-semibold flex items-center justify-between gap-3 ${style}`}>
                          <span>
                            <span className="font-extrabold mr-1">{option.id}.</span>
                            {option.text}
                          </span>
                          <div className="flex items-center gap-1.5 shrink-0 text-xs font-extrabold whitespace-nowrap">
                            {userVerdict && (
                              <span>Twój: {userVerdict}</span>
                            )}
                            {!statementCorrect && (
                              <span className="text-brand">→ ✓ {correctVerdict}</span>
                            )}
                          </div>
                        </div>
                      )
                    })
                  ) : (
                    question.options.map((option) => {
                      const userPicked = userAnswer.includes(option.id)
                      const isCorrectOption = correct.includes(option.id)

                      let style = 'border-line bg-white text-muted'
                      let badge: React.ReactNode = null

                      if (userPicked && isCorrectOption) {
                        style = 'border-brand bg-mint text-brand-deep'
                        badge = <span className="text-brand font-extrabold text-xs whitespace-nowrap">✓ poprawna · Twój wybór</span>
                      } else if (userPicked && !isCorrectOption) {
                        style = 'border-coral bg-coral-bg text-coral'
                        badge = <span className="text-coral font-extrabold text-xs whitespace-nowrap">✗ Twój wybór (błędna)</span>
                      } else if (!userPicked && isCorrectOption) {
                        style = 'border-dashed border-amberx bg-white text-ink'
                        badge = (
                          <span className="font-extrabold text-xs whitespace-nowrap">
                            <span className="text-brand">✓ poprawna</span>
                            <span className="text-amberx"> · nie wybrano</span>
                          </span>
                        )
                      }

                      return (
                        <div key={option.id} className={`px-4 py-3 rounded-2xl border-2 text-[15px] font-semibold flex items-center justify-between gap-3 ${style}`}>
                          <span>
                            <span className="font-extrabold mr-1">{option.id}.</span>
                            {option.text}
                          </span>
                          {badge}
                        </div>
                      )
                    })
                  )}
                </div>

                {!isCorrect && (
                  <div className="rounded-2xl border-2 border-dashed border-aqua bg-[#eaf9f8] p-4 text-[15px] text-ink">
                    <span className="font-extrabold">Wyjaśnienie: </span>
                    {question.explanation}
                  </div>
                )}

                <div className="mt-4 pt-3 border-t-2 border-dotted border-line flex items-center justify-between flex-wrap gap-2">
                  {/* Learn button — only for logged-in users on correctly answered questions */}
                  {user && isCorrect ? (
                    <LearnButton
                      questionId={question.id}
                      initialLearned={learnedIds.has(question.id)}
                    />
                  ) : <div />}
                  <ReportQuestionButton questionId={question.id} sessionId={params.sessionId} />
                </div>
              </article>
            )
          })}
        </div>

        <FeedbackWidget sessionId={params.sessionId} alreadySubmitted={feedbackSubmitted} />

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn btn-ghost flex-1">
            Wybierz inny temat
          </Link>
          {topicSlug ? (
            <Link href={`/topics/${topicSlug}`} className="btn btn-sun flex-1">
              Spróbuj ponownie
            </Link>
          ) : (
            <Link href="/mock-exam" className="btn btn-sun flex-1">
              Nowy sprawdzian
            </Link>
          )}
        </div>

      </div>
    </main>
  )
}
