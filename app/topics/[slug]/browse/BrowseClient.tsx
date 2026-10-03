'use client'

import { useState } from 'react'

type Option = {
  id: string
  text: string
  is_correct: boolean
}

type ClosedQuestion = {
  id: string
  kind: 'closed'
  question_text: string
  question_type: string
  options: Option[]
  correct_answer: string[]
  explanation: string
  subtopic_name: string | null
}

type OpenQuestion = {
  id: string
  kind: 'open'
  question_text: string
  sample_answer: string
  explanation: string | null
  subtopic_name: string | null
}

type Question = ClosedQuestion | OpenQuestion

export default function BrowseClient({
  questions,
  subtopics,
}: {
  questions: Question[]
  subtopics: { id: string; name: string }[]
}) {
  const [revealed, setRevealed] = useState<Set<string>>(new Set())
  const [filter, setFilter] = useState<string>('all')

  function toggle(id: string) {
    setRevealed(prev => {
      const next = new Set(prev)
      if (next.has(id)) { next.delete(id) } else { next.add(id) }
      return next
    })
  }

  const filtered = filter === 'all'
    ? questions
    : questions.filter(q => q.subtopic_name === filter)

  return (
    <div>
      {/* Filter */}
      <div className="flex gap-2 flex-wrap mb-6" role="group" aria-label="Filtr podtematów">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-full text-sm font-extrabold border-2 transition-colors ${
            filter === 'all'
              ? 'bg-sun text-brand-deep border-brand-deep'
              : 'bg-white text-muted border-line hover:border-brand'
          }`}
        >
          Wszystkie ({questions.length})
        </button>
        {subtopics.map(s => {
          const count = questions.filter(q => q.subtopic_name === s.name).length
          if (count === 0) return null
          return (
            <button
              key={s.id}
              onClick={() => setFilter(s.name)}
              className={`px-4 py-2 rounded-full text-sm font-extrabold border-2 transition-colors ${
                filter === s.name
                  ? 'bg-sun text-brand-deep border-brand-deep'
                  : 'bg-white text-muted border-line hover:border-brand'
              }`}
            >
              {s.name} ({count})
            </button>
          )
        })}
      </div>

      {/* Questions */}
      <div className="flex flex-col gap-5">
        {filtered.map((q, i) => {
          const isRevealed = revealed.has(q.id)
          return (
            <article key={q.id} className="card-game !rounded-[20px] p-5 sm:p-6">
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex-1">
                  {q.subtopic_name && (
                    <span className="text-xs font-extrabold uppercase tracking-wider text-muted mb-1 block">{q.subtopic_name}</span>
                  )}
                  <p className="font-display font-semibold text-xl leading-snug">
                    <span className="text-brand mr-1">{i + 1}.</span>
                    {q.question_text}
                  </p>
                </div>
                <span className={`pill shrink-0 ${
                  q.kind === 'open'
                    ? 'bg-[#e3dcff] text-[#3b2a9e]'
                    : q.question_type === 'true_false'
                    ? 'bg-amberx-bg text-amberx'
                    : q.question_type === 'multiple'
                    ? 'bg-[#ffd9e6] text-[#8a1d4a]'
                    : 'bg-mint text-brand-deep'
                }`}>
                  {q.kind === 'open' ? 'otwarte' : q.question_type === 'true_false' ? 'P/F' : q.question_type === 'multiple' ? 'wielokrotny' : 'jednokrotny'}
                </span>
              </div>

              {/* Options for closed questions */}
              {q.kind === 'closed' && (
                <div className="flex flex-col gap-2 mb-3">
                  {q.question_type === 'true_false' && q.correct_answer.some(c => c.includes('-')) ? (
                    q.options.map(opt => {
                      const verdict = isRevealed
                        ? (q.correct_answer.find(c => c.startsWith(opt.id + '-'))?.split('-')[1] ?? null)
                        : null
                      return (
                        <div key={opt.id} className={`flex items-center gap-3 px-4 py-3 rounded-2xl border-2 text-[15px] font-semibold transition-colors ${
                          isRevealed
                            ? verdict === 'P'
                              ? 'border-brand bg-mint text-brand-deep'
                              : 'border-coral bg-coral-bg text-coral'
                            : 'border-line bg-white text-ink'
                        }`}>
                          <span className="font-extrabold shrink-0">{opt.id}.</span>
                          <span className="flex-1">{opt.text}</span>
                          {isRevealed && verdict && (
                            <span className={`shrink-0 font-black text-xs px-2.5 py-1 rounded-lg ${
                              verdict === 'P' ? 'bg-brand text-white' : 'bg-coral text-white'
                            }`}>{verdict}</span>
                          )}
                        </div>
                      )
                    })
                  ) : (
                    q.options.map(opt => {
                      const isCorrect = q.correct_answer.includes(opt.id)
                      return (
                        <div key={opt.id} className={`px-4 py-3 rounded-2xl border-2 text-[15px] transition-colors ${
                          isRevealed && isCorrect
                            ? 'border-brand bg-mint text-brand-deep font-extrabold'
                            : 'border-line bg-white text-ink font-semibold'
                        }`}>
                          <span className="font-extrabold mr-1">{opt.id}.</span>
                          {opt.text}
                          {isRevealed && isCorrect && (
                            <span className="ml-2 text-brand text-xs font-black">✓ poprawna</span>
                          )}
                        </div>
                      )
                    })
                  )}
                </div>
              )}

              {/* Revealed answer */}
              {isRevealed && (
                <div className="mt-3 flex flex-col gap-3">
                  {q.kind === 'open' && (
                    <div className="bg-mint border-2 border-brand rounded-2xl p-4 text-[15px] text-brand-deep">
                      <span className="font-extrabold block mb-1">Wzorcowa odpowiedź:</span>
                      {q.sample_answer}
                    </div>
                  )}
                  {(q.kind === 'closed' ? q.explanation : q.explanation) && (
                    <div className="rounded-2xl border-2 border-dashed border-aqua bg-[#eaf9f8] p-4 text-[15px] text-ink">
                      <span className="font-extrabold">Wyjaśnienie: </span>
                      {q.kind === 'closed' ? q.explanation : q.explanation}
                    </div>
                  )}
                </div>
              )}

              {/* Toggle button */}
              <button
                onClick={() => toggle(q.id)}
                aria-expanded={isRevealed}
                className={`btn w-full mt-3 ${isRevealed ? 'btn-ghost' : 'btn-primary'}`}
              >
                {isRevealed ? 'Ukryj odpowiedź' : 'Pokaż odpowiedź'}
              </button>
            </article>
          )
        })}

        {filtered.length === 0 && (
          <div className="text-center py-10 font-semibold text-muted">
            Brak pytań dla wybranej podtemy.
          </div>
        )}
      </div>
    </div>
  )
}
