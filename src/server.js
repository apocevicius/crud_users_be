import express from 'express';
import db from './config/db.js';
import userRoutes from './routes/users.js';
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
