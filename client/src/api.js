import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || '/api', // Use env var in production, proxy in dev
});

export const getExpenses = async (params) => {
    const response = await api.get('/expenses', { params });
    return response.data;
};

export const createExpense = async (data) => {
    const response = await api.post('/expenses', data);
    return response.data;
};

export default api;
