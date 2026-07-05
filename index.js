const http = require('http')
const port = process.env.PORT || 3000;
  
const server = http.createServer((req, res) => {
  // Check if the user is visiting the /test endpoint
  if (req.url === '/test') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    
    const responseData = {
      message: "Checking environment variables",
      PORT_RECEIVED: process.env.PORT || port,
      MY_TEST_SECRET: process.env.MY_TEST_SECRET || "Not Set",
      NODE_ENV: process.env.NODE_ENV || "development"
    };

    return res.end(JSON.stringify(responseData));
  }

  // Default fallback route (homepage)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Node!azzzzffffaa\n');
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
