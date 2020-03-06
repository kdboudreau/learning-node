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