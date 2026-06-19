'use client'

import { useState } from 'react'

const REASONS = [
  { value: 'wrong_answer', label: 'Błędna odpowiedź' },
  { value: 'unclear', label: 'Niejasne pytanie' },
  { value: 'other', label: 'Inny problem' },
]

export default function ReportQuestionButton({
  questionId,
  sessionId,
}: {
  questionId: string
  sessionId: string
}) {
  const [open, setOpen] = useState(false)
  const [reason, setReason] = useState('')
  const [comment, setComment] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit() {
    if (!reason) return
    setLoading(true)
    await fetch('/api/report-question', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questionId, sessionId, reason, comment }),
    })
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return <p className="text-xs text-gray-400 mt-2">✓ Zgłoszenie wysłane — dziękujemy!</p>
  }

  return (
    <div className="mt-2">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="text-xs text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1"
        >
          🚩 Zgłoś błąd w pytaniu
        </button>
      ) : (
        <div className="mt-2 bg-gray-50 border border-gray-200 rounded-lg p-3 space-y-2">
          <p className="text-xs font-semibold text-gray-600">Rodzaj problemu:</p>
          <div className="flex flex-col gap-1.5">
            {REASONS.map(r => (
              <label key={r.value} className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                <input
                  type="radio"
                  name={`reason-${questionId}`}
                  value={r.value}
                  checked={reason === r.value}
                  onChange={() => setReason(r.value)}
                  className="accent-green-600"
                />
                {r.label}
              </label>
            ))}
          </div>
          <textarea
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder="Opisz problem (opcjonalnie)"
            rows={2}
            className="w-full border border-gray-200 rounded px-2 py-1.5 text-xs text-gray-700 resize-none focus:outline-none focus:border-green-400"
          />
          <div className="flex gap-2">
            <button
              onClick={handleSubmit}
              disabled={!reason || loading}
              className="px-3 py-1.5 rounded bg-red-500 text-white text-xs font-medium hover:bg-red-600 disabled:bg-gray-200 disabled:text-gray-400"
            >
              {loading ? 'Wysyłanie...' : 'Wyślij zgłoszenie'}
            </button>
            <button
              onClick={() => setOpen(false)}
              className="px-3 py-1.5 rounded border border-gray-200 text-xs text-gray-500 hover:bg-gray-100"
            >
              Anuluj
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
