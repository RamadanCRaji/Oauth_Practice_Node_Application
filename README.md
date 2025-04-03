# Authentication Demo with Express & Passport.js

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A demonstration of authentication implementation using Express.js and Passport.js with Google OAuth 2.0 strategy.

## 📌 Features

-  Google OAuth 2.0 authentication
-  Session management with express-session
-  Protected routes middleware
-  MongoDB integration for user sessions
-  EJS templating for views
-  Proper error handling strategies
-  Route protection with custom middleware

## 🚀 Getting Started

### Prerequisites

-  Node.js (v14+)
-  npm
-  MongoDB instance
-  Google Developer Account (for OAuth credentials)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### Configuration ⚙️

1. Create .env file in /config folder:
   - PORT=3000
   - COOKIE_KEY=your-secret-key
   - DB_STRING=mongodb://localhost:27017/auth-demo
   - GOOGLE_CLIENT_ID=your-client-id
   - GOOGLE_CLIENT_SECRET=your-client-secret
2. -Google OAuth Setup:
   - Create project at Google Cloud Console
   - Enable Google+ API
   - Add redirect URI: http://localhost:3000/auth/google/redirect

### Project Setup

/
├── config/
│ ├── database.js # MongoDB connection
│ ├── passport-setup.js # Passport configuration
│ └── .env # Environment variables
├── route/
│ ├── auth-route.js # Auth routes
│ ├── home-route.js # Home routes
│ └── profile.js # Profile routes
├── views/ # EJS templates
├── public/ # Static assets
└── package.json

### API Routes Overview

| Route                   | Method | Description                    |
| ----------------------- | ------ | ------------------------------ |
| `/`                     | GET    | Home page                      |
| `/login`                | GET    | Login page                     |
| `/logout`               | GET    | Logout user                    |
| `/profile`              | GET    | Protected profile page         |
| `/auth/google`          | GET    | Initiate Google authentication |
| `/auth/google/redirect` | GET    | Google OAuth callback handler  |

### Future Iterations 🔮

#### **Core Enhancements**

-  [ ] **MongoDB Session Persistence**  
       Implement `connect-mongo` for robust session storage and improved scalability

-  [ ] **Comprehensive Error Handling**  
       Add try-catch blocks with proper error propagation and custom error pages

-  [ ] **Local Authentication Strategy**  
       Create username/password auth using `passport-local` with bcrypt hashing

#### **User Experience**

-  [ ] Password reset functionality with email verification
-  [ ] User registration system
-  [ ] Profile editing capabilities
-  [ ] Social auth providers (GitHub, Facebook)

#### **Architecture Improvements**

-  [ ] TypeScript migration
-  [ ] REST API versioning
-  [ ] Unit/Integration test suite
-  [ ] CI/CD pipeline
