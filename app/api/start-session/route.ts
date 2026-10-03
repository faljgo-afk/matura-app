import { supabase } from '@/lib/supabase'
import { createClient } from '@/lib/supabase-server'
import { NextRequest, NextResponse } from 'next/server'
import { fetchAll } from '@/lib/fetch-all'

type PoolQuestion = { id: string; subtopic_id: string | null }

async function getLearnedIds(userId: string): Promise<Set<string>> {
  const rows = await fetchAll<{ question_id: string }>(
    (from, to) => supabase
      .from('user_learned_questions')
      .select('question_id')
      .eq('user_id', userId)
      .order('question_id')
      .range(from, to)
  )
  return new Set(rows.map(r => r.question_id))
}

function pickWithSubtopicDiversity(
  questions: { id: string; subtopic_id?: string | null }[],
  count: number
): string[] {
  const shuffled = [...questions].sort(() => Math.random() - 0.5)

  const usedSubtopics = new Set<string>()
  const primary: string[] = []
  const overflow: string[] = []

  for (const q of shuffled) {
    const sub = q.subtopic_id ?? 'unknown'
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

  const serverClient = createClient()
  const { data: { user } } = await serverClient.auth.getUser()

  let questionIds: string[] = []
  let reviewQuestionIds: string[] = []

  if (sessionType === 'mock_exam' || sessionType === 'mock_exam_free') {
    const [mockData, topicData] = await Promise.all([
      fetchAll<PoolQuestion>(
        (from, to) => supabase.from('mock_questions').select('id, subtopic_id')
          .eq('verified', true)
          .order('id')
          .range(from, to)
      ),
      fetchAll<PoolQuestion>(
        (from, to) => supabase.from('questions').select('id, subtopic_id')
          .eq('verified', true)
          .in('question_type', ['single', 'multiple', 'true_false'])
          .order('id')
          .range(from, to)
      ),
    ])

    const combined = [...mockData, ...topicData]
    if (combined.length === 0) {
      return NextResponse.json({ error: 'No mock questions found' }, { status: 404 })
    }

    if (user) {
      const learnedIds = await getLearnedIds(user.id)
      const unlearned = combined.filter(q => !learnedIds.has(q.id))
      questionIds = pickWithSubtopicDiversity(
        unlearned.length >= questionCount ? unlearned : combined,
        questionCount
      )
    } else {
      questionIds = pickWithSubtopicDiversity(combined, questionCount)
    }
  } else {
    const data = await fetchAll<PoolQuestion>(
      (from, to) => supabase
        .from('questions')
        .select('id, subtopic_id')
        .eq('topic_id', topicId)
        .eq('verified', true)
        .in('question_type', ['single', 'multiple', 'true_false'])
        .order('id')
        .range(from, to)
    )

    if (data.length === 0) {
      return NextResponse.json({ error: 'No questions found' }, { status: 404 })
    }

    // For logged-in users: exclude learned questions, fill with review if needed
    if (user) {
      const learnedIds = await getLearnedIds(user.id)
      const unlearned = data.filter(q => !learnedIds.has(q.id))
      const learnedPool = data.filter(q => learnedIds.has(q.id))

      if (unlearned.length >= questionCount) {
        questionIds = pickWithSubtopicDiversity(unlearned, questionCount)
      } else {
        // Use all unlearned + fill with learned as review
        questionIds = pickWithSubtopicDiversity(unlearned, unlearned.length)
        const needed = questionCount - questionIds.length
        const reviewPick = learnedPool
          .sort(() => Math.random() - 0.5)
          .slice(0, needed)
          .map(q => q.id)
        reviewQuestionIds = reviewPick
        questionIds = [...questionIds, ...reviewPick]
      }
    } else {
      questionIds = pickWithSubtopicDiversity(data, questionCount)
    }
  }

  const { data: session, error: sessionError } = await supabase
    .from('test_sessions')
    .insert({
      session_type: sessionType,
      topic_id: topicId ?? null,
      questions: questionIds,
      answers: {},
      user_id: user?.id ?? null,
      review_question_ids: reviewQuestionIds,
    })
    .select('id')
    .single()

  if (sessionError || !session) {
    return NextResponse.json({ error: 'Failed to create session' }, { status: 500 })
  }

  return NextResponse.json({ sessionId: session.id })
}
