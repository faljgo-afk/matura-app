'use client'

import { useState } from 'react'

type Criterion = { text: string; met: boolean }

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
    ? 'bg-leaf text-brand-deep border-brand-deep'
    : pct >= 0.5
    ? 'bg-sun text-brand-deep border-brand-deep'
    : 'bg-candy text-brand-deep border-brand-deep'
  return (
    <span className={`inline-flex items-center font-mono font-semibold text-lg px-4 py-1.5 rounded-full border-2 ${color}`}>
      {score}/{max} pkt
    </span>
  )
}

export default function MaturaQuestion({
  questionId,
  modelAnswer,
}: {
  questionId: string
  maxPoints: number
  modelAnswer: string
}) {
  const [answer, setAnswer] = useState('')
  const [result, setResult] = useState<EvalResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showModel, setShowModel] = useState(false)

  async function handleEvaluate() {
    if (answer.trim().length < 5) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/evaluate-matura', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questionId, studentAnswer: answer }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Błąd oceny')
      setResult(data)
      setShowModel(false)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Coś poszło nie tak')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Answer box */}
      <div className="card-game !rounded-[20px] !shadow-hard p-5">
        <label htmlFor="matura-answer" className="field-label uppercase tracking-wider text-xs text-muted">
          Twoja odpowiedź
        </label>
        <textarea
          id="matura-answer"
          value={answer}
          onChange={e => setAnswer(e.target.value)}
          rows={5}
          placeholder="Napisz pełną odpowiedź..."
          disabled={!!result}
          className="field resize-y disabled:bg-canvas disabled:text-muted"
        />
        {!result && (
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs font-bold text-muted">{answer.trim().length} znaków</span>
            <button
              onClick={handleEvaluate}
              disabled={answer.trim().length < 5 || loading}
              className="btn btn-sun"
            >
              {loading ? 'Oceniam...' : 'Sprawdź odpowiedź'}
            </button>
          </div>
        )}
        {error && <p role="alert" className="text-sm font-bold text-coral bg-coral-bg border-2 border-coral rounded-2xl px-4 py-2.5 mt-3">{error}</p>}
      </div>

      {/* Results */}
      {result && (
        <>
          <div className="card-game !rounded-[20px] !shadow-hard p-5 sm:p-6">
            <div className="flex items-center gap-4 mb-4">
              <ScoreBadge score={result.score} max={result.maxPoints} />
              <p className="text-[15px] font-semibold">{result.feedback}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-extrabold text-muted uppercase tracking-wider">
                Kryteria oceniania CKE
              </p>
              {result.criteria.map((c, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 rounded-2xl border-2 px-4 py-3 text-[15px] font-semibold ${
                    c.met
                      ? 'bg-mint border-brand text-brand-deep'
                      : 'bg-coral-bg border-coral text-coral'
                  }`}
                >
                  <span className="shrink-0 mt-0.5">{c.met ? '✓' : '✗'}</span>
                  <span>{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          {modelAnswer && (
            <div className="card-game !rounded-[20px] !shadow-hard p-5">
              <button
                onClick={() => setShowModel(v => !v)}
                className="w-full text-left flex items-center justify-between font-extrabold hover:text-brand"
              >
                <span>Przykładowa odpowiedź z klucza CKE</span>
                <span className="text-muted">{showModel ? '▲' : '▼'}</span>
              </button>
              {showModel && (
                <p className="mt-3 text-[15px] leading-relaxed whitespace-pre-wrap border-t-2 border-dotted border-line pt-3">
                  {modelAnswer}
                </p>
              )}
            </div>
          )}

          <button
            onClick={() => { setResult(null); setAnswer(''); setShowModel(false) }}
            className="btn btn-ghost w-full"
          >
            Spróbuj jeszcze raz
          </button>
        </>
      )}
    </div>
  )
}
