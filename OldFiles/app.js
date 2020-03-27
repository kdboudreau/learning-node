var greet = require('./greetMe'); // no need to add .js, with no extension
    // the require funtion first looks for a file named greet.js
greet();


// more on require lecture
var greetLang = require('./greet'); // with no extension the require funtion first looks for 
    // a file named greet.js, and if there is none it will next look for a folder named
    // greet with a file named index.js

greetLang.english();
greetLang.spanish();


// module patterns lecture
var greet1 = require('./greet1');
greet1();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = "Changed hello world!";

var greet3b = require('./greet3');
greet3b.greet(); // this prints  "Changed hello world!", this is the same object as greet3

var greet4 = require('./greet4');
var grtr = new greet4(); // this now creates a new object since this is a constructor (it has the ())
    // we aren't just using the require to create the object as we did before, which just reuses it
    // if it has already been created and therefore cached
grtr.greet();

var greet5 = require('./greet5').greet;
greet5();
// here we wouldnt be able to use the greeting var from greet5 because we didnt expose it


// exports vs module.exports lecture
var greetings = require('./greetings');

// requiring native (core) modules
var util = require('util'); // one clue that you're importing a core module 
    // is if theres no slash in the require
var name = 'Kat';
var greeting = util.format('Hello, %s', name);
util.log(greeting);


// ECMA6 javascript now has modules without node
import * as greeter from 'greetings';
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


// making our own event emitter
var Emtr = require('./emitter');

var emtr = new Emtr();

emtr.on('greet', function() {  // this is the property name
    console.log('Somewhere, someone said hello.');
})

emtr.on('greet', function() {
    console.log('A greeting occured!');
})

console.log('Hello!');
emtr.emit('greet');

// now using node's event emitter
var Emitter = require('events'); 

var emitter = new Emitter();

emitter.on('greet', function() {  // this is the property name
    console.log('Somewhere, someone said hello.');
})

emitter.on('greet', function() {
    console.log('A greeting occured!');
})

console.log('Hello!');
emitter.emit('greet');

// one problem with the above is that it requires magic strings
// magic string: a string that has a special meaning in our code
// heres a pattern to help avoid these
var eventConfig = require('./config').events;

emitter.on(eventConfig.GREET, function() {
    console.log('Another greeting occured!');
})
// this way vs code can help us, and if we do get an error it will be more descriptve and helpful
// this also allows for one place to change the var name


// object.create and prototypes
var person = {
    firstname: '',
    lastname: '',
    greetfun: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var johnny = Object.create(person);
johnny.firstname = 'John';
johnny.lastname = 'Doe';

var janey = Object.create(person);
janey.firstname = 'Jane';
janey.lastname = 'Doe';

console.log(johnny.greet());
console.log(janey.greet());


// Event emitter and inherits
var EventEmitter = require('events');
var util = require('util');

function Greeter() {
    this.greeting = 'Hello World!';
}

util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function() {
    console.log(this.greeting);
    this.emit('greet');
}

var greeter1 = new Greeter();
greeter1.on('greet', function() {
    console.log('Someone greeted!');
});

greeter1.greet();

Greeter.prototype.greet2 = function(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}

var greeter2 = new Greeter();
greeter2.on('greet', function(data) {
    console.log('Someone greeted named: ' + data);
});

greeter2.greet('Kat');


// ES6 template literals
var name = 'John Doe';

var greetConcat = 'Hello ' + name;
var greetTempLiterals = `Hello ${ name }`;

console.log(greetConcat);
console.log(greetTempLiterals);