import { supabase } from '@/lib/supabase'
import { createClient } from '@/lib/supabase-server'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import StartTestButton from './StartTestButton'

type Topic = {
  id: string
  name: string
  slug: string
  description: string
}

async function getTopic(slug: string): Promise<Topic | null> {
  const { data, error } = await supabase
    .from('topics')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error || !data) return null
  return data
}

async function getClosedQuestionCount(topicId: string): Promise<number> {
  const { count } = await supabase
    .from('questions')
    .select('*', { count: 'exact', head: true })
    .eq('topic_id', topicId)
    .eq('verified', true)
    .in('question_type', ['single', 'multiple', 'true_false'])

  return count ?? 0
}

async function getOpenQuestionCount(topicId: string): Promise<number> {
  const { count } = await supabase
    .from('questions')
    .select('*', { count: 'exact', head: true })
    .eq('topic_id', topicId)
    .eq('verified', true)
    .eq('question_type', 'open')

  return count ?? 0
}

export default async function TopicPage({ params }: { params: { slug: string } }) {
  const topic = await getTopic(params.slug)
  if (!topic) notFound()

  const [closedCount, openCount] = await Promise.all([
    getClosedQuestionCount(topic.id),
    getOpenQuestionCount(topic.id),
  ])

  const serverClient = createClient()
  const { data: { user } } = await serverClient.auth.getUser()
  const isLoggedIn = !!user

  return (
    <main className="bg-canvas min-h-[70vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-8 sm:py-10 flex flex-col gap-8">

        <Link href="/#topics" className="self-start text-brand font-extrabold hover:underline">
          ← Powrót do listy tematów
        </Link>

        <header className="flex flex-col gap-2">
          <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight">{topic.name}</h1>
          {topic.description && <p className="text-lg text-muted">{topic.description}</p>}
        </header>

        {/* Closed questions */}
        <section className="card-game !shadow-hard-lg !rounded-[24px] p-6 sm:p-8 flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="pill bg-mint text-brand-deep">Pytania testowe</span>
          </div>
          <div className="flex items-center gap-5 rounded-2xl bg-canvas border-2 border-line p-4">
            <div className="text-center shrink-0 min-w-[72px]">
              <div className="font-mono font-semibold text-3xl leading-none">{closedCount}</div>
              <div className="text-xs font-bold text-muted mt-1">pytań w bazie</div>
            </div>
            <p className="text-[15px] text-ink">
              Test losuje <strong>10 pytań</strong> z bazy i sprawdza Twoją wiedzę.
              Po zakończeniu zobaczysz wynik i wyjaśnienia błędów.
            </p>
          </div>

          {closedCount < 1 ? (
            <div className="text-center py-4 text-muted font-semibold">
              Brak pytań dla tego tematu. Zajrzyj później!
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <StartTestButton topicId={topic.id} isLoggedIn={isLoggedIn} />
              {isLoggedIn && (
                <Link href={`/topics/${topic.slug}/browse`} className="btn btn-ghost w-full">
                  Przeglądaj pytania i odpowiedzi
                </Link>
              )}
            </div>
          )}
        </section>

        {/* Open questions */}
        <section className="card-game !shadow-hard-lg !rounded-[24px] p-6 sm:p-8 flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="pill bg-[#e3dcff] text-[#3b2a9e]">Pytania otwarte</span>
            <span className="text-sm font-semibold text-muted">jak na prawdziwej maturze</span>
          </div>
          <div className="flex items-center gap-5 rounded-2xl bg-canvas border-2 border-line p-4">
            <div className="text-center shrink-0 min-w-[72px]">
              <div className="font-mono font-semibold text-3xl leading-none">{openCount}</div>
              <div className="text-xs font-bold text-muted mt-1">pytań</div>
            </div>
            <p className="text-[15px] text-ink">
              Pisz pełne odpowiedzi. AI oceni je według kryteriów CKE —
              tak jak prawdziwy egzaminator.
            </p>
          </div>

          {openCount < 1 ? (
            <div className="text-center py-4 text-muted font-semibold">
              Pytania otwarte dla tego tematu wkrótce!
            </div>
          ) : (
            <Link
              href={`/topics/${topic.slug}/open`}
              className="btn w-full bg-grape text-white hover:brightness-110"
            >
              Ćwicz pytania otwarte →
            </Link>
          )}
        </section>

      </div>
    </main>
  )
}
