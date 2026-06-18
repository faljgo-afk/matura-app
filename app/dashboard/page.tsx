import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

async function getStats(userId: string) {
  const supabase = createClient()

  const [
    { data: sessions },
    { data: topics },
    { data: allQuestions },
    { data: learnedRows },
  ] = await Promise.all([
    supabase.from('test_sessions').select('*').eq('user_id', userId).not('completed_at', 'is', null).order('created_at', { ascending: false }),
    supabase.from('topics').select('*').order('order_index'),
    supabase.from('questions').select('id, topic_id').eq('verified', true),
    supabase.from('user_learned_questions').select('question_id').eq('user_id', userId),
  ])

  return {
    sessions: sessions ?? [],
    topics: topics ?? [],
    allQuestions: allQuestions ?? [],
    learnedIds: new Set((learnedRows ?? []).map(r => r.question_id)),
  }
}

export default async function DashboardPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const { sessions, topics, allQuestions, learnedIds } = await getStats(user.id)

  const topicSessions = sessions.filter(s => s.session_type === 'topic')
  const mockSessions = sessions.filter(s => s.session_type === 'mock_exam')

  const totalTests = sessions.length
  const avgScore = sessions.length > 0
    ? Math.round(sessions.reduce((sum, s) => sum + ((s.score ?? 0) / (s.max_score ?? 1)) * 100, 0) / sessions.length)
    : 0

  // Best score + mastery per topic
  const topicStats = topics.map(topic => {
    const topicSess = topicSessions.filter(s => s.topic_id === topic.id)
    const best = topicSess.length > 0
      ? Math.max(...topicSess.map(s => Math.round(((s.score ?? 0) / (s.max_score ?? 1)) * 100)))
      : null
    const topicQuestions = allQuestions.filter(q => q.topic_id === topic.id)
    const totalQ = topicQuestions.length
    const learnedQ = topicQuestions.filter(q => learnedIds.has(q.id)).length
    return { ...topic, attempts: topicSess.length, bestScore: best, totalQ, learnedQ }
  })

  const totalLearned = learnedIds.size
  const totalQuestions = allQuestions.length

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-10">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Moje postępy</h1>
          <p className="text-gray-500 text-sm mt-1">{user.email}</p>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-4 gap-4 mb-10">
          <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
            <div className="text-3xl font-bold text-green-600">{totalTests}</div>
            <div className="text-sm text-gray-500 mt-1">Testów ukończonych</div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
            <div className="text-3xl font-bold text-green-600">{avgScore}%</div>
            <div className="text-sm text-gray-500 mt-1">Średni wynik</div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
            <div className="text-3xl font-bold text-green-600">{mockSessions.length}</div>
            <div className="text-sm text-gray-500 mt-1">Sprawdzianów</div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
            <div className="text-3xl font-bold text-blue-600">{totalLearned}<span className="text-lg text-gray-400">/{totalQuestions}</span></div>
            <div className="text-sm text-gray-500 mt-1">Pytań opanowanych</div>
          </div>
        </div>

        {/* Topic progress */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">Postęp w tematach</h2>
        <div className="space-y-3 mb-10">
          {topicStats.map(topic => (
            <div key={topic.id} className="bg-white rounded-xl p-4 border border-gray-200 flex items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-gray-800 text-sm">{topic.name}</span>
                  <div className="flex items-center gap-3">
                    {topic.learnedQ > 0 && (
                      <span className="text-xs text-blue-600 font-medium">
                        📌 {topic.learnedQ}/{topic.totalQ} opanowanych
                      </span>
                    )}
                    {topic.bestScore !== null ? (
                      <span className={`text-sm font-semibold ${topic.bestScore >= 75 ? 'text-green-600' : topic.bestScore >= 50 ? 'text-yellow-600' : 'text-red-500'}`}>
                        {topic.bestScore}%
                      </span>
                    ) : (
                      <span className="text-xs text-gray-400">nie testowano</span>
                    )}
                  </div>
                </div>
                <div className="h-2 bg-gray-100 rounded-full relative overflow-hidden">
                  {/* Best score bar */}
                  <div
                    className={`h-2 rounded-full transition-all absolute top-0 left-0 ${
                      topic.bestScore === null ? 'w-0' :
                      topic.bestScore >= 75 ? 'bg-green-200' :
                      topic.bestScore >= 50 ? 'bg-yellow-200' : 'bg-red-200'
                    }`}
                    style={{ width: `${topic.bestScore ?? 0}%` }}
                  />
                  {/* Mastery bar on top */}
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
                  {topic.totalQ > 0 && topic.learnedQ === 0 && topic.attempts === 0 && (
                    <span className="text-xs text-gray-300">{topic.totalQ} pytań</span>
                  )}
                </div>
              </div>
              <Link
                href={`/topics/${topic.slug}`}
                className="text-xs text-green-600 hover:underline whitespace-nowrap"
              >
                Ćwicz →
              </Link>
            </div>
          ))}
        </div>

        {/* Recent tests */}
        {sessions.length > 0 && (
          <>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Ostatnie testy</h2>
            <div className="space-y-2">
              {sessions.slice(0, 5).map(session => {
                const percent = Math.round(((session.score ?? 0) / (session.max_score ?? 1)) * 100)
                const topic = topics.find(t => t.id === session.topic_id)
                return (
                  <Link
                    key={session.id}
                    href={`/results/${session.id}`}
                    className="bg-white rounded-xl px-4 py-3 border border-gray-200 flex items-center justify-between hover:border-green-300 transition-colors"
                  >
                    <div>
                      <span className="text-sm font-medium text-gray-700">
                        {session.session_type === 'mock_exam' ? '📝 Sprawdzian z całego materiału' : `📗 ${topic?.name ?? 'Temat'}`}
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
          </>
        )}

        {sessions.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <div className="text-4xl mb-3">📚</div>
            <p>Nie ukończyłeś jeszcze żadnego testu.</p>
            <Link href="/" className="text-green-600 hover:underline text-sm mt-2 inline-block">
              Zacznij naukę →
            </Link>
          </div>
        )}

      </div>
    </main>
  )
}
