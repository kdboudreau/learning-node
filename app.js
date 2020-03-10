var greet = require('./greet');
greet();

// objects lesson
var person = {
    firstname: 'John',
    middleinit: 'B',
    lastname: 'Doe',
    greet: function() {
        console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    }
};
person.greet();
console.log(person['firstname']);

// prototypal inheritance and function constructors
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greeting = function() { // this isnt the prototype of person, rather the prototype of any object created from person
    console.log('Hello, ' + this.firstName + ' ' + this.lastName);
}

var john = new Person('John', 'Doe');
john.greeting();

var jane = new Person('Jane', 'Doe');
jane.greeting();

console.log(john._proto_);
console.log(jane._proto_);
console.log(john._proto_ === jane._proto_); // this is true

// pass by value
function change(b) {
    b = 2;
}

var a = 1;
change(a);
console.log(a); //prints 1. what happened inside the change function didnt impact a. b became a copy, created a new spot in memory

// pass by reference
function changeObj(d) {
    d.prop1 = function() {};
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c); // changeObj overwrites prop1 and add new property, prop2. d points to the same object in memory


// Immediately invoked function expressions
(function() {
    // this is a function expression
}()); // this is immediately invoked