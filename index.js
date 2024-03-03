const express = require('express');
const { spawn } = require('child_process');
const app = express();

// Execute the script file
const scriptProcess = spawn('node', ['script.js']);

scriptProcess.stdout.on('data', (data) => {
  console.log(`Script output: ${data}`);
});

scriptProcess.stderr.on('data', (data) => {
  console.error(`Script error: ${data}`);
});

// Define a route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
