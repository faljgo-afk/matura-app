import { supabase } from '@/lib/supabase'
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

  const questionIds: string[] = session.questions
  const table = session.session_type === 'mock_exam' ? 'mock_questions' : 'questions'

  // Fetch correct answers for all questions
  const { data: questions, error: questionsError } = await supabase
    .from(table)
    .select('id, correct_answer')
    .in('id', questionIds)

  if (questionsError || !questions) {
    return NextResponse.json({ error: 'Failed to fetch questions' }, { status: 500 })
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
