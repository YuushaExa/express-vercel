const express = require('express');
const app = express();

// Require and execute the script file
require('./script.js');

// Define a route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
