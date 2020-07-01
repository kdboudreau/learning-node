var express = require('express');
var app = express(); //this is a working express app

var port = process.env.PORT || 3000; 
    // could use this if prod server has a port defined, that way we use either the port specified
    // by the server, of 3000 locally

app.use('/assets', express.static(__dirname + '/public')); 
    //anything in the public folder is available by using assets

app.get('/', function(req, resp) {
    // TODO fix below
    resp.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/api', function(req, resp) {
    resp.json({ firstname : 'John', lastname: 'Doe' });
});

app.get('/person/:id', function(req, resp) {
    resp.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

app.listen('3000'); // this creates the server