<div align="center">

<img src="https://i.im.ge/QMhdOyJ/Screenshot_2026-05-29_at_3.44.02_PM.png" alt="CampusTracker Logo" width="120px"/>

<h1>CampusTracker</h1>
<h3>🎯 Smart Lost & Found Platform for Campus Communities</h3>

<img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80" alt="CampusTracker Banner" width="100%"/>

<br/><br/>

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white"/>
<img src="https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>

<br/><br/>

<img src="https://img.shields.io/github/stars/Snehachoudhary26/Compus-Tracker-LOST---FOUND-REPORT?style=social"/>
<img src="https://img.shields.io/github/forks/Snehachoudhary26/Compus-Tracker-LOST---FOUND-REPORT?style=social"/>
<img src="https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square"/>
<img src="https://img.shields.io/badge/Version-1.0.0-FF8A26?style=flat-square"/>

<br/><br/>

**[🌐 Live Demo](https://compus-tracker-lost-found-report.vercel.app)** &nbsp;•&nbsp;
**[✨ Features](#-features)** &nbsp;•&nbsp;
**[🚀 Quick Start](#-quick-start)** &nbsp;•&nbsp;
**[📁 Structure](#-project-structure)** &nbsp;•&nbsp;
**[🔑 Demo Login](#-demo-credentials)**

</div>

---

## 🌟 What is CampusTracker?

**CampusTracker** is a full-stack, AI-powered Lost & Found platform built for modern campus communities in 2026. Students, teachers, and staff can report lost or found items, get instant AI-powered matches, communicate in real-time, and track everything through a beautiful live analytics dashboard — all in one place.

> 🏆 Built with cutting-edge 2026 technologies to stand out from traditional lost & found systems used by millions of students globally.

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🤖 AI Smart Matching
Automatically scores how well lost and found items match using **Jaccard Similarity Algorithm** on descriptions, categories, and locations. Zero manual searching needed.

</td>
<td width="50%">

### ⚡ Real-time Notifications
**WebSocket-powered** instant alerts via Socket.io. Get notified the moment someone finds your item — no page refresh needed.

</td>
</tr>
<tr>
<td width="50%">

### 📱 Progressive Web App (PWA)
Install CampusTracker on your phone like a native app. Works **offline** with Service Worker caching. Available on iOS and Android.

</td>
<td width="50%">

### 📊 Live Analytics Dashboard
Real-time **Chart.js** dashboard — daily trends, category breakdown, donut charts, recovery rates, and campus statistics.

</td>
</tr>
<tr>
<td width="50%">

### 💬 Real-time Chat + AI Assistant
Full-screen messaging system with **built-in AI assistant**, contact sharing cards, typing indicators, and conversation history.

</td>
<td width="50%">

### 🔲 QR Code Generation
Every report gets a unique **branded QR code** (orange themed) generated automatically. Scan to view item details instantly.

</td>
</tr>
<tr>
<td width="50%">

### 📸 Photo Upload & Verification
Upload photos of lost/found items for **visual matching** and faster owner verification. Supports PNG/JPG up to 5MB.

</td>
<td width="50%">

### 🛡️ Admin Moderation Panel
Full admin panel — approve, flag, delete items. Live stats cards. Search and filter all campus reports in one place.

</td>
</tr>
</table>

---
## 🛠️ Tech Stack

```
┌─────────────────────────────────────────────────────────────────┐
│                      🎯 CAMPUSTRACKER                           │
├──────────────────┬──────────────────────┬───────────────────────┤
│    FRONTEND      │      BACKEND         │      DATABASE         │
│                  │                      │                       │
│  ▸ HTML5         │  ▸ Node.js v24       │  ▸ MongoDB Atlas      │
│  ▸ CSS3          │  ▸ Express.js        │  ▸ Mongoose ODM       │
│  ▸ JavaScript    │  ▸ Socket.io v4      │                       │
│  ▸ Chart.js v4   │  ▸ JWT + bcryptjs    │    2026 FEATURES      │
│  ▸ PWA + SW      │  ▸ Multer Upload     │                       │
│  ▸ Socket.io     │  ▸ node-qrcode       │  ▸ AI Smart Match     │
│                  │  ▸ node-cron         │  ▸ QR Generation      │
│                  │  ▸ natural (NLP)     │  ▸ Real-time WS       │
│                  │                      │  ▸ Analytics API      │
└──────────────────┴──────────────────────┴───────────────────────┘
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (free tier)
- npm

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Snehachoudhary26/Compus-Tracker-LOST---FOUND-REPORT.git
cd Compus-Tracker-LOST---FOUND-REPORT
```

### 2️⃣ Setup Backend
```bash
cd backend
npm install
```

### 3️⃣ Create `.env` file inside `backend/` folder
```env
MONGO_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/campus-tracker
JWT_SECRET=CampusTrackerSuperSecretKey2024XYZ987654321
PORT=8080
```

### 4️⃣ Seed Demo Data
```bash
node seed.js
```
### 5️⃣ Start Backend Server
```bash
node server.js
```
### 6️⃣ Start Frontend (new terminal)
```bash
cd ../frontend
python3 -m http.server 3001
```

### 7️⃣ Open in Browser

---

## 🔑 Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| 👩‍🎓 Student | priya@campus.edu | 123456 |
| 👩‍🎓 Student | arjun@campus.edu | 123456 |
| 👨‍🏫 Teacher | rahul@campus.edu | 123456 |
| 👩‍💼 Staff | kavya@campus.edu | 123456 |

---

## 📁 Project Structure

```
📦 campus-tracker/
├── 📁 backend/
│   ├── 📁 models/
│   │   ├── 👤 User.js
│   │   ├── 📦 Item.js
│   │   ├── 💬 Message.js
│   │   └── 🔔 Notification.js
│   ├── 📁 routes/
│   │   ├── 🔐 auth.js
│   │   ├── 📦 items.js
│   │   ├── 💬 messages.js
│   │   ├── 🛡️ admin.js
│   │   ├── 🔔 notifications.js
│   │   └── 📊 analytics.js
│   ├── ⚙️ server.js
│   ├── 🌱 seed.js
│   └── 🔒 .env
├── 📁 frontend/
│   ├── 🏠 index.html
│   ├── 📦 lost.html
│   ├── ✅ found.html
│   ├── 🔍 match.html
│   ├── 💬 messages.html
│   ├── 🛡️ admin.html
│   ├── 📊 analytics.html
│   ├── 🔔 notifications.html
│   ├── ⚡ api.js
│   ├── 📱 manifest.json
│   └── ⚙️ sw.js
├── 📄 vercel.json
└── 📖 README.md
```
## 🌐 API Endpoints

### 🔐 Authentication
POST   /api/auth/signup          → Create new account
POST   /api/auth/login           → Login user
POST   /api/auth/register        → Register with campus ID

### 📦 Items
POST   /api/items                → Report lost/found + AI match + QR
GET    /api/items                → Get all items (filter by type/status)
GET    /api/items/smart-match/:id → AI smart matching
GET    /api/items/search         → Search items by keyword
PUT    /api/items/:id/status     → Update item status
DELETE /api/items/:id            → Delete item

### 💬 Messages
POST   /api/messages             → Send message
GET    /api/messages/conversation → Get conversation
GET    /api/messages/unread/:id  → Get unread count

### 🔔 Notifications
GET    /api/notifications/:userId     → Get user notifications
PUT    /api/notifications/read/:id    → Mark as read
PUT    /api/notifications/read-all/:userId → Mark all as read

### 📊 Analytics
GET    /api/analytics/dashboard  → Full dashboard stats

---

## 🆕 2026 Technologies That Make It Stand Out

| Technology | Use Case | Why It's Special |
|-----------|----------|-----------------|
| 🤖 **Jaccard Similarity** | AI item matching | No external API needed — runs on server |
| ⚡ **Socket.io v4** | Real-time everything | Sub-100ms notification delivery |
| 📱 **PWA + Service Worker** | Offline support | Works without internet |
| 🔲 **node-qrcode** | QR per item | Instant physical identification |
| 📊 **Chart.js v4** | Live analytics | Beautiful animated dashboards |
| 🔐 **JWT + bcryptjs** | Auth system | Industry-standard security |

---

## 🌐 Deploy on Vercel

```bash
# 1. Push to GitHub
git push origin main

# 2. Go to vercel.com → New Project → Import repo
# 3. Add environment variables:
#    MONGO_URI = your_mongodb_uri
#    JWT_SECRET = your_secret_key
# 4. Click Deploy 🎉
```

---

## 👩‍💻 Developer

<div align="center">

<img src="https://i.im.ge/QMhdOyJ/Screenshot_2026-05-29_at_3.44.02_PM.png" width="80px"/>

### Sneha Choudhary
**Full Stack Developer | Campus Lost & Found Platform 2026**

[![GitHub](https://img.shields.io/badge/GitHub-Snehachoudhary26-181717?style=for-the-badge&logo=github)](https://github.com/Snehachoudhary26)

**⭐ If you found this useful, please star the repository!**

`© 2026 CampusTracker by Sneha Choudhary. All rights reserved.`

*Built with ❤️ to help campus communities find their lost belongings*

</div>

---
