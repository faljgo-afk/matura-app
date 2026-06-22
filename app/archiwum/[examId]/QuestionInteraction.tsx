'use client'

import { useState } from 'react'

type Question = {
  id: string
  zadanie_number: string
  question_type: string
  max_points: number
  num_statements: number | null
  correct_answer: Record<string, unknown> | null
  key_points: string[]
  model_answer: string | null
}

type EvalResult = {
  criteria: { text: string; met: boolean }[]
  score: number
  maxPoints: number
  feedback: string
  modelAnswer: string
}

function ScoreBadge({ score, max }: { score: number; max: number }) {
  const pct = max > 0 ? score / max : 0
  const color =
    pct === 1
      ? 'bg-green-100 text-green-800 border-green-300'
      : pct >= 0.5
      ? 'bg-yellow-100 text-yellow-800 border-yellow-300'
      : 'bg-red-100 text-red-800 border-red-300'
  return (
    <span className={`inline-flex items-center font-bold text-base px-3 py-1 rounded-full border ${color}`}>
      {score}/{max} pkt
    </span>
  )
}

// ─── Single choice ─────────────────────────────────────────────────────────────
function SingleChoice({ question, onReset }: { question: Question; onReset: () => void }) {
  const [selected, setSelected] = useState<string | null>(null)
  const correct = (question.correct_answer as { letter: string })?.letter

  // Determine option labels: standard A-D or compound like A,B1,B2,C
  const isCompound = correct && correct.length > 1
  const options = isCompound
    ? ['A', 'B1', 'B2', 'C', 'D'].filter(o => o.length === correct.length || !o.includes('1') && !o.includes('2'))
    : ['A', 'B', 'C', 'D']

  function handleSelect(opt: string) {
    if (selected) return
    setSelected(opt)
  }

  function getColor(opt: string) {
    if (!selected) return 'border-gray-300 hover:border-amber-400 hover:bg-amber-50 cursor-pointer'
    if (opt === correct) return 'border-green-500 bg-green-50 text-green-800 font-semibold'
    if (opt === selected && opt !== correct) return 'border-red-400 bg-red-50 text-red-700'
    return 'border-gray-200 text-gray-400'
  }

  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Wybierz odpowiedź</p>
      <div className="flex gap-2 flex-wrap">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => handleSelect(opt)}
            className={`w-12 h-12 rounded-xl border-2 text-sm font-bold transition-all ${getColor(opt)}`}
          >
            {opt}
          </button>
        ))}
      </div>
      {selected && (
        <div className={`rounded-lg px-4 py-3 text-sm font-medium ${
          selected === correct ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
        }`}>
          {selected === correct
            ? `✓ Poprawnie! Odpowiedź: ${correct}`
            : `✗ Niepoprawnie. Poprawna odpowiedź: ${correct}`}
        </div>
      )}
      {selected && (
        <button onClick={onReset} className="w-full py-2 text-sm border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50">
          Spróbuj jeszcze raz
        </button>
      )}
    </div>
  )
}

// ─── Multiple choice ───────────────────────────────────────────────────────────
function MultipleChoice({ question, onReset }: { question: Question; onReset: () => void }) {
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [checked, setChecked] = useState(false)
  const correct = new Set<string>((question.correct_answer as { letters: string[] })?.letters ?? [])

  function toggle(opt: string) {
    if (checked) return
    setSelected(prev => {
      const next = new Set(Array.from(prev))
      if (next.has(opt)) { next.delete(opt) } else { next.add(opt) }
      return next
    })
  }

  function getColor(opt: string) {
    if (!checked) return selected.has(opt)
      ? 'border-amber-500 bg-amber-50 font-semibold cursor-pointer'
      : 'border-gray-300 hover:border-amber-400 cursor-pointer'
    if (correct.has(opt)) return 'border-green-500 bg-green-50 text-green-800 font-semibold'
    if (selected.has(opt)) return 'border-red-400 bg-red-50 text-red-700'
    return 'border-gray-200 text-gray-400'
  }

  const score = checked
    ? (() => {
        const tp = Array.from(selected).filter(x => correct.has(x)).length
        const fp = Array.from(selected).filter(x => !correct.has(x)).length
        return Math.max(0, tp - fp)
      })()
    : 0

  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Zaznacz wszystkie poprawne</p>
      <div className="flex gap-2 flex-wrap">
        {['A', 'B', 'C', 'D', 'E'].slice(0, 4).map(opt => (
          <button
            key={opt}
            onClick={() => toggle(opt)}
            className={`w-12 h-12 rounded-xl border-2 text-sm font-bold transition-all ${getColor(opt)}`}
          >
            {opt}
          </button>
        ))}
      </div>
      {!checked ? (
        <button
          onClick={() => setChecked(true)}
          disabled={selected.size === 0}
          className="w-full py-2.5 text-sm font-semibold bg-amber-500 text-white rounded-lg hover:bg-amber-600 disabled:bg-gray-200 disabled:text-gray-400"
        >
          Sprawdź
        </button>
      ) : (
        <>
          <div className={`rounded-lg px-4 py-3 text-sm font-medium ${
            score === question.max_points ? 'bg-green-50 text-green-800' : 'bg-yellow-50 text-yellow-800'
          }`}>
            <ScoreBadge score={score} max={question.max_points} />
            <span className="ml-3">Poprawne: {Array.from(correct).join(', ')}</span>
          </div>
          <button onClick={onReset} className="w-full py-2 text-sm border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50">
            Spróbuj jeszcze raz
          </button>
        </>
      )}
    </div>
  )
}

// ─── True/False ────────────────────────────────────────────────────────────────
function TrueFalse({ question, onReset }: { question: Question; onReset: () => void }) {
  const pattern = (question.correct_answer as { pattern: string[] })?.pattern ?? []
  const count = question.num_statements ?? pattern.length
  const [answers, setAnswers] = useState<(string | null)[]>(Array(count).fill(null))
  const [checked, setChecked] = useState(false)

  function setAnswer(i: number, val: string) {
    if (checked) return
    setAnswers(prev => prev.map((v, j) => j === i ? val : v))
  }

  const score = checked
    ? answers.filter((a, i) => a === pattern[i]).length
    : 0

  // Scale score to max_points (e.g. 3 statements but max 2 pts)
  const scaledScore = checked
    ? Math.round((score / count) * question.max_points)
    : 0

  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Oceń stwierdzenia</p>
      <div className="space-y-2">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-sm text-gray-500 w-24 shrink-0">Stwierdzenie {i + 1}.</span>
            <div className="flex gap-2">
              {(['P', 'F'] as const).map(val => {
                const label = val === 'P' ? 'Prawda' : 'Fałsz'
                const isSelected = answers[i] === val
                const isCorrect = checked && pattern[i] === val
                const isWrong = checked && answers[i] === val && pattern[i] !== val
                return (
                  <button
                    key={val}
                    onClick={() => setAnswer(i, val)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg border-2 transition-all ${
                      isCorrect
                        ? 'border-green-500 bg-green-50 text-green-800'
                        : isWrong
                        ? 'border-red-400 bg-red-50 text-red-700'
                        : isSelected
                        ? 'border-amber-500 bg-amber-50 text-amber-800'
                        : 'border-gray-300 text-gray-600 hover:border-amber-400 cursor-pointer'
                    }`}
                  >
                    {label}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
      {!checked ? (
        <button
          onClick={() => setChecked(true)}
          disabled={answers.some(a => a === null)}
          className="w-full py-2.5 text-sm font-semibold bg-amber-500 text-white rounded-lg hover:bg-amber-600 disabled:bg-gray-200 disabled:text-gray-400"
        >
          Sprawdź
        </button>
      ) : (
        <>
          <div className={`rounded-lg px-4 py-3 text-sm ${
            scaledScore === question.max_points ? 'bg-green-50 text-green-800' : 'bg-yellow-50 text-yellow-800'
          }`}>
            <ScoreBadge score={scaledScore} max={question.max_points} />
            <span className="ml-3">{score}/{count} stwierdzeń poprawnie</span>
          </div>
          <button onClick={onReset} className="w-full py-2 text-sm border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50">
            Spróbuj jeszcze raz
          </button>
        </>
      )}
    </div>
  )
}

// ─── Open question ─────────────────────────────────────────────────────────────
function OpenQuestion({ question, onReset }: { question: Question; onReset: () => void }) {
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
        body: JSON.stringify({ questionId: question.id, studentAnswer: answer }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Błąd oceny')
      setResult(data)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Coś poszło nie tak')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-3">
      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide block">
        Twoja odpowiedź
      </label>
      <textarea
        value={answer}
        onChange={e => setAnswer(e.target.value)}
        rows={5}
        placeholder="Napisz odpowiedź..."
        disabled={!!result}
        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-y disabled:bg-gray-50 disabled:text-gray-500"
      />
      {!result && (
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">{answer.trim().length} znaków</span>
          <button
            onClick={handleEvaluate}
            disabled={answer.trim().length < 5 || loading}
            className="px-4 py-2 bg-amber-500 text-white text-sm font-semibold rounded-lg hover:bg-amber-600 disabled:bg-gray-200 disabled:text-gray-400 transition-all"
          >
            {loading ? 'Oceniam...' : 'Sprawdź odpowiedź'}
          </button>
        </div>
      )}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {result && (
        <div className="space-y-3">
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex items-center gap-3 mb-3">
              <ScoreBadge score={result.score} max={result.maxPoints} />
              <p className="text-sm text-gray-600">{result.feedback}</p>
            </div>
            <div className="space-y-2">
              {result.criteria.map((c, i) => (
                <div key={i} className={`flex items-start gap-2 rounded-lg px-3 py-2 text-sm ${
                  c.met ? 'bg-green-50 border border-green-200 text-green-900' : 'bg-red-50 border border-red-200 text-red-900'
                }`}>
                  <span className="shrink-0">{c.met ? '✓' : '✗'}</span>
                  <span>{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          {result.modelAnswer && (
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <button
                onClick={() => setShowModel(v => !v)}
                className="w-full text-left flex items-center justify-between text-sm font-semibold text-gray-600 hover:text-gray-900"
              >
                <span>Przykładowa odpowiedź z klucza CKE</span>
                <span className="text-gray-400">{showModel ? '▲' : '▼'}</span>
              </button>
              {showModel && (
                <p className="mt-2 text-sm text-gray-700 leading-relaxed whitespace-pre-wrap border-t border-gray-100 pt-2">
                  {result.modelAnswer}
                </p>
              )}
            </div>
          )}

          <button
            onClick={() => { setResult(null); setAnswer(''); setShowModel(false); onReset() }}
            className="w-full py-2 text-sm border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50"
          >
            Spróbuj jeszcze raz
          </button>
        </div>
      )}
    </div>
  )
}

// ─── Main export ───────────────────────────────────────────────────────────────
export default function QuestionInteraction({ question }: { question: Question }) {
  const [key, setKey] = useState(0)
  function reset() { setKey(k => k + 1) }

  return (
    <div key={key}>
      {question.question_type === 'single' && <SingleChoice question={question} onReset={reset} />}
      {question.question_type === 'multiple' && <MultipleChoice question={question} onReset={reset} />}
      {question.question_type === 'true_false' && <TrueFalse question={question} onReset={reset} />}
      {question.question_type === 'open' && <OpenQuestion question={question} onReset={reset} />}
    </div>
  )
}
