import AdminNav from '@/components/AdminNav'

// Shared chrome for all /admin pages. Access control stays in each page (redirect for non-admins).
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-50">
      <AdminNav />
      {children}
    </div>
  )
}
