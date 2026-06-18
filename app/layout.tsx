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
      </body>
    </html>
  )
}
