# 🧠 ThinkBoard

A full-stack CRUD notes application built with the MERN stack, featuring rate limiting and a clean, responsive UI.

---

## 🚀 Live Demo

Deployed on [Netlify](https://thinkboard-frontend.netlify.app)

---

## ✨ Features

- 📝 Create, Read, Update, and Delete notes
- ⚡ Fast and responsive React frontend
- 🔒 Rate limiting to prevent API abuse
- 🌐 RESTful API with Express
- 💾 Persistent storage with MongoDB via Mongoose
- 🔔 Toast notifications for user feedback

---

## 🛠 Tech Stack

### Frontend
| Package | Version | Purpose |
|---|---|---|
| React | ^19.2.6 | UI library |
| React DOM | ^19.2.6 | DOM rendering |
| React Router | ^7.16.0 | Client-side routing |
| Axios | ^1.16.1 | HTTP client |
| Lucide React | ^1.17.0 | Icons |
| React Hot Toast | ^2.6.0 | Notifications |

### Backend
| Package | Version | Purpose |
|---|---|---|
| Express | ^4.18.2 | Web framework |
| Mongoose | ^8.24.0 | MongoDB ODM |
| MongoDB | ^6.21.0 | Database driver |
| @upstash/ratelimit | ^2.0.5 | API rate limiting |
| @upstash/redis | ^1.34.9 | Redis client for rate limiting |
| dotenv | ^17.4.2 | Environment variables |
| CORS | ^2.8.6 | Cross-origin resource sharing |

---

## 📁 Project Structure

```
thinkboard/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [Upstash](https://upstash.com/) account (for rate limiting)



```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token

```



```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The app will be running at `http://localhost:5173`

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get a single note |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

---

## 🚦 Rate Limiting

ThinkBoard uses **Upstash Redis** with `@upstash/ratelimit` to protect the API from excessive requests. Rate limits are applied per IP address on all API routes.

---



**Backend** — Deployed as a Web Service:
- Build command: `npm install`
- Start command: `node server.js`
- Add all `.env` variables in the Render dashboard under **Environment**

**Frontend** — Deployed as a Static Site:
- Build command: `npm install && npm run build`
- Publish directory: `dist`


---


---

> Built with ❤️ using the MERN stack
