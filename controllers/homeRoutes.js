const express = require('express');
const router = express.Router();

// Home Page API route
router.get('/', (req, res) => {
  res.send('Welcome to OnlyCheese* Home Page!');
});

module.exports = router;