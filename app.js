// routing: mapping http requests to content

var http = require('http');
var fs = require('fs');

http.createServer(function(req, resp) {
    if (req.url === '/') {
        fs.createReadStream(__dirname + '/index.htm').pipe(resp);
    } // returns {Message}

    if (req.url === '/api') {
        resp.writeHead(200, { 'Content-Type' : 'application/json' });
        var obj = {
            firstname: 'John',
            lastname: 'Doe'
        };
        resp.end(JSON.stringify(obj));
    } // returns {"firstname":"John","lastname":"Doe"}
}).listen(1337, '127.0.0.1'); 
