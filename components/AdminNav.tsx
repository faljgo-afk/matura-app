'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ITEMS = [
  { label: 'Użytkownicy', href: '/admin', match: (p: string) => p === '/admin' || p.startsWith('/admin/users') },
  { label: 'Raporty', href: '/admin/reports', match: (p: string) => p.startsWith('/admin/reports') },
  { label: 'Feedback', href: '/admin/feedback', match: (p: string) => p.startsWith('/admin/feedback') },
]

// Restrained secondary navigation for the admin area
export default function AdminNav() {
  const pathname = usePathname()

  return (
    <div className="bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center gap-6">
        <span className="hidden sm:inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-500 py-3.5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand" />
          Panel administratora
        </span>
        <nav aria-label="Nawigacja administratora" className="flex gap-1 max-sm:overflow-x-auto max-sm:[scrollbar-width:none]">
          {ITEMS.map((item) => {
            const active = item.match(pathname)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`whitespace-nowrap px-3 pt-3.5 pb-3 text-sm font-bold border-b-2 transition-colors ${
                  active
                    ? 'text-slate-900 border-brand'
                    : 'text-slate-500 border-transparent hover:text-slate-800'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
