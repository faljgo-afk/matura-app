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
    ? 'bg-leaf text-brand-deep'
    : pct >= 0.5
    ? 'bg-sun text-brand-deep'
    : 'bg-candy text-brand-deep'
  return (
    <span className={`inline-flex items-center font-mono font-semibold text-lg px-4 py-1.5 rounded-full border-2 border-brand-deep ${color}`}>
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
      <div className="card-game !rounded-[24px] !shadow-hard-lg p-8 text-center">
        <h2 className="font-display font-bold text-3xl mb-1">Wszystkie pytania ukończone!</h2>
        <p className="text-muted text-lg mb-6">
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
          className="btn btn-sun"
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
        <div className="mb-4 bg-amberx-bg border-2 border-amberx rounded-2xl px-4 py-3 text-sm text-amberx font-bold">
          Wracasz do pominiętych pytań ({order.length} {order.length === 1 ? 'pytanie' : 'pytania'})
        </div>
      )}

      {/* Progress */}
      <div className="flex items-center justify-between gap-3 mb-4 font-display font-semibold text-lg">
        <span>
          {reviewingSkipped ? 'Pominięte' : 'Pytanie'} {pos + 1} z {order.length}
          {skipped.size > 0 && (
            <span className="ml-2 text-xs text-amberx font-bold font-sans">
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
                className={`h-3.5 rounded-full border-2 border-brand-deep transition-all ${
                  i === pos
                    ? 'bg-sun w-6'
                    : r
                    ? 'bg-leaf w-3.5'
                    : isSkippedNow
                    ? 'bg-candy w-3.5'
                    : 'bg-white w-3.5'
                }`}
              />
            )
          })}
        </div>
      </div>

      {/* Question card */}
      <div className="card-game !rounded-[24px] !shadow-hard-lg p-5 sm:p-8 mb-4">
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span className="pill bg-[#e3dcff] text-[#3b2a9e]">
            {question.max_points} {question.max_points === 1 ? 'punkt' : 'punkty'}
          </span>
          {question.source && (
            <span className="pill border-2 border-line text-muted bg-white">
              {question.source}
            </span>
          )}
        </div>

        <p className="font-display font-semibold text-xl sm:text-2xl leading-snug whitespace-pre-wrap mb-5">
          {question.question_text}
        </p>

        {!result && (
          <div>
            <label htmlFor="open-answer" className="field-label uppercase tracking-wider text-xs text-muted">
              Twoja odpowiedź
            </label>
            <textarea
              id="open-answer"
              value={answer}
              onChange={e => setAnswer(e.target.value)}
              rows={5}
              placeholder="Napisz pełną odpowiedź..."
              className="field resize-y"
            />
            {loading ? (
              <div className="mt-4 flex items-center gap-4 bg-[#eee9ff] border-2 border-grape rounded-2xl px-5 py-4">
                <div className="flex gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 bg-grape rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-2.5 h-2.5 bg-grape rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-2.5 h-2.5 bg-grape rounded-full animate-bounce" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-[#3b2a9e]">AI ocenia odpowiedź...</p>
                  <p className="text-xs font-semibold text-muted mt-0.5">Porównuję z kryteriami oceniania CKE</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between mt-3 gap-3">
                <button
                  onClick={handleSkip}
                  className="btn btn-ghost btn-sm whitespace-nowrap"
                >
                  Pomiń na razie
                </button>
                <div className="flex items-center gap-3 ml-auto">
                  <span className="text-xs font-bold text-muted">{answer.trim().length} znaków</span>
                  <button
                    onClick={handleEvaluate}
                    disabled={answer.trim().length < 5}
                    className="btn bg-grape text-white hover:brightness-110"
                  >
                    Sprawdź odpowiedź
                  </button>
                </div>
              </div>
            )}
            {error && <p role="alert" className="text-sm font-bold text-coral bg-coral-bg border-2 border-coral rounded-2xl px-4 py-2.5 mt-3">{error}</p>}
          </div>
        )}
      </div>

      {/* Results */}
      {result && (
        <div className="flex flex-col gap-5">
          <div className="card-game !rounded-[20px] p-5 sm:p-6">
            <div className="flex items-center gap-4 mb-4">
              <ScoreBadge score={result.score} max={result.maxPoints} />
              <p className="text-[15px] font-semibold">{result.feedback}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-extrabold text-muted uppercase tracking-wider">Kryteria oceniania</p>
              {result.criteria.map((c, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 rounded-2xl border-2 px-4 py-3 text-[15px] font-semibold ${
                    c.met
                      ? 'bg-mint border-brand text-brand-deep'
                      : 'bg-coral-bg border-coral text-coral'
                  }`}
                >
                  <span className="text-base font-black shrink-0" aria-label={c.met ? 'Spełnione' : 'Niespełnione'}>{c.met ? '✓' : '✗'}</span>
                  <span>{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[20px] border-2 border-line p-5">
            <p className="text-xs font-extrabold text-muted uppercase tracking-wider mb-2">Twoja odpowiedź</p>
            <p className="text-[15px] whitespace-pre-wrap">{answer}</p>
          </div>

          {result.modelAnswer && (
            <div className="card-game !rounded-[18px] !shadow-hard p-5">
              <button
                aria-expanded={showModel}
                onClick={() => setShowModel(v => !v)}
                className="w-full text-left flex items-center justify-between font-extrabold hover:text-brand"
              >
                <span>Wzorcowa odpowiedź</span>
                <span className="text-muted">{showModel ? '▲' : '▼'}</span>
              </button>
              {showModel && (
                <p className="mt-3 text-[15px] leading-relaxed whitespace-pre-wrap border-t-2 border-dotted border-line pt-3">
                  {result.modelAnswer}
                </p>
              )}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => setResults(prev => { const m = new Map(prev); m.delete(qIdx); return m })}
              className="btn btn-ghost"
            >
              Popraw odpowiedź
            </button>
            <button
              onClick={advance}
              className="btn btn-sun flex-1"
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
