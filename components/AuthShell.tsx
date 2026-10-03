// Shared layout for the login and register pages: a single centered form card
export default function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string
  subtitle: string
  children: React.ReactNode
  footer: React.ReactNode
}) {
  return (
    <main className="bg-canvas min-h-[75vh] flex items-center justify-center px-4 sm:px-8 py-8 sm:py-12">
      <section className="card-game !rounded-[24px] !shadow-hard-lg p-6 sm:p-8 w-full max-w-md">
        <h1 className="font-display font-bold text-3xl sm:text-4xl mb-1">{title}</h1>
        <p className="text-muted mb-6">{subtitle}</p>
        {children}
        <p className="text-center text-[15px] font-semibold text-muted mt-6">{footer}</p>
      </section>
    </main>
  )
}
