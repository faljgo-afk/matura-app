-- Migration: Archiwum Matur
-- Run in Supabase Dashboard → SQL Editor

CREATE TABLE IF NOT EXISTS matura_exams (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  year        int  NOT NULL,
  session     text NOT NULL,   -- 'czerwiec', 'sierpien', 'dodatkowy'
  subject     text NOT NULL DEFAULT 'biologia',
  level       text NOT NULL DEFAULT 'rozszerzony',
  pdf_url     text,            -- original PDF in Supabase Storage (optional)
  created_at  timestamptz DEFAULT now(),
  UNIQUE(year, session, subject, level)
);

CREATE TABLE IF NOT EXISTS matura_questions (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  exam_id          uuid NOT NULL REFERENCES matura_exams(id) ON DELETE CASCADE,
  topic_id         uuid REFERENCES topics(id),
  zadanie_number   text NOT NULL,   -- e.g. '20.2', '14.2'
  image_url        text NOT NULL,   -- screenshot PNG in Supabase Storage
  page_start       int,
  page_end         int,
  max_points       int NOT NULL,
  key_points       jsonb NOT NULL DEFAULT '[]',
  model_answer     text,
  created_at       timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS matura_questions_exam_idx  ON matura_questions (exam_id);
CREATE INDEX IF NOT EXISTS matura_questions_topic_idx ON matura_questions (topic_id);

-- Verify
SELECT table_name FROM information_schema.tables
WHERE table_schema = 'public'
  AND table_name IN ('matura_exams', 'matura_questions');
