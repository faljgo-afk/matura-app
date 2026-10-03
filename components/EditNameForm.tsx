'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase-browser'
import { useRouter } from 'next/navigation'

// Designed for the dark-green profile card: text inherits white from the parent
export default function EditNameForm({ currentName }: { currentName: string }) {
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(currentName)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  async function handleSave() {
    if (!name.trim()) return
    setLoading(true)
    await supabase.auth.updateUser({ data: { name: name.trim() } })
    setLoading(false)
    setEditing(false)
    router.refresh()
  }

  if (!editing) {
    return (
      <div className="flex items-center gap-2">
        <span className="font-display text-2xl sm:text-3xl font-bold truncate">{currentName || 'Brak imienia'}</span>
        <button
          onClick={() => setEditing(true)}
          className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-sun hover:bg-white/15 transition-colors"
          title="Edytuj imię"
          aria-label="Edytuj imię"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        autoFocus
        aria-label="Imię"
        className="font-display text-xl font-bold rounded-xl border-2 border-brand-deep bg-white text-ink px-3 py-1 w-48 outline-none focus:border-sun"
        onKeyDown={e => { if (e.key === 'Enter') handleSave(); if (e.key === 'Escape') setEditing(false) }}
      />
      <button onClick={handleSave} disabled={loading} className="btn btn-sun btn-sm !mb-0 disabled:opacity-50">
        {loading ? '...' : 'Zapisz'}
      </button>
      <button onClick={() => setEditing(false)} className="text-sm font-extrabold text-[#e9fbe0] hover:underline px-2">
        Anuluj
      </button>
    </div>
  )
}
