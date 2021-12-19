import { Sequelize } from 'sequelize';

const db = new Sequelize('final_work', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
