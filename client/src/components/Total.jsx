import React, { useMemo } from 'react';

const Total = ({ expenses }) => {
    const totalAmount = useMemo(() => {
        return expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
    }, [expenses]);

    return (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-xl shadow-lg mb-6 flex justify-between items-center transform transition-transform hover:scale-[1.01]">
            <div>
                <h2 className="text-blue-100 text-sm font-medium uppercase tracking-wider">Total balance</h2>
                <p className="text-3xl font-extrabold mt-1">₹{totalAmount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                <p className="text-blue-200 text-xs mt-2 font-medium bg-blue-800/30 inline-block px-2 py-1 rounded-md">
                    {expenses.length} Transaction{expenses.length !== 1 ? 's' : ''}
                </p>
            </div>
            <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        </div>
    );
};

export default Total;
