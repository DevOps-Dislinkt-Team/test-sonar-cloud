const express = require('express');
const { body } = require('express-validator');
const { throwError } = require('../../utils/errors');
const { createUser } = require('./user.controller');
const User = require('./models/user.entity');

const router = express.Router();

router.post(
  '/',
  [
    body('username')
      .trim()
      .notEmpty()
      .withMessage('Invalid username')
      .custom(async value => {
        const user = await User.findOne({ where: { username: value } });
        if (user) {
          throwError('User with entered username already exist', 404);
        }
        return true;
      }),
  ],
  createUser,
);

module.exports = router;
