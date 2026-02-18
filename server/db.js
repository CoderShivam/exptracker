const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const dbPath = process.env.DB_PATH || './database.sqlite';
const db = new sqlite3.Database(path.resolve(__dirname, dbPath), (err) => {
  if (err) {
    console.error('Error opening database ' + dbPath + ': ' + err.message);
  } else {
    console.log('Connected to the SQLite database.');
    
    // Create expenses table if it doesn't exist
    db.run(`CREATE TABLE IF NOT EXISTS expenses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            amount REAL NOT NULL,
            category TEXT NOT NULL,
            description TEXT NOT NULL,
            date TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (err) => {
      if (err) {
        console.error('Error creating table: ' + err.message);
      }
    });
  }
});

module.exports = db;
