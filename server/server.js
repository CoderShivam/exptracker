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
if (!process.env.MONGO_URI) {
    console.error('Error: MONGO_URI environment variable is not defined.');
    process.exit(1);
}

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

connectDB();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'API is running' });
});
app.use('/api/expenses', expenseRoutes);

// Error Handler
app.use(errorHandler);

if (require.main === module) {
    const server = app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.error(`Port ${PORT} is already in use.`);
            process.exit(1);
        } else {
            console.error('Server error:', err);
            process.exit(1);
        }
    });
}

module.exports = app;
