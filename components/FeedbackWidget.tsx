'use client'

import { useState } from 'react'

const RATINGS = [
  { value: 1, emoji: '😕', label: 'Słaby' },
  { value: 2, emoji: '😐', label: 'Średni' },
  { value: 3, emoji: '😊', label: 'Dobry' },
]

export default function FeedbackWidget({
  sessionId,
  alreadySubmitted = false,
}: {
  sessionId: string
  alreadySubmitted?: boolean
}) {
  const [rating, setRating] = useState<number | null>(null)
  const [comment, setComment] = useState('')
  const [submitted, setSubmitted] = useState(alreadySubmitted)
  const [loading, setLoading] = useState(false)

  async function handleSubmit() {
    if (!rating) return
    setLoading(true)
    await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId, rating, comment }),
    })
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-5 text-center text-green-700 text-sm">
        Dziękujemy za opinię! Twój feedback pomaga nam ulepszać testy. 🙏
      </div>
    )
  }

  return (
    <div className="mt-8 bg-white border border-gray-200 rounded-xl p-5">
      <p className="text-sm font-semibold text-gray-700 mb-1">Oceń ten test</p>
      <p className="text-xs text-gray-400 mb-4">Powiedz nam, co możemy poprawić — każda opinia jest dla nas ważna</p>

      <div className="flex gap-3 mb-4">
        {RATINGS.map(r => (
          <button
            key={r.value}
            onClick={() => setRating(r.value)}
            className={`flex-1 flex flex-col items-center py-2.5 rounded-lg border-2 transition-all text-sm ${
              rating === r.value
                ? 'border-green-500 bg-green-50 text-green-700 font-semibold'
                : 'border-gray-200 text-gray-500 hover:border-gray-300'
            }`}
          >
            <span className="text-2xl mb-1">{r.emoji}</span>
            {r.label}
          </button>
        ))}
      </div>

      <textarea
        value={comment}
        onChange={e => setComment(e.target.value)}
        placeholder="Opcjonalny komentarz — co było niejasne, co warto poprawić?"
        rows={3}
        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 resize-none focus:outline-none focus:border-green-400 mb-3"
      />

      <button
        onClick={handleSubmit}
        disabled={!rating || loading}
        className="w-full py-2.5 rounded-lg bg-green-600 text-white text-sm font-semibold hover:bg-green-700 disabled:bg-gray-200 disabled:text-gray-400 transition-colors"
      >
        {loading ? 'Wysyłanie...' : 'Wyślij opinię'}
      </button>
    </div>
  )
}
