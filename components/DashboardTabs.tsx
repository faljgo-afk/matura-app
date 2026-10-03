'use client'

import { useState } from 'react'
import Link from 'next/link'

type TopicStat = {
  id: string
  name: string
  slug: string
  attempts: number
  bestScore: number | null
  totalQ: number
  learnedQ: number
}

type Session = {
  id: string
  score: number | null
  max_score: number | null
  session_type: string
  completed_at: string
  topic_id: string | null
}

type Topic = {
  id: string
  name: string
}

const TILE_COLORS = [
  'bg-aqua text-brand-deep',
  'bg-sun text-brand-deep',
  'bg-candy text-brand-deep',
  'bg-leaf text-brand-deep',
  'bg-tangerine text-brand-deep',
  'bg-grape text-white',
]

function scoreStyle(percent: number) {
  if (percent >= 75) return { bar: 'bg-leaf', text: 'text-brand' }
  if (percent >= 50) return { bar: 'bg-sun', text: 'text-amberx' }
  return { bar: 'bg-candy', text: 'text-coral' }
}

export default function DashboardTabs({
  topicStats,
  sessions,
  topics,
}: {
  topicStats: TopicStat[]
  sessions: Session[]
  topics: Topic[]
}) {
  const [tab, setTab] = useState<'progress' | 'history'>('progress')

  const tabClass = (active: boolean) =>
    `px-5 py-2.5 rounded-full text-[15px] font-extrabold transition-colors ${
      active ? 'bg-sun text-brand-deep' : 'text-muted hover:bg-mint hover:text-ink'
    }`

  return (
    <div className="flex flex-col gap-5">
      {/* Tab buttons */}
      <div role="tablist" className="self-start flex gap-1 bg-white border-2 border-brand-deep rounded-full p-1">
        <button role="tab" aria-selected={tab === 'progress'} onClick={() => setTab('progress')} className={tabClass(tab === 'progress')}>
          Postęp w tematach
        </button>
        <button role="tab" aria-selected={tab === 'history'} onClick={() => setTab('history')} className={tabClass(tab === 'history')}>
          Ostatnie testy
          {sessions.length > 0 && (
            <span className="ml-2 text-xs bg-canvas border-2 border-line text-muted px-1.5 py-0.5 rounded-full">
              {sessions.length}
            </span>
          )}
        </button>
      </div>

      {/* Tab: Postęp w tematach */}
      {tab === 'progress' && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm font-semibold text-muted">
            <span className="flex items-center gap-2"><i className="w-3.5 h-3.5 rounded-[5px] bg-leaf border-2 border-brand-deep" />Najlepszy wynik</span>
            <span className="flex items-center gap-2"><i className="w-3.5 h-3.5 rounded-[5px] bg-grape border-2 border-brand-deep" />Opanowane pytania</span>
          </div>
          {topicStats.map((topic, i) => {
            const learnedPct = topic.totalQ > 0 ? Math.round((topic.learnedQ / topic.totalQ) * 100) : 0
            const st = topic.bestScore !== null ? scoreStyle(topic.bestScore) : null
            return (
              <div key={topic.id} className="card-game !rounded-[18px] !shadow-hard p-4 sm:p-5 flex items-center gap-4">
                <span className={`hidden sm:flex w-12 h-12 rounded-2xl border-2 border-brand-deep items-center justify-center font-display font-bold text-xl shrink-0 ${TILE_COLORS[i % TILE_COLORS.length]}`}>
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0 flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-extrabold text-base leading-snug">{topic.name}</span>
                    <span className={`font-mono font-semibold text-lg ${st ? st.text : 'text-muted'}`}>
                      {topic.bestScore !== null ? `${topic.bestScore}%` : '—'}
                    </span>
                  </div>

                  <div className="h-3.5 bg-white border-2 border-brand-deep rounded-full overflow-hidden" role="img" aria-label={`Najlepszy wynik: ${topic.bestScore ?? 0}%`}>
                    <div className={`h-full ${st ? st.bar : ''}`} style={{ width: `${topic.bestScore ?? 0}%` }} />
                  </div>
                  {topic.totalQ > 0 && (
                    <div className="h-3.5 bg-white border-2 border-brand-deep rounded-full overflow-hidden" role="img" aria-label={`Opanowane pytania: ${topic.learnedQ} z ${topic.totalQ}`}>
                      <div className="h-full bg-grape" style={{ width: `${learnedPct}%` }} />
                    </div>
                  )}

                  <div className="flex flex-wrap gap-x-4 text-xs font-bold text-muted">
                    {topic.attempts > 0 && (
                      <span>{topic.attempts} {topic.attempts === 1 ? 'podejście' : 'podejść'}</span>
                    )}
                    {topic.totalQ > 0 && (
                      <span>Opanowane: {topic.learnedQ}/{topic.totalQ} pytań</span>
                    )}
                  </div>
                </div>
                <Link href={`/topics/${topic.slug}`} className="btn btn-primary btn-sm shrink-0">
                  Ćwicz →
                </Link>
              </div>
            )
          })}
        </div>
      )}

      {/* Tab: Ostatnie testy */}
      {tab === 'history' && (
        <div>
          {sessions.length === 0 ? (
            <div className="card-game !rounded-[20px] text-center py-12 px-6">
              <p className="font-display font-semibold text-2xl mb-1">Nie ukończyłeś jeszcze żadnego testu.</p>
              <p className="text-muted mb-5">Wybierz temat i zdobądź pierwszy wynik.</p>
              <Link href="/" className="btn btn-sun">Zacznij naukę →</Link>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {sessions.map(session => {
                const percent = Math.round(((session.score ?? 0) / (session.max_score ?? 1)) * 100)
                const topic = topics.find(t => t.id === session.topic_id)
                const isMock = session.session_type === 'mock_exam' || session.session_type === 'mock_exam_free'
                const st = scoreStyle(percent)
                return (
                  <Link
                    key={session.id}
                    href={`/results/${session.id}`}
                    className="card-game card-link !rounded-[16px] !shadow-hard px-4 py-3.5 flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <span className={`pill mb-1 ${isMock ? 'bg-sun text-brand-deep' : 'bg-mint text-brand-deep'}`}>
                        {isMock ? 'Sprawdzian' : 'Temat'}
                      </span>
                      <div className="font-extrabold truncate">
                        {isMock ? 'Sprawdzian z całego materiału' : topic?.name ?? 'Temat'}
                      </div>
                      <div className="text-xs font-bold text-muted">
                        {new Date(session.completed_at).toLocaleDateString('pl-PL')}
                      </div>
                    </div>
                    <span className={`font-mono font-semibold text-2xl shrink-0 ${st.text}`}>{percent}%</span>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
