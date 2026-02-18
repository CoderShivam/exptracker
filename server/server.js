const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// const connectDB = require('./db');
const expenseRoutes = require('./routes/expenses');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();

// Connect to database
mongoose.connect(process.env.MONGO_URI)
    .then((conn) => console.log(`MongoDB Connected: ${conn.connection.host}`))
    .catch((error) => {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    });
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/expenses', expenseRoutes);

// Error Handler
app.use(errorHandler);

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;
