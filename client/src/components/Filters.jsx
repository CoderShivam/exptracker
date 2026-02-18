import React from 'react';

const Filters = ({ filters, onFilterChange }) => {
    const handleChange = (e) => {
        onFilterChange({ ...filters, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-[200px]">
                <label className="block text-gray-700 mb-1 text-sm">Filter by Category</label>
                <select
                    name="category"
                    value={filters.category}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">All Categories</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="flex-1 min-w-[200px]">
                <label className="block text-gray-700 mb-1 text-sm">Sort By</label>
                <select
                    name="sort"
                    value={filters.sort}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="date_desc">Date (Newest First)</option>
                    <option value="date_asc">Date (Oldest First)</option>
                </select>
            </div>
        </div>
    );
};

export default Filters;
