import React, { useMemo } from 'react';

const Total = ({ expenses }) => {
    const totalAmount = useMemo(() => {
        return expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
    }, [expenses]);

    return (
        <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md mb-6 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Total Expenses</h2>
            <span className="text-2xl font-bold">${totalAmount.toFixed(2)}</span>
        </div>
    );
};

export default Total;
