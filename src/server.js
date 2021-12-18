const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'final_work',
});

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/add', (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const email = req.body.email;
  const password = req.body.password;

  const sql = `INSERT INTO users (name, age, email, password) VALUES (?, ?, ?, ?)`;
  db.query(sql, [name, age, email, password], (err, result) => {
    console.log(err);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
