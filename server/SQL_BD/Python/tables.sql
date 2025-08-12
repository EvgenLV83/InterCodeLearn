-- Таблица с примерами
CREATE TABLE IF NOT EXISTS examples (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  code TEXT NOT NULL,
  description TEXT NOT NULL,
  next INTEGER NULL
);

-- Таблица с шаблонами
CREATE TABLE IF NOT EXISTS templates (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  example_id INTEGER NOT NULL,
  codeP TEXT NOT NULL,
  FOREIGN KEY (example_id) REFERENCES examples(id)
);

-- Таблица ключевых слов C#
CREATE TABLE IF NOT EXISTS csharp_keywords (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  keyword TEXT NOT NULL,
  description TEXT NOT NULL,
  example TEXT,
  category TEXT
);

CREATE TABLE IF NOT EXISTS code_explanations (
  example_id INTEGER PRIMARY KEY,
  structure TEXT NOT NULL,
  algorithm TEXT NOT NULL,
  notes TEXT,
  FOREIGN KEY (example_id) REFERENCES examples(id)
);