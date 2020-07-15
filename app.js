var express = require('express');
var bodyParser = require('body-parser');
var app = express(); //this is a working express app

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000; 
    // could use this if prod server has a port defined, that way we use either the port specified
    // by the server, of 3000 locally

app.use('/assets', express.static(__dirname + '/public')); 
    //anything in the public folder is available by using assets

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
    console.log('Request URL: ' + req.url);
    next(); //run the next middleware
});

apiController(app);
htmlController(app);

app.listen('3000'); // this creates the server