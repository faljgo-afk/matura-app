import { createClient } from '@/lib/supabase-server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import type { User } from '@supabase/supabase-js'
import { fetchAll } from '@/lib/fetch-all'

export const dynamic = 'force-dynamic'

const ADMIN_EMAIL = 'faljgo@gmail.com'

// listUsers() returns only 50 users per page by default
async function listAllUsers() {
  const users: User[] = []
  for (let page = 1; ; page++) {
    const { data, error } = await supabaseAdmin.auth.admin.listUsers({ page, perPage: 1000 })
    if (error) return null
    users.push(...data.users)
    if (data.users.length < 1000) return users
  }
}

async function getAdminData() {
  const users = await listAllUsers()
  if (!users) return { users: [], sessionsByUser: {}, learnedByUser: {} }

  const [sessions, learned] = await Promise.all([
    fetchAll<{ user_id: string | null; score: number | null; max_score: number | null; session_type: string; completed_at: string; topic_id: string | null }>(
      (from, to) => supabaseAdmin
        .from('test_sessions')
        .select('user_id, score, max_score, session_type, completed_at, topic_id')
        .not('completed_at', 'is', null)
        .order('id')
        .range(from, to)
    ),
    fetchAll<{ user_id: string | null }>(
      (from, to) => supabaseAdmin
        .from('user_learned_questions')
        .select('user_id')
        .order('user_id')
        .order('question_id')
        .range(from, to)
    ),
  ])

  const sessionsByUser: Record<string, typeof sessions> = {}
  for (const session of sessions ?? []) {
    if (!session.user_id) continue
    if (!sessionsByUser[session.user_id]) sessionsByUser[session.user_id] = []
    sessionsByUser[session.user_id]!.push(session)
  }

  const learnedByUser: Record<string, number> = {}
  for (const row of learned ?? []) {
    if (!row.user_id) continue
    learnedByUser[row.user_id] = (learnedByUser[row.user_id] ?? 0) + 1
  }

  return { users, sessionsByUser, learnedByUser }
}

function scoreColor(score: number) {
  return score >= 75 ? 'text-brand' : score >= 50 ? 'text-amber-600' : 'text-red-500'
}

export default async function AdminPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user || user.email !== ADMIN_EMAIL) redirect('/')

  const { users, sessionsByUser, learnedByUser } = await getAdminData()
  const totalCompleted = Object.values(sessionsByUser).reduce((sum, list) => sum + (list?.length ?? 0), 0)
  const totalLearned = Object.values(learnedByUser).reduce((sum, n) => sum + n, 0)

  return (
    <main className="min-h-[70vh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-10">

        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">Użytkownicy</h1>
          <p className="text-slate-500 text-sm mt-1">Aktywność uczniów i wyniki testów</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            { label: 'Zarejestrowani użytkownicy', value: users.length },
            { label: 'Ukończone testy', value: totalCompleted },
            { label: 'Wyuczone pytania', value: totalLearned },
          ].map((k) => (
            <div key={k.label} className="bg-white rounded-xl border border-slate-200 shadow-sm px-5 py-4">
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">{k.label}</div>
              <div className="mt-1 text-3xl font-extrabold tabular-nums text-slate-900">{k.value}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-sm tabular-nums">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left px-4 py-3 text-[11px] font-extrabold uppercase tracking-wider text-slate-500">Użytkownik</th>
                <th className="text-center px-3 py-3 text-[11px] font-extrabold uppercase tracking-wider text-slate-500">Testów</th>
                <th className="text-center px-3 py-3 text-[11px] font-extrabold uppercase tracking-wider text-slate-500">Sprawdz.</th>
                <th className="text-center px-3 py-3 text-[11px] font-extrabold uppercase tracking-wider text-slate-500">Śr. tematy</th>
                <th className="text-center px-3 py-3 text-[11px] font-extrabold uppercase tracking-wider text-slate-500">Śr. sprawdz.</th>
                <th className="text-center px-3 py-3 text-[11px] font-extrabold uppercase tracking-wider text-slate-500">Najlepszy</th>
                <th className="text-center px-3 py-3 text-[11px] font-extrabold uppercase tracking-wider text-slate-500">Wyuczone</th>
                <th className="px-3 py-3"><span className="sr-only">Akcje</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.map(u => {
                const userSessions = sessionsByUser[u.id] ?? []
                const topicTests = userSessions.filter(s => s.session_type === 'topic')
                const mockTests = userSessions.filter(s => s.session_type === 'mock_exam' || s.session_type === 'mock_exam_free')

                const topicScores = topicTests.map(s => Math.round(((s.score ?? 0) / (s.max_score ?? 1)) * 100))
                const mockScores = mockTests.map(s => Math.round(((s.score ?? 0) / (s.max_score ?? 1)) * 100))
                const avgTopicScore = topicScores.length > 0 ? Math.round(topicScores.reduce((a, b) => a + b, 0) / topicScores.length) : null
                const avgMockScore = mockScores.length > 0 ? Math.round(mockScores.reduce((a, b) => a + b, 0) / mockScores.length) : null
                const bestScore = topicScores.length > 0 ? Math.max(...topicScores) : null
                const learnedCount = learnedByUser[u.id] ?? 0

                const score = (value: number | null) =>
                  value !== null
                    ? <span className={`font-semibold ${scoreColor(value)}`}>{value}%</span>
                    : <span className="text-slate-300">—</span>

                return (
                  <tr key={u.id} className="hover:bg-slate-50">
                    <td className="px-4 py-3 min-w-0">
                      <div className="flex items-center gap-2 text-slate-900 font-semibold">
                        <span className="truncate">{u.email}</span>
                        {u.email === ADMIN_EMAIL && (
                          <span className="shrink-0 text-[10px] font-extrabold uppercase tracking-wider bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">admin</span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {u.user_metadata?.name ? `${u.user_metadata.name} · ` : ''}
                        od {new Date(u.created_at).toLocaleDateString('pl-PL')}
                      </div>
                    </td>
                    <td className="px-3 py-3 text-center text-slate-700">{topicTests.length || '—'}</td>
                    <td className="px-3 py-3 text-center text-slate-700">{mockTests.length || '—'}</td>
                    <td className="px-3 py-3 text-center">{score(avgTopicScore)}</td>
                    <td className="px-3 py-3 text-center">{score(avgMockScore)}</td>
                    <td className="px-3 py-3 text-center">{score(bestScore)}</td>
                    <td className="px-3 py-3 text-center">
                      {learnedCount > 0
                        ? <span className="text-slate-700 font-semibold">{learnedCount}</span>
                        : <span className="text-slate-300">—</span>}
                    </td>
                    <td className="px-3 py-3 text-right">
                      {userSessions.length > 0 && (
                        <Link
                          href={`/admin/users/${u.id}`}
                          className="text-xs font-bold text-brand hover:underline whitespace-nowrap"
                        >
                          Szczegóły →
                        </Link>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>

          {users.length === 0 && (
            <div className="text-center py-10 text-slate-400">Brak użytkowników</div>
          )}
        </div>

      </div>
    </main>
  )
}
