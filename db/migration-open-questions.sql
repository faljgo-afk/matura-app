-- Migration: open questions support
-- Run this in Supabase Dashboard → SQL Editor

ALTER TABLE questions
  ADD COLUMN IF NOT EXISTS max_points  integer,
  ADD COLUMN IF NOT EXISTS key_points  jsonb,
  ADD COLUMN IF NOT EXISTS model_answer text,
  ADD COLUMN IF NOT EXISTS source      text;

-- Index for fast filtering by question_type
CREATE INDEX IF NOT EXISTS questions_type_idx ON questions (question_type);

-- Verify
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'questions'
  AND column_name IN ('question_type', 'max_points', 'key_points', 'model_answer', 'source')
ORDER BY column_name;
