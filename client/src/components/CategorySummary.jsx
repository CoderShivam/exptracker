import React, { useMemo } from 'react';
import { Utensils, Car, Zap, Film, Box } from 'lucide-react';

const CategorySummary = ({ expenses }) => {
    const categoryData = useMemo(() => {
        const stats = expenses.reduce((acc, expense) => {
            const amount = parseFloat(expense.amount);
            acc[expense.category] = (acc[expense.category] || 0) + amount;
            return acc;
        }, {});

        const total = Object.values(stats).reduce((sum, val) => sum + val, 0);

        return Object.entries(stats)
            .map(([category, amount]) => ({
                category,
                amount,
                percentage: total > 0 ? (amount / total) * 100 : 0
            }))
            .sort((a, b) => b.amount - a.amount);
    }, [expenses]);

    // Color mapping for categories
    const categoryColors = {
        Food: 'bg-emerald-500',
        Travel: 'bg-blue-500',
        Utilities: 'bg-yellow-500',
        Entertainment: 'bg-purple-500',
        Other: 'bg-gray-500'
    };

    const categoryIcons = {
        Food: <Utensils className="w-4 h-4 text-emerald-600" />,
        Travel: <Car className="w-4 h-4 text-blue-600" />,
        Utilities: <Zap className="w-4 h-4 text-yellow-600" />,
        Entertainment: <Film className="w-4 h-4 text-purple-600" />,
        Other: <Box className="w-4 h-4 text-gray-600" />
    };

    if (expenses.length === 0) return null;

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Expenses by Category</h3>
            <div className="space-y-5">
                {categoryData.map(({ category, amount, percentage }) => (
                    <div key={category}>
                        <div className="flex justify-between items-center text-sm mb-2">
                            <div className="flex items-center gap-2">
                                <span className={`p-1.5 rounded-md ${categoryColors[category].replace('bg-', 'bg-opacity-10 bg-')}`}>
                                    {categoryIcons[category] || <Box className="w-4 h-4 text-gray-400" />}
                                </span>
                                <span className="font-medium text-gray-700">{category}</span>
                            </div>
                            <span className="text-gray-900 font-semibold">₹{amount.toFixed(2)}</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                            <div
                                className={`h-2 rounded-full ${categoryColors[category] || 'bg-gray-400'}`}
                                style={{ width: `${percentage}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategorySummary;
