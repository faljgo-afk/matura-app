'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'

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
  image_url?: string | null
}

type Answers = Record<string, string[]>

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0')
  const s = (seconds % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

export default function TestScreen({
  sessionId,
  questions,
  timeLimit,
  reviewQuestionIds = [],
}: {
  sessionId: string
  questions: Question[]
  timeLimit?: number
  reviewQuestionIds?: string[]
}) {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [submitting, setSubmitting] = useState(false)
  const [timeLeft, setTimeLeft] = useState(timeLimit ?? null)
  const router = useRouter()

  const reviewSet = new Set(reviewQuestionIds)

  const handleSubmit = useCallback(async (finalAnswers: Answers) => {
    if (submitting) return
    setSubmitting(true)
    try {
      const res = await fetch('/api/submit-answers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, answers: finalAnswers }),
      })
      const data = await res.json()
      if (data.ok) {
        router.push(`/results/${sessionId}`)
      }
    } catch (e) {
      console.error(e)
      setSubmitting(false)
    }
  }, [sessionId, router, submitting])

  useEffect(() => {
    if (timeLeft === null) return
    if (timeLeft <= 0) {
      handleSubmit(answers)
      return
    }
    const interval = setInterval(() => {
      setTimeLeft(prev => (prev !== null ? prev - 1 : null))
    }, 1000)
    return () => clearInterval(interval)
  }, [timeLeft, answers, handleSubmit])

  const question = questions[current]
  const selected = answers[question.id] ?? []
  const isMultiple = question.question_type === 'multiple'
  const isTrueFalse = question.question_type === 'true_false'
  // New multi-statement format: options A/B/C with correct_answer ['A-P','B-F','C-P']
  // Old format: options T/F with correct_answer ['T'] or ['F']
  const isTrueFalseMulti = isTrueFalse && !question.options.some(o => o.id === 'T' || o.id === 'F')
  const isReview = reviewSet.has(question.id)

  function toggleOption(optionId: string) {
    const prev = answers[question.id] ?? []
    const next = isMultiple
      ? prev.includes(optionId) ? prev.filter(id => id !== optionId) : [...prev, optionId]
      : [optionId]
    setAnswers({ ...answers, [question.id]: next })
  }

  function getTrueFalseVerdict(optionId: string): 'P' | 'F' | null {
    const ans = answers[question.id] ?? []
    if (ans.includes(optionId + '-P')) return 'P'
    if (ans.includes(optionId + '-F')) return 'F'
    return null
  }

  function setTrueFalseVerdict(optionId: string, verdict: 'P' | 'F') {
    const prev = answers[question.id] ?? []
    const filtered = prev.filter(a => !a.startsWith(optionId + '-'))
    setAnswers({ ...answers, [question.id]: [...filtered, `${optionId}-${verdict}`] })
  }

  const answeredCount = questions.filter(q => {
    const ans = answers[q.id] ?? []
    const isMultiTF = q.question_type === 'true_false' && !q.options.some(o => o.id === 'T' || o.id === 'F')
    if (isMultiTF) {
      return q.options.every(opt => ans.some((a: string) => a.startsWith(opt.id + '-')))
    }
    return ans.length > 0
  }).length
  const isLast = current === questions.length - 1
  const canSubmit = answeredCount === questions.length
  const isTimeLow = timeLeft !== null && timeLeft < 300

  const typeLabel = isTrueFalseMulti
    ? 'P/F — oceń prawdziwość każdego stwierdzenia'
    : isMultiple
    ? 'Wybierz wszystkie poprawne odpowiedzi'
    : 'Wybierz jedną odpowiedź'
  const typePill = isTrueFalseMulti
    ? 'bg-amberx-bg text-amberx'
    : isMultiple
    ? 'bg-[#e3dcff] text-[#3b2a9e]'
    : 'bg-mint text-brand-deep'

  const submitLabel = submitting
    ? 'Sprawdzam...'
    : canSubmit
    ? 'Zakończ i sprawdź wyniki'
    : `Odpowiedz na wszystkie (${answeredCount}/${questions.length})`

  return (
    <main className="bg-canvas min-h-screen">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-6 sm:py-8 flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">

        <div className="flex-1 min-w-0 w-full flex flex-col gap-5">

          {/* Header: counter, segmented progress, timer */}
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="font-display font-semibold text-lg sm:text-xl whitespace-nowrap">
              Pytanie {current + 1} z {questions.length}
            </span>
            <div className="flex-1 flex gap-1" aria-hidden="true">
              {questions.map((q, i) => (
                <span
                  key={q.id}
                  className={`flex-1 h-3.5 rounded-full border-2 border-brand-deep ${
                    i <= current ? 'bg-leaf' : 'bg-white'
                  }`}
                />
              ))}
            </div>
            {timeLeft !== null && (
              <div
                className={`inline-flex items-center gap-2 font-mono font-semibold text-base sm:text-xl px-3 py-1 rounded-[12px] border-2 ${
                  isTimeLow
                    ? 'bg-coral-bg text-coral border-coral animate-pulse'
                    : 'bg-sun text-brand-deep border-brand-deep'
                }`}
                role="timer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                {formatTime(timeLeft)}
              </div>
            )}
          </div>

          {/* Review badge */}
          {isReview && (
            <div className="flex items-center gap-2 text-sm font-bold text-amberx bg-amberx-bg border-2 border-amberx rounded-2xl px-4 py-2">
              🔄 <span>Pytanie do powtórki — już je znasz, sprawdźmy czy nadal!</span>
            </div>
          )}

          {/* Question card */}
          <article className="card-game !rounded-[24px] !shadow-hard-lg p-5 sm:p-8 flex flex-col gap-5">
            <span className={`pill self-start ${typePill}`}>{typeLabel}</span>
            <h1 className="font-display font-semibold text-2xl sm:text-3xl leading-snug">{question.question_text}</h1>

            {question.image_url && (
              <div className="rounded-2xl overflow-hidden border-2 border-line bg-canvas">
                <img
                  src={question.image_url}
                  alt="Ilustracja do pytania"
                  className="w-full max-h-64 object-contain p-2"
                />
              </div>
            )}

            {isTrueFalseMulti ? (
              <div className="flex flex-col gap-3">
                {question.options.map((option) => {
                  const verdict = getTrueFalseVerdict(option.id)
                  return (
                    <div
                      key={option.id}
                      className={`flex items-center gap-3 px-4 py-3 rounded-2xl border-2 transition-colors ${
                        verdict ? 'border-brand-deep bg-[#fff4c2]' : 'border-line bg-white'
                      }`}
                    >
                      <span className="font-extrabold text-muted shrink-0">{option.id}.</span>
                      <span className="flex-1 font-semibold text-[15px] sm:text-base">{option.text}</span>
                      <div className="flex gap-2 shrink-0">
                        <button
                          onClick={() => setTrueFalseVerdict(option.id, 'P')}
                          aria-pressed={verdict === 'P'}
                          className={`w-11 h-11 font-black rounded-[12px] border-2 transition-colors ${
                            verdict === 'P'
                              ? 'border-brand-deep bg-brand text-white'
                              : 'border-line bg-white text-muted hover:border-brand hover:text-brand'
                          }`}
                        >P</button>
                        <button
                          onClick={() => setTrueFalseVerdict(option.id, 'F')}
                          aria-pressed={verdict === 'F'}
                          className={`w-11 h-11 font-black rounded-[12px] border-2 transition-colors ${
                            verdict === 'F'
                              ? 'border-coral bg-coral text-white'
                              : 'border-line bg-white text-muted hover:border-coral hover:text-coral'
                          }`}
                        >F</button>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {question.options.map((option) => {
                  const isSelected = selected.includes(option.id)
                  return (
                    <button
                      key={option.id}
                      onClick={() => toggleOption(option.id)}
                      aria-pressed={isSelected}
                      className={`w-full text-left flex items-center gap-4 px-4 py-3.5 min-h-[64px] rounded-[16px] border-2 mb-[3px] transition-transform active:translate-y-[2px] ${
                        isSelected
                          ? 'border-brand-deep bg-[#fff4c2] shadow-hard font-extrabold'
                          : 'border-line bg-white shadow-hard-line hover:border-brand font-semibold'
                      }`}
                    >
                      <span className={`shrink-0 w-[38px] h-[38px] rounded-xl border-2 flex items-center justify-center text-sm font-black ${
                        isSelected ? 'bg-sun text-brand-deep border-brand-deep' : 'bg-canvas text-muted border-line'
                      }`}>{option.id}</span>
                      <span className="flex-1 text-base sm:text-[17px]">{option.text}</span>
                    </button>
                  )
                })}
              </div>
            )}
          </article>

          {/* Navigation */}
          <div className="flex justify-between gap-3">
            <button
              onClick={() => setCurrent(c => c - 1)}
              disabled={current === 0}
              className="btn btn-ghost"
            >
              ← Wstecz
            </button>

            {!isLast ? (
              <button onClick={() => setCurrent(c => c + 1)} className="btn btn-primary flex-1 sm:flex-none sm:min-w-[200px]">
                Następne →
              </button>
            ) : (
              <button
                onClick={() => handleSubmit(answers)}
                disabled={!canSubmit || submitting}
                className="btn btn-sun flex-1 sm:flex-none"
              >
                {submitLabel}
              </button>
            )}
          </div>
        </div>

        {/* Question navigator */}
        <aside className="w-full lg:w-[300px] lg:shrink-0 flex flex-col gap-4">
          <div className="card-game p-5 flex flex-col gap-4">
            <div className="font-display font-semibold text-xl">Nawigator pytań</div>
            <div className="flex flex-wrap gap-2.5">
              {questions.map((q, i) => {
                const isReviewDot = reviewSet.has(q.id)
                const isAnswered = !!answers[q.id]
                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrent(i)}
                    aria-label={`Pytanie ${i + 1}`}
                    aria-current={i === current ? 'step' : undefined}
                    title={isReviewDot ? 'Powtórka' : undefined}
                    className={`w-11 h-11 rounded-[12px] border-2 font-mono font-semibold text-[15px] transition-colors ${
                      i === current
                        ? 'bg-sun text-brand-deep border-brand-deep'
                        : isAnswered
                        ? 'bg-brand text-white border-brand-deep'
                        : isReviewDot
                        ? 'bg-candy text-brand-deep border-brand-deep'
                        : 'bg-white text-muted border-line hover:border-brand'
                    }`}
                  >
                    {isReviewDot && !isAnswered && i !== current ? '↺' : i + 1}
                  </button>
                )
              })}
            </div>
            <div className="flex flex-col gap-1.5 text-sm font-semibold text-muted">
              <span className="flex items-center gap-2"><i className="w-3.5 h-3.5 rounded-[5px] bg-brand border-2 border-brand-deep" />Odpowiedziane: {answeredCount}/{questions.length}</span>
              <span className="flex items-center gap-2"><i className="w-3.5 h-3.5 rounded-[5px] bg-sun border-2 border-brand-deep" />Bieżące pytanie</span>
              <span className="flex items-center gap-2"><i className="w-3.5 h-3.5 rounded-[5px] bg-white border-2 border-line" />Bez odpowiedzi</span>
            </div>
          </div>

          <button
            onClick={() => handleSubmit(answers)}
            disabled={!canSubmit || submitting}
            className="btn btn-sun w-full"
          >
            {submitLabel}
          </button>
        </aside>

      </div>
    </main>
  )
}
