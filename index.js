const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 502;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Bad Gateway');

  // ECONNRESET
  //req.connection.destroy();

    // ETIMEDOUT
    //setTimeout(() => {
        // We intentionally don't send a response here
    //}, 10000); // 10 seconds delay
});

const port = 3006;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
