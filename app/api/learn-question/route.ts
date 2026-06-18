import { createClient } from '@/lib/supabase-server'
import { supabase } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const serverClient = createClient()
  const { data: { user } } = await serverClient.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { questionId, learned } = await req.json()

  if (learned) {
    await supabase
      .from('user_learned_questions')
      .upsert({ user_id: user.id, question_id: questionId })
  } else {
    await supabase
      .from('user_learned_questions')
      .delete()
      .eq('user_id', user.id)
      .eq('question_id', questionId)
  }

  return NextResponse.json({ ok: true })
}
