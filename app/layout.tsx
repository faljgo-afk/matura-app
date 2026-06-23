import type { Metadata } from 'next'
import './globals.css'
import { createClient } from '@/lib/supabase-server'
import NavBar from '@/components/NavBar'
import CookieConsent from '@/components/CookieConsent'
import Logo from '@/components/Logo'

export const metadata: Metadata = {
  title: 'Biologia na 100%',
  description: 'Ćwicz biologię rozszerzoną — testy tematyczne i sprawdziany z całego materiału',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <html lang="pl">
      <body className="antialiased bg-gray-50">
        <NavBar user={user} />
        {children}
        <CookieConsent />
        <footer className="border-t border-gray-200 bg-white mt-auto">
          <div className="w-full px-10 py-6 flex items-center justify-between">
            <div className="flex flex-col gap-1.5">
              <span className="flex items-center gap-1.5">
                <Logo size={20} />
                <span className="text-sm font-semibold text-gray-800">Biologia</span>{' '}
                <span className="text-sm font-semibold text-green-600">na 100%</span>
                <span className="text-xs bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded">Beta</span>
              </span>
              <span className="text-xs text-gray-400">Ucz się biologii przez praktykę i testowanie wiedzy</span>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400 mb-1">Kontakt</p>
              <a href="mailto:faljgo@gmail.com" className="text-sm text-gray-500 hover:text-green-600 transition-colors">faljgo@gmail.com</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
