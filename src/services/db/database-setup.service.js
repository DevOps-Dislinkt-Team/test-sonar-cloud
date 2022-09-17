const { Sequelize } = require('sequelize');
const { dbName, dbAdminUsername, dbAdminPassword, dbHost, dbPort } = require('../../../config');

const sequelize = new Sequelize(dbName, dbAdminUsername, dbAdminPassword, {
  host: dbHost,
  port: dbPort,
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;
