Project Title - Campus-Bridge

Selected Domain - Web Development

Problem Statement - “Campus Bridge – Integrated Academic LMS + Coding
Skill Development Platform”

Abstract -
Campus Bridge is an integrated web-based platform aimed at enhancing both academic engagement and coding skill development for university students. This project combines key functionalities of a Learning Management System (LMS) with coding practice tools and AI-powered assistance to create a unified digital learning environment.

The platform includes a fully functional LMS module that allows students to view academic courses, access lecture materials, track attendance, and manage assignments. A secure login and registration system with role-based authentication has been implemented to support students, faculty, and admins.

A built-in online code editor with support for multiple programming languages (C, C++, Python, Java) has been developed, enabling students to practice coding problems in real-time. Students can also join Live Group Code Rooms, which allow collaborative coding and pair programming experiences.

The platform features a powerful AI Assistant integrated using large language models (e.g., Gemini/GPT), providing:

Real-time code hints and logic debugging help

Smart Code Review Bot for code quality, naming conventions, and best practices

Additionally, a performance analytics dashboard is available to track individual progress through skill heatmaps, badges, and weekly coding streaks.

The application is built using React.js, TailwindCSS, and Material UI for the frontend, with Spring Boot and MySQL powering the backend.

With its modular and scalable architecture, Campus Bridge lays the foundation for a future-ready academic and coding development ecosystem tailored to the needs of modern students.

🛠️Tech Stack-
Layer		: Technology Used
Frontend	: React.js, TailwindCSS, Material UI
Backend		: Spring Boot (Java)
Database	: MySQL
Authentication	: Spring Security + JWT (JSON Web Tokens)
AI Assistant	: GPT Integration (API-based or prompt-engineered simulations)

🔍Overview-
Campus Bridge is a full-stack web application that integrates academic course management and hands-on coding practice in one unified platform. Designed to streamline university-level learning and technical skill development, the platform brings together LMS features, an online code editor, group code collaboration, AI-based assistance, and performance analytics.


📁 Folder Structure
plaintext
Copy
Edit
campus-bridge/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── App.js
│   └── public/
├── backend/
│   ├── src/main/java/com/campusbridge/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── model/
│   │   ├── repository/
│   │   └── security/
│   └── resources/
│       └── application.properties
└── README.md

📦 Features & Implementation
1. 🔐Authentication System (Login/Register)
	i)Frontend (React.js + Tailwind + Material UI):
	-Built clean and responsive UI pages for Login and Register forms.
	-Form validation handled using React hooks.
	-Material UI components were used for form elements and error prompts.

	ii)Backend (Spring Boot):
	-Implemented user registration and login endpoints with REST APIs.
	-Passwords are securely hashed using BCrypt.
	-Roles defined: STUDENT, FACULTY, ADMIN.
	-Spring Security is used to secure routes and implement JWT-based authentication.

	iii)Database (MySQL):
	-Tables: users, roles, tokens
	-Relationships: One user has one role; tokens are saved for session management.

2. 📚 LMS Module (Courses, Materials, Attendance)
	i)Frontend:
	-Dynamic UI to list available courses and lecture materials using React components.
	-File viewer for PDFs, video player for lecture content.
	-Attendance visualized using tables/charts (Material UI + chart libraries).

	ii)Backend:
	->CRUD APIs to manage:
		-Courses
		-Materials (upload/view)
		-Attendance entries

	->Faculty can upload content, students can view based on their enrollment.

	iii)Database Tables:
	-courses, materials, attendance, enrollments

3. 🧠 AI Assistant
-Features Implemented:

	i)Real-time Code Hint/Debugging Bot
	-Accepts user code input and generates hints using Gemini/GPT-style models.
	-AI prompts simulate a helpful assistant (through API or prompt injection).

	ii)Smart Code Review Bot
	-Uses AI to review student code submissions.
	-Checks code quality, naming conventions, and suggests improvements.

-Frontend:
	Chatbot-style UI built with Material UI cards and forms.
	Syntax-highlighted code editor (Monaco/CodeMirror).

-Backend:
	Endpoints to send code and prompts to AI API.
	Response parsed and returned as suggestions or debugging steps.

4. 🧑‍💻 Online Code Editor
i)Frontend:
	-Integrated code editor using Monaco Editor (VS Code experience).
	-Language selector and "Run Code" button available.
	-Displays output and errors below the editor.

ii)Backend:
	-REST API to receive code, language, and input.
	-Executes code in Docker containers or via safe code-execution sandbox.

iii)Languages Supported:
	-C, C++, Java, Python

5. 👨‍👩‍👧‍👦 Live Group Code Rooms
i)Frontend:
	-Built real-time collaborative rooms using WebSocket (via SockJS + STOMP).
	-Each room has a unique URL; users can code together with live sync.
	-Room UI includes shared editor, chat box, and voice/video placeholders (future scope).

ii)Backend:
	-Spring Boot WebSocket server for real-time communication.
	-Manages room sessions and synchronizes editor state between users.

iii)Database:
	-Temporary session logs stored (optional).
	-Room participation history tracked for analytics.

6. 📊 Performance Analytics
i)Frontend:
	-Dashboards created using Material UI cards, charts, and heatmaps.
	-Shows metrics like:
		Weekly streaks
		Problems solved per track
		Skill heatmaps

ii)Backend:
	-APIs for fetching user performance metrics, coding activity logs, and badge status.

iii)Database:
	-Tables: submissions, badges, user_analytics
	-Aggregated queries used to calculate user insights and streaks.
