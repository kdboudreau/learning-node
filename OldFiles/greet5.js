// really popular and useful in js
// this is the revealing module pattern, 
    //where we only expose the props and methods we want via a returned object
var greeting = 'Hello world!!!!';

function greet() {
    console.log(greeting);
}

module.exports = {
    greet: greet
}