const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
