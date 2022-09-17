const { DataTypes } = require('sequelize');
const sequelize = require('../../../services/db/database-setup.service');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
