'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { createClient } from '@/lib/supabase-browser'
import type { User } from '@supabase/supabase-js'
import Logo from './Logo'

const ADMIN_EMAIL = 'faljgo@gmail.com'

export default function NavBar({ user }: { user: User | null }) {
  const router = useRouter()
  const pathname = usePathname()
  const supabase = createClient()

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="w-full px-10 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-green-700 flex items-center gap-2 shrink-0">
          <Logo size={28} />
          <span className="text-base md:text-lg">
            <span className="text-gray-900">Biologia</span>{' '}
            <span className="text-green-600">na 100%</span>
          </span>
          <span className="hidden sm:inline text-xs bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded font-normal">Beta</span>
        </Link>

        <div className="flex items-center gap-2">
          {user ? (
            <>
              {user.email === ADMIN_EMAIL && (
                <Link
                  href="/admin"
                  className="hidden sm:inline text-sm text-purple-600 hover:text-purple-800 font-medium"
                >
                  Admin
                </Link>
              )}
              <Link
                href="/dashboard"
                className="text-sm bg-green-600 hover:bg-green-700 text-white px-2.5 py-1.5 rounded-lg transition-colors"
              >
                <span className="hidden sm:inline">Moje postępy</span>
                <span className="sm:hidden">Postępy</span>
              </Link>
              <button
                onClick={handleLogout}
                className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-2.5 py-1.5 rounded-lg transition-colors"
              >
                Wyloguj
              </button>
            </>
          ) : (
            <>
              <Link
                href={`/login?next=${encodeURIComponent(pathname)}`}
                className="text-sm text-gray-600 hover:text-green-700 hidden sm:inline"
              >
                Zaloguj się
              </Link>
              <Link
                href={`/login?next=${encodeURIComponent(pathname)}`}
                className="text-sm text-gray-600 hover:text-green-700 sm:hidden"
              >
                Loguj
              </Link>
              <Link
                href="/register"
                className="text-sm bg-green-600 hover:bg-green-700 text-white px-2.5 py-1.5 rounded-lg transition-colors"
              >
                <span className="hidden sm:inline">Zarejestruj się</span>
                <span className="sm:hidden">Rejestracja</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
