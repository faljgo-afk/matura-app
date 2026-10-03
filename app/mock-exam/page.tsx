import { supabase } from '@/lib/supabase'
import { createClient } from '@/lib/supabase-server'
import Mascot from '@/components/Mascot'
import MockExamStarter from './MockExamStarter'

export const dynamic = 'force-dynamic'

async function getMockQuestionCount() {
  const [{ count: mockCount }, { count: topicCount }] = await Promise.all([
    supabase.from('mock_questions').select('id', { count: 'exact', head: true }).eq('verified', true),
    supabase.from('questions').select('id', { count: 'exact', head: true })
      .eq('verified', true)
      .in('question_type', ['single', 'multiple', 'true_false']),
  ])
  return (mockCount ?? 0) + (topicCount ?? 0)
}

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
)

function Feature({ tile, children }: { tile: string; children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-[15px] sm:text-base">
      <span className={`shrink-0 w-9 h-9 rounded-xl border-2 border-brand-deep flex items-center justify-center text-brand-deep ${tile}`}>
        <Check />
      </span>
      <span>{children}</span>
    </li>
  )
}

export default async function MockExamPage() {
  const questionCount = await getMockQuestionCount()
  const serverClient = createClient()
  const { data: { user } } = await serverClient.auth.getUser()
  const isLoggedIn = !!user

  return (
    <main className="bg-canvas min-h-[70vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-8 sm:py-10 flex flex-col gap-8">

        {/* Hero */}
        <section className="relative overflow-hidden rounded-[26px] border-2 border-brand-deep shadow-hard-lg mb-2 text-white bg-gradient-to-br from-[#0b5a33] to-[#12803f] px-6 py-8 sm:px-10 sm:py-10 flex items-center justify-between gap-6">
          <div className="relative flex-1 min-w-0 flex flex-col gap-3">
            <span className="self-start text-sm font-extrabold px-3.5 py-1.5 rounded-full bg-sun text-brand-deep border-2 border-brand-deep">
              Ogólny sprawdzian
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl leading-[1.05]">
              Sprawdzian z <span className="text-sun">całego materiału</span>
            </h1>
            <p className="text-lg text-[#e9fbe0]">
              Pytania ze wszystkich tematów — kompleksowy test wiedzy z biologii rozszerzonej
            </p>
          </div>
          <div className="hidden md:block shrink-0 pointer-events-none">
            <Mascot width={240} />
          </div>
        </section>

        {/* What you get + start */}
        <section className="card-game !rounded-[24px] !shadow-hard-lg p-6 sm:p-8 flex flex-col gap-6">
          <ul className="flex flex-col gap-3 rounded-2xl bg-canvas border-2 border-line p-5">
            <Feature tile="bg-leaf"><strong>20 pytań</strong> losowanych ze wszystkich tematów</Feature>
            <Feature tile="bg-sun">Po zakończeniu — wynik i <strong>wyjaśnienia błędów</strong></Feature>
            <Feature tile="bg-aqua">Baza zawiera <strong>{questionCount} pytań</strong> do sprawdzianu</Feature>
          </ul>

          <MockExamStarter isLoggedIn={isLoggedIn} />
        </section>

      </div>
    </main>
  )
}
