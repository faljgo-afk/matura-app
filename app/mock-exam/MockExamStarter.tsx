'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'

export default function MockExamStarter({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [timed, setTimed] = useState(true)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

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
        <p className="text-[15px] font-semibold text-muted mb-4">Zaloguj się, aby rozpocząć sprawdzian i śledzić swoje postępy</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href={`/login?next=${encodeURIComponent(pathname)}`} className="btn btn-ghost flex-1">
            Zaloguj się
          </Link>
          <Link href="/register" className="btn btn-primary flex-1">
            Zarejestruj się
          </Link>
        </div>
      </div>
    )
  }

  const modeCard = (active: boolean) =>
    `flex-1 text-left rounded-[22px] border-[3px] px-4 py-3.5 mb-[5px] transition-transform active:translate-y-[3px] ${
      active
        ? 'border-brand-deep bg-[#fff4c2] shadow-hard'
        : 'border-line bg-white shadow-hard-line hover:border-brand'
    }`

  return (
    <div className="flex flex-col gap-4">
      {/* Timer toggle */}
      <div role="radiogroup" aria-label="Tryb sprawdzianu" className="flex flex-col sm:flex-row gap-3">
        <button role="radio" aria-checked={timed} onClick={() => setTimed(true)} className={modeCard(timed)}>
          <span className="flex items-center gap-2 font-display font-semibold text-xl">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
            Na czas
          </span>
          <span className="block text-sm font-semibold text-muted mt-0.5">45 minut</span>
        </button>
        <button role="radio" aria-checked={!timed} onClick={() => setTimed(false)} className={modeCard(!timed)}>
          <span className="flex items-center gap-2 font-display font-semibold text-xl">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 12h4l3-8 4 16 3-8h4" /></svg>
            Bez limitu czasu
          </span>
          <span className="block text-sm font-semibold text-muted mt-0.5">w swoim tempie</span>
        </button>
      </div>

      {timed && (
        <div className="flex items-center gap-3 text-sm font-bold text-amberx bg-amberx-bg border-[3px] border-amberx rounded-2xl px-4 py-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0"><path d="M12 3l10 18H2z" /><path d="M12 10v5M12 18h.01" /></svg>
          <span>Czas mija automatycznie — test zostanie przesłany gdy skończy się czas</span>
        </div>
      )}

      <button onClick={handleStart} disabled={loading} className="btn btn-sun w-full !min-h-[60px] text-lg">
        {loading ? 'Przygotowuję egzamin...' : 'Rozpocznij sprawdzian →'}
      </button>
    </div>
  )
}
