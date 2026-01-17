DROP TABLE IF EXISTS profile;
DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS project_skills;

CREATE TABLE profile (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  education TEXT,
  work TEXT,
  github TEXT,
  linkedin TEXT,
  portfolio TEXT
);

CREATE TABLE skills (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
);

CREATE TABLE projects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  link TEXT
);

CREATE TABLE project_skills (
  project_id INTEGER NOT NULL,
  skill TEXT NOT NULL
);