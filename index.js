const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!\n'
  res.end(msg);
});
// Add this snippet inside index.js to print out custom env vars
app.get('/test', (req, res) => {
  res.json({
    message: "Checking environment variables",
    PORT_RECEIVED: process.env.PORT,
    MY_TEST_SECRET: process.env.MY_TEST_SECRET || "Not Set",
    NODE_ENV: process.env.NODE_ENV || "development"
  });
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
