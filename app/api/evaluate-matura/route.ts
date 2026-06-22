import { supabase } from '@/lib/supabase'
import { createClient } from '@/lib/supabase-server'
import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

function buildPrompt(keyPoints: string[], maxPoints: number, studentAnswer: string, modelAnswer?: string): string {
  const criteriaList = keyPoints.map((kp, i) => `${i + 1}. ${kp}`).join('\n')
  const solutionBlock = modelAnswer
    ? `\nPOPRAWNE ROZWIĄZANIE Z KLUCZA CKE (użyj jako odniesienie przy ocenie):\n${modelAnswer}\n`
    : ''
  return `Jesteś egzaminatorem CKE oceniającym odpowiedź ucznia na zadanie otwarte z biologii (matura rozszerzona).

KRYTERIA OCENIANIA (${maxPoints} pkt łącznie):
${criteriaList}
${solutionBlock}
ODPOWIEDŹ UCZNIA:
${studentAnswer}

Oceń odpowiedź. Dla każdego kryterium zdecyduj czy zostało spełnione (true/false).
Kryterium jest spełnione jeśli uczeń zawarł daną myśl merytorycznie poprawnie — nawet przy innym sformułowaniu.
Kryterium NIE jest spełnione jeśli element nie został wspomniany lub jest merytorycznie błędny.
Jeśli podano poprawne rozwiązanie z klucza, porównaj z nim odpowiedź ucznia.

Zwróć TYLKO JSON:
{
  "criteria": [{ "met": true, "comment": "krótki komentarz" }],
  "feedback": "1-2 zdania ogólnego komentarza"
}`
}

export async function POST(req: NextRequest) {
  // Auth check
  const serverClient = createClient()
  const { data: { user } } = await serverClient.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { questionId, studentAnswer } = await req.json()

  if (!questionId || typeof studentAnswer !== 'string' || studentAnswer.trim().length < 5) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
  }

  const { data: question } = await supabase
    .from('matura_questions')
    .select('key_points, model_answer, max_points')
    .eq('id', questionId)
    .single()

  if (!question) {
    return NextResponse.json({ error: 'Question not found' }, { status: 404 })
  }

  const keyPoints: string[] = question.key_points ?? []
  const maxPoints: number = question.max_points ?? keyPoints.length

  if (keyPoints.length === 0) {
    return NextResponse.json({ error: 'No key points defined' }, { status: 422 })
  }

  let raw: string
  try {
    const msg = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 800,
      messages: [{ role: 'user', content: buildPrompt(keyPoints, maxPoints, studentAnswer, question.model_answer ?? undefined) }],
    })
    raw = (msg.content[0] as { type: string; text: string }).text
  } catch (e) {
    console.error('Claude API error:', e)
    return NextResponse.json({ error: 'AI evaluation failed' }, { status: 502 })
  }

  let parsed: { criteria: { met: boolean; comment: string }[]; feedback: string }
  try {
    const jsonStart = raw.indexOf('{')
    const jsonEnd = raw.lastIndexOf('}')
    parsed = JSON.parse(raw.substring(jsonStart, jsonEnd + 1))
  } catch {
    console.error('Parse error:', raw.substring(0, 200))
    return NextResponse.json({ error: 'Failed to parse AI response' }, { status: 502 })
  }

  const score = Math.min(parsed.criteria.filter(c => c.met).length, maxPoints)

  return NextResponse.json({
    criteria: parsed.criteria.map((c, i) => ({ text: keyPoints[i] ?? '', met: c.met })),
    score,
    maxPoints,
    feedback: parsed.feedback,
    modelAnswer: question.model_answer ?? '',
  })
}
