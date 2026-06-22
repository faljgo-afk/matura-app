import { supabase } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

type KeyPoint = string

type EvaluationResult = {
  criteria: { text: string; met: boolean }[]
  score: number
  maxPoints: number
  feedback: string
  modelAnswer: string
}

function buildEvalPrompt(
  questionText: string,
  keyPoints: KeyPoint[],
  maxPoints: number,
  studentAnswer: string
): string {
  const criteriaList = keyPoints.map((kp, i) => `${i + 1}. ${kp}`).join('\n')

  return `Jesteś egzaminatorem CKE oceniającym odpowiedź ucznia na pytanie otwarte z biologii (matura rozszerzona).

PYTANIE:
${questionText}

KRYTERIA OCENIANIA (${maxPoints} pkt łącznie — 1 pkt za każde kryterium):
${criteriaList}

ODPOWIEDŹ UCZNIA:
${studentAnswer}

Oceń odpowiedź ucznia. Dla każdego kryterium zdecyduj czy zostało spełnione (true/false).
Kryterium jest spełnione jeśli uczeń zawarł daną myśl/związek — nawet jeśli sformułowanie różni się od wzorca. Akceptuj merytorycznie poprawne odpowiedzi.
Kryterium NIE jest spełnione jeśli uczeń nie wspomniał o danym elemencie LUB napisał coś merytorycznie błędnego w tym miejscu.

Zwróć TYLKO JSON (bez tekstu przed i po):
{
  "criteria": [
    { "met": true, "comment": "krótki komentarz co uczeń napisał dobrze lub czego nie ma" }
  ],
  "feedback": "1-3 zdania ogólnego komentarza do odpowiedzi ucznia — co było dobrze, co pominięto"
}`
}

export async function POST(req: NextRequest) {
  const { questionId, studentAnswer } = await req.json()

  if (!questionId || typeof studentAnswer !== 'string') {
    return NextResponse.json({ error: 'Missing questionId or studentAnswer' }, { status: 400 })
  }

  if (studentAnswer.trim().length < 5) {
    return NextResponse.json({ error: 'Answer too short' }, { status: 400 })
  }

  // Fetch the question
  const { data: question, error } = await supabase
    .from('questions')
    .select('question_text, key_points, model_answer, max_points')
    .eq('id', questionId)
    .eq('question_type', 'open')
    .single()

  if (error || !question) {
    return NextResponse.json({ error: 'Question not found' }, { status: 404 })
  }

  const keyPoints: KeyPoint[] = question.key_points ?? []
  const maxPoints: number = question.max_points ?? keyPoints.length

  if (keyPoints.length === 0) {
    return NextResponse.json({ error: 'Question has no key points defined' }, { status: 422 })
  }

  // Call Claude
  const prompt = buildEvalPrompt(question.question_text, keyPoints, maxPoints, studentAnswer)

  let raw: string
  try {
    const msg = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }],
    })
    raw = (msg.content[0] as { type: string; text: string }).text
  } catch (e) {
    console.error('Claude API error:', e)
    return NextResponse.json({ error: 'AI evaluation failed' }, { status: 502 })
  }

  // Parse Claude response
  let parsed: { criteria: { met: boolean; comment: string }[]; feedback: string }
  try {
    const jsonStart = raw.indexOf('{')
    const jsonEnd = raw.lastIndexOf('}')
    parsed = JSON.parse(raw.substring(jsonStart, jsonEnd + 1))
  } catch {
    console.error('Parse error, raw:', raw.substring(0, 200))
    return NextResponse.json({ error: 'Failed to parse AI response' }, { status: 502 })
  }

  const score = parsed.criteria.filter(c => c.met).length

  const result: EvaluationResult = {
    criteria: parsed.criteria.map((c, i) => ({
      text: keyPoints[i] ?? '',
      met: c.met,
    })),
    score,
    maxPoints,
    feedback: parsed.feedback,
    modelAnswer: question.model_answer ?? '',
  }

  return NextResponse.json(result)
}
