const Sequelize = require('sequelize');

const sequelize = new Sequelize('book-store', 'root', 'Mostafa25102003', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
