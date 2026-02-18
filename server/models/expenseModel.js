const db = require('../db');

const Expense = {
    create: (data, callback) => {
        const sql = `INSERT INTO expenses (amount, category, description, date) VALUES (?, ?, ?, ?)`;
        db.run(sql, [data.amount, data.category, data.description, data.date], function (err) {
            callback(err, { id: this.lastID, ...data });
        });
    },

    getAll: (filters, callback) => {
        let sql = `SELECT * FROM expenses`;
        const params = [];
        const constraints = [];

        if (filters.category) {
            constraints.push(`category = ?`);
            params.push(filters.category);
        }

        if (constraints.length > 0) {
            sql += ` WHERE ` + constraints.join(' AND ');
        }

        if (filters.sort === 'date_desc') {
            sql += ` ORDER BY date DESC`;
        } else if (filters.sort === 'date_asc') {
            sql += ` ORDER BY date ASC`;
        } else {
            // Default sort by created_at desc
            sql += ` ORDER BY created_at DESC`;
        }

        db.all(sql, params, (err, rows) => {
            callback(err, rows);
        });
    }
};

module.exports = Expense;
