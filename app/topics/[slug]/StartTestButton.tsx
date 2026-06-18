'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function StartTestButton({ topicId, topicSlug }: { topicId: string, topicSlug: string }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

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
