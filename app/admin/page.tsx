import { createClient } from '@/lib/supabase-server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

const ADMIN_EMAIL = 'faljgo@gmail.com'

async function getAdminData() {
  // Fetch all users via admin API
  const { data: { users }, error } = await supabaseAdmin.auth.admin.listUsers()
  if (error || !users) return { users: [], sessionsByUser: {} }

  // Fetch all completed sessions
  const { data: sessions } = await supabaseAdmin
    .from('test_sessions')
    .select('user_id, score, max_score, session_type, completed_at, topic_id')
    .not('completed_at', 'is', null)

  // Group sessions by user
  const sessionsByUser: Record<string, typeof sessions> = {}
  for (const session of sessions ?? []) {
    if (!session.user_id) continue
    if (!sessionsByUser[session.user_id]) sessionsByUser[session.user_id] = []
    sessionsByUser[session.user_id]!.push(session)
  }

  return { users, sessionsByUser }
}

export default async function AdminPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user || user.email !== ADMIN_EMAIL) redirect('/')

  const { users, sessionsByUser } = await getAdminData()

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-10">

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Panel Administratora</h1>
            <p className="text-gray-500 text-sm mt-1">{users.length} zarejestrowanych użytkowników</p>
          </div>
          <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
            Admin
          </span>
        </div>

        {/* Summary */}
        {(() => {
          const allSessions = Object.values(sessionsByUser).flatMap(s => s ?? [])
          const allTopic = allSessions.filter(s => s.session_type === 'topic')
          const allMock = allSessions.filter(s => s.session_type === 'mock_exam')
          const avgTopic = allTopic.length > 0
            ? Math.round(allTopic.reduce((sum, s) => sum + ((s.score ?? 0) / (s.max_score ?? 1)) * 100, 0) / allTopic.length)
            : null
          const avgMock = allMock.length > 0
            ? Math.round(allMock.reduce((sum, s) => sum + ((s.score ?? 0) / (s.max_score ?? 1)) * 100, 0) / allMock.length)
            : null
          return (
            <div className="grid grid-cols-5 gap-4 mb-8">
              <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                <div className="text-3xl font-bold text-green-600">{users.length}</div>
                <div className="text-sm text-gray-500 mt-1">Użytkownicy</div>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                <div className="text-3xl font-bold text-green-600">{allTopic.length}</div>
                <div className="text-sm text-gray-500 mt-1">Testów tematycznych</div>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                <div className="text-3xl font-bold text-green-600">{avgTopic !== null ? `${avgTopic}%` : '—'}</div>
                <div className="text-sm text-gray-500 mt-1">Średni wynik (tematy)</div>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                <div className="text-3xl font-bold text-green-600">{allMock.length}</div>
                <div className="text-sm text-gray-500 mt-1">Sprawdzianów</div>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                <div className="text-3xl font-bold text-green-600">{avgMock !== null ? `${avgMock}%` : '—'}</div>
                <div className="text-sm text-gray-500 mt-1">Średni wynik (sprawdziany)</div>
              </div>
            </div>
          )
        })()}

        {/* Users table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 text-gray-600 font-medium">Email</th>
                <th className="text-center px-4 py-3 text-gray-600 font-medium">Testów</th>
                <th className="text-center px-4 py-3 text-gray-600 font-medium">Matur</th>
                <th className="text-center px-4 py-3 text-gray-600 font-medium">Śr. (tematy)</th>
                <th className="text-center px-4 py-3 text-gray-600 font-medium">Śr. (sprawdziany)</th>
                <th className="text-center px-4 py-3 text-gray-600 font-medium">Najlepszy</th>
                <th className="text-left px-4 py-3 text-gray-600 font-medium">Rejestracja</th>
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

                const isAdmin = u.email === ADMIN_EMAIL

                return (
                  <tr key={u.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-800">
                      {u.email}
                      {isAdmin && (
                        <span className="ml-2 text-xs bg-purple-100 text-purple-600 px-1.5 py-0.5 rounded">admin</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center text-gray-600">{topicTests.length}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{mockTests.length}</td>
                    <td className="px-4 py-3 text-center">
                      {avgTopicScore !== null ? (
                        <span className={`font-semibold ${avgTopicScore >= 75 ? 'text-green-600' : avgTopicScore >= 50 ? 'text-yellow-600' : 'text-red-500'}`}>
                          {avgTopicScore}%
                        </span>
                      ) : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {avgMockScore !== null ? (
                        <span className={`font-semibold ${avgMockScore >= 75 ? 'text-green-600' : avgMockScore >= 50 ? 'text-yellow-600' : 'text-red-500'}`}>
                          {avgMockScore}%
                        </span>
                      ) : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {bestScore !== null ? (
                        <span className={`font-semibold ${bestScore >= 75 ? 'text-green-600' : bestScore >= 50 ? 'text-yellow-600' : 'text-red-500'}`}>
                          {bestScore}%
                        </span>
                      ) : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="px-4 py-3 text-gray-400 text-xs">
                      {new Date(u.created_at).toLocaleDateString('pl-PL')}
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
