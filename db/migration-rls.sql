-- Enable RLS and set policies for all public tables
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/gzpxvfaftvkfwpvljcrk/sql/new

-- ============================================================
-- 1. CONTENT TABLES (public read, service_role write)
-- ============================================================

-- topics
ALTER TABLE topics ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "topics_public_read" ON topics;
CREATE POLICY "topics_public_read" ON topics FOR SELECT USING (true);

-- subtopics
ALTER TABLE subtopics ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "subtopics_public_read" ON subtopics;
CREATE POLICY "subtopics_public_read" ON subtopics FOR SELECT USING (true);

-- questions
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "questions_public_read" ON questions;
CREATE POLICY "questions_public_read" ON questions FOR SELECT USING (true);

-- mock_questions
ALTER TABLE mock_questions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "mock_questions_public_read" ON mock_questions;
CREATE POLICY "mock_questions_public_read" ON mock_questions FOR SELECT USING (true);

-- matura_exams
ALTER TABLE matura_exams ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "matura_exams_public_read" ON matura_exams;
CREATE POLICY "matura_exams_public_read" ON matura_exams FOR SELECT USING (true);

-- matura_questions
ALTER TABLE matura_questions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "matura_questions_public_read" ON matura_questions;
CREATE POLICY "matura_questions_public_read" ON matura_questions FOR SELECT USING (true);

-- ============================================================
-- 2. USER DATA TABLES (own rows only)
-- ============================================================

-- test_sessions
ALTER TABLE test_sessions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "test_sessions_own_read" ON test_sessions;
DROP POLICY IF EXISTS "test_sessions_own_insert" ON test_sessions;
DROP POLICY IF EXISTS "test_sessions_own_update" ON test_sessions;
CREATE POLICY "test_sessions_own_read"   ON test_sessions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "test_sessions_own_insert" ON test_sessions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "test_sessions_own_update" ON test_sessions FOR UPDATE USING (auth.uid() = user_id);

-- user_progress
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "user_progress_own_read" ON user_progress;
DROP POLICY IF EXISTS "user_progress_own_insert" ON user_progress;
DROP POLICY IF EXISTS "user_progress_own_update" ON user_progress;
CREATE POLICY "user_progress_own_read"   ON user_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "user_progress_own_insert" ON user_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "user_progress_own_update" ON user_progress FOR UPDATE USING (auth.uid() = user_id);

-- user_learned_questions
ALTER TABLE user_learned_questions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "learned_own_read" ON user_learned_questions;
DROP POLICY IF EXISTS "learned_own_insert" ON user_learned_questions;
DROP POLICY IF EXISTS "learned_own_delete" ON user_learned_questions;
CREATE POLICY "learned_own_read"   ON user_learned_questions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "learned_own_insert" ON user_learned_questions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "learned_own_delete" ON user_learned_questions FOR DELETE USING (auth.uid() = user_id);

-- ============================================================
-- 3. Verify — list tables with RLS status
-- ============================================================
SELECT tablename, rowsecurity
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY tablename;
