import { Sequelize } from 'sequelize';
import db from '../db/db.js';

const { DataTypes } = Sequelize;

const User = db.define(
  'users',
  {
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default User;
