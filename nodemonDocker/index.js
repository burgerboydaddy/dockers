// Test node.js server for nodemon based docker
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  console.log('received request');
  res.end('My port is 8081\n');
}).listen(8081);
console.log('Server running on port ' + process.env.PORT);
console.log('I am joking, port is 8081');
