'use client'

import { useState } from 'react'
import Link from 'next/link'

type Option = {
  id: string
  text: string
  is_correct: boolean
}

type Question = {
  id: string
  topic_id: string
  subtopic_id: string | null
  subtopics: { name: string } | null
  difficulty: number
  question_type: string
  verified: boolean
  question_text: string
  options: Option[]
  correct_answer: string[]
  explanation: string
  image_url?: string | null
}

type MockQuestion = {
  id: string
  subtopic_id: string | null
  subtopics: { id: string; name: string; topic_id: string } | null
  difficulty: number
  question_type: string
  verified: boolean
  question_text: string
  options: Option[]
  correct_answer: string[]
  explanation: string
  image_url?: string | null
}

type Topic = {
  id: string
  name: string
  order_index: number
}

type Subtopic = {
  id: string
  name: string
  topic_id: string
  order_index: number
}

type SidebarQuestion = {
  text: string
  subtopic: string
  difficulty: number
  type: string
  image_url?: string | null
  options: Option[]
  correct_answer: string[]
  explanation: string
}

type SidebarData = {
  title: string
  questions: SidebarQuestion[]
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

function SidebarCard({ q, index }: { q: SidebarQuestion; index: number }) {
  const [showExplanation, setShowExplanation] = useState(false)

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Question text */}
      <div className="px-4 pt-4 pb-3">
        <p className="text-sm font-medium text-gray-900 leading-snug">
          <span className="text-gray-400 mr-1">{index + 1}.</span> {q.text}
        </p>
      </div>

      {/* Image */}
      {q.image_url && (
        <div className="mx-4 mb-3 rounded-lg overflow-hidden border border-gray-100 bg-gray-50">
          <img src={q.image_url} alt="Ilustracja" className="w-full max-h-48 object-contain p-1" />
        </div>
      )}

      {/* Options */}
      {q.options && q.options.length > 0 && (
        <div className="px-4 pb-3 space-y-1.5">
          {(() => {
            const isTrueFalseMulti = q.correct_answer?.some((c: string) => c.includes('-P') || c.includes('-F'))
            return q.options.map(opt => {
              if (isTrueFalseMulti) {
                const verdictEntry = q.correct_answer?.find((c: string) => c.startsWith(opt.id + '-'))
                const verdict = verdictEntry?.split('-')[1] ?? ''
                const isPrawda = verdict === 'P'
                return (
                  <div
                    key={opt.id}
                    className={`flex items-start gap-2 text-xs px-3 py-2 rounded-lg border ${
                      isPrawda ? 'border-green-300 bg-green-50 text-green-800' : 'border-red-100 bg-red-50 text-red-700'
                    }`}
                  >
                    <span className={`font-bold shrink-0 ${isPrawda ? 'text-green-600' : 'text-red-400'}`}>
                      {opt.id}.
                    </span>
                    <span>{opt.text}</span>
                    <span className={`ml-auto shrink-0 font-bold text-xs px-1.5 py-0.5 rounded ${
                      isPrawda ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'
                    }`}>
                      {verdict}
                    </span>
                  </div>
                )
              }
              const isCorrect = q.correct_answer?.includes(opt.id)
              return (
                <div
                  key={opt.id}
                  className={`flex items-start gap-2 text-xs px-3 py-2 rounded-lg border ${
                    isCorrect
                      ? 'border-green-300 bg-green-50 text-green-800'
                      : 'border-gray-100 bg-gray-50 text-gray-500'
                  }`}
                >
                  <span className={`font-bold shrink-0 ${isCorrect ? 'text-green-600' : 'text-gray-400'}`}>
                    {opt.id}.
                  </span>
                  <span>{opt.text}</span>
                  {isCorrect && (
                    <span className="ml-auto shrink-0 text-green-500 font-bold">✓</span>
                  )}
                </div>
              )
            })
          })()}
        </div>
      )}

      {/* Footer: badges + explanation toggle */}
      <div className="px-4 pb-3 flex items-center gap-2 flex-wrap">
        <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">{q.subtopic}</span>
        <DifficultyBadge d={q.difficulty} />
        <span className="text-xs text-gray-400">{q.type}</span>
        {q.explanation && (
          <button
            onClick={() => setShowExplanation(v => !v)}
            className="ml-auto text-xs text-gray-400 hover:text-blue-600 transition-colors"
          >
            {showExplanation ? 'Ukryj wyjaśnienie ▲' : 'Wyjaśnienie ▼'}
          </button>
        )}
      </div>

      {/* Explanation — inline expand */}
      {showExplanation && q.explanation && (
        <div className="mx-4 mb-4 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2.5 text-xs text-blue-800 leading-relaxed">
          {q.explanation}
        </div>
      )}
    </div>
  )
}

function Sidebar({ data, onClose }: { data: SidebarData; onClose: () => void }) {
  if (!data) return null
  return (
    <>
      <div className="fixed inset-0 bg-black/20 z-40" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-1/2 min-w-96 bg-white shadow-2xl z-50 flex flex-col">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-800 text-sm">{data.title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none">&times;</button>
        </div>
        <div className="overflow-y-auto flex-1 p-4 space-y-3">
          {data.questions.length === 0 && (
            <p className="text-sm text-gray-400 text-center py-8">Brak pytań</p>
          )}
          {data.questions.map((q, i) => (
            <SidebarCard key={i} q={q} index={i} />
          ))}
        </div>
        <div className="px-5 py-3 border-t border-gray-100 text-xs text-gray-400 text-right">
          {data.questions.length} pytań
        </div>
      </div>
    </>
  )
}

type MaturaExam = {
  id: string
  year: number
  session: string
}

type MaturaQuestion = {
  id: string
  exam_id: string
  question_type: string
  max_points: number
  key_points: string[]
  model_answer: string | null
  zadanie_number: string
}

const SESSION_LABEL: Record<string, string> = {
  maj: 'Maj', czerwiec: 'Czerwiec', sierpien: 'Sierpień', dodatkowy: 'Dodatkowy',
}

const TABS = ['Przegląd bazy', 'Pokrycie tematów', 'Sprawdzian', 'Archiwum matur']

export default function ReportsClient({ questions, mockQuestions, topics, subtopics, maturaExams, maturaQuestions }: {
  questions: Question[]
  mockQuestions: MockQuestion[]
  topics: Topic[]
  subtopics: Subtopic[]
  maturaExams: MaturaExam[]
  maturaQuestions: MaturaQuestion[]
}) {
  const [tab, setTab] = useState(0)
  const [sidebar, setSidebar] = useState<SidebarData>(null)
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set())

  function subtopicName(q: Question) {
    return q.subtopics?.name ?? '—'
  }

  function mockSubtopicName(q: MockQuestion) {
    return q.subtopics?.name ?? '—'
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
        image_url: q.image_url,
        options: q.options ?? [],
        correct_answer: q.correct_answer ?? [],
        explanation: q.explanation ?? '',
      })),
    })
  }

  function openMockTopicSidebar(topic: Topic) {
    const qs = mockQuestions.filter(q => q.subtopics?.topic_id === topic.id)
    setSidebar({
      title: `Sprawdzian: ${topic.name} (${qs.length} pytań)`,
      questions: qs.map(q => ({
        text: q.question_text,
        subtopic: mockSubtopicName(q),
        difficulty: q.difficulty ?? 2,
        type: q.question_type,
        image_url: q.image_url,
        options: q.options ?? [],
        correct_answer: q.correct_answer ?? [],
        explanation: q.explanation ?? '',
      })),
    })
  }

  // --- Computed stats ---
  const verified = questions.filter(q => q.verified)
  const unverified = questions.filter(q => !q.verified)
  const byDifficulty = [1, 2, 3].map(d => ({ d, count: questions.filter(q => q.difficulty === d).length }))
  const byType = ['single', 'multiple', 'true_false', 'open'].map(t => ({ t, count: questions.filter(q => q.question_type === t).length }))

  // Archiwum stats
  const maturaByExam = maturaExams.map(exam => {
    const qs = maturaQuestions.filter(q => q.exam_id === exam.id)
    const open = qs.filter(q => q.question_type === 'open')
    const closed = qs.filter(q => q.question_type !== 'open')
    const withKeyPoints = open.filter(q => q.key_points?.length > 0)
    const withModelAnswer = open.filter(q => !!q.model_answer)
    const totalPoints = qs.reduce((s, q) => s + (q.max_points ?? 0), 0)
    return { exam, qs, open, closed, withKeyPoints, withModelAnswer, totalPoints }
  })
  const mockVerified = mockQuestions.filter(q => q.verified).length

  // Topic coverage table — uses all predefined subtopics (including 0-question ones)
  const topicTableData = topics.map(topic => {
    const tq = questions.filter(q => q.topic_id === topic.id)
    const topicSubs = subtopics.filter(s => s.topic_id === topic.id).sort((a, b) => a.order_index - b.order_index)

    const subtopicRows = topicSubs.map(sub => {
      const subQs = tq.filter(q => q.subtopic_id === sub.id)
      const avgDiff = subQs.length > 0
        ? subQs.reduce((s, q) => s + (q.difficulty ?? 2), 0) / subQs.length
        : 0
      return {
        id: sub.id,
        name: sub.name,
        total: subQs.length,
        verified: subQs.filter(q => q.verified).length,
        avgDiff,
      }
    })

    const avgDiff = tq.length > 0
      ? tq.reduce((s, q) => s + (q.difficulty ?? 2), 0) / tq.length
      : 0

    return {
      ...topic,
      total: tq.length,
      verifiedCount: tq.filter(q => q.verified).length,
      subtopicCount: topicSubs.length,
      avgDiff,
      subtopicRows,
    }
  })

  // Sprawdzian tab data — uses all predefined subtopics (shows uncovered ones too)
  const mockByTopic = topics.map(topic => {
    const topicSubs = subtopics.filter(s => s.topic_id === topic.id).sort((a, b) => a.order_index - b.order_index)
    const mockQsForTopic = mockQuestions.filter(q => q.subtopics?.topic_id === topic.id)

    const subtopicRows = topicSubs.map(sub => {
      const subMockQs = mockQuestions.filter(q => q.subtopic_id === sub.id)
      const avgDiff = subMockQs.length > 0
        ? subMockQs.reduce((s, q) => s + (q.difficulty ?? 2), 0) / subMockQs.length
        : 0
      return {
        id: sub.id,
        name: sub.name,
        total: subMockQs.length,
        verified: subMockQs.filter(q => q.verified).length,
        avgDiff,
      }
    })

    const coveredCount = subtopicRows.filter(s => s.total > 0).length
    const avgDiff = mockQsForTopic.length > 0
      ? mockQsForTopic.reduce((s, q) => s + (q.difficulty ?? 2), 0) / mockQsForTopic.length
      : 0

    return {
      ...topic,
      mockCount: mockQsForTopic.length,
      verifiedCount: mockQsForTopic.filter(q => q.verified).length,
      covered: coveredCount,
      subtopicTotal: topicSubs.length,
      avgDiff,
      subtopicRows,
    }
  })

  const totalCovered = subtopics.filter(s => mockQuestions.some(q => q.subtopic_id === s.id)).length

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

        <div className="flex border-b border-gray-200 mb-8">
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
          <div className="space-y-4">
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
                      <span className={`text-sm font-semibold ${count === 0 ? 'text-gray-300' : 'text-gray-700'}`}>{count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Archiwum summary */}
            <div className="bg-white rounded-xl border border-amber-200 p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold text-gray-700">Archiwum matur CKE</h2>
                <button onClick={() => setTab(3)} className="text-xs text-amber-600 hover:text-amber-800 hover:underline">
                  Szczegóły →
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="text-2xl font-bold text-amber-600">{maturaExams.length}</div>
                  <div className="text-xs text-gray-500 mt-0.5">Arkuszy CKE</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-600">{maturaQuestions.length}</div>
                  <div className="text-xs text-gray-500 mt-0.5">Zadań łącznie</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-700">{maturaQuestions.filter(q => q.question_type === 'open').length}</div>
                  <div className="text-xs text-gray-500 mt-0.5">Otwartych</div>
                </div>
                <div>
                  {(() => {
                    const open = maturaQuestions.filter(q => q.question_type === 'open')
                    const withKp = open.filter(q => q.key_points?.length > 0).length
                    const pct = open.length > 0 ? Math.round(withKp / open.length * 100) : 0
                    return (
                      <>
                        <div className={`text-2xl font-bold ${pct < 80 ? 'text-red-500' : 'text-green-600'}`}>{pct}%</div>
                        <div className="text-xs text-gray-500 mt-0.5">Ma key_points ({withKp}/{open.length})</div>
                      </>
                    )
                  })()}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 1: Pokrycie tematów — expandable table */}
        {tab === 1 && (
          <div>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-3">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-4 py-3 text-gray-600 font-medium">Temat / Podtemat</th>
                    <th className="text-center px-3 py-3 text-gray-600 font-medium">Pytań</th>
                    <th className="text-center px-3 py-3 text-gray-600 font-medium">Verified</th>
                    <th className="text-center px-3 py-3 text-gray-600 font-medium">Podtematów</th>
                    <th className="text-center px-3 py-3 text-gray-600 font-medium">Śr. trudność</th>
                    <th className="px-3 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {topicTableData.map(topic => {
                    const isExpanded = expandedTopics.has(topic.id)
                    return (
                      <>
                        {/* Topic row */}
                        <tr
                          key={topic.id}
                          className="border-t border-gray-100 hover:bg-gray-50 cursor-pointer"
                          onClick={() => toggleTopic(topic.id)}
                        >
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <span className="text-gray-400 text-xs w-4 shrink-0 select-none">
                                {isExpanded ? '▼' : '▶'}
                              </span>
                              <span className="font-semibold text-gray-800">
                                {topic.order_index}. {topic.name}
                              </span>
                            </div>
                          </td>
                          <td className="px-3 py-3 text-center">
                            <CountBadge n={topic.total} warn={10} danger={5} />
                          </td>
                          <td className="px-3 py-3 text-center text-gray-600 font-medium">
                            {topic.verifiedCount}
                          </td>
                          <td className="px-3 py-3 text-center text-gray-500">
                            {topic.subtopicCount}
                          </td>
                          <td className="px-3 py-3 text-center">
                            {topic.avgDiff > 0
                              ? <DifficultyBadge d={Math.round(topic.avgDiff)} />
                              : <span className="text-gray-300">—</span>}
                          </td>
                          <td className="px-3 py-3 text-right">
                            <button
                              onClick={e => { e.stopPropagation(); openTopicSidebar(topic) }}
                              className="text-xs text-green-600 hover:text-green-800 hover:underline whitespace-nowrap"
                            >
                              Lista →
                            </button>
                          </td>
                        </tr>

                        {/* Subtopic rows — expanded inline */}
                        {isExpanded && topic.subtopicRows.map(sub => (
                          <tr key={sub.id} className="bg-gray-50/60 border-t border-gray-50">
                            <td className="pl-10 pr-4 py-2">
                              <span className={`text-sm ${sub.total === 0 ? 'text-red-400' : 'text-gray-600'}`}>
                                {sub.total === 0
                                  ? <span className="mr-1.5">○</span>
                                  : <span className="mr-1.5 text-green-400">●</span>}
                                {sub.name}
                              </span>
                            </td>
                            <td className="px-3 py-2 text-center">
                              {sub.total > 0
                                ? <CountBadge n={sub.total} warn={5} danger={2} />
                                : <span className="text-xs text-red-300 font-semibold">0</span>}
                            </td>
                            <td className="px-3 py-2 text-center text-gray-500 text-sm">
                              {sub.verified > 0 ? sub.verified : <span className="text-gray-300">—</span>}
                            </td>
                            <td className="px-3 py-2 text-center text-gray-300 text-sm">—</td>
                            <td className="px-3 py-2 text-center">
                              {sub.avgDiff > 0
                                ? <DifficultyBadge d={Math.round(sub.avgDiff)} />
                                : <span className="text-gray-300 text-xs">—</span>}
                            </td>
                            <td className="px-3 py-2"></td>
                          </tr>
                        ))}
                      </>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div className="flex gap-4 text-xs text-gray-400 flex-wrap">
              <span><span className="inline-block w-3 h-3 bg-red-100 rounded mr-1"></span>≤ 5 pytań</span>
              <span><span className="inline-block w-3 h-3 bg-yellow-100 rounded mr-1"></span>6–10 pytań</span>
              <span><span className="inline-block w-3 h-3 bg-green-100 rounded mr-1"></span>&gt; 10 pytań</span>
              <span><span className="text-green-400 mr-1">●</span>podtemat pokryty</span>
              <span><span className="text-red-300 mr-1">○</span>brak pytań</span>
            </div>
          </div>
        )}

        {/* Tab 2: Sprawdzian */}
        {tab === 2 && (
          <div>
            <p className="text-sm text-gray-500 mb-4">
              Pokryto {totalCovered} z {subtopics.length} podtematów (
              {subtopics.length > 0 ? Math.round(totalCovered / subtopics.length * 100) : 0}%)
            </p>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-3">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-4 py-3 text-gray-600 font-medium">Temat / Podtemat</th>
                    <th className="text-center px-3 py-3 text-gray-600 font-medium">Pytań</th>
                    <th className="text-center px-3 py-3 text-gray-600 font-medium">Verified</th>
                    <th className="text-center px-3 py-3 text-gray-600 font-medium">Pokrycie</th>
                    <th className="text-center px-3 py-3 text-gray-600 font-medium">Śr. trudność</th>
                    <th className="px-3 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {mockByTopic.map(topic => {
                    const isExpanded = expandedTopics.has(topic.id + '_mock')
                    const allCovered = topic.covered === topic.subtopicTotal && topic.subtopicTotal > 0
                    const noneCovered = topic.covered === 0
                    return (
                      <>
                        {/* Topic row */}
                        <tr
                          key={topic.id}
                          className="border-t border-gray-100 hover:bg-gray-50 cursor-pointer"
                          onClick={() => toggleTopic(topic.id + '_mock')}
                        >
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <span className="text-gray-400 text-xs w-4 shrink-0 select-none">
                                {isExpanded ? '▼' : '▶'}
                              </span>
                              <span className="font-semibold text-gray-800">
                                {topic.order_index}. {topic.name}
                              </span>
                            </div>
                          </td>
                          <td className="px-3 py-3 text-center">
                            <CountBadge n={topic.mockCount} warn={5} danger={2} />
                          </td>
                          <td className="px-3 py-3 text-center text-gray-600 font-medium">
                            {topic.verifiedCount}
                          </td>
                          <td className="px-3 py-3 text-center">
                            <span className={`text-xs px-2 py-0.5 rounded font-semibold ${
                              allCovered ? 'bg-green-100 text-green-700' :
                              noneCovered ? 'bg-red-100 text-red-600' :
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {topic.covered}/{topic.subtopicTotal}
                            </span>
                          </td>
                          <td className="px-3 py-3 text-center">
                            {topic.avgDiff > 0
                              ? <DifficultyBadge d={Math.round(topic.avgDiff)} />
                              : <span className="text-gray-300">—</span>}
                          </td>
                          <td className="px-3 py-3 text-right">
                            <button
                              onClick={e => { e.stopPropagation(); openMockTopicSidebar(topic) }}
                              className="text-xs text-green-600 hover:text-green-800 hover:underline whitespace-nowrap"
                            >
                              Lista →
                            </button>
                          </td>
                        </tr>

                        {/* Subtopic rows — expanded inline */}
                        {isExpanded && topic.subtopicRows.map(sub => (
                          <tr key={sub.id} className="bg-gray-50/60 border-t border-gray-50">
                            <td className="pl-10 pr-4 py-2">
                              <span className={`text-sm ${sub.total === 0 ? 'text-red-400' : 'text-gray-600'}`}>
                                {sub.total === 0
                                  ? <span className="mr-1.5">○</span>
                                  : <span className="mr-1.5 text-green-400">●</span>}
                                {sub.name}
                              </span>
                            </td>
                            <td className="px-3 py-2 text-center">
                              {sub.total > 0
                                ? <CountBadge n={sub.total} warn={3} danger={1} />
                                : <span className="text-xs text-red-300 font-semibold">0</span>}
                            </td>
                            <td className="px-3 py-2 text-center text-gray-500 text-sm">
                              {sub.verified > 0 ? sub.verified : <span className="text-gray-300">—</span>}
                            </td>
                            <td className="px-3 py-2 text-center text-gray-300 text-sm">—</td>
                            <td className="px-3 py-2 text-center">
                              {sub.avgDiff > 0
                                ? <DifficultyBadge d={Math.round(sub.avgDiff)} />
                                : <span className="text-gray-300 text-xs">—</span>}
                            </td>
                            <td className="px-3 py-2"></td>
                          </tr>
                        ))}
                      </>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div className="flex gap-4 text-xs text-gray-400 flex-wrap">
              <span><span className="inline-block w-3 h-3 bg-red-100 rounded mr-1"></span>≤ 2 pytania</span>
              <span><span className="inline-block w-3 h-3 bg-yellow-100 rounded mr-1"></span>3–5 pytań</span>
              <span><span className="inline-block w-3 h-3 bg-green-100 rounded mr-1"></span>&gt; 5 pytań</span>
              <span><span className="text-green-400 mr-1">●</span>podtemat pokryty</span>
              <span><span className="text-red-300 mr-1">○</span>brak pytań</span>
            </div>
          </div>
        )}

        {/* Tab 3: Archiwum matur */}
        {tab === 3 && (
          <div className="space-y-4">
            {maturaByExam.map(({ exam, qs, open, closed, withKeyPoints, withModelAnswer, totalPoints }) => {
              const kpPct = open.length > 0 ? Math.round(withKeyPoints.length / open.length * 100) : 100
              return (
                <div key={exam.id} className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="font-bold text-gray-900">
                        Matura {exam.year} — {SESSION_LABEL[exam.session] ?? exam.session}
                      </h2>
                      <p className="text-xs text-gray-400 mt-0.5">exam_id: {exam.id}</p>
                    </div>
                    <a
                      href={`/archiwum/${exam.id}`}
                      target="_blank"
                      className="text-xs text-amber-600 hover:text-amber-800 hover:underline"
                    >
                      Otwórz →
                    </a>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-xl font-bold text-gray-800">{qs.length}</div>
                      <div className="text-xs text-gray-500 mt-0.5">Zadań</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-xl font-bold text-gray-800">{totalPoints}</div>
                      <div className="text-xs text-gray-500 mt-0.5">Punktów</div>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-3 text-center">
                      <div className="text-xl font-bold text-amber-700">{open.length}</div>
                      <div className="text-xs text-gray-500 mt-0.5">Otwartych</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 text-center">
                      <div className="text-xl font-bold text-blue-700">{closed.length}</div>
                      <div className="text-xs text-gray-500 mt-0.5">Zamkniętych</div>
                    </div>
                    <div className={`rounded-lg p-3 text-center ${kpPct < 80 ? 'bg-red-50' : 'bg-green-50'}`}>
                      <div className={`text-xl font-bold ${kpPct < 80 ? 'text-red-600' : 'text-green-700'}`}>{kpPct}%</div>
                      <div className="text-xs text-gray-500 mt-0.5">Ma key_points</div>
                    </div>
                  </div>

                  {/* Type breakdown */}
                  <div className="flex gap-2 flex-wrap mb-4">
                    {(['single', 'multiple', 'true_false', 'open'] as const).map(t => {
                      const count = qs.filter(q => q.question_type === t).length
                      if (count === 0) return null
                      const colors: Record<string, string> = {
                        single: 'bg-blue-50 text-blue-700 border-blue-200',
                        multiple: 'bg-purple-50 text-purple-700 border-purple-200',
                        true_false: 'bg-orange-50 text-orange-700 border-orange-200',
                        open: 'bg-amber-50 text-amber-700 border-amber-200',
                      }
                      return (
                        <span key={t} className={`text-xs font-medium px-2 py-1 rounded border ${colors[t]}`}>
                          {t}: {count}
                        </span>
                      )
                    })}
                  </div>

                  {/* Quality warnings */}
                  {open.length > 0 && (
                    <div className="space-y-1.5">
                      {withKeyPoints.length < open.length && (
                        <div className="flex items-start gap-2 text-xs bg-red-50 border border-red-100 rounded-lg px-3 py-2 text-red-700">
                          <span className="shrink-0">⚠</span>
                          <span>
                            {open.length - withKeyPoints.length} otwartych zadań bez key_points:{' '}
                            {open.filter(q => !q.key_points?.length).map(q => `Zad. ${q.zadanie_number}`).join(', ')}
                          </span>
                        </div>
                      )}
                      {withModelAnswer.length < open.length && (
                        <div className="flex items-start gap-2 text-xs bg-yellow-50 border border-yellow-100 rounded-lg px-3 py-2 text-yellow-700">
                          <span className="shrink-0">ℹ</span>
                          <span>
                            {open.length - withModelAnswer.length} otwartych bez model_answer (AI ocenia tylko na podstawie kryteriów)
                          </span>
                        </div>
                      )}
                      {withKeyPoints.length === open.length && withModelAnswer.length === open.length && (
                        <div className="text-xs text-green-600 bg-green-50 border border-green-100 rounded-lg px-3 py-2">
                          ✓ Wszystkie otwarte zadania mają key_points i model_answer
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}

            {maturaExams.length === 0 && (
              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center text-gray-400">
                Brak arkuszy w bazie. Uruchom import-matura-v2.js.
              </div>
            )}
          </div>
        )}

      </div>

      <Sidebar data={sidebar} onClose={() => setSidebar(null)} />
    </main>
  )
}
