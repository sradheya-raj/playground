# Playground

A simple backend + API playground that stores my personal profile in a database and exposes it through REST APIs with a minimal frontend for querying.

This project is built as part of a backend assessment to demonstrate API design, database usage, and deployment readiness.

---

## 🧱 Architecture
```bash
Frontend (HTML) |  HTTP (CORS enabled) | Backend (Node.js + Express) | SQLite Database
```

- Backend exposes REST APIs
- SQLite stores profile, skills, and projects
- Frontend consumes the hosted API

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express
- **Database**: SQLite
- **Frontend**: HTML + Vanilla JavaScript
- **Hosting**: Render (backend), Netlify (frontend)

---

## 📂 Project Structure

```bash
backend/
      └── search.js
      ├── server.js
      ├── db.js
      ├── seed.js
      ├── schema.sql
      ├── routes/
              ├── profile.js
              ├── projects.js
      ├── package.json
frontend/
      └── index.html
```
---

## 🗄 Database Schema

### profile
| column     | type |
|-----------|------|
| id        | INTEGER (PK) |
| name      | TEXT |
| email     | TEXT |
| education | TEXT |
| work      | TEXT |
| github    | TEXT |
| linkedin  | TEXT |
| portfolio | TEXT |

### skills
| column | type |
|------|------|
| id   | INTEGER (PK) |
| name | TEXT |

### projects
| column      | type |
|------------|------|
| id         | INTEGER (PK) |
| title      | TEXT |
| description| TEXT |
| link       | TEXT |

### project_skills
| column     | type |
|-----------|------|
| project_id| INTEGER |
| skill     | TEXT |

---

## 🔌 API Endpoints

### Health
```bash
GET /health
```

### Profile
```bash
GET  /profile PUT  /profile
```

### Projects
```bash
GET /projects GET /projects?skill=Node.js
```


### Search
```bash
GET /search?q=keyword GET /search/skills/top
```


---

## 🧪 Sample cURL Commands

```bash
curl https://<backend-url>/health
```
```bash
curl https://<backend-url>/profile
```
```bash
curl https://<backend-url>/projects?skill=Node.js
```
```bash
curl https://<backend-url>/search?q=api
```

⚙️ Local Setup
1. Clone the repo
```bash
git clone https://github.com/<your-username>/me-api-playground.git
cd me-api-playground/backend
```

2. Install dependencies
```bash
npm install
```

3. Seed the database
```bash
node seed.js
```

4. Start server
```bash
node server.js
```

Server runs on:
```bash
http://localhost:3000
```

## 🌐 Frontend Usage
Open:
```bash
frontend/index.html
```

The frontend:
- Fetches profile data
- Searches projects
- Calls the hosted API directly

## 🚧 Known Limitations
- Single-user profile (no authentication)
- No pagination or rate limiting
- SQLite used for simplicity
- Minimal frontend UI
