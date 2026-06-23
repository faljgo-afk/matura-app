import { supabase } from '@/lib/supabase'
import { createClient } from '@/lib/supabase-server'
import MockExamStarter from './MockExamStarter'

export const dynamic = 'force-dynamic'

async function getMockQuestionCount() {
  const [{ count: mockCount }, { count: topicCount }] = await Promise.all([
    supabase.from('mock_questions').select('id', { count: 'exact', head: true }).eq('verified', true),
    supabase.from('questions').select('id', { count: 'exact', head: true })
      .eq('verified', true)
      .in('question_type', ['single', 'multiple', 'true_false']),
  ])
  return (mockCount ?? 0) + (topicCount ?? 0)
}

export default async function MockExamPage() {
  const questionCount = await getMockQuestionCount()
  const serverClient = createClient()
  const { data: { user } } = await serverClient.auth.getUser()
  const isLoggedIn = !!user

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12">

        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">📝</div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Sprawdzian z całego materiału</h1>
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
              <span>Po zakończeniu — wynik i <strong>wyjaśnienia błędów</strong></span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <span className="text-blue-500 text-lg">📚</span>
              <span>Baza zawiera <strong>{questionCount} pytań</strong> do sprawdzianu</span>
            </div>
          </div>

          <MockExamStarter isLoggedIn={isLoggedIn} />
        </div>

      </div>
    </main>
  )
}
