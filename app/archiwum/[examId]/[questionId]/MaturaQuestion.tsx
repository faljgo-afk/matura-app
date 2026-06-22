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

export default function MaturaQuestion({
  questionId,
  maxPoints,
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
    <div className="space-y-4">
      {/* Answer box */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2 block">
          Twoja odpowiedź
        </label>
        <textarea
          value={answer}
          onChange={e => setAnswer(e.target.value)}
          rows={5}
          placeholder="Napisz pełną odpowiedź..."
          disabled={!!result}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-y disabled:bg-gray-50 disabled:text-gray-500"
        />
        {!result && (
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-gray-400">{answer.trim().length} znaków</span>
            <button
              onClick={handleEvaluate}
              disabled={answer.trim().length < 5 || loading}
              className="px-5 py-2.5 bg-amber-500 text-white text-sm font-semibold rounded-lg hover:bg-amber-600 disabled:bg-gray-200 disabled:text-gray-400 transition-all"
            >
              {loading ? 'Oceniam...' : 'Sprawdź odpowiedź'}
            </button>
          </div>
        )}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>

      {/* Results */}
      {result && (
        <>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-4 mb-4">
              <ScoreBadge score={result.score} max={result.maxPoints} />
              <p className="text-sm text-gray-600">{result.feedback}</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                Kryteria oceniania CKE
              </p>
              {result.criteria.map((c, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 rounded-lg px-4 py-3 text-sm ${
                    c.met
                      ? 'bg-green-50 border border-green-200 text-green-900'
                      : 'bg-red-50 border border-red-200 text-red-900'
                  }`}
                >
                  <span className="shrink-0 mt-0.5">{c.met ? '✓' : '✗'}</span>
                  <span>{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          {modelAnswer && (
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
              <button
                onClick={() => setShowModel(v => !v)}
                className="w-full text-left flex items-center justify-between text-sm font-semibold text-gray-600 hover:text-gray-900"
              >
                <span>Przykładowa odpowiedź z klucza CKE</span>
                <span className="text-gray-400">{showModel ? '▲' : '▼'}</span>
              </button>
              {showModel && (
                <p className="mt-3 text-sm text-gray-700 leading-relaxed whitespace-pre-wrap border-t border-gray-100 pt-3">
                  {modelAnswer}
                </p>
              )}
            </div>
          )}

          <button
            onClick={() => { setResult(null); setAnswer(''); setShowModel(false) }}
            className="w-full py-2.5 text-sm border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50"
          >
            Spróbuj jeszcze raz
          </button>
        </>
      )}
    </div>
  )
}
