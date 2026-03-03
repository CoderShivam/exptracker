const express = require('express');
const router = express.Router();
const { createExpense, getExpenses, deleteExpense } = require('../controllers/expenseController');

router.route('/')
    .post(createExpense)
    .get(getExpenses);

router.route('/:id')
    .delete(deleteExpense);

module.exports = router;
