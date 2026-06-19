import { createClient } from '@/lib/supabase-server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

const ADMIN_EMAIL = 'faljgo@gmail.com'

async function getAdminData() {
  const { data: { users }, error } = await supabaseAdmin.auth.admin.listUsers()
  if (error || !users) return { users: [], sessionsByUser: {}, learnedByUser: {} }

  const [{ data: sessions }, { data: learned }] = await Promise.all([
    supabaseAdmin
      .from('test_sessions')
      .select('user_id, score, max_score, session_type, completed_at, topic_id')
      .not('completed_at', 'is', null),
    supabaseAdmin
      .from('user_learned_questions')
      .select('user_id'),
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
  return score >= 75 ? 'text-green-600' : score >= 50 ? 'text-yellow-600' : 'text-red-500'
}

export default async function AdminPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user || user.email !== ADMIN_EMAIL) redirect('/')

  const { users, sessionsByUser, learnedByUser } = await getAdminData()

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-10">

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Panel Administratora</h1>
            <p className="text-gray-500 text-sm mt-1">{users.length} zarejestrowanych użytkowników</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/admin/feedback" className="text-sm text-purple-600 hover:text-purple-800 font-medium border border-purple-200 px-3 py-1.5 rounded-lg hover:bg-purple-50 transition-colors">
              💬 Feedback
            </Link>
            <Link href="/admin/reports" className="text-sm text-green-600 hover:text-green-800 font-medium border border-green-200 px-3 py-1.5 rounded-lg hover:bg-green-50 transition-colors">
              📊 Raporty
            </Link>
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">Admin</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 text-gray-600 font-medium">Email</th>
                <th className="text-left px-4 py-3 text-gray-600 font-medium">Imię</th>
                <th className="text-center px-4 py-3 text-gray-600 font-medium">Testów</th>
                <th className="text-center px-4 py-3 text-gray-600 font-medium">Sprawdzianów</th>
                <th className="text-center px-4 py-3 text-gray-600 font-medium">Śr. (tematy)</th>
                <th className="text-center px-4 py-3 text-gray-600 font-medium">Śr. (sprawdziany)</th>
                <th className="text-center px-4 py-3 text-gray-600 font-medium">Najlepszy</th>
                <th className="text-center px-4 py-3 text-gray-600 font-medium">Wyuczone</th>
                <th className="text-left px-4 py-3 text-gray-600 font-medium">Rejestracja</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map(u => {
                const userSessions = sessionsByUser[u.id] ?? []
                const topicTests = userSessions.filter(s => s.session_type === 'topic')
                const mockTests = userSessions.filter(s => s.session_type === 'mock_exam')

                const topicScores = topicTests.map(s => Math.round(((s.score ?? 0) / (s.max_score ?? 1)) * 100))
                const mockScores = mockTests.map(s => Math.round(((s.score ?? 0) / (s.max_score ?? 1)) * 100))
                const avgTopicScore = topicScores.length > 0 ? Math.round(topicScores.reduce((a, b) => a + b, 0) / topicScores.length) : null
                const avgMockScore = mockScores.length > 0 ? Math.round(mockScores.reduce((a, b) => a + b, 0) / mockScores.length) : null
                const bestScore = topicScores.length > 0 ? Math.max(...topicScores) : null
                const learnedCount = learnedByUser[u.id] ?? 0

                return (
                  <tr key={u.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-800">
                      {u.email}
                      {u.email === ADMIN_EMAIL && (
                        <span className="ml-2 text-xs bg-purple-100 text-purple-600 px-1.5 py-0.5 rounded">admin</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {u.user_metadata?.name || <span className="text-gray-300">—</span>}
                    </td>
                    <td className="px-4 py-3 text-center text-gray-600">{topicTests.length || '—'}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{mockTests.length || '—'}</td>
                    <td className="px-4 py-3 text-center">
                      {avgTopicScore !== null
                        ? <span className={`font-semibold ${scoreColor(avgTopicScore)}`}>{avgTopicScore}%</span>
                        : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {avgMockScore !== null
                        ? <span className={`font-semibold ${scoreColor(avgMockScore)}`}>{avgMockScore}%</span>
                        : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {bestScore !== null
                        ? <span className={`font-semibold ${scoreColor(bestScore)}`}>{bestScore}%</span>
                        : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {learnedCount > 0
                        ? <span className="text-blue-600 font-medium">📌 {learnedCount}</span>
                        : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="px-4 py-3 text-gray-400 text-xs">
                      {new Date(u.created_at).toLocaleDateString('pl-PL')}
                    </td>
                    <td className="px-4 py-3 text-right">
                      {userSessions.length > 0 && (
                        <Link
                          href={`/admin/users/${u.id}`}
                          className="text-xs text-green-600 hover:underline whitespace-nowrap"
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
            <div className="text-center py-10 text-gray-400">Brak użytkowników</div>
          )}
        </div>

      </div>
    </main>
  )
}
