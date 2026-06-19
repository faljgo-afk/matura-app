-- Add optional image_url to questions and mock_questions
ALTER TABLE questions ADD COLUMN IF NOT EXISTS image_url text;
ALTER TABLE mock_questions ADD COLUMN IF NOT EXISTS image_url text;
