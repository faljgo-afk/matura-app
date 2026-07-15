import { createClient } from '@/lib/supabase-server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { redirect } from 'next/navigation'
import { unstable_noStore as noStore } from 'next/cache'
import ReportsClient from './ReportsClient'

export const dynamic = 'force-dynamic'

const ADMIN_EMAIL = 'faljgo@gmail.com'

// Supabase PostgREST max_rows is 1000 — paginate to get all rows
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function fetchAllRows(table: string, select: string, extra?: (q: any) => any): Promise<any[]> {
  const PAGE = 1000
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const all: any[] = []
  let from = 0
  for (;;) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let q: any = supabaseAdmin.from(table).select(select).range(from, from + PAGE - 1)
    if (extra) q = extra(q)
    const { data, error } = await q
    if (error) { console.error(`fetchAllRows ${table}:`, error); break }
    if (!data || data.length === 0) break
    all.push(...data)
    if (data.length < PAGE) break
    from += PAGE
  }
  return all
}

async function getReportData() {
  noStore()
  const [questions, mockQuestions, topics, subtopics, maturaExams, maturaQuestions] = await Promise.all([
    fetchAllRows('questions', 'id, topic_id, subtopic_id, difficulty, question_type, verified'),
    fetchAllRows('mock_questions', 'id, subtopic_id, subtopics(id, name, topic_id), difficulty, question_type, verified'),
    supabaseAdmin.from('topics').select('id, name, order_index').order('order_index').then(r => r.data ?? []),
    supabaseAdmin.from('subtopics').select('id, name, topic_id, order_index').order('order_index').then(r => r.data ?? []),
    supabaseAdmin.from('matura_exams').select('id, year, session').order('year', { ascending: false }).then(r => r.data ?? []),
    fetchAllRows('matura_questions', 'id, exam_id, question_type, max_points, key_points, model_answer, zadanie_number'),
  ])

  return { questions, mockQuestions, topics, subtopics, maturaExams, maturaQuestions }
}

export default async function ReportsPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user || user.email !== ADMIN_EMAIL) redirect('/')

  const data = await getReportData()

  return <ReportsClient
    questions={data.questions}
    mockQuestions={data.mockQuestions}
    topics={data.topics}
    subtopics={data.subtopics}
    maturaExams={data.maturaExams}
    maturaQuestions={data.maturaQuestions}
  />
}
