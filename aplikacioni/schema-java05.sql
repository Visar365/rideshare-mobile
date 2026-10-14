CREATE TABLE IF NOT EXISTS profilet (
  github_id TEXT PRIMARY KEY,
  emri TEXT NOT NULL,
  roli TEXT NOT NULL DEFAULT 'udhetar'
    CHECK (roli IN ('udhetar', 'shofer'))
);

ALTER TABLE udhetimet
  ADD COLUMN IF NOT EXISTS shofer_id TEXT REFERENCES profilet(github_id);

SELECT id, nisja, destinacioni, ora, shofer_id
FROM udhetimet
ORDER BY id;
