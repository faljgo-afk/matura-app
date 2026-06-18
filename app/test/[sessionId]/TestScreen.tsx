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
  const isReview = reviewSet.has(question.id)

  function toggleOption(optionId: string) {
    const prev = answers[question.id] ?? []
    const next = isMultiple
      ? prev.includes(optionId) ? prev.filter(id => id !== optionId) : [...prev, optionId]
      : [optionId]
    setAnswers({ ...answers, [question.id]: next })
  }

  const answeredCount = Object.keys(answers).length
  const isLast = current === questions.length - 1
  const canSubmit = answeredCount === questions.length
  const isTimeLow = timeLeft !== null && timeLeft < 300

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Header with timer */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs sm:text-sm text-gray-500">
            <span className="font-medium">{current + 1}/{questions.length}</span>
            <span className="hidden sm:inline"> &nbsp;·&nbsp; Odpowiedziano: {answeredCount}/{questions.length}</span>
            <span className="sm:hidden text-gray-400"> · {answeredCount} odp.</span>
          </div>
          {timeLeft !== null && (
            <div className={`font-mono font-bold text-base sm:text-lg px-2.5 py-1 rounded-lg ${
              isTimeLow ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-gray-100 text-gray-700'
            }`}>
              ⏱ {formatTime(timeLeft)}
            </div>
          )}
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-gray-200 rounded-full mb-6">
          <div
            className="h-2 bg-green-500 rounded-full transition-all"
            style={{ width: `${((current + 1) / questions.length) * 100}%` }}
          />
        </div>

        {/* Review badge */}
        {isReview && (
          <div className="mb-3 flex items-center gap-2 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
            🔄 <span>Pytanie do powtórki — już je znasz, sprawdźmy czy nadal!</span>
          </div>
        )}

        {/* Question */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-4">
          <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full mb-4 ${
            isMultiple
              ? 'bg-purple-100 text-purple-700'
              : 'bg-blue-100 text-blue-700'
          }`}>
            {isMultiple ? '☑ Wybierz wszystkie poprawne odpowiedzi' : '○ Wybierz jedną odpowiedź'}
          </div>
          <p className="text-lg font-medium text-gray-900 mb-6">{question.question_text}</p>

          <div className="space-y-3">
            {question.options.map((option) => {
              const isSelected = selected.includes(option.id)
              return (
                <button
                  key={option.id}
                  onClick={() => toggleOption(option.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                    isSelected
                      ? 'border-green-500 bg-green-50 text-green-800'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <span className="font-semibold mr-2">{option.id}.</span>
                  {option.text}
                </button>
              )
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          <button
            onClick={() => setCurrent(c => c - 1)}
            disabled={current === 0}
            className="px-5 py-3 rounded-lg border border-gray-300 text-gray-600 disabled:opacity-30 hover:bg-gray-50"
          >
            ← Wstecz
          </button>

          {!isLast && (
            <button
              onClick={() => setCurrent(c => c + 1)}
              className="flex-1 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700"
            >
              Następne →
            </button>
          )}

          {isLast && (
            <button
              onClick={() => handleSubmit(answers)}
              disabled={!canSubmit || submitting}
              className="flex-1 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 disabled:bg-gray-300 disabled:text-gray-400"
            >
              {submitting
                ? 'Sprawdzam...'
                : canSubmit
                ? 'Zakończ i sprawdź wyniki'
                : `Odpowiedz na wszystkie (${answeredCount}/${questions.length})`}
            </button>
          )}
        </div>

        {/* Question dots */}
        <div className="flex gap-1 sm:gap-1.5 mt-4 flex-wrap justify-center">
          {questions.map((q, i) => {
            const isReviewDot = reviewSet.has(q.id)
            return (
              <button
                key={q.id}
                onClick={() => setCurrent(i)}
                title={isReviewDot ? 'Powtórka' : undefined}
                className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full text-xs font-medium transition-all ${
                  i === current
                    ? 'bg-green-600 text-white'
                    : answers[q.id]
                    ? 'bg-green-200 text-green-800'
                    : isReviewDot
                    ? 'bg-amber-200 text-amber-800'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {isReviewDot && !answers[q.id] && i !== current ? '↺' : i + 1}
              </button>
            )
          })}
        </div>

      </div>
    </main>
  )
}
