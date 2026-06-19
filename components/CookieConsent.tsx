'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'cookie_consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-900 border-t border-gray-700">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-sm text-gray-300">
          Ta strona używa plików cookie do zapamiętywania sesji i preferencji użytkownika.
          Kontynuując korzystanie ze strony, wyrażasz zgodę na ich użycie.
        </p>
        <button
          onClick={accept}
          className="shrink-0 px-5 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          Akceptuję
        </button>
      </div>
    </div>
  )
}
