const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const expenseRoutes = require('./routes/expenses');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/expenses', expenseRoutes);

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
