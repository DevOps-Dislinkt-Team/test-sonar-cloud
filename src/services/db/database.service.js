const sequelize = require('./database-setup.service');
const User = require('../../modules/user/models/user.entity');

exports.setupRelations = () => {};

exports.seed = async () => {
  try {
    console.log('Seeding');
  } catch (err) {
    console.log(err);
  }
};
