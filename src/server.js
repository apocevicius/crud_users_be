// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql2');
// const cors = require('cors');
// const app = express();
// require('dotenv').config();

// const PORT = process.env.PORT || 8000;

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'final_work',
// });

// // MIDDLEWARE
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/api/get', (req, res) => {
//   const sql = 'SELECT * from users';
//   db.query(sql, (err, result) => {
//     res.send(result);
//   });
// });

// app.post('/api/add', (req, res) => {
//   const name = req.body.name;
//   const age = req.body.age;
//   const email = req.body.email;
//   const password = req.body.password;

//   const addSql = `INSERT INTO users (name, age, email, password) VALUES (?, ?, ?, ?)`;
//   db.query(addSql, [name, age, email, password], (err, result) => {
//     console.log(err);
//   });
// });

// app.delete('/api/delete/:id', (req, res) => {
//   const name = req.params.name;
//   // const age = req.body.age;
//   // const email = req.body.email;
//   // const password = req.body.password;
//   const deleteSql = 'DELETE FROM users WHERE id = ?';

//   db.query(deleteSql, name, age, email, password, (err, result) => {
//     if (err) console.log(err);
//   });
// });

// app.put('/api/update', (req, res) => {
//   const name = req.body.name;
//   const age = req.body.age;
//   const email = req.body.email;

//   const updateSql = 'UPDATE SET users name = ? WHERE email = ?';

//   db.query(updateSql, [name, age, email], (err, result) => {
//     if (err) console.log(err);
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

import express from 'express';
import db from './db/db.js';
import userRoutes from './routes/users';
import cors from 'cors';

const app = express();

try {
  await db.authenticate();
  console.log('Database connected');
} catch (error) {
  console.error('Connection error:', error);
}

app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);

app.listen(8000, () => console.log('Server running at port 8000'));