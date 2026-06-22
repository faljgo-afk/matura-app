-- Archiwum v2: replace screenshot approach with full PDF viewer
-- Run in Supabase SQL editor

-- 1. Update matura_questions: drop old screenshot columns, add new ones
ALTER TABLE matura_questions
  DROP COLUMN IF EXISTS image_url,
  DROP COLUMN IF EXISTS page_start,
  DROP COLUMN IF EXISTS page_end,
  ADD COLUMN IF NOT EXISTS question_type text NOT NULL DEFAULT 'open',
  ADD COLUMN IF NOT EXISTS correct_answer jsonb,
  ADD COLUMN IF NOT EXISTS num_statements int;

-- 2. Add PDF URL to exam record
ALTER TABLE matura_exams
  ADD COLUMN IF NOT EXISTS pdf_url text;
