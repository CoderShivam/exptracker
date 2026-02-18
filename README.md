# Expense Tracker

A full-stack Expense Tracker application built with the MERN stack (MongoDB/SQLite, Express, React, Node.js).

## Tech Stack

-   **Frontend**: React + Vite, Tailwind CSS
-   **Backend**: Node.js, Express.js
-   **Database**: SQLite (Zero-config, file-based)

## Project Structure

```
expense-tracker/
├── client/          # Frontend React Application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── api.js       # Centralized API calls
│   │   └── App.jsx      # Main application logic
│   └── ...
├── server/          # Backend Node/Express Application
│   ├── models/      # Data models (Expense)
│   ├── controllers/ # Business logic
│   ├── routes/      # API routes
│   └── db.js        # Database connection
└── README.md
```

## Features

-   Add new expenses (Amount, Category, Description, Date)
-   View list of expenses
-   Filter expenses by Category
-   Sort expenses by Date (Newest/Oldest)
-   Calculate Total Expenses automatically
-   Responsive Design

## How to Run

### Prerequisites

-   Node.js installed (v14+)

### 1. Setup Backend

Navigate to the `server` directory:

```bash
cd server
npm install
```

Create a `.env` file (already created):
```
PORT=5000
DB_PATH=./database.sqlite
```

Start the backend server:

```bash
npm run dev
```

The server will run on `http://localhost:5000`.

### 2. Setup Frontend

Navigate to the `client` directory:

```bash
cd client
npm install
```

Start the frontend development server:

```bash
npm run dev
```

Open your browser at the URL shown (usually `http://localhost:5173`).

## Design Decisions

-   **SQLite**: Chosen for simplicity and zero-configuration setups, making it perfect for assignments and local testing without needing a separate DB server.
-   **Tailwind CSS**: Used for rapid UI development and a clean, modern aesthetic.
-   **Monorepo**: Keeps client and server code in one place for easier management.
