import type { Metadata } from 'next'
import './globals.css'
import { createClient } from '@/lib/supabase-server'
import NavBar from '@/components/NavBar'

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
        <footer className="border-t border-gray-200 bg-white mt-auto">
          <div className="max-w-4xl mx-auto px-4 h-12 flex items-center justify-between">
            <span className="text-sm text-gray-500">🧬 Biologia na 100% <span className="text-xs bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded ml-1">Beta</span></span>
            <span className="text-sm text-gray-400">Support: <a href="mailto:faljgo@gmail.com" className="hover:text-green-600 transition-colors">faljgo@gmail.com</a></span>
          </div>
        </footer>
      </body>
    </html>
  )
}
