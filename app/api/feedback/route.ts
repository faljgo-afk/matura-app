import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase-server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  const serverClient = createClient()
  const { data: { user } } = await serverClient.auth.getUser()

  const { sessionId, rating, comment } = await req.json()
  if (!sessionId || !rating) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const { error } = await supabase.from('session_feedback').insert({
    session_id: sessionId,
    user_id: user?.id ?? null,
    rating,
    comment: comment?.trim() || null,
  })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
