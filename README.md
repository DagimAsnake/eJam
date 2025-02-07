# eJam

A full-stack application for managing superheroes with humility scores.

## Project Overview

This project consists of a Node.js backend API and a React frontend interface for managing superheroes and their humility scores.

### Backend

- Built with Node.js and Express.js framework
- In-memory database storage
- RESTful endpoints:
  - `POST /superheroes`: Add a new superhero (requires name, superpower, and humility score)
  - `GET /superheroes`: Retrieve superheroes sorted by humility score
- Input validation for humility scores (1-10 range)
- Jest testing suite for endpoint validation

### Frontend

- React + Vite application
- TailwindCSS for styling
- Real-time superhero list updates
- Form validation for adding new superheroes

## Getting Started

### Environment Setup

Before running the application, set up your environment variables:

#### Backend

1. Copy the `.env.example` to `.env` in the backend directory:

```bash
cd backend
cp .env.example .env
```

2. Update the variables in `.env` according to your setup

#### Frontend

1. Copy the `.env.example` to `.env` in the frontend directory:

```bash
cd frontend
cp .env.example .env
```

2. Update the variables in `.env` according to your setup

### Running the Backend

```bash
cd backend
npm install
node index.js
```

### Running the Frontend

```bash
cd frontend
npm install
npm run dev
```

### Running Tests

```bash
cd backend
npm test
```

## Team Collaboration Note

As a team player, I would approach this project's improvement through:

- Regular code reviews and pair programming sessions
- Documentation of API endpoints and component structure
- Setting up a proper Git workflow with feature branches
- Implementing CI/CD pipelines for automated testing
- Regular team sync-ups for feedback and improvements

## If I Had More Time

Given more time, I would enhance the project by:

1. Implementing persistent storage with MongoDB or PostgreSQL
2. Adding user authentication and authorization
3. Creating more comprehensive test coverage
4. Adding edit and delete functionality for superheroes
5. Implementing loading states
6. Adding pagination for the superhero list
7. Creating a more sophisticated sorting system (multiple criteria)
8. Implementing WebSocket for real-time updates across multiple clients
