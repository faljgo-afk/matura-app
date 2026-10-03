'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { createClient } from '@/lib/supabase-browser'
import type { User } from '@supabase/supabase-js'
import Logo from './Logo'

const ADMIN_EMAIL = 'faljgo@gmail.com'

const LINKS = [
  { label: 'Start', href: '/', match: (p: string) => p === '/' },
  { label: 'Tematy', href: '/#topics', match: (p: string) => p.startsWith('/topics') || p.startsWith('/test') || p.startsWith('/results') },
  { label: 'Ogólny sprawdzian', href: '/mock-exam', match: (p: string) => p.startsWith('/mock-exam') },
  { label: 'Archiwum Matur', href: '/archiwum', match: (p: string) => p.startsWith('/archiwum') },
  { label: 'Postępy', href: '/dashboard', match: (p: string) => p.startsWith('/dashboard') },
]

export default function NavBar({ user }: { user: User | null }) {
  const router = useRouter()
  const pathname = usePathname()
  const supabase = createClient()

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  const loginHref = `/login?next=${encodeURIComponent(pathname)}`

  return (
    <header className="bg-canvas">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Logo size={40} />
          <span className="font-display font-bold text-xl sm:text-[22px] tracking-tight text-ink">
            Biologia <span className="text-brand">na 100%</span>
          </span>
          <span className="hidden sm:inline text-xs bg-white border-2 border-line text-muted px-1.5 py-0.5 rounded-md font-bold">Beta</span>
        </Link>

        <nav aria-label="Główna nawigacja" className="order-3 xl:order-none w-full xl:w-auto flex gap-1 overflow-x-auto -mx-1 px-1 pb-1 xl:pb-0">
          {LINKS.map((l) => {
            const active = l.match(pathname)
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? 'page' : undefined}
                className={`whitespace-nowrap rounded-full px-3.5 py-2 text-[15px] font-extrabold transition-colors ${
                  active ? 'bg-sun text-brand-deep' : 'text-muted hover:text-ink hover:bg-mint'
                }`}
              >
                {l.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          {user ? (
            <>
              {user.email === ADMIN_EMAIL && (
                <Link href="/admin" className="hidden sm:inline text-sm font-extrabold text-grape hover:underline px-2">
                  Admin
                </Link>
              )}
              <button onClick={handleLogout} className="btn btn-ghost btn-sm">
                Wyloguj
              </button>
            </>
          ) : (
            <>
              <Link href={loginHref} className="text-[15px] font-extrabold text-ink hover:text-brand px-2">
                Zaloguj się
              </Link>
              <Link href="/register" className="btn btn-primary btn-sm">
                Zarejestruj się
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
