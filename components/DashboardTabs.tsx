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

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setTab('progress')}
          className={`px-5 py-2.5 text-sm font-medium border-b-2 transition-colors -mb-px ${
            tab === 'progress'
              ? 'border-green-500 text-green-700'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Postęp w tematach
        </button>
        <button
          onClick={() => setTab('history')}
          className={`px-5 py-2.5 text-sm font-medium border-b-2 transition-colors -mb-px ${
            tab === 'history'
              ? 'border-green-500 text-green-700'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Ostatnie testy
          {sessions.length > 0 && (
            <span className="ml-2 text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full">
              {sessions.length}
            </span>
          )}
        </button>
      </div>

      {/* Tab: Postęp w tematach */}
      {tab === 'progress' && (
        <div className="space-y-3">
          {topicStats.map(topic => (
            <div key={topic.id} className="bg-white rounded-xl p-4 border border-gray-200 flex items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-gray-800 text-sm">{topic.name}</span>
                  <div className="flex flex-col items-end gap-0.5 sm:flex-row sm:items-center sm:gap-3">
                    {topic.learnedQ > 0 && (
                      <span className="text-xs text-blue-600 font-medium">
                        📌 {topic.learnedQ}/{topic.totalQ}
                      </span>
                    )}
                    {topic.bestScore !== null ? (
                      <span className={`text-sm font-semibold ${topic.bestScore >= 75 ? 'text-green-600' : topic.bestScore >= 50 ? 'text-yellow-600' : 'text-red-500'}`}>
                        {topic.bestScore}%
                      </span>
                    ) : (
                      <span className="text-xs text-gray-400">—</span>
                    )}
                  </div>
                </div>
                <div className="h-2 bg-gray-100 rounded-full relative overflow-hidden">
                  <div
                    className={`h-2 rounded-full transition-all absolute top-0 left-0 ${
                      topic.bestScore === null ? 'w-0' :
                      topic.bestScore >= 75 ? 'bg-green-200' :
                      topic.bestScore >= 50 ? 'bg-yellow-200' : 'bg-red-200'
                    }`}
                    style={{ width: `${topic.bestScore ?? 0}%` }}
                  />
                  {topic.totalQ > 0 && (
                    <div
                      className="h-2 rounded-full transition-all absolute top-0 left-0 bg-blue-400"
                      style={{ width: `${Math.round((topic.learnedQ / topic.totalQ) * 100)}%` }}
                    />
                  )}
                </div>
                <div className="flex gap-3 mt-1">
                  {topic.attempts > 0 && (
                    <span className="text-xs text-gray-400">{topic.attempts} {topic.attempts === 1 ? 'podejście' : 'podejść'}</span>
                  )}
                  {topic.totalQ > 0 && (
                    <span className="text-xs text-gray-300">{topic.totalQ} pytań</span>
                  )}
                </div>
              </div>
              <Link href={`/topics/${topic.slug}`} className="text-xs text-green-600 hover:underline whitespace-nowrap">
                Ćwicz →
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* Tab: Ostatnie testy */}
      {tab === 'history' && (
        <div>
          {sessions.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <div className="text-4xl mb-3">📚</div>
              <p>Nie ukończyłeś jeszcze żadnego testu.</p>
              <Link href="/" className="text-green-600 hover:underline text-sm mt-2 inline-block">
                Zacznij naukę →
              </Link>
            </div>
          ) : (
            <div className="space-y-2">
              {sessions.map(session => {
                const percent = Math.round(((session.score ?? 0) / (session.max_score ?? 1)) * 100)
                const topic = topics.find(t => t.id === session.topic_id)
                const isMock = session.session_type === 'mock_exam' || session.session_type === 'mock_exam_free'
                return (
                  <Link
                    key={session.id}
                    href={`/results/${session.id}`}
                    className="bg-white rounded-xl px-4 py-3 border border-gray-200 flex items-center justify-between hover:border-green-300 transition-colors"
                  >
                    <div>
                      <span className="text-sm font-medium text-gray-700">
                        {isMock ? '📝 Sprawdzian z całego materiału' : `📗 ${topic?.name ?? 'Temat'}`}
                      </span>
                      <div className="text-xs text-gray-400">
                        {new Date(session.completed_at).toLocaleDateString('pl-PL')}
                      </div>
                    </div>
                    <span className={`font-bold text-lg ${percent >= 75 ? 'text-green-600' : percent >= 50 ? 'text-yellow-600' : 'text-red-500'}`}>
                      {percent}%
                    </span>
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
