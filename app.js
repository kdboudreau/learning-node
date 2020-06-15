var http = require('http');

http.createServer(function(req, resp) { // request and response
    resp.writeHead(200, { 'Content-Type' : 'text/plain' }); // 200 response code, header
    resp.end('Hello World\n'); // \n is a carriage return
}).listen(1337, '127.0.0.1'); // port, address (this example is the standard local host)

// running node app.js will keep running, it waits for a request. can stop server by ctrl + c
// when we hit the server using url localhost:1337 and hit enter, the page will show "hello world"
// also, if you inspect you will see responsecode of 200 and content-type of text/plain
