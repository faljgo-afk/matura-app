import { supabase } from '@/lib/supabase'
import { createClient } from '@/lib/supabase-server'
import { notFound, redirect } from 'next/navigation'
import ExamSplitScreen from './ExamSplitScreen'

type Question = {
  id: string
  zadanie_number: string
  question_type: string
  max_points: number
  num_statements: number | null
  correct_answer: Record<string, unknown> | null
  key_points: string[]
  model_answer: string | null
}

type Exam = {
  id: string
  year: number
  session: string
  pdf_url: string | null
}

async function getExam(examId: string): Promise<Exam | null> {
  const { data } = await supabase
    .from('matura_exams')
    .select('id, year, session, pdf_url')
    .eq('id', examId)
    .single()
  return data
}

async function getQuestions(examId: string): Promise<Question[]> {
  const { data } = await supabase
    .from('matura_questions')
    .select('id, zadanie_number, question_type, max_points, num_statements, correct_answer, key_points, model_answer')
    .eq('exam_id', examId)
    .order('zadanie_number', { ascending: true })

  return (data ?? []) as Question[]
}

export default async function ExamPage({ params }: { params: { examId: string } }) {
  // Auth required
  const serverClient = createClient()
  const { data: { user } } = await serverClient.auth.getUser()
  if (!user) redirect('/login?next=/archiwum/' + params.examId)

  const [exam, questions] = await Promise.all([
    getExam(params.examId),
    getQuestions(params.examId),
  ])

  if (!exam) notFound()

  return <ExamSplitScreen exam={exam} questions={questions} />
}
