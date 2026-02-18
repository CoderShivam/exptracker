const Expense = require('../models/Expense');

// @desc    Add new expense
// @route   POST /api/expenses
// @access  Public
const createExpense = async (req, res, next) => {
    console.log('Received expense creation request:', req.body);
    try {
        const { amount, category, description, date } = req.body;

        if (!amount || !category || !description || !date) {
            const error = new Error('Please provide all required fields');
            error.status = 400;
            return next(error);
        }

        const expense = await Expense.create({
            amount,
            category,
            description,
            date
        });

        res.status(201).json({
            success: true,
            data: expense
        });
    } catch (err) {
        next(err);
    }
};

// @desc    Get all expenses
// @route   GET /api/expenses
// @access  Public
const getExpenses = async (req, res, next) => {
    try {
        const { category, sort } = req.query;

        let query = {};
        if (category) {
            query.category = category;
        }

        let sortOption = { createdAt: -1 }; // Default sort
        if (sort === 'date_desc') {
            sortOption = { date: -1 };
        } else if (sort === 'date_asc') {
            sortOption = { date: 1 };
        }

        const expenses = await Expense.find(query).sort(sortOption);

        res.status(200).json({
            success: true,
            count: expenses.length,
            data: expenses
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createExpense,
    getExpenses
};
