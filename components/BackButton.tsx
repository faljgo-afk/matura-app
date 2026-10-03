'use client'

export default function BackButton() {
  return (
    <button
      onClick={() => history.back()}
      className="self-start text-brand hover:underline font-extrabold"
    >
      ← Wróć
    </button>
  )
}
