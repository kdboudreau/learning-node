var express = require('express');
var app = express(); 
// var mysql = require('mysql');
var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://user1:user1@cluster0.extvy.mongodb.net/addressbook?retryWrites=true&w=majority");

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

var Person = mongoose.model('Person', personSchema);

var john = Person({
    firstname: 'John',
    lastname: 'Doe',
    address: '555 Main St.'
});

john.save(function(err) {
    if(err) throw err;
    console.log('person saved!');
});

var jane = Person({
    firstname: 'Jane',
    lastname: 'Doe',
    address: '555 Main St.'
});

jane.save(function(err) {
    if(err) throw err;
    console.log('person saved!');
});


var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000; 

app.use('/assets', express.static(__dirname + '/public')); 

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
    console.log('Request URL: ' + req.url);
    
    // var con = mysql.createConnection({
    //     host: "localhost",
    //     user: "test",
    //     password: "test",
    //     database: "addressbook"
    // });

    // con.query('select people.id, firstname, lastname, address from people inner join addressees on personAddress.addressID = addressees.ID',
    //     function(err, rows) {
    //         if(err) throw err;
    //         console.log(rows); //this just returns a javascript object
    //     });


    //get all the users
    Person.find({}, function(err,users) {
        if(err) throw err;

        //object of all the users
        console.log(users);
    });

    next();
});

apiController(app);
htmlController(app);

app.listen('3000'); // this creates the server

