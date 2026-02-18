import React from 'react';

const ExpenseList = ({ expenses }) => {
    if (expenses.length === 0) {
        return (
            <div className="bg-white p-6 rounded-lg shadow-md text-center text-gray-500">
                No expenses found. Add one to get started!
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100 border-b border-gray-200">
                            <th className="p-4 font-semibold text-gray-700">Date</th>
                            <th className="p-4 font-semibold text-gray-700">Description</th>
                            <th className="p-4 font-semibold text-gray-700">Category</th>
                            <th className="p-4 font-semibold text-gray-700 text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map((expense) => (
                            <tr key={expense.id} className="border-b border-gray-100 hover:bg-gray-50 transition duration-150">
                                <td className="p-4 text-gray-600">{new Date(expense.date).toLocaleDateString()}</td>
                                <td className="p-4 text-gray-800 font-medium">{expense.description}</td>
                                <td className="p-4">
                                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                                        {expense.category}
                                    </span>
                                </td>
                                <td className="p-4 text-right font-bold text-gray-800">
                                    ${parseFloat(expense.amount).toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ExpenseList;
