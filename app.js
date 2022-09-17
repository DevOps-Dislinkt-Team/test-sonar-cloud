const express = require('express');
const cors = require('cors');
const { apiPort } = require('./config');
const sequelize = require('./src/services/db/database-setup.service');
const { setupRelations, seed } = require('./src/services/db/database.service');
const userRoutes = require('./src/modules/user/user.routes');

// Initialize app
const app = express();

// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
app.use(cors());

// Prepare fetch
app.use((req, res, next) => {
  req.fetched = {};
  next();
});

// Routes
app.use('/api/users', userRoutes);

// load balancer
app.use('/hc', (req, res, next) => {
  res.status(200).json({});
});

// Error route
app.use((err, req, res, next) => {
  console.log(`\n${err.message}\n`);
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Error occured';
  res.status(statusCode).json({ message: message });
});

setupRelations();

(async () => {
  try {
    await sequelize.sync();
    await seed();

    app.listen(apiPort);
    console.log(`Server started at port ${apiPort}`);
  } catch (err) {
    console.log(err);
  }
})();
