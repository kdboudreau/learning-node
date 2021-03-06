var express = require('express');
var bodyParser = require('body-parser');
var app = express(); //this is a working express app

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

app.get('/api', function(req, resp) {
    resp.json({ firstname : 'John', lastname: 'Doe' });
});

// app.get('/person/:id', function(req, resp) {
//     resp.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
// });

// this replaces above by dynamically generating html
// app.get('/person/:id', function(req, resp) {
//     resp.render('person', { ID: req.params.id });
// });

app.get('/person/:id', function(req, resp) {
    resp.render('person', { ID: req.params.id, Qstr: req.query.qstr });
});

app.post('/person', urlencodedParser, function(req, resp) {
    resp.send('Thank you!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.post('/personjson', jsonParser, function(req, res) {
    res.send('Thank you for the JSON data!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.listen('3000'); // this creates the server