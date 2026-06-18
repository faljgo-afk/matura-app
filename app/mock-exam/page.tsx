import MockExamStarter from './MockExamStarter'

export default function MockExamPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12">

        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">📝</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Sprawdzian z całego materiału</h1>
            <p className="text-gray-500">
              Pytania ze wszystkich tematów — kompleksowy test wiedzy z biologii rozszerzonej
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 mb-8 space-y-3">
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <span className="text-green-500 text-lg">✓</span>
              <span><strong>20 pytań</strong> losowanych ze wszystkich tematów</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <span className="text-green-500 text-lg">✓</span>
              <span><strong>45 minut</strong> na rozwiązanie</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <span className="text-green-500 text-lg">✓</span>
              <span>Po zakończeniu — wynik i <strong>wyjaśnienia błędów</strong></span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <span className="text-yellow-500 text-lg">⚠</span>
              <span>Czas mija automatycznie — test zostanie przesłany gdy skończy się czas</span>
            </div>
          </div>

          <MockExamStarter />
        </div>

      </div>
    </main>
  )
}
