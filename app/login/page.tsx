import LoginForm from './LoginForm'

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Zaloguj się</h1>
        <p className="text-gray-500 text-sm mb-6">
          Zaloguj się, aby śledzić swoje postępy w nauce
        </p>
        <LoginForm />
        <p className="text-center text-sm text-gray-500 mt-4">
          Nie masz konta?{' '}
          <a href="/register" className="text-green-600 hover:underline font-medium">
            Zarejestruj się
          </a>
        </p>
      </div>
    </main>
  )
}
