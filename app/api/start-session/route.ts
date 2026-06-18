import { supabase } from '@/lib/supabase'
import { createClient } from '@/lib/supabase-server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { topicId, sessionType, questionCount = 10 } = await req.json()

  // Get current user if logged in
  const serverClient = createClient()
  const { data: { user } } = await serverClient.auth.getUser()

  let questionIds: string[] = []

  if (sessionType === 'mock_exam') {
    const { data, error } = await supabase
      .from('mock_questions')
      .select('id')
      .eq('verified', true)
      .limit(100)

    if (error || !data || data.length === 0) {
      return NextResponse.json({ error: 'No mock questions found' }, { status: 404 })
    }

    const shuffled = data.sort(() => Math.random() - 0.5)
    questionIds = shuffled.slice(0, questionCount).map(q => q.id)
  } else {
    const { data, error } = await supabase
      .from('questions')
      .select('id')
      .eq('topic_id', topicId)
      .eq('verified', true)
      .limit(100)

    if (error || !data || data.length === 0) {
      return NextResponse.json({ error: 'No questions found' }, { status: 404 })
    }

    const shuffled = data.sort(() => Math.random() - 0.5)
    questionIds = shuffled.slice(0, questionCount).map(q => q.id)
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
