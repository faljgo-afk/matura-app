import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import EditNameForm from '@/components/EditNameForm'
import DashboardTabs from '@/components/DashboardTabs'
import { fetchAll } from '@/lib/fetch-all'

export const dynamic = 'force-dynamic'

async function getStats(userId: string) {
  const supabase = createClient()

  const [
    { data: sessions },
    { data: topics },
    allQuestions,
    learnedRows,
  ] = await Promise.all([
    supabase.from('test_sessions').select('*').eq('user_id', userId).not('completed_at', 'is', null).order('created_at', { ascending: false }),
    supabase.from('topics').select('*').order('order_index'),
    fetchAll<{ id: string; topic_id: string }>(
      (from, to) => supabase.from('questions').select('id, topic_id').eq('verified', true).order('id').range(from, to)
    ),
    fetchAll<{ question_id: string }>(
      (from, to) => supabase.from('user_learned_questions').select('question_id').eq('user_id', userId).order('question_id').range(from, to)
    ),
  ])

  return {
    sessions: sessions ?? [],
    topics: topics ?? [],
    allQuestions,
    learnedIds: new Set(learnedRows.map(r => r.question_id)),
  }
}

export default async function DashboardPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const { sessions, topics, allQuestions, learnedIds } = await getStats(user.id)

  const topicSessions = sessions.filter(s => s.session_type === 'topic')
  const mockSessions = sessions.filter(s => s.session_type === 'mock_exam' || s.session_type === 'mock_exam_free')

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
    <main className="bg-canvas min-h-[70vh]">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-8 py-8 sm:py-10 flex flex-col gap-8">

        {/* Profile card */}
        <section className="relative overflow-hidden rounded-[32px] border-4 border-brand-deep shadow-hard-lg mb-2 text-white bg-gradient-to-br from-[#0b5a33] to-[#12803f] p-6 sm:p-8 flex items-center gap-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-sun border-[3px] border-brand-deep flex items-center justify-center shrink-0 select-none">
            <span className="font-display text-3xl sm:text-4xl font-bold text-brand-deep">
              {((user.user_metadata?.name || user.email || '?')[0]).toUpperCase()}
            </span>
          </div>
          <div className="relative flex-1 min-w-0">
            <p className="text-xs font-extrabold uppercase tracking-wider text-sun mb-1">Moje konto</p>
            <EditNameForm currentName={user.user_metadata?.name ?? ''} />
            <p className="text-sm text-[#e9fbe0] truncate mt-0.5">{user.email}</p>
          </div>
          <div className="relative text-right text-sm shrink-0 hidden sm:block">
            <p className="text-[#e9fbe0]">Uczestnik od</p>
            <p className="font-extrabold mt-0.5">
              {new Date(user.created_at).toLocaleDateString('pl-PL', { year: 'numeric', month: 'long' })}
            </p>
          </div>
        </section>

        {/* Summary cards */}
        <section aria-label="Podsumowanie" className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { value: String(totalTests), label: 'Testów tematycznych', tile: 'bg-leaf' },
            { value: avgTopicScore !== null ? `${avgTopicScore}%` : '—', label: 'Średni wynik (tematy)', tile: 'bg-sun' },
            { value: String(mockSessions.length), label: 'Sprawdzianów', tile: 'bg-aqua' },
            { value: avgMockScore !== null ? `${avgMockScore}%` : '—', label: 'Średni wynik (sprawdziany)', tile: 'bg-candy' },
            { value: `${totalLearned}/${totalQuestions}`, label: 'Pytań opanowanych', tile: 'bg-grape text-white' },
          ].map((s) => (
            <div key={s.label} className="card-game !rounded-[24px] p-4 flex flex-col gap-2 last:col-span-2 lg:last:col-span-1">
              <span className={`self-start font-mono font-semibold text-2xl sm:text-3xl leading-none px-3 py-2 rounded-2xl border-[3px] border-brand-deep text-brand-deep ${s.tile}`}>
                {s.value}
              </span>
              <span className="text-sm font-bold text-muted leading-snug">{s.label}</span>
            </div>
          ))}
        </section>

        <DashboardTabs topicStats={topicStats} sessions={sessions} topics={topics} />

      </div>
    </main>
  )
}
