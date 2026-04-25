# 🚀 GraphQL Todo Dashboard (Full-Stack Project)

A full-stack GraphQL application built using **React, Apollo Client, Apollo Server, Express, and GraphQL**.

This project converts a REST API into a GraphQL API and displays data in a modern dashboard UI with search and filtering.

---

# 🌐 Live Demo
*(Add after deployment)*  
Frontend: `https://your-frontend-link.com`  
Backend GraphQL: `https://your-backend-link.com/graphql`

---

# 📌 Features

- Fetch all todos using GraphQL
- Fetch all users
- Fetch user by ID
- Nested relationship (Todo → User)
- Search todos by title
- Filter todos (All / Completed / Pending)
- Responsive dashboard UI
- Apollo Client integration
- Apollo Server backend with Express
- REST API integration using Axios

---

# 🛠 Tech Stack

## Frontend
- React
- Apollo Client
- GraphQL
- CSS

## Backend
- Apollo Server
- Express
- GraphQL
- Axios
- CORS

## API Source
- JSONPlaceholder (Fake REST API)

---

# 📁 Project Structure

```
GraphQL/
│
├── client/          # React frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│
├── server/          # GraphQL backend
│   ├── index.js
│   ├── package.json
│
└── README.md
```

---

# ⚙️ GraphQL Schema

```graphql
type User {
  id: ID!
  name: String!
  username: String!
  email: String!
  phone: String!
  website: String!
}

type Todo {
  id: ID!
  title: String!
  completed: Boolean!
  user: User!
}

type Query {
  getTodos: [Todo!]!
  getAllUsers: [User!]!
  getUserById(id: ID!): User
}
```

---

# ⚙️ How It Works

## Backend (GraphQL Server)
- Built with Express + Apollo Server
- Fetches data from JSONPlaceholder REST API
- Converts REST into GraphQL
- Handles nested resolver (Todo → User)

## Frontend (React App)
- Uses Apollo Client to fetch GraphQL data
- Displays todos in a dashboard UI
- Includes search and filtering functionality

---

# 🚀 Deployment Guide

## 🟢 Backend Deployment (Render / Railway / Cyclic)

1. Push `server/` to GitHub
2. Deploy on Render or Railway
3. Set start command:
   ```
   node index.js
   ```
4. Enable CORS for frontend domain

Update backend URL in client:
```js
uri: "https://your-backend-url/graphql"
```

---

## 🔵 Frontend Deployment (Vercel / Netlify)

1. Push `client/` to GitHub
2. Deploy on Vercel or Netlify
3. Set build command:
   ```
   npm run build
   ```

---

# 🔍 Sample Query

```graphql
query {
  getTodos {
    id
    title
    completed
    user {
      name
    }
  }
}
```

---

# 📚 What I Learned

- GraphQL schema design
- Resolvers and nested queries
- Apollo Client integration
- Apollo Server setup with Express
- REST → GraphQL transformation
- Full-stack architecture
- UI state management (search + filter)
- Deployment workflow

---

# 👨‍💻 Author

**Malka Maryam**
