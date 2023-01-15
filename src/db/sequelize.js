const { Sequelize, Op } = require('sequelize');

const sequelize = new Sequelize('zitron-todo-list', 'root', '9711', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
  define: {
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci',
    },
  },
  dialectOptions: {
    supportBigNumbers: true,
    bigNumberStrings: true,
  },
});

module.exports = sequelize;
