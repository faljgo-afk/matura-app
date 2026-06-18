'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function MockExamStarter({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [timed, setTimed] = useState(true)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleStart() {
    setLoading(true)
    try {
      const res = await fetch('/api/start-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionType: timed ? 'mock_exam' : 'mock_exam_free',
          questionCount: 20,
        }),
      })
      const data = await res.json()
      if (data.sessionId) {
        router.push(`/test/${data.sessionId}`)
      }
    } catch (e) {
      console.error(e)
      setLoading(false)
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="text-center">
        <p className="text-sm text-gray-500 mb-4">Zaloguj się, aby rozpocząć sprawdzian i śledzić swoje postępy</p>
        <div className="flex gap-3">
          <Link
            href="/login"
            className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-4 rounded-xl text-lg transition-colors text-center"
          >
            Zaloguj się
          </Link>
          <Link
            href="/register"
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-xl text-lg transition-colors text-center"
          >
            Zarejestruj się
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Timer toggle */}
      <div className="flex gap-3">
        <button
          onClick={() => setTimed(true)}
          className={`flex-1 py-3 px-4 rounded-xl border-2 text-sm font-medium transition-all ${
            timed
              ? 'border-green-500 bg-green-50 text-green-800'
              : 'border-gray-200 text-gray-500 hover:border-gray-300'
          }`}
        >
          <div className="text-lg mb-1">⏱</div>
          Na czas
          <div className="text-xs font-normal mt-0.5 text-current opacity-70">45 minut</div>
        </button>
        <button
          onClick={() => setTimed(false)}
          className={`flex-1 py-3 px-4 rounded-xl border-2 text-sm font-medium transition-all ${
            !timed
              ? 'border-green-500 bg-green-50 text-green-800'
              : 'border-gray-200 text-gray-500 hover:border-gray-300'
          }`}
        >
          <div className="text-lg mb-1">🧘</div>
          Bez limitu czasu
          <div className="text-xs font-normal mt-0.5 text-current opacity-70">w swoim tempie</div>
        </button>
      </div>

      {timed && (
        <div className="flex items-center gap-2 text-xs text-yellow-700 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2">
          <span>⚠</span>
          <span>Czas mija automatycznie — test zostanie przesłany gdy skończy się czas</span>
        </div>
      )}

      <button
        onClick={handleStart}
        disabled={loading}
        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-300 text-white font-semibold py-4 rounded-xl text-lg transition-colors"
      >
        {loading ? 'Przygotowuję egzamin...' : 'Rozpocznij sprawdzian'}
      </button>
    </div>
  )
}
