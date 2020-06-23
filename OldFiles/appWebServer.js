// IP: internet protocol
// socket: a line across which info flows; where it flows when it goes from one computer to another
// TCP: transmission control protocol; the protocol for how the informtaion like HTTP, FTP is sent; 
//      take the info and split it into pieces and sed the pieces one at a time through the socket
//      from computer to computer
// packet: individual piece sent over TCP

import { request } from "http"

// we typicaly think of node as a web server, but it can also be used as an email or ftp server
// tcp is the same concept/idea as a stream. therefore node treats the packets as streams
// web sockets are kept pen constantly

// port: once a computer receives a packet, how it knows what program to send it to; "listening" to it
// ip address : port = socket address

// http: a set of rules (and format) for data being transferred on the web; hypertext transfer protocol
// MIME type: multipurpose internet mail extensions; a standard for specifying the type of data sent;
//       ex. application/json, text/html, image/jpeg; 


// http-parser
// the http-parser inside noe is joyant/http-parser

// with all of this, we have everything we need to create a server: connect to the internet, 
//       send a request, receive a response

var http = require('http');

http.createServer(function(req, resp) { // request and response
    resp.writeHead(200, { 'Content-Type' : 'text/plain' }); // 200 response code, header
    resp.end('Hello World\n'); // \n is a carriage return
}).listen(1337, '127.0.0.1'); // port, address (this example is the standard local host)

// running node app.js will keep running, it waits for a request. can stop server by ctrl + c
// when we hit the server using url localhost:1337 and hit enter, the page will show "hello world"
// also, if you inspect you will see responsecode of 200 and content-type of text/plain


// using dynamic templates
var http = require('http');
var fs = require('fs');

http.createServer(function(req, resp) {
    resp.writeHead(200, { 'Content-Type' : 'text/html' });
    var html = fs.readFileSync(__dirname + '/index.htm', 'utf8'); //utf8 converts it to string
    var message = 'Hello world...';
    html = html.replace('{Message}', message);
    resp.end(html);
}).listen(1337, '127.0.0.1'); 


// using streams
var http = require('http');
var fs = require('fs');

http.createServer(function(req, resp) {
    resp.writeHead(200, { 'Content-Type' : 'text/html' });
    fs.createReadStream(__dirname + '/index.htm').pipe(resp); 
}).listen(1337, '127.0.0.1'); 


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


// routing: mapping http requests to content

var http = require('http');
var fs = require('fs');

http.createServer(function(req, resp) {
    if (req.url === '/') {
        fs.createReadStream(__dirname + '/index.htm').pipe(resp);
    } // returns {Message}
    else if (req.url === '/api') {
        resp.writeHead(200, { 'Content-Type' : 'application/json' });
        var obj = {
            firstname: 'John',
            lastname: 'Doe'
        };
        resp.end(JSON.stringify(obj));
    } // returns {"firstname":"John","lastname":"Doe"}
    else {
        resp.writeHead(404);
        resp.end();
    }
}).listen(1337, '127.0.0.1'); 


// package: code, managed and maintained
// package management system: software that automate installing and updating packages
// npm can be 2 things: 
    // 1. the registry, the packages themselves
    // 2. the program thats installed, the package management system