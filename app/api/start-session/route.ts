import { supabase } from '@/lib/supabase'
import { createClient } from '@/lib/supabase-server'
import { NextRequest, NextResponse } from 'next/server'

function pickWithSubtopicDiversity(
  questions: { id: string; subtopic?: string | null }[],
  count: number
): string[] {
  const shuffled = [...questions].sort(() => Math.random() - 0.5)

  const usedSubtopics = new Set<string>()
  const primary: string[] = []
  const overflow: string[] = []

  for (const q of shuffled) {
    const sub = q.subtopic ?? 'ogólne'
    if (!usedSubtopics.has(sub)) {
      usedSubtopics.add(sub)
      primary.push(q.id)
    } else {
      overflow.push(q.id)
    }
  }

  const result = [...primary, ...overflow]
  return result.slice(0, count)
}

export async function POST(req: NextRequest) {
  const { topicId, sessionType, questionCount = 10 } = await req.json()

  // Get current user if logged in
  const serverClient = createClient()
  const { data: { user } } = await serverClient.auth.getUser()

  let questionIds: string[] = []

  if (sessionType === 'mock_exam') {
    const { data, error } = await supabase
      .from('mock_questions')
      .select('id, subtopic')
      .eq('verified', true)
      .limit(100)

    if (error || !data || data.length === 0) {
      return NextResponse.json({ error: 'No mock questions found' }, { status: 404 })
    }

    questionIds = pickWithSubtopicDiversity(data, questionCount)
  } else {
    const { data, error } = await supabase
      .from('questions')
      .select('id, subtopic')
      .eq('topic_id', topicId)
      .eq('verified', true)
      .limit(100)

    if (error || !data || data.length === 0) {
      return NextResponse.json({ error: 'No questions found' }, { status: 404 })
    }

    questionIds = pickWithSubtopicDiversity(data, questionCount)
  }

  const { data: session, error: sessionError } = await supabase
    .from('test_sessions')
    .insert({
      session_type: sessionType,
      topic_id: topicId ?? null,
      questions: questionIds,
      answers: {},
      user_id: user?.id ?? null,
    })
    .select('id')
    .single()

  if (sessionError || !session) {
    return NextResponse.json({ error: 'Failed to create session' }, { status: 500 })
  }

  return NextResponse.json({ sessionId: session.id })
}
