var http = require('http');

http.createServer(function(req, resp) { // request and response
    resp.writeHead(200, { 'Content-Type' : 'text/plain' }); // 200 response code, header
    resp.end('Hello World\n'); // \n is a carriage return
}).listen(1337, '127.0.0.1'); // port, address (this example is the standard local host)