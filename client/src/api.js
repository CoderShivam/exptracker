import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000', // Directly target backend since proxy might need restart
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
