# TaskFlow — Student Task Manager

A full-stack task management web app built with React (Vite) + Node.js/Express + MongoDB.

---

## 🗂️ Project Structure

```
student-task-manager/
├── backend/          # Node.js + Express REST API
│   ├── config/       # MongoDB connection
│   ├── middleware/   # JWT auth middleware
│   ├── models/       # Mongoose schemas (Task, User)
│   ├── routes/       # API routes (tasks, auth)
│   └── server.js     # Express entry point
│
├── frontend/         # React + Vite SPA
│   ├── public/
│   └── src/
│       ├── components/   # Header, FilterBar, TaskCard, TaskList, TaskModal
│       ├── hooks/        # useAuth, useTasks
│       ├── pages/        # HomePage, AuthPage
│       ├── styles/       # Global CSS
│       └── utils/        # Axios API instance
│
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js ≥ 18
- MongoDB Atlas account (free tier works) OR skip for in-memory data
- Git

---

### 1. Clone & Setup Backend

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env`:
```
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=any_long_random_string
```

Start backend:
```bash
npm run dev      # development (nodemon)
npm start        # production
```

API runs at: `http://localhost:5000`

---

### 2. Setup Frontend

```bash
cd frontend
npm install
cp .env.example .env
```

Edit `.env`:
```
VITE_API_URL=http://localhost:5000/api
```

Start frontend:
```bash
npm run dev      # development
npm run build    # production build
```

Frontend runs at: `http://localhost:5173`

---

## 🔌 API Endpoints

### Tasks
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | List tasks (filter: `?status=pending&priority=high&sort=dueDate`) |
| GET | `/api/tasks/:id` | Get single task |
| POST | `/api/tasks` | Create task |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register new user |
| POST | `/api/auth/login` | Login → returns JWT |
| GET | `/api/auth/me` | Get current user (requires token) |

---

## 🌍 Deployment

### Frontend → Vercel
1. Push `frontend/` to GitHub
2. Import repo in Vercel
3. Set `VITE_API_URL` env var to your backend URL
4. Build command: `npm run build`, Output: `dist`

### Backend → Render / Railway
1. Push `backend/` to GitHub
2. New Web Service on Render
3. Set env vars: `MONGO_URI`, `JWT_SECRET`, `PORT`
4. Start command: `npm start`

---

## ✨ Features

### Core
- ✅ Add tasks (title, description, due date, priority)
- ✅ Edit tasks via modal
- ✅ Mark complete / incomplete
- ✅ Delete tasks with confirmation
- ✅ Filter by status (All / Pending / Completed)
- ✅ Filter by priority (High / Medium / Low)
- ✅ Sort by newest, due date, or priority
- ✅ Responsive UI (mobile + desktop)
- ✅ Live stats dashboard (total, pending, done, high-priority)

### Auth (stretch goal)
- ✅ JWT signup / login
- ✅ Per-user task isolation
- ✅ Guest mode (no auth required for basic use)

---

## 🗃️ Data Models

### Task
```json
{
  "_id": "ObjectId",
  "userId": "ObjectId (optional)",
  "title": "String",
  "description": "String",
  "priority": "low | medium | high",
  "dueDate": "Date",
  "completed": "Boolean",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### User
```json
{
  "_id": "ObjectId",
  "name": "String",
  "email": "String",
  "passwordHash": "String (bcrypt)",
  "createdAt": "Date"
}
```

---

## 🧪 Testing

Manual testing via Postman:
1. Import collection with all endpoints
2. Test CRUD operations
3. Test auth flow: signup → login → get token → use token in tasks

---

## 📁 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, React Router v6 |
| Styling | CSS Modules |
| HTTP Client | Axios |
| Backend | Node.js, Express |
| Database | MongoDB + Mongoose |
| Auth | JWT + bcryptjs |
| Deployment | Vercel (FE) + Render (BE) |

---

## 📝 Grading Checklist

- [x] Functionality (CRUD, filter, sort, responsive) — 50%
- [x] Responsive UI (mobile + desktop) — 20%
- [x] Code quality (hooks, components, separation of concerns) — 15%
- [x] README + env examples — 10%
- [x] Auth (JWT), guest mode — 5% bonus
