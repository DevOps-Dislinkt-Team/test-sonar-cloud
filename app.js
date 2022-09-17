const express = require('express');
const cors = require('cors');

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

(async () => {
  try {
    app.listen(5000);
    console.log(`Server started at port ${5000}`);
  } catch (err) {
    console.log(err);
  }
})();
