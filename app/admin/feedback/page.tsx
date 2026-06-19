import { createClient } from '@/lib/supabase-server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

const ADMIN_EMAIL = 'faljgo@gmail.com'

const RATING_LABEL: Record<number, string> = { 1: '😕 Słaby', 2: '😐 Średni', 3: '😊 Dobry' }
const REASON_LABEL: Record<string, string> = {
  wrong_answer: 'Błędna odpowiedź',
  unclear: 'Niejasne pytanie',
  other: 'Inny problem',
}

async function getFeedbackData() {
  const [{ data: feedback }, { data: reports }] = await Promise.all([
    supabaseAdmin
      .from('session_feedback')
      .select('*, test_sessions(session_type, topic_id, topics(name))')
      .order('created_at', { ascending: false })
      .limit(100),
    supabaseAdmin
      .from('question_reports')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(200),
  ])

  // Group reports by question_id to count how many times each was reported
  const reportsByQuestion: Record<string, { count: number; reasons: string[]; comments: string[]; questionId: string; latestAt: string }> = {}
  for (const r of reports ?? []) {
    if (!reportsByQuestion[r.question_id]) {
      reportsByQuestion[r.question_id] = { count: 0, reasons: [], comments: [], questionId: r.question_id, latestAt: r.created_at }
    }
    reportsByQuestion[r.question_id].count++
    reportsByQuestion[r.question_id].reasons.push(r.reason)
    if (r.comment) reportsByQuestion[r.question_id].comments.push(r.comment)
    if (r.created_at > reportsByQuestion[r.question_id].latestAt) {
      reportsByQuestion[r.question_id].latestAt = r.created_at
    }
  }

  const questionGroups = Object.values(reportsByQuestion).sort((a, b) => b.count - a.count)

  // Fetch question texts for reported questions
  const questionIds = questionGroups.map(g => g.questionId)
  const questionTexts: Record<string, string> = {}
  if (questionIds.length > 0) {
    const { data: qs } = await supabaseAdmin
      .from('questions')
      .select('id, question_text')
      .in('id', questionIds)
    const { data: mqs } = await supabaseAdmin
      .from('mock_questions')
      .select('id, question_text')
      .in('id', questionIds)
    for (const q of [...(qs ?? []), ...(mqs ?? [])]) {
      questionTexts[q.id] = q.question_text
    }
  }

  const ratingCounts = { 1: 0, 2: 0, 3: 0 }
  for (const f of feedback ?? []) {
    if (f.rating in ratingCounts) ratingCounts[f.rating as 1|2|3]++
  }

  return { feedback: feedback ?? [], questionGroups, questionTexts, ratingCounts, totalReports: (reports ?? []).length }
}

export default async function AdminFeedbackPage() {
  const serverClient = createClient()
  const { data: { user } } = await serverClient.auth.getUser()
  if (!user || user.email !== ADMIN_EMAIL) redirect('/')

  const { feedback, questionGroups, questionTexts, ratingCounts, totalReports } = await getFeedbackData()

  const avgRating = feedback.length
    ? (feedback.reduce((s, f) => s + f.rating, 0) / feedback.length).toFixed(1)
    : '—'

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-10">

        <div className="flex items-center gap-4 mb-8">
          <Link href="/admin" className="text-sm text-green-600 hover:text-green-800">← Admin</Link>
          <h1 className="text-2xl font-bold text-gray-900">Feedback użytkowników</h1>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-gray-800">{feedback.length}</div>
            <div className="text-xs text-gray-500 mt-1">Ocen testów</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-gray-800">{avgRating}</div>
            <div className="text-xs text-gray-500 mt-1">Średnia ocena</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-gray-800">{totalReports}</div>
            <div className="text-xs text-gray-500 mt-1">Zgłoszeń pytań</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-gray-800">{questionGroups.length}</div>
            <div className="text-xs text-gray-500 mt-1">Unikalnych pytań</div>
          </div>
        </div>

        {/* Rating distribution */}
        {feedback.length > 0 && (
          <div className="bg-white rounded-xl p-5 border border-gray-200 mb-8">
            <h2 className="font-semibold text-gray-700 mb-3">Rozkład ocen</h2>
            <div className="flex gap-6">
              {([1, 2, 3] as const).map(r => (
                <div key={r} className="text-center">
                  <div className="text-2xl">{RATING_LABEL[r].split(' ')[0]}</div>
                  <div className="text-xl font-bold text-gray-800">{ratingCounts[r]}</div>
                  <div className="text-xs text-gray-400">{RATING_LABEL[r].split(' ')[1]}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 1: Session feedback */}
        <h2 className="text-lg font-bold text-gray-800 mb-3">Opinie o testach</h2>
        {feedback.length === 0 ? (
          <div className="bg-white rounded-xl p-6 border border-gray-200 text-center text-gray-400 mb-8">Brak opinii</div>
        ) : (
          <div className="space-y-3 mb-10">
            {feedback.map((f: { id: string; rating: number; comment: string | null; created_at: string; test_sessions?: { session_type?: string; topics?: { name?: string } } }) => {
              const topicName = f.test_sessions?.topics?.name ?? (f.test_sessions?.session_type?.startsWith('mock') ? 'Sprawdzian ogólny' : '—')
              return (
                <div key={f.id} className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-gray-700">{RATING_LABEL[f.rating] ?? '—'}</span>
                    <span className="text-xs text-gray-400">{new Date(f.created_at).toLocaleDateString('pl-PL')} · {topicName}</span>
                  </div>
                  {f.comment && (
                    <p className="text-sm text-gray-600 mt-1 bg-gray-50 rounded p-2">&ldquo;{f.comment}&rdquo;</p>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {/* Section 2: Question reports */}
        <h2 className="text-lg font-bold text-gray-800 mb-3">Zgłoszone pytania</h2>
        {questionGroups.length === 0 ? (
          <div className="bg-white rounded-xl p-6 border border-gray-200 text-center text-gray-400">Brak zgłoszeń</div>
        ) : (
          <div className="space-y-3">
            {questionGroups.map(g => {
              const reasonCounts: Record<string, number> = {}
              for (const r of g.reasons) reasonCounts[r] = (reasonCounts[r] ?? 0) + 1
              return (
                <div key={g.questionId} className={`bg-white rounded-xl p-4 border-2 ${g.count >= 3 ? 'border-red-300' : 'border-gray-200'}`}>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <p className="text-sm font-medium text-gray-800 flex-1">
                      {questionTexts[g.questionId] ?? <span className="text-gray-400 italic">Pytanie usunięte</span>}
                    </p>
                    <span className={`shrink-0 text-xs font-bold px-2 py-1 rounded-full ${g.count >= 3 ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {g.count}×
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {Object.entries(reasonCounts).map(([reason, cnt]) => (
                      <span key={reason} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                        {REASON_LABEL[reason] ?? reason} ({cnt})
                      </span>
                    ))}
                  </div>
                  {g.comments.length > 0 && (
                    <div className="space-y-1 mt-2">
                      {g.comments.map((c, i) => (
                        <p key={i} className="text-xs text-gray-500 bg-gray-50 rounded px-2 py-1">&ldquo;{c}&rdquo;</p>
                      ))}
                    </div>
                  )}
                  <p className="text-xs text-gray-400 mt-2">Ostatnie zgłoszenie: {new Date(g.latestAt).toLocaleDateString('pl-PL')}</p>
                </div>
              )
            })}
          </div>
        )}

      </div>
    </main>
  )
}
