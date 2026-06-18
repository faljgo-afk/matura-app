'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase-browser'
import type { User } from '@supabase/supabase-js'

const ADMIN_EMAIL = 'faljgo@gmail.com'

export default function NavBar({ user }: { user: User | null }) {
  const router = useRouter()
  const supabase = createClient()

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-green-700 text-lg">
          🧬 Matura Bio
        </Link>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              {user.email === ADMIN_EMAIL && (
                <Link
                  href="/admin"
                  className="text-sm text-purple-600 hover:text-purple-800 font-medium"
                >
                  Admin
                </Link>
              )}
              <Link
                href="/dashboard"
                className="text-sm text-gray-600 hover:text-green-700"
              >
                Moje postępy
              </Link>
              <button
                onClick={handleLogout}
                className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg transition-colors"
              >
                Wyloguj
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm text-gray-600 hover:text-green-700"
              >
                Zaloguj się
              </Link>
              <Link
                href="/register"
                className="text-sm bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg transition-colors"
              >
                Zarejestruj się
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
