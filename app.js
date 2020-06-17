// using json
var http = require('http');
var fs = require('fs');

http.createServer(function(req, resp) {
    resp.writeHead(200, { 'Content-Type' : 'application/json' });
    var obj = {
        firstname: 'John',
        lastname: 'Doe'
    };
    resp.end(JSON.stringify(obj));
}).listen(1337, '127.0.0.1'); 
// outputs {"firstname":"John","lastname":"Doe"}
