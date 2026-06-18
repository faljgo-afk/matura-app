import { createClient } from '@/lib/supabase-server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

const ADMIN_EMAIL = 'faljgo@gmail.com'

async function getUserDetail(userId: string) {
  const [
    { data: { user }, error: userError },
    { data: sessions },
    { data: topics },
    { data: learned },
  ] = await Promise.all([
    supabaseAdmin.auth.admin.getUserById(userId),
    supabaseAdmin
      .from('test_sessions')
      .select('*')
      .eq('user_id', userId)
      .not('completed_at', 'is', null)
      .order('completed_at', { ascending: false }),
    supabaseAdmin.from('topics').select('id, name, slug').order('order_index'),
    supabaseAdmin.from('user_learned_questions').select('question_id').eq('user_id', userId),
  ])

  if (userError || !user) return null

  return {
    user,
    sessions: sessions ?? [],
    topics: topics ?? [],
    learnedCount: learned?.length ?? 0,
  }
}

function scoreColor(score: number) {
  return score >= 75 ? 'text-green-600' : score >= 50 ? 'text-yellow-600' : 'text-red-500'
}

function scoreBg(score: number) {
  return score >= 75 ? 'bg-green-50 border-green-200' : score >= 50 ? 'bg-yellow-50 border-yellow-200' : 'bg-red-50 border-red-200'
}

export default async function AdminUserPage({ params }: { params: { userId: string } }) {
  const supabase = createClient()
  const { data: { user: admin } } = await supabase.auth.getUser()
  if (!admin || admin.email !== ADMIN_EMAIL) redirect('/')

  const data = await getUserDetail(params.userId)
  if (!data) notFound()

  const { user, sessions, topics, learnedCount } = data

  const topicMap = Object.fromEntries(topics.map(t => [t.id, t]))
  const topicSessions = sessions.filter(s => s.session_type === 'topic')
  const mockSessions = sessions.filter(s => s.session_type === 'mock_exam')

  const topicScores = topicSessions.map(s => Math.round(((s.score ?? 0) / (s.max_score ?? 1)) * 100))
  const mockScores = mockSessions.map(s => Math.round(((s.score ?? 0) / (s.max_score ?? 1)) * 100))
  const avgTopic = topicScores.length > 0 ? Math.round(topicScores.reduce((a, b) => a + b, 0) / topicScores.length) : null
  const avgMock = mockScores.length > 0 ? Math.round(mockScores.reduce((a, b) => a + b, 0) / mockScores.length) : null
  const bestScore = topicScores.length > 0 ? Math.max(...topicScores) : null

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-10">

        <Link href="/admin" className="text-green-600 hover:text-green-800 text-sm mb-6 inline-block">
          ← Panel Administratora
        </Link>

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">{user.email}</h1>
          <p className="text-gray-400 text-xs mt-1">
            Zarejestrowany: {new Date(user.created_at).toLocaleDateString('pl-PL')} &nbsp;·&nbsp; ID: {user.id}
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-5 gap-3 mb-8">
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-green-600">{topicSessions.length}</div>
            <div className="text-xs text-gray-500 mt-1">Testów tematycznych</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-green-600">{avgTopic !== null ? `${avgTopic}%` : '—'}</div>
            <div className="text-xs text-gray-500 mt-1">Śr. wynik (tematy)</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-green-600">{mockSessions.length}</div>
            <div className="text-xs text-gray-500 mt-1">Sprawdzianów</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-green-600">{avgMock !== null ? `${avgMock}%` : '—'}</div>
            <div className="text-xs text-gray-500 mt-1">Śr. wynik (sprawdziany)</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-blue-600">{learnedCount}</div>
            <div className="text-xs text-gray-500 mt-1">Wyuczone pytania</div>
          </div>
        </div>

        {/* All tests */}
        <h2 className="text-lg font-bold text-gray-800 mb-3">Historia testów</h2>
        {sessions.length === 0 ? (
          <div className="text-gray-400 text-sm">Brak ukończonych testów.</div>
        ) : (
          <div className="space-y-2">
            {sessions.map(session => {
              const percent = Math.round(((session.score ?? 0) / (session.max_score ?? 1)) * 100)
              const topic = session.topic_id ? topicMap[session.topic_id] : null
              const isMock = session.session_type === 'mock_exam'
              return (
                <Link
                  key={session.id}
                  href={`/results/${session.id}`}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl border bg-white hover:border-green-300 transition-colors`}
                >
                  <div>
                    <div className="text-sm font-medium text-gray-700">
                      {isMock ? '📝 Sprawdzian z całego materiału' : `📗 ${topic?.name ?? 'Temat'}`}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">
                      {new Date(session.completed_at).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })}
                      &nbsp;·&nbsp; {session.score}/{session.max_score} pkt
                    </div>
                  </div>
                  <span className={`font-bold text-lg ${scoreColor(percent)}`}>{percent}%</span>
                </Link>
              )
            })}
          </div>
        )}

      </div>
    </main>
  )
}
