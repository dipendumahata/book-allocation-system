# 📚 Book Allocation System (MERN Stack)

A full-stack application where users can register/login, upload books, and manage them (update/delete). Built with **React**, **Tailwind CSS**, **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Features

- 🔐 User registration and login with JWT & HTTP-only cookies
- 📘 Upload, view, edit, and delete books
- 🧑‍💻 Only book uploaders can update/delete their books
- ✨ Clean UI with Tailwind, Toast notifications, and loading spinners
- 🔒 Protected routes with token-based access control

---

## 🛠️ Tech Stack

| Layer     | Tech                           |
|-----------|--------------------------------|
| Frontend  | React, React Router, Tailwind CSS, Axios, React Toastify |
| Backend   | Node.js, Express, Mongoose, JWT, bcrypt |
| Database  | MongoDB                        |

---

## 📁 Project Structure

```

book-app/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx

```

---

## ⚙️ Backend Setup

### 1. Environment Variables

Create a `.env` file in `/backend`:

```

## 🔐 API Endpoints

### 🔸 Auth Routes (`/api/auth`)

| Method | Endpoint    | Description                        |
| ------ | ----------- | ---------------------------------- |
| POST   | `/register` | Register a new user                |
| POST   | `/login`    | Login user and return token cookie |

**📝 Example Request Body:**

```json
{
  "username": "dipendu",
  "email": "dipendu@example.com",
  "password": "secret123"
}
```

---

### 📘 Book Routes (`/api/books`)

> 🔐 All routes below require authentication via cookie (`token`)

| Method | Endpoint | Description                      |
| ------ | -------- | -------------------------------- |
| GET    | `/`      | Get all books                    |
| POST   | `/`      | Add a new book                   |
| PUT    | `/:id`   | Update a book (by uploader only) |
| DELETE | `/:id`   | Delete a book (by uploader only) |

**📝 Example Book Payload:**

```json
{
  "title": "Rich Dad Poor Dad",
  "author": "Robert Kiyosaki"
}
```

---

## 🧑‍💻 User Workflow

1. ✅ **Register/Login**
2. 🏠 Access `/home` to view & manage books
3. 📘 Upload a book using the form
4. ✏️ Update or 🗑️ delete your own books
5. 🔒 Protected routes ensure only logged-in users can access

---



