# 🎓 Smart E-Learning Platform with AI-Based Personalized Learning

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Storage](https://img.shields.io/badge/Storage-LocalStorage-success)](#)

> **Smart E-Learning Platform with AI-Based Personalized Learning** is a modern, responsive web-based learning management system designed to provide students with an interactive, adaptive, and personalized online education experience.

---

## ✨ Key Features

- 🔐 **User Registration & Authentication**: Secure client-side student account management, password visibility toggle, and instant one-click demo login.
- 📚 **Course Catalog & Details**: Comprehensive course curriculum with instructor bios, syllabus outlines, durations, ratings, and difficulty levels.
- 🔎 **Smart Search & Multi-Filter**: Real-time keyword search, category pills, difficulty filters, and sorting.
- 🎥 **Interactive Classroom & Lesson Player (`learning.html`)**: Multi-module curriculum sidebar with checkable lessons, video player, synced notes, and downloadable cheat sheets.
- 🤖 **AI Study Copilot**: In-classroom AI assistant answering student questions, explaining tricky concepts, and generating code samples.
- 🧠 **Interactive Quizzes & Automated Evaluation**: Timed multiple-choice quizzes with instant grading, explanations, and passing threshold criteria.
- 📊 **Progress & Analytics Dashboard (`dashboard.html`)**: 4 KPI cards (enrolled courses, completed courses, average quiz accuracy, earned certificates), weekly study chart, and adaptive AI insights.
- 🏆 **Verifiable Certificate Generator (`certificate.html`)**: Authentic certificates of completion with student metadata, unique verification ID, and one-click PDF / Print export.
- 💾 **Client-Side Persistence**: Complete data retention across sessions using browser `LocalStorage`.
- 📱 **Responsive & Modern UI**: Built with modern CSS custom variables, dark theme aesthetics, glassmorphism, and Google Fonts (*Plus Jakarta Sans* & *Outfit*).

---

## 📂 Project Structure

```text
E-Learning-Platform/
│
├── index.html            # Landing page with hero, AI preview, stats & featured tracks
├── courses.html          # Course catalog with search, category filters & details modal
├── dashboard.html        # Student analytics dashboard with KPI cards & AI insights
├── learning.html         # Interactive classroom with video player, notes, AI tutor & quiz
├── certificate.html      # Verifiable certificate generator with PDF / Print export
├── style.css             # Master design system stylesheet with tokens & responsive styles
├── scripts.js            # Core engine: courses DB, auth, quiz evaluator & AI recommender
├── .gitignore            # Git ignore configuration
│
└── pages/
    ├── login.html        # Split-card login page with one-click demo access
    └── register.html     # Student account registration page
```

---

## 🚀 Getting Started

### 1. Clone or Download Repository
```bash
git clone https://github.com/YOUR_USERNAME/E-Learning-Platform.git
cd E-Learning-Platform
```

### 2. Run Locally
You can open `index.html` directly in any modern browser, or run with a local server:

**Using Node.js:**
```bash
npx serve .
```

**Using Python:**
```bash
python -m http.server 3000
```

Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 🧪 Demo Account Credentials

For quick evaluation, click **"Try Demo"** on the Login page, or enter:
- **Email:** `demo@elearnhub.com`
- **Password:** `demo`

---

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).
