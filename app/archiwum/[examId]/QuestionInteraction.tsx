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
      ? 'bg-leaf text-brand-deep border-brand-deep'
      : pct >= 0.5
      ? 'bg-sun text-brand-deep border-brand-deep'
      : 'bg-candy text-brand-deep border-brand-deep'
  return (
    <span className={`inline-flex items-center font-mono font-semibold text-base px-3 py-1 rounded-full border-2 ${color}`}>
      {score}/{max} pkt
    </span>
  )
}

// ─── Single choice ─────────────────────────────────────────────────────────────
function SingleChoice({ question }: { question: Question; onReset: () => void }) {
  const [selected, setSelected] = useState<string | null>(null)
  const [confirmed, setConfirmed] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const correct = (question.correct_answer as { letter: string })?.letter

  // Compound answer: letter + digit (e.g. 'C2') → generate grid from stored rows/cols
  const isCompound = correct ? /^[A-Z]\d$/.test(correct) : false
  const ca = question.correct_answer as { letter: string; rows?: number; cols?: number; num_options?: number }
  const options = isCompound
    ? Array.from({ length: ca.rows ?? 3 }, (_, i) => String.fromCharCode(65 + i))
        .flatMap(l => Array.from({ length: ca.cols ?? 3 }, (_, j) => l + (j + 1)))
    : Array.from({ length: ca.num_options ?? 4 }, (_, i) => String.fromCharCode(65 + i))

  const isCorrect = selected === correct

  function getColor(opt: string) {
    if (!confirmed) return selected === opt
      ? 'border-brand-deep bg-[#fff4c2] text-ink font-extrabold cursor-pointer'
      : 'border-line bg-white hover:border-brand cursor-pointer'
    if (isCorrect && opt === correct) return 'border-brand bg-mint text-brand-deep font-extrabold'
    if (!isCorrect && showAnswer && opt === correct) return 'border-brand bg-mint text-brand-deep font-extrabold'
    if (opt === selected && !isCorrect) return 'border-coral bg-coral-bg text-coral font-bold'
    return 'border-line bg-white text-muted'
  }

  return (
    <div className="space-y-3">
      <p className="text-xs font-extrabold text-muted uppercase tracking-wider">Wybierz odpowiedź</p>
      <div className="flex gap-2 flex-wrap">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => { if (!confirmed) setSelected(opt) }}
            className={`w-12 h-12 rounded-2xl border-2 text-base font-black transition-colors ${getColor(opt)}`}
          >
            {opt}
          </button>
        ))}
      </div>
      {!confirmed ? (
        <button
          onClick={() => setConfirmed(true)}
          disabled={!selected}
          className="btn btn-sun w-full"
        >
          Sprawdź
        </button>
      ) : selected === correct ? (
        <div className="rounded-2xl border-2 border-brand px-4 py-3 text-sm font-extrabold bg-mint text-brand-deep">
          ✓ Poprawnie! Odpowiedź: {correct}
        </div>
      ) : (
        <>
          <div className="rounded-2xl border-2 border-coral px-4 py-3 text-sm font-extrabold bg-coral-bg text-coral">
            ✗ Niepoprawnie. Spróbuj jeszcze raz.
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => { setSelected(null); setConfirmed(false) }}
              className="btn btn-ghost btn-sm flex-1"
            >
              Spróbuj jeszcze raz
            </button>
            <button
              onClick={() => setShowAnswer(true)}
              className="btn btn-ghost btn-sm whitespace-nowrap"
            >
              Pokaż odpowiedź
            </button>
          </div>
        </>
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
      ? 'border-brand-deep bg-[#fff4c2] font-extrabold cursor-pointer'
      : 'border-line bg-white hover:border-brand cursor-pointer'
    if (correct.has(opt)) return 'border-brand bg-mint text-brand-deep font-extrabold'
    if (selected.has(opt)) return 'border-coral bg-coral-bg text-coral font-bold'
    return 'border-line bg-white text-muted'
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
      <p className="text-xs font-extrabold text-muted uppercase tracking-wider">Zaznacz wszystkie poprawne</p>
      <div className="flex gap-2 flex-wrap">
        {Array.from({ length: (question.correct_answer as { letters?: string[]; num_options?: number })?.num_options ?? 4 }, (_, i) => String.fromCharCode(65 + i)).map(opt => (
          <button
            key={opt}
            onClick={() => toggle(opt)}
            className={`w-12 h-12 rounded-2xl border-2 text-base font-black transition-colors ${getColor(opt)}`}
          >
            {opt}
          </button>
        ))}
      </div>
      {!checked ? (
        <button
          onClick={() => setChecked(true)}
          disabled={selected.size === 0}
          className="btn btn-sun w-full"
        >
          Sprawdź
        </button>
      ) : (
        <>
          <div className={`rounded-2xl border-2 border-brand-deep px-4 py-3 text-sm font-bold ${
            score === question.max_points ? 'bg-mint text-brand-deep' : 'bg-amberx-bg text-amberx'
          }`}>
            <ScoreBadge score={score} max={question.max_points} />
            <span className="ml-3">Poprawne: {Array.from(correct).join(', ')}</span>
          </div>
          <button onClick={onReset} className="btn btn-ghost btn-sm w-full">
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
  const [showAnswer, setShowAnswer] = useState(false)

  function setAnswer(i: number, val: string) {
    if (checked) return
    setAnswers(prev => prev.map((v, j) => j === i ? val : v))
  }

  const score = checked
    ? answers.filter((a, i) => a === pattern[i]).length
    : 0

  const scaledScore = checked
    ? Math.round((score / count) * question.max_points)
    : 0

  const isPerfect = checked && score === count

  return (
    <div className="space-y-3">
      <p className="text-xs font-extrabold text-muted uppercase tracking-wider">Oceń stwierdzenia</p>
      <div className="space-y-2">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-sm font-bold text-muted w-28 shrink-0">Stwierdzenie {i + 1}.</span>
            <div className="flex gap-2">
              {(['P', 'F'] as const).map(val => {
                const label = val === 'P' ? 'Prawda' : 'Fałsz'
                const isSelected = answers[i] === val
                const revealColors = isPerfect || showAnswer
                const isCorrect = checked && pattern[i] === val && revealColors
                const isWrong = checked && answers[i] === val && pattern[i] !== val && revealColors
                return (
                  <button
                    key={val}
                    onClick={() => setAnswer(i, val)}
                    className={`px-4 py-2 text-sm font-extrabold rounded-xl border-2 transition-colors ${
                      isCorrect
                        ? 'border-brand bg-mint text-brand-deep font-bold'
                        : isWrong
                        ? 'border-coral bg-coral-bg text-coral font-bold'
                        : isSelected
                        ? 'border-brand-deep bg-[#fff4c2] text-ink font-extrabold'
                        : 'border-line bg-white text-ink hover:border-brand cursor-pointer'
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
          className="btn btn-sun w-full"
        >
          Sprawdź
        </button>
      ) : (
        <>
          <div className={`rounded-2xl border-2 border-brand-deep px-4 py-3 text-sm font-bold ${
            isPerfect ? 'bg-mint text-brand-deep' : 'bg-amberx-bg text-amberx'
          }`}>
            <ScoreBadge score={scaledScore} max={question.max_points} />
            <span className="ml-3">{score}/{count} stwierdzeń poprawnie</span>
          </div>
          {isPerfect ? (
            <button onClick={onReset} className="btn btn-ghost btn-sm w-full">
              Spróbuj jeszcze raz
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => { setAnswers(Array(count).fill(null)); setChecked(false); setShowAnswer(false) }}
                className="btn btn-ghost btn-sm flex-1"
              >
                Spróbuj jeszcze raz
              </button>
              {!showAnswer && (
                <button
                  onClick={() => setShowAnswer(true)}
                  className="btn btn-ghost btn-sm whitespace-nowrap"
                >
                  Pokaż odpowiedź
                </button>
              )}
            </div>
          )}
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
      <label className="text-xs font-extrabold text-muted uppercase tracking-wider block">
        Twoja odpowiedź
      </label>
      <textarea
        value={answer}
        onChange={e => setAnswer(e.target.value)}
        rows={5}
        placeholder="Napisz odpowiedź..."
        disabled={!!result}
        className="field resize-y disabled:bg-canvas disabled:text-muted"
      />
      {!result && (
        loading ? (
          <div className="flex items-center gap-4 bg-[#fff1bf] border-2 border-amberx rounded-2xl px-5 py-4">
            <div className="flex gap-1.5 shrink-0">
              <span className="w-2.5 h-2.5 bg-amberx rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="w-2.5 h-2.5 bg-amberx rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="w-2.5 h-2.5 bg-amberx rounded-full animate-bounce" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-amberx">AI ocenia odpowiedź...</p>
              <p className="text-xs font-semibold text-muted mt-0.5">Porównuję z kluczem odpowiedzi CKE</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-muted">{answer.trim().length} znaków</span>
            <button
              onClick={handleEvaluate}
              disabled={answer.trim().length < 5}
              className="btn btn-sun btn-sm"
            >
              Sprawdź odpowiedź
            </button>
          </div>
        )
      )}
      {error && <p className="text-sm font-bold text-coral bg-coral-bg border-2 border-coral rounded-2xl px-4 py-2.5">{error}</p>}

      {result && (
        <div className="space-y-3">
          <div className="card-game !rounded-[18px] !shadow-hard p-4">
            <div className="flex items-center gap-3 mb-3">
              <ScoreBadge score={result.score} max={result.maxPoints} />
              <p className="text-sm font-semibold">{result.feedback}</p>
            </div>
            <div className="space-y-2">
              {result.criteria.map((c, i) => (
                <div key={i} className={`flex items-start gap-2 rounded-2xl px-3 py-2 text-sm ${
                  c.met ? 'bg-mint border-2 border-brand text-brand-deep font-semibold' : 'bg-coral-bg border-2 border-coral text-coral font-semibold'
                }`}>
                  <span className="shrink-0">{c.met ? '✓' : '✗'}</span>
                  <span>{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          {result.modelAnswer && (
            <div className="card-game !rounded-[18px] !shadow-hard p-4">
              <button
                onClick={() => setShowModel(v => !v)}
                className="w-full text-left flex items-center justify-between text-sm font-extrabold hover:text-brand"
              >
                <span>Przykładowa odpowiedź z klucza CKE</span>
                <span className="text-muted">{showModel ? '▲' : '▼'}</span>
              </button>
              {showModel && (
                <p className="mt-2 text-sm leading-relaxed whitespace-pre-wrap border-t-2 border-dotted border-line pt-2">
                  {result.modelAnswer}
                </p>
              )}
            </div>
          )}

          <button
            onClick={() => { setResult(null); setAnswer(''); setShowModel(false); onReset() }}
            className="btn btn-ghost btn-sm w-full"
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
