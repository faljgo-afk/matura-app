'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase-browser'

export default function RegisterForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (password.length < 6) {
      setError('Hasło musi mieć co najmniej 6 znaków.')
      setLoading(false)
      return
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name: name.trim() },
        emailRedirectTo: `${window.location.origin}/dashboard`,
      },
    })

    if (error) {
      setError('Błąd rejestracji. Sprawdź dane i spróbuj ponownie.')
      setLoading(false)
      return
    }

    setSuccess(true)
    setLoading(false)
  }

  if (success) {
    return (
      <div className="text-center py-4 flex flex-col items-center gap-3">
        <span className="w-16 h-16 rounded-[20px] bg-sun border-2 border-brand-deep flex items-center justify-center text-brand-deep">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="3" /><path d="M3 8l9 6 9-6" />
          </svg>
        </span>
        <h2 className="font-display font-semibold text-2xl">Sprawdź skrzynkę email</h2>
        <p className="text-muted">
          Wysłaliśmy link potwierdzający na <strong className="text-ink">{email}</strong>.
          Kliknij go, aby aktywować konto.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="reg-name" className="field-label">Imię</label>
        <input
          id="reg-name"
          type="text"
          autoComplete="given-name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className="field"
          placeholder="Twoje imię"
        />
      </div>
      <div>
        <label htmlFor="reg-email" className="field-label">Email</label>
        <input
          id="reg-email"
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
        <label htmlFor="reg-password" className="field-label">Hasło</label>
        <input
          id="reg-password"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="field"
          placeholder="min. 6 znaków"
        />
      </div>
      {error && (
        <p role="alert" className="text-sm font-bold text-coral bg-coral-bg border-2 border-coral rounded-2xl px-4 py-2.5">
          {error}
        </p>
      )}
      <button type="submit" disabled={loading} className="btn btn-sun w-full !min-h-[56px] text-lg">
        {loading ? 'Rejestracja...' : 'Zarejestruj się'}
      </button>
    </form>
  )
}
