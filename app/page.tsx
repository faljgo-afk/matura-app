import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import Mascot from '@/components/Mascot'

type Topic = {
  id: string
  name: string
  slug: string
  description: string
  order_index: number
}

// Tile colors cycle through the playful accent palette (decorative only)
const TILE_COLORS = [
  'bg-aqua text-brand-deep',
  'bg-sun text-brand-deep',
  'bg-candy text-brand-deep',
  'bg-leaf text-brand-deep',
  'bg-tangerine text-brand-deep',
  'bg-grape text-white',
]

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

async function getTopics(): Promise<Topic[]> {
  const { data, error } = await supabase
    .from('topics')
    .select('*')
    .order('order_index')

  if (error) return []
  return data ?? []
}

function ModeCard({ href, title, text, tag, tile, icon }: { href: string; title: string; text: string; tag: string; tile: string; icon: React.ReactNode }) {
  return (
    <Link href={href} className="card-game card-link flex flex-col gap-3 p-6 min-h-[210px] shadow-hard-lg">
      <span className={`w-[60px] h-[60px] rounded-[20px] border-[3px] border-brand-deep flex items-center justify-center text-brand-deep ${tile}`}>
        {icon}
      </span>
      <h3 className="font-display font-semibold text-2xl leading-tight">{title}</h3>
      <p className="text-[15px] text-muted flex-1">{text}</p>
      <span className="flex items-center gap-2 font-extrabold text-brand">{tag}<Arrow /></span>
    </Link>
  )
}

const svgProps = { width: 30, height: 30, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const

export default async function HomePage() {
  const topics = await getTopics()

  return (
    <main className="bg-canvas">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 pt-2 pb-16 flex flex-col gap-14">

        {/* Hero */}
        <section className="relative overflow-hidden rounded-[40px] border-4 border-brand-deep shadow-hard-lg mb-2 text-white bg-gradient-to-br from-[#0b5a33] via-[#12803f] to-[#1e9d4a] px-6 py-10 sm:px-12 sm:py-12 flex flex-wrap items-center justify-between gap-6">
          <div aria-hidden="true" className="pointer-events-none absolute -left-6 top-6 w-24 h-24 rounded-full bg-white/10" />
          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 -bottom-10 w-32 h-32 rounded-full bg-white/10" />
          <div className="relative flex-1 basis-[420px] max-w-[600px] flex flex-col gap-5">
            <span className="self-start inline-flex items-center gap-2 text-sm font-extrabold px-3.5 py-1.5 rounded-full bg-sun text-brand-deep border-[3px] border-brand-deep">
              Przygotowanie do matury z biologii
            </span>
            <h1 className="font-display font-bold text-5xl sm:text-6xl leading-[1.03]">
              Ucz się biologii <span className="text-sun">z uśmiechem</span> i zdaj na 100%
            </h1>
            <p className="text-lg text-[#e9fbe0] max-w-[520px]">
              Trenuj i sprawdzaj swoją wiedzę — testy tematyczne i sprawdziany z całego materiału.
            </p>
            <div className="flex flex-wrap gap-4 pt-1">
              <Link href="#topics" className="btn btn-sun">Rozpocznij trening<Arrow /></Link>
              <Link href="/mock-exam" className="btn btn-white">Ogólny sprawdzian</Link>
            </div>
          </div>
          <div className="relative hidden sm:block flex-none">
            <Mascot width={500} />
          </div>
        </section>

        {/* Modes */}
        <section className="flex flex-col gap-5">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl">Wybierz sposób nauki</h2>
            <p className="text-muted text-lg">Ćwicz konkretne tematy z programu CKE albo sprawdź się z całego materiału.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ModeCard
              href="#topics" title="Testy tematyczne" tag="Wybierz temat" tile="bg-leaf"
              text="Ćwicz konkretne tematy z programu CKE — genetyka, ekologia, fizjologia i więcej"
              icon={<svg {...svgProps}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z" /><path d="M4 5.5v16" /></svg>}
            />
            <ModeCard
              href="/mock-exam" title="Ogólny sprawdzian" tag="Zacznij sprawdzian" tile="bg-sun"
              text="Kompleksowy test ze wszystkich tematów — z limitem czasu lub we własnym tempie"
              icon={<svg {...svgProps}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>}
            />
            <ModeCard
              href="/dashboard" title="Śledzenie postępów" tag="Moje postępy" tile="bg-candy"
              text="Oznaczaj opanowane pytania i śledź swój postęp w każdym temacie"
              icon={<svg {...svgProps}><path d="M4 20V10M10 20V4M16 20v-8M22 20H2" /></svg>}
            />
          </div>
        </section>

        {/* Archive */}
        <Link
          href="/archiwum"
          className="card-game card-link !rounded-[32px] !shadow-hard-lg bg-amberx-bg flex flex-wrap items-center justify-between gap-4 px-6 py-7 sm:px-9"
          style={{ backgroundColor: '#fff1bf' }}
        >
          <div className="max-w-[640px]">
            <span className="pill bg-sun text-brand-deep border-2 border-brand-deep mb-2">Nowość</span>
            <h2 className="font-display font-bold text-3xl leading-tight">Archiwum matur CKE</h2>
            <p className="text-[#5a4a1f] mt-1">
              Prawdziwe zadania otwarte z egzaminów — napisz odpowiedź i sprawdź ją według oficjalnego klucza
            </p>
          </div>
          <span className="btn btn-primary">Otwórz archiwum<Arrow /></span>
        </Link>

        {/* Topics */}
        <section className="flex flex-col gap-5">
          <div>
            <h2 id="topics" className="font-display font-bold text-3xl sm:text-4xl scroll-mt-6">Testy tematyczne</h2>
            <p className="text-muted text-lg">Wybierz dział i rozwiąż test z wyjaśnieniem każdego błędu.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4">
            {topics.map((topic, i) => (
              <Link
                key={topic.id}
                href={`/topics/${topic.slug}`}
                className="card-game card-link !rounded-[22px] !shadow-hard flex items-center gap-4 p-4"
              >
                <span className={`w-[52px] h-[52px] rounded-2xl border-[3px] border-brand-deep flex items-center justify-center font-display font-bold text-[22px] shrink-0 ${TILE_COLORS[i % TILE_COLORS.length]}`}>
                  {topic.order_index}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[17px] font-extrabold leading-snug">{topic.name}</h3>
                  {topic.description && <p className="text-sm text-muted truncate">{topic.description}</p>}
                </div>
                <span className="text-brand shrink-0"><Arrow /></span>
              </Link>
            ))}
          </div>
        </section>

        {/* Mock exam CTA */}
        <section className="rounded-[32px] border-[3px] border-brand-deep shadow-hard-lg mb-2 bg-brand text-white text-center px-6 py-8">
          <h2 className="font-display font-bold text-3xl mb-2">Sprawdzian z całego materiału</h2>
          <p className="text-[#e9fbe0] mb-5">20 pytań ze wszystkich tematów — kompleksowy test wiedzy</p>
          <Link href="/mock-exam" className="btn btn-sun">Rozpocznij sprawdzian<Arrow /></Link>
        </section>

      </div>
    </main>
  )
}
