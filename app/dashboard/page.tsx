import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import EditNameForm from '@/components/EditNameForm'
import DashboardTabs from '@/components/DashboardTabs'

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

  const totalTests = topicSessions.length
  const avgTopicScore = topicSessions.length > 0
    ? Math.round(topicSessions.reduce((sum, s) => sum + ((s.score ?? 0) / (s.max_score ?? 1)) * 100, 0) / topicSessions.length)
    : null
  const avgMockScore = mockSessions.length > 0
    ? Math.round(mockSessions.reduce((sum, s) => sum + ((s.score ?? 0) / (s.max_score ?? 1)) * 100, 0) / mockSessions.length)
    : null

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

        {/* Profile card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center shrink-0 select-none">
            <span className="text-2xl font-bold text-green-600">
              {((user.user_metadata?.name || user.email || '?')[0]).toUpperCase()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1">Moje konto</p>
            <EditNameForm currentName={user.user_metadata?.name ?? ''} />
            <p className="text-sm text-gray-400 truncate mt-0.5">{user.email}</p>
          </div>
          <div className="text-right text-xs text-gray-400 shrink-0 hidden sm:block">
            <p>Uczestnik od</p>
            <p className="font-semibold text-gray-600 mt-0.5">
              {new Date(user.created_at).toLocaleDateString('pl-PL', { year: 'numeric', month: 'long' })}
            </p>
          </div>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
            <div className="text-3xl font-bold text-green-600">{totalTests}</div>
            <div className="text-sm text-gray-500 mt-1">Testów tematycznych</div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
            <div className="text-3xl font-bold text-green-600">
              {avgTopicScore !== null ? `${avgTopicScore}%` : '—'}
            </div>
            <div className="text-sm text-gray-500 mt-1">Średni wynik (tematy)</div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
            <div className="text-3xl font-bold text-green-600">{mockSessions.length}</div>
            <div className="text-sm text-gray-500 mt-1">Sprawdzianów</div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
            <div className="text-3xl font-bold text-green-600">
              {avgMockScore !== null ? `${avgMockScore}%` : '—'}
            </div>
            <div className="text-sm text-gray-500 mt-1">Średni wynik (sprawdziany)</div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
            <div className="text-3xl font-bold text-blue-600">{totalLearned}<span className="text-lg text-gray-400">/{totalQuestions}</span></div>
            <div className="text-sm text-gray-500 mt-1">Pytań opanowanych</div>
          </div>
        </div>

        <DashboardTabs topicStats={topicStats} sessions={sessions} topics={topics} />

      </div>
    </main>
  )
}
