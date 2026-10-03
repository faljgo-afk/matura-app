'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase-browser'

export default function LoginForm({ next }: { next: string }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError('Nieprawidłowy email lub hasło.')
      setLoading(false)
      return
    }

    router.push(next)
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="login-email" className="field-label">Email</label>
        <input
          id="login-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="field"
          placeholder="twoj@email.com"
        />
      </div>
      <div>
        <label htmlFor="login-password" className="field-label">Hasło</label>
        <input
          id="login-password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="field"
          placeholder="••••••••"
        />
      </div>
      {error && (
        <p role="alert" className="text-sm font-bold text-coral bg-coral-bg border-[3px] border-coral rounded-2xl px-4 py-2.5">
          {error}
        </p>
      )}
      <button type="submit" disabled={loading} className="btn btn-sun w-full !min-h-[56px] text-lg">
        {loading ? 'Logowanie...' : 'Zaloguj się'}
      </button>
    </form>
  )
}
