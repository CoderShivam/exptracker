import { useState, useEffect } from 'react';
import { getExpenses, createExpense } from './api';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Filters from './components/Filters';
import Total from './components/Total';

function App() {
    const [expenses, setExpenses] = useState([]);
    const [filters, setFilters] = useState({
        category: '',
        sort: 'date_desc'
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchExpenses = async () => {
        setLoading(true);
        try {
            const result = await getExpenses(filters);
            if (result.success) {
                setExpenses(result.data);
            }
        } catch (err) {
            setError('Failed to fetch expenses');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchExpenses();
    }, [filters]);

    const handleExpenseAdded = async (newExpense) => {
        await createExpense(newExpense);
        fetchExpenses(); // Refresh list
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 font-sans">
            <div className="max-w-4xl mx-auto">
                <header className="mb-8 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                        Expense<span className="text-blue-600">Tracker</span>
                    </h1>
                    <p className="text-gray-500 mt-2">Manage your finances efficiently</p>
                </header>

                <Total expenses={expenses} />

                <ExpenseForm onExpenseAdded={handleExpenseAdded} />

                <Filters filters={filters} onFilterChange={setFilters} />

                {loading ? (
                    <div className="text-center py-10">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                        <p className="mt-4 text-gray-500">Loading expenses...</p>
                    </div>
                ) : error ? (
                    <div className="text-center py-10 text-red-500 bg-red-50 rounded-lg border border-red-200">
                        {error}
                        <button
                            onClick={fetchExpenses}
                            className="ml-4 text-blue-600 hover:underline"
                        >
                            Retry
                        </button>
                    </div>
                ) : (
                    <ExpenseList expenses={expenses} />
                )}
            </div>
        </div>
    );
}

export default App;
