# 🚀 Issue Tracker

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript\&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql\&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss\&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

A modern issue tracking application built to explore and apply full-stack development concepts using the Next.js ecosystem.

The project allows users to create, manage, assign, and track issues through a clean and responsive interface while implementing authentication, state management, form validation, database integration, and API communication.

---

## 📸 Screenshots

<p align="center">
  <img src="https://media.licdn.com/dms/image/v2/D4D2DAQFVD-M2FW0daA/profile-treasury-image-shrink_1280_1280/B4DZ7P41XXKAAY-/0/1781604243303?e=1783022400&v=beta&t=rY0v9-VMQNcGwwRrK4Zx61_FuIY8D63tDwKbtKdoyTU" width="100%" />
</p>

* [🔗 Live Demo ](https://nexttracker.netlify.app)
---

## ✨ Features

* 🔐 JWT-based authentication
* 👤 User registration and login
* 📝 Create, update, and delete issues
* 🎯 Assign issues to users
* 📊 Track issue status
* 🔍 Filter and search issues
* 📱 Responsive UI
* ⚡ Client-side state management with Zustand
* ✅ Form validation with Yup, Zod, and Formik
* 🔒 Password hashing with bcrypt
* 🗄️ PostgreSQL database integration via Prisma ORM
* 🌐 RESTful API communication using Axios

---

## 🛠️ Tech Stack

### Frontend

* Next.js
* TypeScript
* Tailwind CSS
* Formik
* Zustand
* Axios

### Backend

* Next.js API Routes
* JWT Authentication
* Bcrypt

### Database

* PostgreSQL
* Prisma ORM

### Validation

* Zod
* Yup

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/issue-tracker.git
cd issue-tracker
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/issue_tracker"

JWT_SECRET="your_secret_key"
```

### 4. Run database migrations

```bash
npx prisma migrate dev
```

### 5. Generate Prisma Client

```bash
npx prisma generate
```

### 6. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```
---

## 🎯 Learning Objectives

This project was built to strengthen practical experience with:

* Full-stack application development using Next.js
* Authentication and authorization workflows
* Database modeling with Prisma
* State management patterns
* Form handling and validation
* API design and consumption
* Type-safe development with TypeScript

---

## 🚀 Future Improvements

* Role-based access control
* Email notifications
* Comments and activity logs
* File attachments
* Real-time updates
* Dashboard analytics
* Dark mode
* Issue labels and priorities

---

## 📄 License

This project is licensed under the MIT License.

---

### 👨‍💻 Author

**Hasan Alasker**

* Portfolio: [https://hasan-alasker.netlify.app](https://hasan-alasker.netlify.app)
* LinkedIn: [https://www.linkedin.com/in/hasan-alasker-58682335a/](https://www.linkedin.com/in/hasan-alasker-58682335a/)
* Email: [hasanalasker.contact@gmail.com](mailto:hasanalasker.contact@gmail.com)

---

⭐ If you found this project useful, consider giving it a star!
