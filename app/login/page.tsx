import AuthShell from '@/components/AuthShell'
import LoginForm from './LoginForm'

export default function LoginPage({ searchParams }: { searchParams: { next?: string } }) {
  const next = searchParams.next ?? '/dashboard'

  return (
    <AuthShell
      title="Zaloguj się"
      subtitle="Zaloguj się, aby śledzić swoje postępy w nauce"
      footer={
        <>
          Nie masz konta?{' '}
          <a href="/register" className="text-brand font-extrabold hover:underline">
            Zarejestruj się
          </a>
        </>
      }
    >
      <LoginForm next={next} />
    </AuthShell>
  )
}
