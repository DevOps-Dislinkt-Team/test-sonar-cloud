const User = require('./models/user.entity');

exports.createUser = async (req, res, next) => {
  try {
    const { username } = req.body;
    const user = await User.create({ username });

    res.status(201).json({
      message: "User's data successfully created",
      data: {
        user,
      },
    });
  } catch (err) {
    next(err);
  }
};
