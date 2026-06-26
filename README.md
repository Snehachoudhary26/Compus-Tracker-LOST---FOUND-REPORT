

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:7A2E00,50:FF8C00,100:7A2E00&height=220&section=header&text=Campus%20Tracker%20📍&fontSize=65&fontColor=ffffff&fontAlignY=40&desc=AI-Powered%20Campus%20Marketplace&descAlignY=62&descSize=20&animation=fadeIn" />
</p>

<!-- Badges -->
<p>
  <img src="https://img.shields.io/badge/Status-Live-FF8A26?style=for-the-badge&logo=vercel&logoColor=white"/>
  <img src="https://img.shields.io/badge/Frontend-HTML%20CSS%20JS-FFA94D?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/Backend-Node.js-FF8A26?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Database-MongoDB-FFC84D?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/Deployed-Vercel-FF8A26?style=for-the-badge&logo=vercel&logoColor=white"/>
</p>

<!-- Live Link -->
<h3 align="center">
  🌐 <a href="https://campus-tracker-nu.vercel.app " target="_blank">📍campus tracke📍</a>
</h3>

<br/>

<!-- Feature GIF placeholder -->
<img src="https://capsule-render.vercel.app/api?type=rect&color=FFF3E0&height=4&section=header" width="100%"/>

</div>

---

## 🎯 What is CampusTracker?

> **CampusTracker** is a smart lost & found platform built for college campuses. Students, teachers, staff and workers can report lost or found items, get AI-powered matches, and connect securely through an in-app messaging system.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📦 **Report Lost Item** | Submit a detailed report with photo, category, location and date |
| ✅ **Report Found Item** | Log a found item so the owner can claim it |
| 🔍 **Smart Matching** | AI-powered matching between lost and found items |
| 💬 **Real-time Messaging** | Secure chat between finder and owner |
| 🔔 **Notifications** | Get alerts when your item is matched or approved |
| 🛠 **Admin Panel** | Approve, delete, resolve and flag items |
| 📊 **Analytics** | Track platform activity and statistics |
| 📱 **PWA Support** | Install as a mobile app on your phone |
| 🌙 **Mobile Responsive** | Works perfectly on all screen sizes |
| 🤖 **AI Assistant** | Claude-powered chat to help find lost items |

---

## 🛠 Tech Stack

<div align="center">

| Layer | Technology |
|-------|-----------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **Auth** | JWT (JSON Web Tokens) |
| **File Upload** | Multer |
| **AI** | Anthropic Claude API |
| **Deployment** | Vercel (Frontend) + Render (Backend) |
| **PWA** | Service Worker + Web Manifest |

</div>

---

## 📁 Project Structure

```
CampusTracker/
│
├── 📂 frontend/                 # All HTML pages
│   ├── 🏠 index.html            # Homepage
│   ├── 📦 lost.html             # Report lost item
│   ├── ✅ found.html            # Report found item
│   ├── 🔍 match.html            # Match items
│   ├── 💬 messages.html         # Chat/Messaging
│   ├── 🛠 admin.html            # Admin panel
│   ├── 🔔 notifications.html    # Notifications
│   ├── 📊 analytics.html        # Analytics
│   ├── 🔌 api.js                # API helper functions
│   ├── 📱 mobile.css            # Mobile responsive styles
│   ├── 🤖 ai.js                 # AI features
│   ├── 🔖 favicon.svg           # App icon
│   ├── 📋 manifest.json         # PWA manifest
│   └── ⚙️  sw.js                # Service worker
│
├── 📂 backend/                  # Node.js server
│   ├── 🚀 server.js             # Main entry point
│   ├── ⚙️  .env                  # Environment variables
│   ├── 📂 models/               # MongoDB models
│   │   ├── User.js
│   │   ├── Item.js
│   │   ├── Message.js
│   │   └── Notification.js
│   ├── 📂 routes/               # API routes
│   │   ├── auth.js              # Login, signup, register
│   │   ├── items.js             # Lost & found items
│   │   ├── messages.js          # Chat messages
│   │   ├── admin.js             # Admin actions
│   │   └── notifications.js     # Notifications
│   ├── 📂 middleware/
│   │   └── auth.js              # JWT verification
│   └── 📂 uploads/              # Uploaded images
│
└── 📄 README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB Atlas account (free)
- Git

### 1. Clone the repo

```bash
git clone https://github.com/Snehachoudhary26/Compus-Tracker-LOST---FOUND-REPORT.git
cd Compus-Tracker-LOST---FOUND-REPORT
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000
```

Run the server:

```bash
npm run dev
```

You should see:
```
✅  MongoDB connected successfully
🚀  Server running at http://localhost:3000
```

### 3. Run Frontend

Open `frontend/index.html` with **Live Server** in VS Code.

Or use Python:
```bash
cd frontend
python3 -m http.server 5500
```

---

## 🌐 API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Create account |
| POST | `/api/auth/login` | Login |
| POST | `/api/auth/register` | Campus registration |
| GET | `/api/auth/me` | Get current user |

### Items
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/items` | Get all items |
| POST | `/api/items` | Report item |
| POST | `/api/items/match/search` | AI match search |
| PUT | `/api/items/:id/flag` | Flag item |
| PUT | `/api/items/:id/resolve` | Resolve item |

### Messages
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/messages/conversations` | Get conversations |
| GET | `/api/messages/:id` | Get messages |
| POST | `/api/messages` | Send message |

### Admin
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/stats` | Dashboard stats |
| GET | `/api/admin/items` | All items |
| PUT | `/api/admin/items/:id/approve` | Approve item |
| DELETE | `/api/admin/items/:id` | Delete item |

---

## 🎨 Color Theme

```
Primary Orange  →  #FF8A26
Light Orange    →  #FFA94D
Accent Yellow   →  #FFC84D
Background      →  #FFFFFF
Dark Text       →  #1a1a2e
```

---

## 📱 Mobile Support

CampusTracker is fully responsive and works on:
- ✅ Android Chrome
- ✅ iPhone Safari
- ✅ Tablet browsers
- ✅ Desktop (all browsers)

It also supports **PWA installation** — users can add it to their home screen like a native app.

---

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGO_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Secret key for JWT tokens |
| `PORT` | Server port (default: 3000) |

---

## 🙋 Who Can Use It?

| Role | Permissions |
|------|------------|
| **Student** | Report, search, message, view matches |
| **Teacher** | Same as student |
| **Staff** | Same as student |
| **Worker** | Same as student |
| **Admin** | All above + approve/delete/resolve items |

---

## 🚧 Known Limitations

- Backend must be running for API features to work
- Image uploads stored locally (not cloud storage yet)
- Real-time messaging uses polling (not WebSockets)

---

## 🔮 Roadmap

- [ ] 🤖 AI-powered image recognition for items
- [ ] 📸 Cloud image storage (Cloudinary)
- [ ] 🔴 Real-time chat with WebSockets
- [ ] 📧 Email notifications
- [ ] 🗺 Map view for item locations
- [ ] 📊 Advanced analytics dashboard

---

## 👩‍💻 Developer

<div align="center">

**Built with ❤️ by Sneha Choudhary**

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:7A2E00,50:FF8C00,100:7A2E00&height=120&section=footer" />
</p>
</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=FF8A26,FFA94D,FFC84D&height=120&section=footer&animation=fadeIn" width="100%"/>

**⭐ Star this repo if you found it helpful!**

</div>
