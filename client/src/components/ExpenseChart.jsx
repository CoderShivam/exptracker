import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const ExpenseChart = ({ expenses }) => {
    const data = expenses.reduce((acc, expense) => {
        const existingCategory = acc.find(item => item.name === expense.category);
        if (existingCategory) {
            existingCategory.value += parseFloat(expense.amount);
        } else {
            acc.push({ name: expense.category, value: parseFloat(expense.amount) });
        }
        return acc;
    }, []);

    // Color mapping for categories to match CategorySummary
    const COLORS = {
        Food: '#10b981', // emerald-500
        Travel: '#3b82f6', // blue-500
        Utilities: '#eab308', // yellow-500
        Entertainment: '#a855f7', // purple-500
        Other: '#6b7280' // gray-500
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-3 border border-gray-100 shadow-lg rounded-lg">
                    <p className="font-semibold text-gray-800">{payload[0].name}</p>
                    <p className="text-blue-600 font-medium">
                        ₹{payload[0].value.toFixed(2)}
                    </p>
                </div>
            );
        }
        return null;
    };

    if (data.length === 0) return null;

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8 h-80">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Expense Distribution</h3>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[entry.name] || '#cbd5e1'} />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend verticalAlign="bottom" height={36} iconType="circle" />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ExpenseChart;
