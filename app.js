// exports vs module.exports lecture
var greet = require('./greet');

// requiring native (core) modules
var util = require('util'); // one clue that you're importing a core module 
    //is if theres no slash in the require
var name = 'Kat';
var greeting = util.format('Hello, %s', name);
util.log(greeting);