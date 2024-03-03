const http = require('http');
const { createReadStream } = require('fs');
const { join } = require('path');

// Require and execute the script file
require('./script.js');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const stream = createReadStream(join(__dirname, 'public', 'index.html'));
    stream.pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
