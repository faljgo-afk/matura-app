'use client'

import { useState } from 'react'

export default function LearnButton({
  questionId,
  initialLearned,
}: {
  questionId: string
  initialLearned: boolean
}) {
  const [learned, setLearned] = useState(initialLearned)
  const [loading, setLoading] = useState(false)

  async function toggle() {
    setLoading(true)
    await fetch('/api/learn-question', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questionId, learned: !learned }),
    })
    setLearned(!learned)
    setLoading(false)
  }

  if (learned) {
    return (
      <button
        onClick={toggle}
        disabled={loading}
        className="flex items-center gap-1.5 text-xs text-green-600 font-medium hover:text-gray-400 transition-colors"
      >
        ✓ Wyuczone
        <span className="text-gray-300">(cofnij)</span>
      </button>
    )
  }

  return (
    <button
      onClick={toggle}
      disabled={loading}
      className="flex items-center gap-1.5 text-xs text-blue-600 font-medium border border-blue-200 rounded-md px-2.5 py-1 hover:bg-blue-50 transition-colors disabled:opacity-50"
    >
      {loading ? '...' : '📌 Oznacz jako wyuczone'}
    </button>
  )
}
