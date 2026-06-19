'use client'

import { useState } from 'react'
import Link from 'next/link'

type Question = {
  id: string
  topic_id: string
  subtopic_id: string | null
  subtopics: { name: string }[] | null
  difficulty: number
  question_type: string
  verified: boolean
  question_text: string
}

type MockQuestion = {
  id: string
  subtopic_id: string | null
  subtopics: { id: string; name: string; topic_id: string }[] | null
  difficulty: number
  question_type: string
  verified: boolean
  question_text: string
}

type Topic = {
  id: string
  name: string
  order_index: number
}

type SidebarData = {
  title: string
  questions: { text: string; subtopic: string; difficulty: number; type: string }[]
} | null

function DifficultyBadge({ d }: { d: number }) {
  if (d === 1) return <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded">łatwe</span>
  if (d === 3) return <span className="text-xs bg-red-100 text-red-700 px-1.5 py-0.5 rounded">trudne</span>
  return <span className="text-xs bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded">średnie</span>
}

function CountBadge({ n, warn, danger }: { n: number; warn: number; danger: number }) {
  const cls = n <= danger ? 'bg-red-100 text-red-700' : n <= warn ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
  return <span className={`text-xs font-semibold px-2 py-0.5 rounded ${cls}`}>{n}</span>
}

function Sidebar({ data, onClose }: { data: SidebarData; onClose: () => void }) {
  if (!data) return null
  return (
    <>
      <div className="fixed inset-0 bg-black/20 z-40" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-full max-w-lg bg-white shadow-2xl z-50 flex flex-col">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-800 text-sm">{data.title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none">&times;</button>
        </div>
        <div className="overflow-y-auto flex-1 p-4 space-y-3">
          {data.questions.length === 0 && (
            <p className="text-sm text-gray-400 text-center py-8">Brak pytań</p>
          )}
          {data.questions.map((q, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
              <p className="text-sm text-gray-800 mb-2">{i + 1}. {q.text}</p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">{q.subtopic}</span>
                <DifficultyBadge d={q.difficulty} />
                <span className="text-xs text-gray-400">{q.type}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="px-5 py-3 border-t border-gray-100 text-xs text-gray-400 text-right">
          {data.questions.length} pytań
        </div>
      </div>
    </>
  )
}

const TABS = ['Przegląd bazy', 'Pokrycie tematów', 'Pokrycie podtematów', 'Sprawdzian']

export default function ReportsClient({ questions, mockQuestions, topics }: {
  questions: Question[]
  mockQuestions: MockQuestion[]
  topics: Topic[]
}) {
  const [tab, setTab] = useState(0)
  const [sidebar, setSidebar] = useState<SidebarData>(null)
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set())

  function subtopicName(q: Question) {
    return q.subtopics?.[0]?.name ?? '—'
  }

  function mockSubtopicName(q: MockQuestion) {
    return q.subtopics?.[0]?.name ?? '—'
  }

  function toggleTopic(id: string) {
    setExpandedTopics(prev => {
      const next = new Set(prev)
      if (next.has(id)) { next.delete(id) } else { next.add(id) }
      return next
    })
  }

  function openTopicSidebar(topic: Topic) {
    const qs = questions.filter(q => q.topic_id === topic.id && q.verified)
    setSidebar({
      title: `${topic.order_index}. ${topic.name} — pytania (${qs.length})`,
      questions: qs.map(q => ({
        text: q.question_text,
        subtopic: subtopicName(q),
        difficulty: q.difficulty ?? 2,
        type: q.question_type,
      })),
    })
  }

  function openMockTopicSidebar(topic: Topic) {
    const qs = mockQuestions.filter(q => q.subtopics?.[0]?.topic_id === topic.id)
    setSidebar({
      title: `Sprawdzian: ${topic.name} (${qs.length} pytań)`,
      questions: qs.map(q => ({
        text: q.question_text,
        subtopic: mockSubtopicName(q),
        difficulty: q.difficulty ?? 2,
        type: q.question_type,
      })),
    })
  }

  // --- Computed stats ---
  const verified = questions.filter(q => q.verified)
  const unverified = questions.filter(q => !q.verified)
  const byDifficulty = [1, 2, 3].map(d => ({ d, count: questions.filter(q => q.difficulty === d).length }))
  const byType = ['single', 'multiple', 'true_false'].map(t => ({ t, count: questions.filter(q => q.question_type === t).length }))
  const mockVerified = mockQuestions.filter(q => q.verified).length

  const topicStats = topics.map(topic => {
    const tq = questions.filter(q => q.topic_id === topic.id)
    const subtopicIds = new Set(tq.map(q => q.subtopic_id).filter(Boolean))
    const avgDiff = tq.length > 0 ? tq.reduce((s, q) => s + (q.difficulty ?? 2), 0) / tq.length : 0
    return { ...topic, total: tq.length, verifiedCount: tq.filter(q => q.verified).length, subtopicCount: subtopicIds.size, avgDiff }
  })

  const topicSubtopics = topics.map(topic => {
    const tq = questions.filter(q => q.topic_id === topic.id)
    const subtopicMap: Record<string, { id: string; total: number; verified: number; avgDiff: number }> = {}
    for (const q of tq) {
      const name = subtopicName(q)
      const id = q.subtopic_id ?? name
      if (!subtopicMap[name]) subtopicMap[name] = { id, total: 0, verified: 0, avgDiff: 0 }
      subtopicMap[name].total++
      if (q.verified) subtopicMap[name].verified++
      subtopicMap[name].avgDiff += q.difficulty ?? 2
    }
    for (const sub of Object.keys(subtopicMap)) {
      subtopicMap[sub].avgDiff /= subtopicMap[sub].total
    }
    return { ...topic, subtopicMap }
  })

  const mockByTopic = topics.map(topic => {
    const topicQs = questions.filter(q => q.topic_id === topic.id)
    const topicSubtopicIds = new Set(topicQs.map(q => q.subtopic_id).filter(Boolean) as string[])
    const topicSubtopicNames = new Map(
      topicQs
        .filter(q => q.subtopic_id && q.subtopics)
        .map(q => [q.subtopic_id!, q.subtopics![0].name])
    )
    const mockQsForTopic = mockQuestions.filter(q => q.subtopics?.[0]?.topic_id === topic.id)
    const coveredSubtopicIds = new Set(mockQsForTopic.map(q => q.subtopic_id).filter(Boolean))

    return {
      ...topic,
      topicSubtopicIds,
      topicSubtopicNames,
      mockCount: mockQsForTopic.length,
      covered: coveredSubtopicIds.size,
      total: topicSubtopicIds.size,
    }
  })

  const totalSubtopicIds = new Set(questions.map(q => q.subtopic_id).filter(Boolean))
  const coveredByMock = new Set(mockQuestions.map(q => q.subtopic_id).filter(Boolean))
  const totalCovered = Array.from(totalSubtopicIds).filter(id => coveredByMock.has(id)).length

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-10">

        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <Link href="/admin" className="text-sm text-gray-400 hover:text-gray-600">← Panel</Link>
              <span className="text-gray-300">/</span>
              <span className="text-sm font-semibold text-gray-700">Raporty</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Raporty bazy pytań</h1>
          </div>
          <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">Admin</span>
        </div>

        <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
          {TABS.map((label, i) => (
            <button
              key={i}
              onClick={() => setTab(i)}
              className={`px-5 py-2.5 text-sm font-medium border-b-2 whitespace-nowrap transition-colors -mb-px ${
                tab === i ? 'border-green-500 text-green-700' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Tab 0: Przegląd bazy */}
        {tab === 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <div className="text-3xl font-bold text-green-600">{questions.length}</div>
              <div className="text-sm text-gray-500 mt-1">Pytań tematycznych</div>
              <div className="text-xs text-gray-400 mt-1">{verified.length} verified · {unverified.length} oczekuje</div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <div className="text-3xl font-bold text-blue-600">{mockQuestions.length}</div>
              <div className="text-sm text-gray-500 mt-1">Pytań sprawdzianu</div>
              <div className="text-xs text-gray-400 mt-1">{mockVerified} verified · {mockQuestions.length - mockVerified} oczekuje</div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <div className="text-sm font-semibold text-gray-600 mb-3">Trudność</div>
              <div className="space-y-1.5">
                {byDifficulty.map(({ d, count }) => (
                  <div key={d} className="flex items-center justify-between">
                    <DifficultyBadge d={d} />
                    <span className="text-sm font-semibold text-gray-700">{count}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <div className="text-sm font-semibold text-gray-600 mb-3">Typy pytań</div>
              <div className="space-y-1.5">
                {byType.map(({ t, count }) => (
                  <div key={t} className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{t}</span>
                    <span className="text-sm font-semibold text-gray-700">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 1: Pokrycie tematów */}
        {tab === 1 && (
          <div>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-3">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-4 py-3 text-gray-600 font-medium">Temat</th>
                    <th className="text-center px-4 py-3 text-gray-600 font-medium">Pytań</th>
                    <th className="text-center px-4 py-3 text-gray-600 font-medium">Verified</th>
                    <th className="text-center px-4 py-3 text-gray-600 font-medium">Podtematów</th>
                    <th className="text-center px-4 py-3 text-gray-600 font-medium">Śr. trudność</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {topicStats.map(t => (
                    <tr key={t.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700 font-medium">{t.order_index}. {t.name}</td>
                      <td className="px-4 py-3 text-center"><CountBadge n={t.total} warn={10} danger={5} /></td>
                      <td className="px-4 py-3 text-center text-gray-600">{t.verifiedCount}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{t.subtopicCount}</td>
                      <td className="px-4 py-3 text-center">
                        {t.avgDiff > 0 ? <DifficultyBadge d={Math.round(t.avgDiff)} /> : <span className="text-gray-300">—</span>}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button
                          onClick={() => openTopicSidebar(t)}
                          className="text-xs text-green-600 hover:text-green-800 hover:underline whitespace-nowrap"
                        >
                          Lista pytań →
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex gap-4 text-xs text-gray-400">
              <span><span className="inline-block w-3 h-3 bg-red-100 rounded mr-1"></span>≤ 5 pytań</span>
              <span><span className="inline-block w-3 h-3 bg-yellow-100 rounded mr-1"></span>6–10 pytań</span>
              <span><span className="inline-block w-3 h-3 bg-green-100 rounded mr-1"></span>&gt; 10 pytań</span>
            </div>
          </div>
        )}

        {/* Tab 2: Pokrycie podtematów */}
        {tab === 2 && (
          <div className="space-y-4">
            {topicSubtopics.map(topic => {
              const entries = Object.entries(topic.subtopicMap).sort((a, b) => b[1].total - a[1].total)
              if (entries.length === 0) return null
              return (
                <div key={topic.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-200 flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-700">{topic.order_index}. {topic.name}</span>
                    <span className="text-xs text-gray-400">{entries.length} podtematów</span>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {entries.map(([sub, stats]) => (
                      <div key={sub} className="px-4 py-2 flex items-center justify-between">
                        <span className={`text-sm ${stats.total < 3 ? 'text-red-600 font-medium' : 'text-gray-600'}`}>
                          {stats.total < 3 && '⚠ '}{sub}
                        </span>
                        <div className="flex items-center gap-3">
                          <DifficultyBadge d={Math.round(stats.avgDiff)} />
                          <CountBadge n={stats.total} warn={5} danger={2} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Tab 3: Sprawdzian */}
        {tab === 3 && (
          <div>
            <p className="text-sm text-gray-500 mb-4">
              Pokryto {totalCovered} z {totalSubtopicIds.size} podtematów (
              {totalSubtopicIds.size > 0 ? Math.round(totalCovered / totalSubtopicIds.size * 100) : 0}%)
            </p>
            <div className="space-y-3">
              {mockByTopic.map(topic => {
                const isExpanded = expandedTopics.has(topic.id)
                const allCovered = topic.covered === topic.total && topic.total > 0
                const noneCovered = topic.covered === 0
                return (
                  <div key={topic.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="px-4 py-3 flex items-center gap-3">
                      <button
                        onClick={() => toggleTopic(topic.id)}
                        className="text-gray-400 hover:text-gray-600 text-xs w-5 text-center shrink-0"
                      >
                        {isExpanded ? '▼' : '▶'}
                      </button>
                      <span className="font-medium text-gray-800 text-sm flex-1">
                        {topic.order_index}. {topic.name}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded font-semibold ${
                        allCovered ? 'bg-green-100 text-green-700' :
                        noneCovered ? 'bg-red-100 text-red-600' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {topic.covered}/{topic.total} podtematów
                      </span>
                      <span className="text-xs text-gray-400">{topic.mockCount} pyt.</span>
                      <button
                        onClick={() => openMockTopicSidebar(topic)}
                        className="text-xs text-green-600 hover:text-green-800 hover:underline whitespace-nowrap"
                      >
                        Lista →
                      </button>
                    </div>

                    {isExpanded && (
                      <div className="border-t border-gray-100 divide-y divide-gray-50">
                        {Array.from(topic.topicSubtopicIds).map(subId => {
                          const subName = topic.topicSubtopicNames.get(subId) ?? subId
                          const inMock = mockQuestions.filter(q => q.subtopic_id === subId).length
                          const inMain = questions.filter(q => q.subtopic_id === subId && q.topic_id === topic.id).length
                          return (
                            <div key={subId} className={`px-10 py-2 flex items-center justify-between text-sm ${inMock === 0 ? 'bg-red-50' : ''}`}>
                              <span className="text-gray-600">
                                {inMock === 0
                                  ? <span className="text-red-400 mr-1.5">✗</span>
                                  : <span className="text-green-500 mr-1.5">✓</span>}
                                {subName}
                              </span>
                              <div className="flex items-center gap-4">
                                <span className="text-xs text-gray-400">baza: {inMain}</span>
                                <span className={`text-xs font-semibold ${inMock > 0 ? 'text-green-600' : 'text-red-400'}`}>
                                  sprawdzian: {inMock || '—'}
                                </span>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}

      </div>

      <Sidebar data={sidebar} onClose={() => setSidebar(null)} />
    </main>
  )
}
