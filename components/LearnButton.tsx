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
        className="group flex items-center gap-1.5 text-sm text-green-700 font-medium bg-green-100 border border-green-300 rounded-lg px-3 py-1.5 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-colors disabled:opacity-50"
      >
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="group-hover:hidden">Wyuczone</span>
        <span className="hidden group-hover:inline">Cofnij oznaczenie</span>
      </button>
    )
  }

  return (
    <div className="relative group/tooltip inline-block">
      <button
        onClick={toggle}
        disabled={loading}
        className="flex items-center gap-1.5 text-sm font-semibold text-white bg-green-600 rounded-lg px-3 py-1.5 hover:bg-green-700 transition-colors disabled:opacity-50 shadow-sm"
      >
        {loading ? (
          <svg className="w-4 h-4 animate-spin shrink-0" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        ) : (
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
          </svg>
        )}
        Oznacz jako wyuczone
      </button>

      {/* Tooltip */}
      <div className="absolute bottom-full left-0 mb-2.5 hidden group-hover/tooltip:block z-20 pointer-events-none">
        <div className="w-64 bg-gray-900 text-white text-xs leading-relaxed rounded-lg px-3 py-2.5 shadow-lg">
          <p className="font-semibold mb-0.5">Co to oznacza?</p>
          <p className="text-gray-300">
            Pytanie zostanie zapamiętane jako opanowane i będzie pomijane przy losowaniu kolejnych testów z tego tematu.
          </p>
        </div>
        {/* Arrow */}
        <div className="ml-4 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-900" />
      </div>
    </div>
  )
}
