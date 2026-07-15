import { createClient } from '@/lib/supabase-server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { NextRequest, NextResponse } from 'next/server'
import { unstable_noStore as noStore } from 'next/cache'

const ADMIN_EMAIL = 'faljgo@gmail.com'

export async function GET(req: NextRequest) {
  noStore()
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user || user.email !== ADMIN_EMAIL) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(req.url)
  const topicId = searchParams.get('topicId')
  const isMock = searchParams.get('mock') === '1'

  if (!topicId) return NextResponse.json({ error: 'Missing topicId' }, { status: 400 })

  if (isMock) {
    const { data, error } = await supabaseAdmin
      .from('mock_questions')
      .select('id, subtopic_id, subtopics(id, name, topic_id), difficulty, question_type, verified, question_text, options, correct_answer, explanation, image_url')
      .eq('subtopics.topic_id', topicId)
      .range(0, 999)

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    const filtered = (data ?? []).filter((q: { subtopics?: { topic_id?: string } | null }) => q.subtopics?.topic_id === topicId)
    return NextResponse.json(filtered)
  }

  const { data, error } = await supabaseAdmin
    .from('questions')
    .select('id, topic_id, subtopic_id, subtopics(name), difficulty, question_type, verified, question_text, options, correct_answer, explanation, image_url')
    .eq('topic_id', topicId)
    .eq('verified', true)
    .range(0, 999)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data ?? [])
}
