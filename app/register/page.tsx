import AuthShell from '@/components/AuthShell'
import RegisterForm from './RegisterForm'

export default function RegisterPage() {
  return (
    <AuthShell
      title="Zarejestruj się"
      subtitle="Załóż konto, aby śledzić postępy i zobaczyć statystyki"
      footer={
        <>
          Masz już konto?{' '}
          <a href="/login" className="text-brand font-extrabold hover:underline">
            Zaloguj się
          </a>
        </>
      }
    >
      <RegisterForm />
    </AuthShell>
  )
}
