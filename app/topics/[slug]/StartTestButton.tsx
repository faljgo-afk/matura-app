'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'

export default function StartTestButton({ topicId, isLoggedIn }: { topicId: string; isLoggedIn: boolean }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  if (!isLoggedIn) {
    return (
      <div className="text-center">
        <p className="text-[15px] font-semibold text-muted mb-4">Zaloguj się, aby rozpocząć test i śledzić swoje postępy</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href={`/login?next=${encodeURIComponent(pathname)}`}
            className="btn btn-ghost flex-1"
          >
            Zaloguj się
          </Link>
          <Link href="/register" className="btn btn-primary flex-1">
            Zarejestruj się
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
      className="btn btn-sun w-full !min-h-[60px] text-lg"
    >
      {loading ? 'Przygotowuję test...' : 'Rozpocznij test →'}
    </button>
  )
}
