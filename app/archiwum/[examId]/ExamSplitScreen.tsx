'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import QuestionInteraction from './QuestionInteraction'

type Question = {
  id: string
  zadanie_number: string
  question_type: string
  max_points: number
  num_statements: number | null
  correct_answer: Record<string, unknown> | null
  key_points: string[]
  model_answer: string | null
}

type Exam = {
  id: string
  year: number
  session: string
  pdf_url: string | null
}

const SESSION_LABEL: Record<string, string> = {
  czerwiec:  'Czerwiec',
  sierpien:  'Sierpień',
  dodatkowy: 'Dodatkowy',
}

const TYPE_ICON: Record<string, string> = {
  single: 'Jed.',
  multiple: 'Wiel.',
  true_false: 'P/F',
  open: 'Otw.',
}

// Sort questions numerically by zadanie_number (e.g. "1.2" < "2.1" < "10.1")
function sortQuestions(questions: Question[]) {
  return [...questions].sort((a, b) => {
    const [aMain, aSub = '0'] = a.zadanie_number.split('.')
    const [bMain, bSub = '0'] = b.zadanie_number.split('.')
    return parseInt(aMain) - parseInt(bMain) || parseInt(aSub) - parseInt(bSub)
  })
}

// Group sorted questions by parent zadanie number
function groupByParent(questions: Question[]) {
  const groups: Map<string, Question[]> = new Map()
  for (const q of questions) {
    const parent = q.zadanie_number.includes('.')
      ? q.zadanie_number.split('.')[0]
      : q.zadanie_number
    if (!groups.has(parent)) groups.set(parent, [])
    groups.get(parent)!.push(q)
  }
  // Sort groups numerically
  return Array.from(groups.entries()).sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
}

function TypeBadge({ type }: { type: string }) {
  const label = TYPE_ICON[type] ?? type
  const colors: Record<string, string> = {
    single: 'bg-mint text-brand-deep border-brand',
    multiple: 'bg-[#ffd9e6] text-[#8a1d4a] border-candy',
    true_false: 'bg-amberx-bg text-amberx border-amberx',
    open: 'bg-[#e3dcff] text-[#3b2a9e] border-grape',
  }
  return (
    <span className={`text-xs font-extrabold px-2 py-0.5 rounded-lg border-2 ${colors[type] ?? colors.open}`}>
      {label}
    </span>
  )
}

// Stable module-level component — never re-mounts when parent re-renders
function PdfPanel({ pdfUrl, title }: { pdfUrl: string | null; title: string }) {
  if (!pdfUrl) {
    return (
      <div className="h-full flex items-center justify-center text-muted font-semibold text-sm">
        PDF niedostępny
      </div>
    )
  }
  return (
    <iframe
      src={pdfUrl + '#toolbar=1&navpanes=0'}
      className="h-full w-full border-0"
      title={title}
    />
  )
}

export default function ExamSplitScreen({ exam, questions }: { exam: Exam; questions: Question[] }) {
  const [activeId, setActiveId] = useState<string>(questions[0]?.id ?? '')
  const [mobileTab, setMobileTab] = useState<'pdf' | 'answer'>('pdf')

  const sorted = useMemo(() => sortQuestions(questions), [questions])
  const activeQuestion = useMemo(
    () => sorted.find(q => q.id === activeId) ?? sorted[0],
    [activeId, sorted]
  )
  const groups = useMemo(() => groupByParent(sorted), [sorted])

  const pdfUrl = exam.pdf_url
  const title = `Matura ${exam.year} — ${SESSION_LABEL[exam.session] ?? exam.session}`

  function selectQuestion(id: string) {
    setActiveId(id)
    setMobileTab('answer')
  }

  return (
    <>
      {/* ── Desktop: side-by-side ──────────────────────────────────────────── */}
      <div className="hidden md:flex h-screen overflow-hidden">
        {/* Left: PDF — 55% */}
        <div className="w-[55%] shrink-0 bg-line border-r-[3px] border-brand-deep h-full">
          <PdfPanel pdfUrl={pdfUrl} title={title} />
        </div>

        {/* Right: interaction panel — 45% */}
        <div className="flex-1 min-w-0 bg-white flex flex-col h-full overflow-hidden">

          {/* Header */}
          <div className="px-4 py-3 border-b-[3px] border-line shrink-0">
            <Link href="/archiwum" className="text-sm font-extrabold text-brand hover:underline mb-1 inline-block">
              ← Archiwum
            </Link>
            <h1 className="font-display font-semibold text-xl leading-tight">{title}</h1>
            <p className="text-xs font-bold text-muted mt-0.5">Biologia · Poziom rozszerzony · {sorted.length} zadań</p>
          </div>

          <div className="flex flex-1 overflow-hidden">
            {/* Question list sidebar */}
            <div className="w-32 shrink-0 border-r-[3px] border-line overflow-y-auto py-2 bg-canvas">
              {groups.map(([parent, qs]) => (
                <div key={parent} className="mb-3">
                  <div className="px-3 py-1 text-xs font-extrabold text-muted uppercase tracking-wider">
                    Zad. {parent}
                  </div>
                  {qs.map(q => (
                    <button
                      key={q.id}
                      onClick={() => selectQuestion(q.id)}
                      className={`w-full text-left px-3 py-2 text-sm transition-colors flex items-center justify-between gap-1 ${
                        q.id === activeId
                          ? 'bg-sun text-brand-deep font-extrabold'
                          : 'text-ink font-bold hover:bg-mint'
                      }`}
                    >
                      <span>{q.zadanie_number}</span>
                      <span className={`shrink-0 text-xs ${q.id === activeId ? 'text-brand-deep' : 'text-muted'}`}>
                        {q.max_points}p
                      </span>
                    </button>
                  ))}
                </div>
              ))}
            </div>

            {/* Active question interaction */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
              {activeQuestion && (
                <>
                  <div className="mb-4 pb-3 border-b-[3px] border-dotted border-line">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="font-display font-semibold text-2xl">
                        Zadanie {activeQuestion.zadanie_number}
                      </h2>
                      <TypeBadge type={activeQuestion.question_type} />
                    </div>
                    <p className="text-sm font-bold text-muted">
                      {activeQuestion.max_points} {activeQuestion.max_points === 1 ? 'punkt' : 'punktów'}
                    </p>
                    <div className="mt-2 flex items-center gap-2 bg-[#fff1bf] border-[3px] border-amberx rounded-2xl px-3 py-2 text-xs font-bold text-amberx">
                      <span>←</span>
                      <span>Treść zadania znajduje się w arkuszu po lewej stronie</span>
                    </div>
                  </div>
                  <QuestionInteraction key={activeQuestion.id} question={activeQuestion} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile: tabs ──────────────────────────────────────────────────── */}
      <div className="flex md:hidden flex-col h-screen overflow-hidden">
        <div className="flex border-b-[3px] border-brand-deep bg-white shrink-0">
          <button
            onClick={() => setMobileTab('pdf')}
            className={`flex-1 py-3 text-sm font-extrabold transition-colors ${
              mobileTab === 'pdf'
                ? 'bg-sun text-brand-deep'
                : 'text-muted hover:bg-mint'
            }`}
          >
            Arkusz
          </button>
          <button
            onClick={() => setMobileTab('answer')}
            className={`flex-1 py-3 text-sm font-extrabold transition-colors ${
              mobileTab === 'answer'
                ? 'bg-sun text-brand-deep'
                : 'text-muted hover:bg-mint'
            }`}
          >
            Odpowiedzi
          </button>
        </div>
        <div className="flex-1 overflow-hidden">
          {mobileTab === 'pdf'
            ? <PdfPanel pdfUrl={pdfUrl} title={title} />
            : (
              <div className="h-full overflow-y-auto bg-white p-4">
                <Link href="/archiwum" className="text-sm font-extrabold text-brand hover:underline mb-3 inline-block">
                  ← Archiwum
                </Link>
                <div className="flex gap-2 flex-wrap mb-4">
                  {sorted.map(q => (
                    <button
                      key={q.id}
                      onClick={() => setActiveId(q.id)}
                      className={`px-3 py-1.5 text-sm font-extrabold rounded-xl border-[3px] transition-colors ${
                        q.id === activeId
                          ? 'bg-sun text-brand-deep border-brand-deep'
                          : 'border-line text-ink hover:border-brand'
                      }`}
                    >
                      {q.zadanie_number}
                    </button>
                  ))}
                </div>
                {activeQuestion && (
                  <>
                    <div className="mb-4 pb-3 border-b-[3px] border-dotted border-line">
                      <div className="flex items-center gap-2 mb-1">
                        <h2 className="font-display font-semibold text-2xl">Zadanie {activeQuestion.zadanie_number}</h2>
                        <TypeBadge type={activeQuestion.question_type} />
                      </div>
                      <p className="text-sm font-bold text-muted">
                        {activeQuestion.max_points} {activeQuestion.max_points === 1 ? 'punkt' : 'punktów'}
                      </p>
                    </div>
                    <QuestionInteraction key={activeQuestion.id} question={activeQuestion} />
                  </>
                )}
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}
