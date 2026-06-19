'use client'

import { useState } from 'react'
import { createPortal } from 'react-dom'

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
    return <p className="text-xs text-gray-400">✓ Zgłoszenie wysłane — dziękujemy!</p>
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-xs text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1"
      >
        🚩 Zgłoś błąd w pytaniu
      </button>

      {open && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
        >
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Zgłoś błąd w pytaniu</h3>
              <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-600 text-xl leading-none">&times;</button>
            </div>

            <p className="text-sm text-gray-500 mb-4">Rodzaj problemu:</p>
            <div className="flex flex-col gap-2 mb-4">
              {REASONS.map(r => (
                <label key={r.value} className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer p-2.5 rounded-lg border border-gray-200 hover:border-green-300 transition-colors">
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
              rows={3}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 resize-none focus:outline-none focus:border-green-400 mb-4"
            />

            <div className="flex gap-2">
              <button
                onClick={handleSubmit}
                disabled={!reason || loading}
                className="flex-1 py-2.5 rounded-lg bg-red-500 text-white text-sm font-semibold hover:bg-red-600 disabled:bg-gray-200 disabled:text-gray-400 transition-colors"
              >
                {loading ? 'Wysyłanie...' : 'Wyślij zgłoszenie'}
              </button>
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-500 hover:bg-gray-50"
              >
                Anuluj
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
