import { createClient } from '@/lib/supabase-server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { redirect } from 'next/navigation'
import ReportsClient from './ReportsClient'

export const dynamic = 'force-dynamic'

const ADMIN_EMAIL = 'faljgo@gmail.com'

async function getReportData() {
  const [
    { data: questions },
    { data: mockQuestions },
    { data: topics },
  ] = await Promise.all([
    supabaseAdmin.from('questions').select('id, topic_id, subtopic_id, subtopics(name), difficulty, question_type, verified, question_text'),
    supabaseAdmin.from('mock_questions').select('id, subtopic_id, subtopics(id, name, topic_id), difficulty, question_type, verified, question_text'),
    supabaseAdmin.from('topics').select('id, name, order_index').order('order_index'),
  ])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return {
    questions: (questions ?? []) as unknown as any[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mockQuestions: (mockQuestions ?? []) as unknown as any[],
    topics: topics ?? [],
  }
}

export default async function ReportsPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user || user.email !== ADMIN_EMAIL) redirect('/')

  const data = await getReportData()

  return <ReportsClient {...data} />
}
