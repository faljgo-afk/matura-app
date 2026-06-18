'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase-browser'
import { useRouter } from 'next/navigation'

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
        <span className="text-2xl font-bold text-gray-900">{currentName || 'Brak imienia'}</span>
        <button
          onClick={() => setEditing(true)}
          className="text-xs text-gray-400 hover:text-green-600 transition-colors"
        >
          ✏️ edytuj
        </button>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        autoFocus
        className="text-xl font-bold border-b-2 border-green-500 outline-none bg-transparent text-gray-900 w-48"
        onKeyDown={e => { if (e.key === 'Enter') handleSave(); if (e.key === 'Escape') setEditing(false) }}
      />
      <button
        onClick={handleSave}
        disabled={loading}
        className="text-xs text-green-600 font-medium hover:text-green-800 disabled:opacity-50"
      >
        {loading ? '...' : 'Zapisz'}
      </button>
      <button onClick={() => setEditing(false)} className="text-xs text-gray-400 hover:text-gray-600">
        Anuluj
      </button>
    </div>
  )
}
