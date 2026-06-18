'use client'

export default function BackButton() {
  return (
    <button
      onClick={() => history.back()}
      className="text-green-600 hover:text-green-800 text-sm mb-6 inline-block"
    >
      ← Wróć
    </button>
  )
}
