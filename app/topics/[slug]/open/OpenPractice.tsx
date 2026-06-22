'use client'

import { useState } from 'react'

type Question = {
  id: string
  question_text: string
  max_points: number
  key_points: string[]
  model_answer: string
  source: string | null
}

type Criterion = {
  text: string
  met: boolean
}

type EvalResult = {
  criteria: Criterion[]
  score: number
  maxPoints: number
  feedback: string
  modelAnswer: string
}

function ScoreBadge({ score, max }: { score: number; max: number }) {
  const pct = max > 0 ? score / max : 0
  const color = pct === 1
    ? 'bg-green-100 text-green-800 border-green-300'
    : pct >= 0.5
    ? 'bg-yellow-100 text-yellow-800 border-yellow-300'
    : 'bg-red-100 text-red-800 border-red-300'
  return (
    <span className={`inline-flex items-center font-bold text-lg px-4 py-1.5 rounded-full border ${color}`}>
      {score}/{max} pkt
    </span>
  )
}

export default function OpenPractice({ questions }: { questions: Question[] }) {
  // order = list of question indices to answer in current pass
  const [order, setOrder] = useState<number[]>(() => questions.map((_, i) => i))
  const [pos, setPos] = useState(0)
  const [skipped, setSkipped] = useState<Set<number>>(new Set())
  const [results, setResults] = useState<Map<number, EvalResult>>(new Map())
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showModel, setShowModel] = useState(false)
  const [reviewingSkipped, setReviewingSkipped] = useState(false)
  const [done, setDone] = useState(false)

  const qIdx = order[pos]
  const question = questions[qIdx]
  const result = results.get(qIdx) ?? null

  function advance() {
    const nextPos = pos + 1
    if (nextPos < order.length) {
      setPos(nextPos)
      setAnswer('')
      setShowModel(false)
    } else if (skipped.size > 0) {
      // Start reviewing skipped questions
      const skippedOrder = Array.from(skipped)
      setOrder(skippedOrder)
      setSkipped(new Set())
      setPos(0)
      setAnswer('')
      setShowModel(false)
      setReviewingSkipped(true)
    } else {
      setDone(true)
    }
  }

  function handleSkip() {
    const nextSkipped = new Set(Array.from(skipped))
    nextSkipped.add(qIdx)
    setSkipped(nextSkipped)
    const nextPos = pos + 1
    if (nextPos < order.length) {
      setPos(nextPos)
      setAnswer('')
      setShowModel(false)
      setError(null)
    } else if (nextSkipped.size > 0) {
      const skippedOrder = Array.from(nextSkipped)
      setOrder(skippedOrder)
      setSkipped(new Set())
      setPos(0)
      setAnswer('')
      setShowModel(false)
      setError(null)
      setReviewingSkipped(true)
    } else {
      setDone(true)
    }
  }

  async function handleEvaluate() {
    if (answer.trim().length < 5) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/evaluate-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questionId: question.id, studentAnswer: answer }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Błąd oceny')
      setResults(prev => new Map(prev).set(qIdx, data))
      setShowModel(false)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Coś poszło nie tak')
    } finally {
      setLoading(false)
    }
  }

  if (done) {
    const answered = Array.from(results.entries())
    const totalScore = answered.reduce((s, [, r]) => s + r.score, 0)
    const totalMax = answered.reduce((s, [, r]) => s + r.maxPoints, 0)
    return (
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 text-center">
        <div className="text-4xl mb-3">🎉</div>
        <h2 className="text-xl font-bold text-gray-900 mb-1">Wszystkie pytania ukończone!</h2>
        <p className="text-gray-500 text-sm mb-6">
          Łączny wynik: <strong>{totalScore}/{totalMax} pkt</strong> ({answered.length} pytań)
        </p>
        <button
          onClick={() => {
            setOrder(questions.map((_, i) => i))
            setPos(0)
            setSkipped(new Set())
            setResults(new Map())
            setAnswer('')
            setShowModel(false)
            setReviewingSkipped(false)
            setDone(false)
          }}
          className="px-6 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-lg hover:bg-violet-700"
        >
          Zacznij od nowa
        </button>
      </div>
    )
  }

  return (
    <div>
      {/* Review skipped banner */}
      {reviewingSkipped && (
        <div className="mb-4 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800 font-medium">
          Wracasz do pominiętych pytań ({order.length} {order.length === 1 ? 'pytanie' : 'pytania'})
        </div>
      )}

      {/* Progress */}
      <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
        <span>
          {reviewingSkipped ? 'Pominięte' : 'Pytanie'} {pos + 1} z {order.length}
          {skipped.size > 0 && (
            <span className="ml-2 text-xs text-amber-600 font-medium">
              · {skipped.size} pominięte
            </span>
          )}
        </span>
        <div className="flex gap-1.5">
          {order.map((qi, i) => {
            const r = results.get(qi)
            const isSkippedNow = skipped.has(qi)
            return (
              <div
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i === pos
                    ? 'bg-violet-600 w-4'
                    : r
                    ? 'bg-green-400 w-2'
                    : isSkippedNow
                    ? 'bg-amber-300 w-2'
                    : 'bg-gray-300 w-2'
                }`}
              />
            )
          })}
        </div>
      </div>

      {/* Question card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-4">
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span className="text-xs font-semibold bg-violet-100 text-violet-700 px-2.5 py-1 rounded-full">
            {question.max_points} {question.max_points === 1 ? 'punkt' : 'punkty'}
          </span>
          {question.source && (
            <span className="text-xs text-gray-400 border border-gray-200 px-2.5 py-1 rounded-full">
              {question.source}
            </span>
          )}
        </div>

        <p className="text-gray-900 text-base leading-relaxed whitespace-pre-wrap mb-5">
          {question.question_text}
        </p>

        {!result && (
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
              Twoja odpowiedź
            </label>
            <textarea
              value={answer}
              onChange={e => setAnswer(e.target.value)}
              rows={5}
              placeholder="Napisz pełną odpowiedź..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent resize-y"
            />
            <div className="flex items-center justify-between mt-3 gap-3">
              <button
                onClick={handleSkip}
                className="px-4 py-2.5 text-sm font-medium border border-gray-300 text-gray-600 rounded-lg hover:border-amber-400 hover:text-amber-700 hover:bg-amber-50 transition-all whitespace-nowrap"
              >
                Pomiń na razie
              </button>
              <div className="flex items-center gap-3 ml-auto">
                <span className="text-xs text-gray-400">{answer.trim().length} znaków</span>
                <button
                  onClick={handleEvaluate}
                  disabled={answer.trim().length < 5 || loading}
                  className="px-5 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-lg hover:bg-violet-700 disabled:bg-gray-200 disabled:text-gray-400 transition-all"
                >
                  {loading ? 'Oceniam...' : 'Sprawdź odpowiedź'}
                </button>
              </div>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
        )}
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-4 mb-4">
              <ScoreBadge score={result.score} max={result.maxPoints} />
              <p className="text-sm text-gray-600">{result.feedback}</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Kryteria oceniania</p>
              {result.criteria.map((c, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 rounded-lg px-4 py-3 text-sm ${
                    c.met
                      ? 'bg-green-50 border border-green-200 text-green-900'
                      : 'bg-red-50 border border-red-200 text-red-900'
                  }`}
                >
                  <span className="text-base mt-0.5 shrink-0">{c.met ? '✓' : '✗'}</span>
                  <span>{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Twoja odpowiedź</p>
            <p className="text-sm text-gray-700 whitespace-pre-wrap">{answer}</p>
          </div>

          {result.modelAnswer && (
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
              <button
                onClick={() => setShowModel(v => !v)}
                className="w-full text-left flex items-center justify-between text-sm font-semibold text-gray-600 hover:text-gray-900"
              >
                <span>Wzorcowa odpowiedź</span>
                <span className="text-gray-400">{showModel ? '▲' : '▼'}</span>
              </button>
              {showModel && (
                <p className="mt-3 text-sm text-gray-700 leading-relaxed whitespace-pre-wrap border-t border-gray-100 pt-3">
                  {result.modelAnswer}
                </p>
              )}
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button
              onClick={() => setResults(prev => { const m = new Map(prev); m.delete(qIdx); return m })}
              className="px-4 py-2.5 text-sm border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50"
            >
              Popraw odpowiedź
            </button>
            <button
              onClick={advance}
              className="flex-1 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-lg hover:bg-violet-700"
            >
              {pos + 1 < order.length
                ? 'Następne pytanie →'
                : skipped.size > 0
                ? `Wróć do pominiętych (${skipped.size}) →`
                : 'Zakończ'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
