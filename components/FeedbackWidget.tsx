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
      <div className="bg-mint border-[3px] border-brand-deep rounded-3xl p-5 text-center text-brand-deep font-bold">
        Dziękujemy za opinię! Twój feedback pomaga nam ulepszać testy. 🙏
      </div>
    )
  }

  return (
    <div className="card-game p-5 sm:p-6">
      <p className="font-display font-semibold text-xl mb-1">Oceń ten test</p>
      <p className="text-sm text-muted mb-4">Powiedz nam, co możemy poprawić — każda opinia jest dla nas ważna</p>

      <div className="flex gap-3 mb-4">
        {RATINGS.map(r => (
          <button
            key={r.value}
            onClick={() => setRating(r.value)}
            className={`flex-1 flex flex-col items-center py-2.5 rounded-2xl border-[3px] transition-colors text-sm font-bold ${
              rating === r.value
                ? 'border-brand-deep bg-[#fff4c2] text-ink'
                : 'border-line text-muted hover:border-brand'
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
        className="w-full border-[3px] border-line rounded-2xl px-4 py-3 text-[15px] text-ink resize-none focus:outline-none focus:border-brand mb-3"
      />

      <button
        onClick={handleSubmit}
        disabled={!rating || loading}
        className="btn btn-primary btn-sm w-full"
      >
        {loading ? 'Wysyłanie...' : 'Wyślij opinię'}
      </button>
    </div>
  )
}
