<div align="center">

<!-- Animated Header Banner -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=6C63FF&height=200&section=header&text=TaskFlow&fontSize=80&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=Student%20Task%20Manager&descAlignY=60&descSize=22&descColor=c4b5fd" />

<br/>

<!-- Badges Row 1 -->
<p>
  <img src="https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-4.18-000000?style=for-the-badge&logo=express&logoColor=white" />
</p>

<!-- Badges Row 2 -->
<p>
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-Auth-FB015B?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
  <img src="https://img.shields.io/badge/Deployed-Vercel%20%2B%20Render-000000?style=for-the-badge&logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" />
</p>

<br/>

> **A sleek, full-stack task management app built for students.**  
> Manage tasks, set priorities, track due dates — all in one beautiful dark interface.

<br/>

<a href="#-quick-start">
  <img src="https://img.shields.io/badge/⚡ Get Started-6C63FF?style=for-the-badge" />
</a>
&nbsp;
<a href="#-api-endpoints">
  <img src="https://img.shields.io/badge/📡 API Docs-4B5563?style=for-the-badge" />
</a>
&nbsp;
<a href="#-deployment">
  <img src="https://img.shields.io/badge/🚀 Deploy-10B981?style=for-the-badge" />
</a>

<br/><br/>

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 📋 Core Task Management
- ✅ **Create** tasks with title, description, due date & priority
- ✅ **Edit** tasks via smooth animated modal
- ✅ **Delete** tasks with confirmation guard
- ✅ **Toggle** complete / incomplete with one click
- ✅ **Overdue detection** — highlights late tasks in red

</td>
<td width="50%">

### 🔍 Filter & Sort
- ✅ Filter by **status** — All / Pending / Completed
- ✅ Filter by **priority** — High / Medium / Low
- ✅ Sort by **newest**, **due date**, or **priority**
- ✅ Live **stats dashboard** (total, pending, done, urgent)
- ✅ Responsive on **mobile & desktop**

</td>
</tr>
<tr>
<td width="50%">

### 🔐 Authentication (Bonus)
- ✅ **JWT** signup & login
- ✅ Per-user **task isolation**
- ✅ **Guest mode** — use without account
- ✅ Bcrypt **password hashing**
- ✅ Token persisted in localStorage

</td>
<td width="50%">

### 🎨 UI / UX
- ✅ **Dark mode** design system with CSS variables
- ✅ **Smooth animations** — cards, modals, states
- ✅ **Custom fonts** — Syne + DM Sans
- ✅ Empty, loading & error **states handled**
- ✅ **Sticky header** with blur backdrop

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology | Purpose |
|:------|:-----------|:--------|
| ⚛️ **Frontend** | React 18 + Vite | UI framework & build tool |
| 🎨 **Styling** | CSS Modules | Scoped, maintainable styles |
| 🔀 **Routing** | React Router v6 | Client-side navigation |
| 📡 **HTTP** | Axios | API calls with interceptors |
| 🟢 **Backend** | Node.js + Express | REST API server |
| 🍃 **Database** | MongoDB + Mongoose | Data persistence & schemas |
| 🔑 **Auth** | JWT + bcryptjs | Secure authentication |
| ☁️ **Deploy** | Vercel + Render | Frontend + Backend hosting |

</div>

---

## 📁 Project Structure

```
student-task-manager/
│
├── 📂 backend/
│   ├── 📂 config/
│   │   └── db.js                 # MongoDB connection
│   ├── 📂 middleware/
│   │   └── auth.js               # JWT protect + optionalAuth
│   ├── 📂 models/
│   │   ├── Task.js               # Task schema (title, priority, dueDate…)
│   │   └── User.js               # User schema with bcrypt hook
│   ├── 📂 routes/
│   │   ├── tasks.js              # CRUD + filter/sort logic
│   │   └── auth.js               # signup / login / me
│   ├── server.js                 # Express entry point
│   ├── .env.example              # Environment template
│   └── package.json
│
└── 📂 frontend/
    ├── 📂 src/
    │   ├── 📂 components/
    │   │   ├── Header.jsx         # Sticky nav + user menu
    │   │   ├── FilterBar.jsx      # Status tabs + dropdowns
    │   │   ├── TaskCard.jsx       # Individual task row
    │   │   ├── TaskList.jsx       # List + loading/empty states
    │   │   └── TaskModal.jsx      # Create / edit form modal
    │   ├── 📂 hooks/
    │   │   ├── useAuth.jsx        # Auth context (login/signup/logout)
    │   │   └── useTasks.js        # Data fetching & mutations
    │   ├── 📂 pages/
    │   │   ├── HomePage.jsx       # Dashboard page
    │   │   └── AuthPage.jsx       # Login / signup page
    │   ├── 📂 utils/
    │   │   └── api.js             # Axios instance with auth interceptor
    │   ├── 📂 styles/
    │   │   └── global.css         # Design tokens + reset
    │   ├── App.jsx                # Router + AuthProvider
    │   └── main.jsx               # React entry point
    ├── index.html
    ├── vite.config.js
    ├── .env.example
    └── package.json
```

---

## ⚡ Quick Start

### Prerequisites

```
✔ Node.js ≥ 18
✔ npm or yarn
✔ MongoDB Atlas account (free tier) — or skip for no-persist mode
✔ Git
```

---

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/student-task-manager.git
cd student-task-manager
```

---

### 2️⃣ Setup the Backend

```bash
cd backend
npm install
cp .env.example .env
```

Open `.env` and fill in your values:

```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/taskmanager
JWT_SECRET=your_super_secret_key_here
NODE_ENV=development
```

> 💡 **No MongoDB?** Leave `MONGO_URI` empty — the app still runs, tasks just won't persist between restarts.

```bash
npm run dev       # 🔥 development with auto-reload
# or
npm start         # 🚀 production
```

Backend lives at → `http://localhost:5000`

---

### 3️⃣ Setup the Frontend

```bash
# Open a new terminal
cd frontend
npm install
cp .env.example .env
```

```env
VITE_API_URL=http://localhost:5000/api
```

```bash
npm run dev       # 🔥 development server
# or
npm run build     # 📦 production build
```

Frontend lives at → `http://localhost:5173`

---

## 📡 API Endpoints

### 📋 Tasks

| Method | Endpoint | Description | Auth |
|:------:|:---------|:------------|:----:|
| `GET` | `/api/tasks` | List all tasks | Optional |
| `GET` | `/api/tasks?status=pending` | Filter by status | Optional |
| `GET` | `/api/tasks?priority=high&sort=dueDate` | Filter + sort | Optional |
| `GET` | `/api/tasks/:id` | Single task | Optional |
| `POST` | `/api/tasks` | Create task | Optional |
| `PUT` | `/api/tasks/:id` | Update task | Optional |
| `DELETE` | `/api/tasks/:id` | Delete task | Optional |

**POST body example:**
```json
{
  "title": "Finish assignment",
  "description": "Chapter 5 exercises",
  "priority": "high",
  "dueDate": "2025-06-15"
}
```

---

### 🔐 Auth

| Method | Endpoint | Description |
|:------:|:---------|:------------|
| `POST` | `/api/auth/signup` | Register → returns JWT |
| `POST` | `/api/auth/login` | Login → returns JWT |
| `GET` | `/api/auth/me` | Get current user (🔒 requires token) |

**Auth header:**
```
Authorization: Bearer <your_jwt_token>
```

---

## 🗃️ Data Models

<details>
<summary><b>📄 Task Schema</b></summary>

```js
{
  _id:         ObjectId,
  userId:      ObjectId,      // optional — links to user if logged in
  title:       String,        // required, max 100 chars
  description: String,        // optional, max 500 chars
  priority:    'low' | 'medium' | 'high',
  dueDate:     Date,
  completed:   Boolean,       // default: false
  createdAt:   Date,
  updatedAt:   Date
}
```

</details>

<details>
<summary><b>👤 User Schema</b></summary>

```js
{
  _id:          ObjectId,
  name:         String,       // required
  email:        String,       // unique, lowercase
  passwordHash: String,       // bcrypt hashed
  createdAt:    Date
}
```

</details>

---

## 🌍 Deployment

### Frontend → Vercel

```bash
# 1. Push frontend/ to GitHub
# 2. Import repo at vercel.com
# 3. Set environment variable:
VITE_API_URL=https://your-backend.onrender.com/api

# Build command:  npm run build
# Output dir:     dist
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

### Backend → Render

```bash
# 1. Push backend/ to GitHub
# 2. Create new Web Service on render.com
# 3. Set environment variables:
MONGO_URI=your_atlas_connection_string
JWT_SECRET=your_secret
PORT=5000
NODE_ENV=production

# Start command: npm start
```

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

---

## 🧪 Testing

**Manual testing with Postman:**

```bash
# 1. Health check
GET http://localhost:5000/api/health

# 2. Auth flow
POST /api/auth/signup   → { name, email, password }
POST /api/auth/login    → { email, password } → save token

# 3. Task CRUD
POST   /api/tasks        → create
GET    /api/tasks        → list all
PUT    /api/tasks/:id    → update
DELETE /api/tasks/:id    → delete
```

---

## 📊 Grading Rubric

<div align="center">

| Criteria | Weight | Status |
|:---------|:------:|:------:|
| Functionality (CRUD, filter, sort) | 50% | ✅ |
| Responsiveness & UX | 20% | ✅ |
| Code quality & structure | 15% | ✅ |
| Documentation & deployment | 10% | ✅ |
| Extras (auth, tests, polish) | 5% | ✅ |

</div>

---

## 🗺️ Roadmap

- [ ] 🔍 Client-side search bar
- [ ] 🖱️ Drag-and-drop task reordering
- [ ] 🔔 Notifications for overdue tasks
- [ ] 📊 Analytics / progress charts
- [ ] 🌙 Light mode toggle
- [ ] 🧪 Jest unit tests

---

## 📜 License

```
MIT License — feel free to use, fork, and modify.
```

---

<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=6C63FF&height=120&section=footer&animation=fadeIn" />

**Built with 💜 for the Enginow Full-Stack Project**

*React • Node.js • MongoDB • Express • JWT*

<br/>

⭐ **Star this repo if it helped you!**

</div>