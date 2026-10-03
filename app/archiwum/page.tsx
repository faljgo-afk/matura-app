import { supabase } from '@/lib/supabase'
import Link from 'next/link'

type Exam = {
  id: string
  year: number
  session: string
  question_count: number
}

async function getExams(): Promise<Exam[]> {
  const { data: exams } = await supabase
    .from('matura_exams')
    .select('id, year, session')
    .order('year', { ascending: false })
    .order('session', { ascending: true })

  if (!exams?.length) return []

  const result: Exam[] = []
  for (const exam of exams) {
    const { count } = await supabase
      .from('matura_questions')
      .select('*', { count: 'exact', head: true })
      .eq('exam_id', exam.id)
    result.push({ ...exam, question_count: count ?? 0 })
  }
  return result
}

const SESSION_LABEL: Record<string, string> = {
  maj:        'Maj',
  czerwiec:   'Czerwiec',
  sierpien:   'Sierpień',
  dodatkowy:  'Termin dodatkowy',
}

export default async function ArchiwumPage() {
  const exams = await getExams()

  return (
    <main className="bg-canvas min-h-[70vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-8 sm:py-10 flex flex-col gap-8">

        <Link href="/" className="self-start text-brand font-extrabold hover:underline">
          ← Strona główna
        </Link>

        <header>
          <span className="pill bg-sun text-brand-deep border-[3px] border-brand-deep mb-3">Archiwum matur</span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight">Prawdziwe zadania maturalne</h1>
          <p className="text-muted text-lg mt-2">
            Zadania otwarte z arkuszy CKE. Napisz odpowiedź — AI oceni ją według oficjalnego klucza.
          </p>
        </header>

        {exams.length === 0 ? (
          <div className="card-game !rounded-[28px] p-8 text-center font-semibold text-muted">
            Brak arkuszy w bazie. Zajrzyj później!
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {exams.map(exam => (
              <Link
                key={exam.id}
                href={`/archiwum/${exam.id}`}
                className="card-game card-link !rounded-[24px] !shadow-hard flex items-center justify-between gap-4 px-5 py-4 sm:px-6"
              >
                <div className="min-w-0">
                  <div className="font-display font-semibold text-xl leading-snug">
                    Matura {exam.year} — {SESSION_LABEL[exam.session] ?? exam.session}
                  </div>
                  <div className="text-sm font-semibold text-muted mt-0.5">
                    Biologia · Poziom rozszerzony
                  </div>
                </div>
                <div className="shrink-0 text-center rounded-2xl bg-[#fff1bf] border-[3px] border-brand-deep px-4 py-1.5">
                  <div className="font-mono font-semibold text-2xl leading-none">{exam.question_count}</div>
                  <div className="text-xs font-bold text-muted">zadań</div>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </main>
  )
}
