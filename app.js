// ES6 classes
'use strict';

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    // anything added inside the constructor acts liek a function constructor in that it
        // adds it to each object created

    greet() {
        console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    }
    // anything added inside the class are automatically put on the prototype, an empty object that is 
        // created and place on down the prototype chain
}

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);

// libuv, the event loop, and non-blocking asynchronous execution
// system events: C++ core (libuv)
// commonly, event driven non-blocking I/O in Javascript
// libuv will run while V8 is running
// non-blocking is possible  since Node is asynchronous
// the server can do many things without blocking the app
