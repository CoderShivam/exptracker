import React from 'react';
import { Utensils, Car, Zap, Film, Box, Wallet } from 'lucide-react';

const ExpenseList = ({ expenses }) => {
    if (expenses.length === 0) {
        return (
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wallet className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">No expenses yet</h3>
                <p className="text-gray-500">Start by adding a new expense above.</p>
            </div>
        );
    }

    const categoryIcons = {
        Food: <Utensils className="w-4 h-4 text-emerald-600" />,
        Travel: <Car className="w-4 h-4 text-blue-600" />,
        Utilities: <Zap className="w-4 h-4 text-yellow-600" />,
        Entertainment: <Film className="w-4 h-4 text-purple-600" />,
        Other: <Box className="w-4 h-4 text-gray-600" />
    };

    const categoryBg = {
        Food: 'bg-emerald-50',
        Travel: 'bg-blue-50',
        Utilities: 'bg-yellow-50',
        Entertainment: 'bg-purple-50',
        Other: 'bg-gray-50'
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-100">
                            <th className="p-5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="p-5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Description</th>
                            <th className="p-5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</th>
                            <th className="p-5 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {expenses.map((expense) => (
                            <tr key={expense.id} className="hover:bg-gray-50/50 transition duration-150 group">
                                <td className="p-5 text-sm text-gray-500 whitespace-nowrap">
                                    {new Date(expense.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                                </td>
                                <td className="p-5 text-sm text-gray-900 font-medium">{expense.description}</td>
                                <td className="p-5">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${categoryBg[expense.category] || 'bg-gray-100'} border border-transparent`}>
                                        {categoryIcons[expense.category] || <Box className="w-3 h-3 text-gray-500" />}
                                        <span className="text-gray-700">{expense.category}</span>
                                    </span>
                                </td>
                                <td className="p-5 text-right text-sm font-bold text-gray-900 whitespace-nowrap">
                                    <span className="text-gray-400 font-normal mr-1">₹</span>
                                    {parseFloat(expense.amount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
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
