const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const { PORT } = require('./config');
const { dbSuccess } = require('./utils/dbHelper');

app.get('/', (req, res) => {
  const sql = `INSERT INTO users (name, age, email, password) VALUES ('jane', 20, jane@doe.com, '123456')`;

  db.query(sql, (err, result) => {
    res.send('ABC');
  });
});

app.post('/user', (req, res) => {
  const sql = `INSERT INTO users (name, age, email, password) VALUES (?, ?, ?, ?)`;
  db.query(sql, []);
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
