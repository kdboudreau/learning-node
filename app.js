// exports vs module.exports lecture
var greet = require('./greet');

// requiring native (core) modules
var util = require('util'); // one clue that you're importing a core module 
    // is if theres no slash in the require
var name = 'Kat';
var greeting = util.format('Hello, %s', name);
util.log(greeting);


// ECMA6 javascript now has modules without node
import * as greeter from 'greet';
greeter.greet();

// object properties and methods
var obj = {
    greet: 'Hello'
}
console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

// functions and arrays
var arr = [];
// arr.push('hello');
arr.push(function() {
    console.log('Hello world 1'); // haven't invoked this, it's just sitting available
});
arr.push(function() {
    console.log('Hello world 2');
});

arr.forEach(function(item) {
    item(); // this will invoke every item sitting in the array
});