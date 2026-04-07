<<<<<<< HEAD
# Backend_dev
=======
# Library Management System

A RESTful API for managing a library system built with Node.js, Express, and MongoDB.

## Features
- Member registration and login with JWT authentication
- Add books and members
- Borrow books and track records
- Get borrow summary with late fine calculation based on membership type

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file:
   ```
   PORT=5000
   MONGO_URL=mongodb://localhost:27017/library
   JWT_SECRET=your_secret_key
   ```

3. Start the server:
   ```
   npm start
   ```

## API Endpoints

| Method | Route | Description | Auth Required |
|--------|-------|-------------|---------------|
| POST | /api/auth/register | Register a new member | No |
| POST | /api/auth/login | Login and get token | No |
| POST | /api/book | Add a new book | Yes |
| POST | /api/member | Add a member | Yes |
| POST | /api/borrow | Borrow books | Yes |
| GET | /api/summary/:id | Get borrow summary | Yes |
>>>>>>> 82cc3c9 (Added library management system project)
