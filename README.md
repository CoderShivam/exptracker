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

## Project Notes

### Key Design Decisions
- **Component-Based Architecture**: The frontend is built using React components (e.g., `ExpenseChart`, `CategorySummary`) to ensure modularity and reusability.
- **Modern Styling with Tailwind CSS**: Chosen for rapid UI development, consistent design tokens, and responsiveness without writing custom CSS files.
- **Data Visualization**: Integrated **Recharts** to provide intuitive visual insights (Donut Chart) into spending habits, enhancing the user experience beyond simple lists.
- **Iconography**: Used **Lucide React** for consistent, clean, and professional icons that enhance visual recognition of categories.

### Trade-offs (Timebox Constraints)
- **Local State Management**: Used React's `useState` and `useEffect` for simplicity and speed. For a larger application, a global state manager like Redux or Context API would be better to avoid prop drilling.
- **Hardcoded Categories**: Categories are currently hardcoded in the frontend. In a production app, these would be fetched from the backend to allow for dynamic user-defined categories.
- **No Authentication**: Skipped user authentication to focus on core functionality and UI polish within the limited timeframe.

### Intentionally Omitted / Out of Scope
- **User Authentication**: Not implemented; the app currently assumes a single-user environment.
- **Database Migrations**: No formal migration system for the database schema.
- **Unit/Integration Tests**: Comprehensive testing was omitted to prioritize feature development and UI enhancements.
- **Pagination**: The expense list displays all items; pagination or infinite scroll would be needed for large datasets.
