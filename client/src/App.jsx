import { useState, useEffect } from 'react';
import { getExpenses, createExpense } from './api';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Filters from './components/Filters';
import Total from './components/Total';
import CategorySummary from './components/CategorySummary';
import ExpenseChart from './components/ExpenseChart';

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
        <div className="min-h-screen bg-gray-50 p-4 lg:p-8 font-sans">
            <div className="max-w-6xl mx-auto">
                <header className="mb-10 text-center">
                    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 tracking-tight">
                        Expense<span className="text-gray-800">Tracker</span>.
                    </h1>
                    <p className="text-gray-500 mt-3 text-lg">Master your finances with elegance.</p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Form and Totals */}
                    <div className="lg:col-span-1 space-y-8">
                        <Total expenses={expenses} />
                        <CategorySummary expenses={expenses} />
                        <ExpenseChart expenses={expenses} />
                    </div>

                    {/* Right Column: List and Filters */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <ExpenseForm onExpenseAdded={handleExpenseAdded} />
                        </div>

                        <Filters filters={filters} onFilterChange={setFilters} />

                        {loading ? (
                            <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                                <p className="mt-4 text-gray-500 font-medium">Loading your expenses...</p>
                            </div>
                        ) : error ? (
                            <div className="text-center py-10 text-red-500 bg-red-50 rounded-xl border border-red-200">
                                <p className="font-medium">{error}</p>
                                <button
                                    onClick={fetchExpenses}
                                    className="mt-3 px-4 py-2 bg-white border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors shadow-sm"
                                >
                                    Try Again
                                </button>
                            </div>
                        ) : (
                            <ExpenseList expenses={expenses} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
