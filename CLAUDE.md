# Projekt: Matura Biologia — platforma testów przygotowawczych

## Rola i sposób pracy

Jesteś moim osobistym mentorem-programistą. Prowadzisz mnie przez budowę tej aplikacji krok po kroku.

**Zasady komunikacji:**
- Zawsze wyjaśniaj CO robimy i DLACZEGO, zanim cokolwiek zrobisz
- Po każdym kroku powiedz mi dokładnie co mam sprawdzić w przeglądarce lub terminalu
- Pytaj o potwierdzenie przed przejściem do kolejnego kroku: "Widzisz X? Napisz 'tak' żeby kontynuować"
- Jeśli coś pójdzie nie tak — najpierw diagnozuj, nie nadpisuj kodu na ślepo
- Wyjaśniaj błędy prostym językiem, bez żargonu
- Jeden krok = jedna konkretna rzecz do zrobienia

**Język:** Odpowiadaj po rosyjsku. Kod i komentarze w kodzie — po angielsku. Treść dla użytkowników serwisu (pytania, wyjaśnienia) — po polsku.

---

## Co budujemy

Serwis do przygotowania do matury z biologii (Polska, CKE).

**Dwa tryby dla ucznia:**
1. **Trening tematyczny** — uczeń wybiera temat (np. "Genetyka"), rozwiązuje test z tego tematu, dostaje wynik i wyjaśnienie każdego błędu
2. **Próbna matura** — test zbliżony do prawdziwej matury (mieszane tematy, realistyczny czas), wynik + analiza błędów

**Kluczowe wymagania:**
- Wszystkie pytania generowane przez AI (Claude API)
- Wysoka dokładność merytoryczna — weryfikacja treści przed publikacją
- Baza danych pytań — nie generujemy na żywo podczas testu
- Śledzenie postępów ucznia po zalogowaniu
- Język serwisu: polski

---

## Stos technologiczny

```
Frontend:  Next.js 14 (App Router) + TypeScript + Tailwind CSS
Backend:   Next.js API Routes
Baza:      Supabase (PostgreSQL + Auth + Storage)
AI:        Anthropic Claude API (claude-sonnet-4-6)
Deploy:    Vercel
```

---

## Struktura bazy danych

```sql
-- Tematy biologii zgodne z programem CKE
topics (
  id uuid PRIMARY KEY,
  name text NOT NULL,           -- "Genetyka", "Ekologia" itd.
  slug text UNIQUE NOT NULL,
  description text,
  order_index int
)

-- Pytania testowe
questions (
  id uuid PRIMARY KEY,
  topic_id uuid REFERENCES topics(id),
  question_text text NOT NULL,
  question_type text NOT NULL,  -- 'single', 'multiple', 'true_false'
  options jsonb NOT NULL,        -- [{id, text, is_correct}]
  correct_answer jsonb NOT NULL, -- id lub lista id poprawnych odpowiedzi
  explanation text NOT NULL,     -- wyjaśnienie poprawnej odpowiedzi
  difficulty int DEFAULT 2,      -- 1=łatwe, 2=średnie, 3=trudne
  source_reference text,         -- np. "CKE 2023, zadanie 12"
  verified boolean DEFAULT false, -- czy zweryfikowane przez admina
  ai_confidence float,           -- pewność AI (0-1), <0.8 = wymaga przeglądu
  created_at timestamptz DEFAULT now()
)

-- Sesje testowe
test_sessions (
  id uuid PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id),
  session_type text NOT NULL,   -- 'topic' lub 'mock_exam'
  topic_id uuid REFERENCES topics(id), -- null dla mock_exam
  questions jsonb NOT NULL,     -- lista id pytań w tej sesji
  answers jsonb,                -- odpowiedzi użytkownika
  score int,
  max_score int,
  completed_at timestamptz,
  created_at timestamptz DEFAULT now()
)

-- Postępy użytkownika per temat
user_progress (
  id uuid PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id),
  topic_id uuid REFERENCES topics(id),
  tests_taken int DEFAULT 0,
  best_score float DEFAULT 0,
  last_tested_at timestamptz,
  UNIQUE(user_id, topic_id)
)
```

---

## Tematy biologii (zgodne z programem CKE)

```
1. Komórka i biochemia
2. Genetyka i dziedziczenie
3. Ewolucja
4. Ekologia
5. Fizjologia roślin
6. Fizjologia człowieka — układ krążenia i oddechowy
7. Fizjologia człowieka — układ nerwowy i hormonalny
8. Fizjologia człowieka — układ pokarmowy i wydalniczy
9. Różnorodność organizmów
10. Biotechnologia
```

---

## Prompt do generowania pytań (używać w pipeline AI)

```
Jesteś ekspertem z biologii i twórcą zadań maturalnych. Twoim zadaniem jest stworzenie pytań testowych do przygotowania do matury z biologii w Polsce (poziom rozszerzony, program CKE).

TEMAT: {topic_name}
LICZBA PYTAŃ: {count}
TRUDNOŚĆ: {difficulty} (1=łatwe, 2=średnie, 3=trudne)

Dla każdego pytania zwróć JSON w tym formacie:
{
  "question_text": "Treść pytania",
  "question_type": "single" | "multiple" | "true_false",
  "options": [
    {"id": "A", "text": "Odpowiedź A", "is_correct": false},
    {"id": "B", "text": "Odpowiedź B", "is_correct": true},
    {"id": "C", "text": "Odpowiedź C", "is_correct": false},
    {"id": "D", "text": "Odpowiedź D", "is_correct": false}
  ],
  "correct_answer": ["B"],
  "explanation": "Szczegółowe wyjaśnienie dlaczego B jest poprawne i dlaczego pozostałe są błędne. Min. 3 zdania.",
  "difficulty": 2,
  "confidence": 0.95,
  "source_reference": "Podręcznik biologii, zakres rozszerzony"
}

ZASADY:
- Pytania muszą być zgodne z aktualną podstawą programową CKE
- Dystraktorы (błędne odpowiedzi) muszą być wiarygodne i typowe dla błędów uczniów
- Wyjaśnienie musi być merytoryczne i edukacyjne
- Unikaj pytań trywialnych lub zbyt prostych sformułowań
- confidence < 0.85 oznacza że pytanie wymaga weryfikacji przez eksperta
- Zwróć TYLKO tablicę JSON, bez dodatkowego tekstu
```

---

## Prompt do weryfikacji pytań (cross-check AI)

```
Jesteś biologiem i egzaminatorem CKE. Twoim zadaniem jest weryfikacja pytania testowego.

PYTANIE DO WERYFIKACJI:
{question_json}

Oceń pytanie pod kątem:
1. Poprawność merytoryczna — czy odpowiedź jest faktycznie poprawna?
2. Zgodność z programem CKE — czy temat jest na maturze?
3. Jakość dystraktorów — czy błędne odpowiedzi są wiarygodne?
4. Jakość wyjaśnienia — czy jest kompletne i edukacyjne?

Zwróć JSON:
{
  "is_correct": true/false,
  "issues": ["lista problemów jeśli są"],
  "suggested_fix": "poprawiona wersja jeśli potrzebna",
  "verification_confidence": 0.95,
  "approve": true/false
}

Zwróć TYLKO JSON.
```

---

## Struktura plików projektu

```
/
├── app/
│   ├── page.tsx                    # Strona główna — wybór trybu
│   ├── topics/
│   │   └── [slug]/
│   │       └── page.tsx            # Wybór tematu i start testu
│   ├── test/
│   │   └── [sessionId]/
│   │       └── page.tsx            # Ekran testu
│   ├── results/
│   │   └── [sessionId]/
│   │       └── page.tsx            # Wyniki + analiza błędów
│   ├── mock-exam/
│   │   └── page.tsx                # Próbna matura
│   └── dashboard/
│       └── page.tsx                # Postępy ucznia (po zalogowaniu)
├── components/
│   ├── QuestionCard.tsx            # Wyświetlanie pytania
│   ├── AnswerOption.tsx            # Opcja odpowiedzi
│   ├── ResultSummary.tsx           # Podsumowanie wyników
│   ├── ErrorExplanation.tsx        # Wyjaśnienie błędu
│   └── ProgressBar.tsx             # Pasek postępu testu
├── lib/
│   ├── supabase.ts                 # Klient Supabase
│   ├── claude.ts                   # Klient Claude API
│   └── test-engine.ts              # Logika testów
├── app/api/
│   ├── generate-questions/         # Endpoint generowania pytań (admin)
│   ├── verify-question/            # Endpoint weryfikacji (admin)
│   ├── start-session/              # Rozpoczęcie sesji testowej
│   └── submit-answers/             # Przesłanie odpowiedzi
└── admin/
    └── questions/
        └── page.tsx                # Panel moderacji pytań
```

---

## Plan wdrożenia — etapy

```
ETAP 1 — Fundament (tydzień 1)
□ Inicjalizacja projektu Next.js
□ Konfiguracja Supabase (baza + auth)
□ Schemat bazy danych
□ Strona główna z wyborem tematu

ETAP 2 — Silnik testów (tydzień 2)
□ Ekran testu z pytaniami
□ Logika odpowiedzi i liczenia punktów
□ Ekran wyników z analizą błędów

ETAP 3 — Treść (tydzień 3)
□ Pipeline generowania pytań przez Claude API
□ System weryfikacji krzyżowej
□ Panel admina do moderacji
□ Wypełnienie bazy (min. 30 pytań na temat)

ETAP 4 — Funkcje zaawansowane (tydzień 4)
□ Próbna matura (mieszane pytania, timer)
□ Logowanie i śledzenie postępów
□ Dashboard ucznia
□ Deploy na Vercel
```

---

## Jak zaczynamy

Kiedy powiem "start" lub "zaczynamy" — zacznij od ETAPU 1, kroku 1:
Sprawdź czy mam zainstalowany Node.js i npm, potem utwórz projekt Next.js.

Przed każdym krokiem powiedz mi:
1. Co teraz robimy (1 zdanie)
2. Dlaczego to jest potrzebne (1 zdanie)
3. Dokładną komendę lub akcję do wykonania
4. Co powinienem zobaczyć po wykonaniu

Czekaj na moje potwierdzenie przed kontynuowaniem.
