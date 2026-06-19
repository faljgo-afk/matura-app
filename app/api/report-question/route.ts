import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase-server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  const serverClient = createClient()
  const { data: { user } } = await serverClient.auth.getUser()

  const { questionId, sessionId, reason, comment } = await req.json()
  if (!questionId || !reason) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const { error } = await supabase.from('question_reports').insert({
    question_id: questionId,
    session_id: sessionId ?? null,
    user_id: user?.id ?? null,
    reason,
    comment: comment?.trim() || null,
  })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
