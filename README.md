# 🚀 MERN Smart Interview Prep

A full-stack MERN application to help users prepare for technical interviews by tracking questions, progress, and performance.

---

## 📌 Features

* 🔐 User Authentication (Signup / Login)
* 📊 Dashboard with progress tracking
* 📚 Question management (Easy / Medium / Hard)
* ⏱ Track solving time
* 📝 Notes & revision
* 📈 Performance insights

---

## 🛠 Tech Stack

**Frontend**

* React.js
* Axios
* React Router

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB (Mongoose)

---

## 📁 Project Structure

```
smart-interview-prep/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/smart-interview-prep.git
cd smart-interview-prep
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
node server.js
```

Server runs on:

```
http://localhost:3001
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---


## 🔐 API Routes

### Auth Routes

* `POST /api/auth/signup`
* `POST /api/auth/login`

### Other Routes

* `/api/questions`
* `/api/progress`

---

## 🧪 Test Credentials

```
Email: test12@gmail.com
Password: ****** 
```

---

## 🐛 Common Issues

### ❌ CORS Error

Make sure backend has:

```js
app.use(cors());
```

---

### ❌ react-scripts not found

```bash
rm -rf node_modules package-lock.json
npm install
```

---

### ❌ MongoDB not connecting

Ensure MongoDB is running:

```
mongodb://127.0.0.1:27017/interviewprep
```

---

## 🚀 Future Improvements

* JWT Authentication
* Password hashing (bcrypt)
* Protected routes
* User-specific dashboard
* Deployment (Render / Vercel)

---

## 👩‍💻 Author

Sristi

---


