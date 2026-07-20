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
      <div className="flex gap-2 flex-wrap mb-6">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            filter === 'all'
              ? 'bg-green-600 text-white'
              : 'bg-white border border-gray-200 text-gray-600 hover:border-green-400'
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
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filter === s.name
                  ? 'bg-green-600 text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-green-400'
              }`}
            >
              {s.name} ({count})
            </button>
          )
        })}
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {filtered.map((q, i) => {
          const isRevealed = revealed.has(q.id)
          return (
            <div key={q.id} className="bg-white rounded-xl border border-gray-200 p-5">
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex-1">
                  {q.subtopic_name && (
                    <span className="text-xs text-gray-400 mb-1 block">{q.subtopic_name}</span>
                  )}
                  <p className="font-medium text-gray-900">
                    <span className="text-gray-400 mr-1">{i + 1}.</span>
                    {q.question_text}
                  </p>
                </div>
                <span className={`shrink-0 text-xs font-semibold px-2 py-1 rounded-full ${
                  q.kind === 'open'
                    ? 'bg-violet-100 text-violet-700'
                    : q.question_type === 'true_false'
                    ? 'bg-amber-100 text-amber-700'
                    : q.question_type === 'multiple'
                    ? 'bg-purple-100 text-purple-700'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {q.kind === 'open' ? 'otwarte' : q.question_type === 'true_false' ? 'P/F' : q.question_type === 'multiple' ? 'wielokrotny' : 'jednokrotny'}
                </span>
              </div>

              {/* Options for closed questions */}
              {q.kind === 'closed' && (
                <div className="space-y-2 mb-3">
                  {q.question_type === 'true_false' ? (
                    q.options.map(opt => {
                      const verdict = isRevealed
                        ? (q.correct_answer.find(c => c.startsWith(opt.id + '-'))?.split('-')[1] ?? null)
                        : null
                      return (
                        <div key={opt.id} className={`flex items-center gap-3 px-3 py-2 rounded-lg border text-sm transition-colors ${
                          isRevealed
                            ? verdict === 'P'
                              ? 'border-green-400 bg-green-50 text-green-800'
                              : 'border-red-300 bg-red-50 text-red-800'
                            : 'border-gray-200 text-gray-700'
                        }`}>
                          <span className="font-semibold shrink-0">{opt.id}.</span>
                          <span className="flex-1">{opt.text}</span>
                          {isRevealed && verdict && (
                            <span className={`shrink-0 font-bold text-xs px-2 py-0.5 rounded ${
                              verdict === 'P' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                            }`}>{verdict}</span>
                          )}
                        </div>
                      )
                    })
                  ) : (
                    q.options.map(opt => {
                      const isCorrect = q.correct_answer.includes(opt.id)
                      return (
                        <div key={opt.id} className={`px-3 py-2 rounded-lg border text-sm transition-colors ${
                          isRevealed && isCorrect
                            ? 'border-green-400 bg-green-50 text-green-800 font-medium'
                            : 'border-gray-200 text-gray-700'
                        }`}>
                          <span className="font-semibold mr-1">{opt.id}.</span>
                          {opt.text}
                          {isRevealed && isCorrect && (
                            <span className="ml-2 text-green-600 text-xs">✓</span>
                          )}
                        </div>
                      )
                    })
                  )}
                </div>
              )}

              {/* Revealed answer */}
              {isRevealed && (
                <div className="mt-3 space-y-2">
                  {q.kind === 'open' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm text-green-900">
                      <span className="font-semibold block mb-1">Wzorcowa odpowiedź:</span>
                      {q.sample_answer}
                    </div>
                  )}
                  {(q.kind === 'closed' ? q.explanation : q.explanation) && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800">
                      <span className="font-semibold">Wyjaśnienie: </span>
                      {q.kind === 'closed' ? q.explanation : q.explanation}
                    </div>
                  )}
                </div>
              )}

              {/* Toggle button */}
              <button
                onClick={() => toggle(q.id)}
                className={`mt-3 w-full py-2 rounded-lg text-sm font-medium transition-colors ${
                  isRevealed
                    ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {isRevealed ? 'Ukryj odpowiedź' : 'Pokaż odpowiedź'}
              </button>
            </div>
          )
        })}

        {filtered.length === 0 && (
          <div className="text-center py-10 text-gray-400">
            Brak pytań dla wybranej podtemy.
          </div>
        )}
      </div>
    </div>
  )
}
