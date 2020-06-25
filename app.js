var express = require('express');
var app = express(); //this is a working express app

var port = process.env.PORT || 3000; 
    // could use this if prod server has a port defined, that way we use either the port specified
    // by the server, of 3000 locally

app.get('/', function(req, resp) {
    resp.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
})

app.listen('3000'); // this creates the server