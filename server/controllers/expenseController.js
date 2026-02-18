const Expense = require('../models/expenseModel');

const createExpense = (req, res, next) => {
    const { amount, category, description, date } = req.body;

    if (!amount || !category || !description || !date) {
        const error = new Error('Please provide all required fields');
        error.status = 400;
        return next(error);
    }

    const expenseData = { amount, category, description, date };

    Expense.create(expenseData, (err, data) => {
        if (err) {
            return next(err);
        }
        res.status(201).json({
            success: true,
            data: data
        });
    });
};

const getExpenses = (req, res, next) => {
    const { category, sort } = req.query;
    const filters = { category, sort };

    Expense.getAll(filters, (err, rows) => {
        if (err) {
            return next(err);
        }
        res.status(200).json({
            success: true,
            count: rows.length,
            data: rows
        });
    });
};

module.exports = {
    createExpense,
    getExpenses
};
