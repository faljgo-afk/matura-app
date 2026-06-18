'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function StartTestButton({ topicId, isLoggedIn }: { topicId: string; isLoggedIn: boolean }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  if (!isLoggedIn) {
    return (
      <div className="text-center">
        <p className="text-sm text-gray-500 mb-4">Zaloguj się, aby rozpocząć test i śledzić swoje postępy</p>
        <div className="flex gap-3">
          <Link
            href="/login"
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-xl text-lg transition-colors text-center"
          >
            Zaloguj się
          </Link>
          <Link
            href="/register"
            className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-4 rounded-xl text-lg transition-colors text-center"
          >
            Utwórz konto
          </Link>
        </div>
      </div>
    )
  }

  async function handleStart() {
    setLoading(true)
    try {
      const res = await fetch('/api/start-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topicId, sessionType: 'topic' }),
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

  return (
    <button
      onClick={handleStart}
      disabled={loading}
      className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-300 text-white font-semibold py-4 rounded-xl text-lg transition-colors"
    >
      {loading ? 'Przygotowuję test...' : 'Rozpocznij test'}
    </button>
  )
}
