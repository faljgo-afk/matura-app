import RegisterForm from './RegisterForm'

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Zarejestruj się</h1>
        <p className="text-gray-500 text-sm mb-6">
          Załóż konto, aby śledzić postępy i zobaczyć statystyki
        </p>
        <RegisterForm />
        <p className="text-center text-sm text-gray-500 mt-4">
          Masz już konto?{' '}
          <a href="/login" className="text-green-600 hover:underline font-medium">
            Zaloguj się
          </a>
        </p>
      </div>
    </main>
  )
}
