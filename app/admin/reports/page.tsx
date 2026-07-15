import { createClient } from '@/lib/supabase-server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { redirect } from 'next/navigation'
import { unstable_noStore as noStore } from 'next/cache'
import ReportsClient from './ReportsClient'

export const dynamic = 'force-dynamic'

const ADMIN_EMAIL = 'faljgo@gmail.com'

async function getReportData() {
  noStore()
  const [
    { data: questions },
    { data: mockQuestions },
    { data: topics },
    { data: subtopics },
    { data: maturaExams },
    { data: maturaQuestions },
  ] = await Promise.all([
    // Stats-only fields — no question text/options/explanation to keep payload small
    // range(0, 9999) overrides Supabase's default 1000-row limit
    supabaseAdmin.from('questions').select('id, topic_id, subtopic_id, difficulty, question_type, verified').range(0, 9999),
    supabaseAdmin.from('mock_questions').select('id, subtopic_id, subtopics(id, name, topic_id), difficulty, question_type, verified').range(0, 9999),
    supabaseAdmin.from('topics').select('id, name, order_index').order('order_index'),
    supabaseAdmin.from('subtopics').select('id, name, topic_id, order_index').order('order_index'),
    supabaseAdmin.from('matura_exams').select('id, year, session').order('year', { ascending: false }),
    supabaseAdmin.from('matura_questions').select('id, exam_id, question_type, max_points, key_points, model_answer, zadanie_number').range(0, 4999),
  ])

  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    questions: (questions ?? []) as unknown as any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mockQuestions: (mockQuestions ?? []) as unknown as any,
    topics: topics ?? [],
    subtopics: subtopics ?? [],
    maturaExams: maturaExams ?? [],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    maturaQuestions: (maturaQuestions ?? []) as unknown as any,
  }
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
