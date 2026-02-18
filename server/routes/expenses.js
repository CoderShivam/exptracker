const express = require('express');
const router = express.Router();
const { createExpense, getExpenses } = require('../controllers/expenseController');

router.route('/')
    .post(createExpense)
    .get(getExpenses);

module.exports = router;
