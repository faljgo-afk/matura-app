import { createClient } from '@/lib/supabase-server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

const ADMIN_EMAIL = 'faljgo@gmail.com'

async function getReportData() {
  const [
    { data: questions },
    { data: mockQuestions },
    { data: topics },
  ] = await Promise.all([
    supabaseAdmin.from('questions').select('topic_id, subtopic, difficulty, question_type, verified'),
    supabaseAdmin.from('mock_questions').select('subtopic, difficulty, question_type, verified'),
    supabaseAdmin.from('topics').select('id, name, order_index').order('order_index'),
  ])

  return {
    questions: questions ?? [],
    mockQuestions: mockQuestions ?? [],
    topics: topics ?? [],
  }
}

function DifficultyBadge({ d }: { d: number }) {
  if (d === 1) return <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded">łatwe</span>
  if (d === 3) return <span className="text-xs bg-red-100 text-red-700 px-1.5 py-0.5 rounded">trudne</span>
  return <span className="text-xs bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded">średnie</span>
}

function CountBadge({ n, warn, danger }: { n: number; warn: number; danger: number }) {
  const cls = n <= danger ? 'bg-red-100 text-red-700' : n <= warn ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
  return <span className={`text-xs font-semibold px-2 py-0.5 rounded ${cls}`}>{n}</span>
}

export default async function ReportsPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user || user.email !== ADMIN_EMAIL) redirect('/')

  const { questions, mockQuestions, topics } = await getReportData()

  const verified = questions.filter(q => q.verified)
  const unverified = questions.filter(q => !q.verified)

  const byDifficulty = [1, 2, 3].map(d => ({ d, count: questions.filter(q => q.difficulty === d).length }))
  const byType = ['single', 'multiple', 'true_false'].map(t => ({ t, count: questions.filter(q => q.question_type === t).length }))

  const mockVerified = mockQuestions.filter(q => q.verified).length

  // Per-topic stats
  const topicStats = topics.map(topic => {
    const tq = questions.filter(q => q.topic_id === topic.id)
    const tqVerified = tq.filter(q => q.verified)
    const subtopics = [...new Set(tq.map(q => q.subtopic ?? 'ogólne'))]
    const avgDiff = tq.length > 0 ? (tq.reduce((s, q) => s + (q.difficulty ?? 2), 0) / tq.length) : 0
    return { ...topic, total: tq.length, verified: tqVerified.length, subtopics: subtopics.length, avgDiff }
  })

  // Per-topic subtopic breakdown
  const topicSubtopics = topics.map(topic => {
    const tq = questions.filter(q => q.topic_id === topic.id)
    const subtopicMap: Record<string, { total: number; verified: number; avgDiff: number }> = {}
    for (const q of tq) {
      const sub = q.subtopic ?? 'ogólne'
      if (!subtopicMap[sub]) subtopicMap[sub] = { total: 0, verified: 0, avgDiff: 0 }
      subtopicMap[sub].total++
      if (q.verified) subtopicMap[sub].verified++
      subtopicMap[sub].avgDiff += q.difficulty ?? 2
    }
    for (const sub of Object.keys(subtopicMap)) {
      subtopicMap[sub].avgDiff = subtopicMap[sub].avgDiff / subtopicMap[sub].total
    }
    return { ...topic, subtopicMap }
  })

  // Mock questions subtopic stats
  const mockSubtopicMap: Record<string, number> = {}
  for (const q of mockQuestions) {
    const sub = q.subtopic ?? 'ogólne'
    mockSubtopicMap[sub] = (mockSubtopicMap[sub] ?? 0) + 1
  }

  // All subtopics from main questions
  const allSubtopics = [...new Set(questions.map(q => q.subtopic ?? 'ogólne'))]
  const mockCoveredSubtopics = allSubtopics.filter(s => mockSubtopicMap[s] > 0).length

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
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

        {/* 1. Przegląd bazy */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-gray-800 mb-4">1. Przegląd bazy</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
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
        </section>

        {/* 2. Pokrycie tematów */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-gray-800 mb-4">2. Pokrycie tematów</h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 text-gray-600 font-medium">Temat</th>
                  <th className="text-center px-4 py-3 text-gray-600 font-medium">Pytań</th>
                  <th className="text-center px-4 py-3 text-gray-600 font-medium">Verified</th>
                  <th className="text-center px-4 py-3 text-gray-600 font-medium">Podtematów</th>
                  <th className="text-center px-4 py-3 text-gray-600 font-medium">Śr. trudność</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {topicStats.map(t => (
                  <tr key={t.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-700 font-medium">{t.order_index}. {t.name}</td>
                    <td className="px-4 py-3 text-center">
                      <CountBadge n={t.total} warn={10} danger={5} />
                    </td>
                    <td className="px-4 py-3 text-center text-gray-600">{t.verified}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{t.subtopics}</td>
                    <td className="px-4 py-3 text-center">
                      {t.avgDiff > 0 ? <DifficultyBadge d={Math.round(t.avgDiff)} /> : <span className="text-gray-300">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex gap-4 mt-2 text-xs text-gray-400">
            <span><span className="inline-block w-3 h-3 bg-red-100 rounded mr-1"></span>≤ 5 pytań</span>
            <span><span className="inline-block w-3 h-3 bg-yellow-100 rounded mr-1"></span>6–10 pytań</span>
            <span><span className="inline-block w-3 h-3 bg-green-100 rounded mr-1"></span>&gt; 10 pytań</span>
          </div>
        </section>

        {/* 3. Pokrycie podtematów */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-gray-800 mb-4">3. Pokrycie podtematów</h2>
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
        </section>

        {/* 4. Mock questions */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-gray-800 mb-1">4. Sprawdzian — pokrycie podtematów</h2>
          <p className="text-sm text-gray-500 mb-4">
            Pokryto {mockCoveredSubtopics} z {allSubtopics.length} podtematów ({Math.round(mockCoveredSubtopics / allSubtopics.length * 100)}%)
          </p>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 text-gray-600 font-medium">Podtemat</th>
                  <th className="text-center px-4 py-3 text-gray-600 font-medium">Pytań w sprawdzianie</th>
                  <th className="text-center px-4 py-3 text-gray-600 font-medium">Pytań w bazie tematycznej</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {allSubtopics.sort().map(sub => {
                  const inMock = mockSubtopicMap[sub] ?? 0
                  const inMain = questions.filter(q => (q.subtopic ?? 'ogólne') === sub).length
                  return (
                    <tr key={sub} className={inMock === 0 ? 'bg-red-50' : 'hover:bg-gray-50'}>
                      <td className="px-4 py-2.5 text-gray-700">
                        {inMock === 0 && <span className="text-red-400 mr-1">✗</span>}
                        {inMock > 0 && <span className="text-green-500 mr-1">✓</span>}
                        {sub}
                      </td>
                      <td className="px-4 py-2.5 text-center">
                        {inMock > 0
                          ? <span className="text-green-600 font-semibold">{inMock}</span>
                          : <span className="text-red-400">—</span>}
                      </td>
                      <td className="px-4 py-2.5 text-center text-gray-500">{inMain}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </main>
  )
}
