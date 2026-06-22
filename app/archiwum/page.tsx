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
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12">

        <Link href="/" className="text-green-600 hover:text-green-800 text-sm mb-8 inline-block">
          ← Strona główna
        </Link>

        <div className="mb-8">
          <div className="inline-flex items-center text-xs font-semibold text-amber-700 bg-amber-100 px-3 py-1 rounded-full mb-3">
            Archiwum matur
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Prawdziwe zadania maturalne</h1>
          <p className="text-gray-500 mt-1 text-sm">
            Zadania otwarte z arkuszy CKE. Napisz odpowiedź — AI oceni ją według oficjalnego klucza.
          </p>
        </div>

        {exams.length === 0 ? (
          <div className="bg-white rounded-xl p-8 border border-gray-200 text-center text-gray-400">
            Brak arkuszy w bazie. Zajrzyj później!
          </div>
        ) : (
          <div className="space-y-3">
            {exams.map(exam => (
              <Link
                key={exam.id}
                href={`/archiwum/${exam.id}`}
                className="flex items-center justify-between bg-white rounded-xl border border-gray-200 px-6 py-4 hover:border-amber-300 hover:shadow-sm transition-all group"
              >
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-amber-700 transition-colors">
                    Matura {exam.year} — {SESSION_LABEL[exam.session] ?? exam.session}
                  </div>
                  <div className="text-sm text-gray-400 mt-0.5">
                    Biologia · Poziom rozszerzony
                  </div>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <div className="text-lg font-semibold text-gray-700">{exam.question_count}</div>
                  <div className="text-xs text-gray-400">zadań</div>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </main>
  )
}
