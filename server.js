const express = require('express');
const app = express();
const userRoutes = require('./userRoutes');
const homeRoutes = require('./homeRoutes');

app.use('/', homeRoutes);
app.use('/users', userRoutes);

// space for middleware

app.listen(3001, () => {
  console.log('Server running on port 3001');
});