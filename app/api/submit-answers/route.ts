import { supabase } from '@/lib/supabase'
import { createClient } from '@/lib/supabase-server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { sessionId, answers } = await req.json()

  // Get session with question ids
  const { data: session, error: sessionError } = await supabase
    .from('test_sessions')
    .select('*')
    .eq('id', sessionId)
    .single()

  if (sessionError || !session) {
    return NextResponse.json({ error: 'Session not found' }, { status: 404 })
  }

  // Only the owner may submit answers for a session tied to an account
  if (session.user_id) {
    const serverClient = createClient()
    const { data: { user } } = await serverClient.auth.getUser()
    if (!user || user.id !== session.user_id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
  }

  // Already submitted (e.g. timer fired and button clicked) — keep the first result
  if (session.completed_at) {
    return NextResponse.json({ ok: true, score: session.score, maxScore: session.max_score })
  }

  const questionIds: string[] = session.questions
  const isMock = session.session_type === 'mock_exam' || session.session_type === 'mock_exam_free'

  // Fetch correct answers for all questions.
  // Mock exams mix questions from both tables (see start-session).
  let questions: { id: string; correct_answer: string[] }[] = []
  if (isMock) {
    const [mockRes, topicRes] = await Promise.all([
      supabase.from('mock_questions').select('id, correct_answer').in('id', questionIds),
      supabase.from('questions').select('id, correct_answer').in('id', questionIds),
    ])
    if (mockRes.error || topicRes.error) {
      return NextResponse.json({ error: 'Failed to fetch questions' }, { status: 500 })
    }
    questions = [...(mockRes.data ?? []), ...(topicRes.data ?? [])]
  } else {
    const { data, error } = await supabase
      .from('questions')
      .select('id, correct_answer')
      .in('id', questionIds)
    if (error || !data) {
      return NextResponse.json({ error: 'Failed to fetch questions' }, { status: 500 })
    }
    questions = data
  }

  // Calculate score
  let score = 0
  for (const question of questions) {
    const userAnswer: string[] = answers[question.id] ?? []
    const correctAnswer: string[] = question.correct_answer

    const isCorrect =
      userAnswer.length === correctAnswer.length &&
      correctAnswer.every(id => userAnswer.includes(id))

    if (isCorrect) score++
  }

  // Save results
  const { error: updateError } = await supabase
    .from('test_sessions')
    .update({
      answers,
      score,
      max_score: questionIds.length,
      completed_at: new Date().toISOString(),
    })
    .eq('id', sessionId)

  if (updateError) {
    return NextResponse.json({ error: 'Failed to save results' }, { status: 500 })
  }

  return NextResponse.json({ ok: true, score, maxScore: questionIds.length })
}
