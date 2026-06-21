# 📝 AI Notes & Summarizer App

An AI-powered web application that enables users to create, manage, and summarize notes using Large Language Models (LLMs). The platform transforms lengthy notes into concise, easy-to-understand summaries, helping users improve productivity, learning efficiency, and knowledge retention.

🌐 **Live Demo:** https://ai-notes-summarizer-app-1.onrender.com

---

## 🚀 Features

### ✍️ Smart Note Management

* Create and save notes effortlessly
* Edit and delete notes anytime
* Organize notes for quick access and management

### 🤖 AI-Powered Summarization

* Generate concise summaries from lengthy notes
* Extract key points automatically
* Improve revision and information retention
* Fast AI-powered text processing

### 🔐 Secure Authentication

* User registration and login
* JWT-based authentication
* Protected user-specific access

### 📱 Responsive Design

* Mobile-friendly interface
* Optimized for desktop and tablet devices
* Clean and intuitive user experience

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js
* JWT Authentication
* REST APIs

### AI Integration

* OpenRouter API
* DeepSeek LLM
* Natural Language Processing (NLP)

### Deployment

* Render

---

## 📂 Project Structure

```bash id="ah0mij"
AI-Notes-Summarizer/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── utils/
│
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash id="b0jmg0"
git clone https://github.com/your-username/ai-notes-summarizer.git
cd ai-notes-summarizer
```

### Install Dependencies

#### Backend

```bash id="1f9d9f"
cd backend
npm install
```

#### Frontend

```bash id="84v6s4"
cd frontend
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in the backend directory:

```env id="03q4io"
PORT=5000

JWT_SECRET=your_jwt_secret

OPENROUTER_API_KEY=your_openrouter_api_key 

OPENROUTER_BASE_URL=https://openrouter.ai/api/v1

MODEL=deepseek/deepseek-chat-v3-0324
```

---

## ▶️ Running the Application

### Start Backend

```bash id="cxrbrj"
npm run server
```

### Start Frontend

```bash id="vj4t7g"
npm start
```

Application will run at:

```bash id="iq5b0n"
Frontend: http://localhost:3000
Backend: http://localhost:5000
```

---

## 🎯 Use Cases

* Students creating concise study notes
* Exam preparation and quick revision
* Researchers summarizing lengthy content
* Professionals managing meeting notes
* Productivity and knowledge management

---

## 📸 Screenshots

Add screenshots of:

* Home Page
* Notes Dashboard
* AI Summary Generation
* Login & Registration Pages

---

## 🔮 Future Enhancements

* PDF Upload & Summarization
* Voice Notes to Text
* Multi-language Summaries
* Export Notes as PDF
* AI Flashcards Generation
* AI Quiz Generation
* Note Sharing & Collaboration

---

## 📈 Resume Highlights

* Developed a full-stack AI-powered note management and summarization application using React.js, Node.js, and Express.js.
* Implemented secure authentication and authorization using JWT.
* Integrated OpenRouter API and DeepSeek LLM for intelligent text summarization.
* Designed RESTful APIs for seamless frontend-backend communication.
* Built a responsive and user-friendly interface using React and Tailwind CSS.
* Deployed the application on Render for public accessibility.

---

## 👩‍💻 Author

**Avantika Padhi**

B.Tech Computer Science Student | MERN Stack Developer | AI Enthusiast

LinkedIn: https://www.linkedin.com/in/avantika-padhi-a40bb8303/

GitHub: https://github.com/Avantika-09P

---

⭐ If you found this project useful, consider giving it a star!
