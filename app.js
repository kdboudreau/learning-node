var express = require('express');
var bodyParser = require('body-parser');
var app = express(); //this is a working express app

var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000; 
    // could use this if prod server has a port defined, that way we use either the port specified
    // by the server, of 3000 locally


var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public')); 
    //anything in the public folder is available by using assets

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
    console.log('Request URL: ' + req.url);
    next(); //run the next middleware
});

// app.get('/', function(req, resp) { // these gets are really middleware
//     resp.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello world!</h1></body></html>');
// });

// this dynamically replaces above using template engine
app.get('/', function(req, resp) { 
    resp.render('index');
});

app.get('/', function(req, resp) { 
    resp.render('index');
});

app.get('/', function(req, resp) { 
    resp.render('index', { ID: req.params.id });
})

apiController(app);

app.listen('3000'); // this creates the server