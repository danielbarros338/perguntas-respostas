const Sequelize = require('sequelize');

const connection = new Sequelize(
  'questionguide',
  'root',
  'W_06-dMb.94',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = connection;