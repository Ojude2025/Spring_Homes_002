const http = require("http");

const PORT = 4050;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello from my simple Node.js server!");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
