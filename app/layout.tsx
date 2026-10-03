import type { Metadata } from 'next'
import { Manrope, DM_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { createClient } from '@/lib/supabase-server'
import NavBar from '@/components/NavBar'
import CookieConsent from '@/components/CookieConsent'
import Logo from '@/components/Logo'

const sans = DM_Sans({ subsets: ['latin', 'latin-ext'], variable: '--font-sans', display: 'swap' })
const display = Manrope({ subsets: ['latin', 'latin-ext'], variable: '--font-display', display: 'swap' })
const plexMono = IBM_Plex_Mono({ subsets: ['latin', 'latin-ext'], weight: ['500', '600'], variable: '--font-plex-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'Biologia na 100%',
  description: 'Ćwicz biologię rozszerzoną — testy tematyczne i sprawdziany z całego materiału',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <html lang="pl" className={`${sans.variable} ${display.variable} ${plexMono.variable}`}>
      <body className="antialiased bg-canvas font-sans text-ink min-h-screen flex flex-col">
        <NavBar user={user} />
        {children}
        <CookieConsent />
        <footer className="border-t-2 border-brand-deep bg-white mt-auto">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-8 py-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <span className="flex items-center gap-2">
                <Logo size={24} />
                <span className="font-display font-bold text-base text-ink">Biologia <span className="text-brand">na 100%</span></span>
                <span className="text-xs bg-canvas border-2 border-line text-muted px-1.5 py-0.5 rounded-md font-bold">Beta</span>
              </span>
              <span className="text-sm text-muted">Ucz się biologii przez praktykę i testowanie wiedzy</span>
            </div>
            <div className="sm:text-right">
              <p className="text-xs font-extrabold uppercase tracking-wider text-muted mb-1">Kontakt</p>
              <a href="mailto:faljgo@gmail.com" className="text-sm font-bold text-ink hover:text-brand transition-colors">faljgo@gmail.com</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
