// database.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('movies_db', 'postgres', 'Admin', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // para no ver todas las queries en consola
});

export default sequelize;
