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


// js .call and .apply
var obj = {
    name: 'John Doe',
    greet: function() {
        console.log(`Hello ${ this.name }`);
    }
}

obj.greet();
obj.greet.call({ name: 'Jane Doe' });
obj.greet.apply({ name: 'Jane Doe' });


// inheriting from the event emitter
var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    EventEmitter.call(this); // the event emitter is a function constructor, so when it is invoked using
        // the new keyword, the this var points to an empty object and it adds on properties and methods
        // super constructor
        // giving it the new object were working on so it adds on to this
        // the this keyword is the same in the event emitter as it is in greetr function
    this.greeting = 'Hello World';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}

var greetr1 = new Greetr();


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
// custom events: Javascript core (event emitter)
// commonly, event driven non-blocking I/O in Javascript
// libuv will run while V8 is running
// non-blocking is possible  since Node is asynchronous
// the server can do many things without blocking the app

// buffer: a temp holding spot for data being moved from one place to another
// stream: a sequence of data made available over time. pieces of data that eventually combine into a whole

// buffer holds raw, binary data



var buff = new Buffer('Hello','utf8'); // use unicode utf8 encoding
console.log(buff); // <Buffer 48 65 6c 6c 6f>
console.log(buff.toString()); // Hello
console.log(buff.toJSON()); // { type: 'Buffer', data: [ 72, 101, 108, 108, 111 ] }
console.log(buff[2]); // 108

buff.write('wo');
console.log(buff.toString()); // wollo
//buffers are meant to be a finite piece of data. here, 5 characters


var buffer = new ArrayBuffer(8)  // a byte is 8 bits; here, we're storing 8 bytes aka 64 bits
// this is coming from v8 js engine
var view = new Int32Array(buffer); // this is a way to deal with binary data in buffer
    // if we change the array we change the buffer, if we read from the array we read from the buffer
    // iint32array is array of integers stored with 32 bits, so we can only store 2 numebrs
view[0] = 5;
view[1] = 15;
console.log(view); // Int32Array [ 5, 15 ]


function greetCB(callbackFunction) {
    console.log('Hello!');
    var data = {
        name: 'John Doe'
    }
    callbackFunction(data);
}

greetCB(function(data) {
    console.log('The callback function was invoked');
    console.log(data);
});

greetCB(function(data) {
    console.log('A different callback function was invoked');
    console.log(data.name);
});



// files and fs
var fs = require('fs');

var greetFS = fs.readFileSync(__dirname + '/greet.txt', 'utf8'); // sync = synchronous
    // __dirname gives path to directory. also, 'utf8' is default encoding

console.log(greetFS); // Hello from file World

// typically dont want this to be synchronous, can take a long time if there are a lot of users trying
    // to access a large file
    // below function takes care of this 

var greetFS2 = fs.readFile(__dirname + '/greet.txt', 
    function(err, data) {
     console.log(data); //<Buffer 48 65 6c 6c 6f 20 66 72 6f 6d 20 66 69 6c 65 20 57 6f 72 6c 64>
    }); // error-first callback for an asynchronous method
    // this is a popular pattern in node, "error-first callback" 
    // error-first callback: callbacks take an error object as their first parameter
    // aka null if no error, otherwise it will contain an object defining the error

var greetFS3 = fs.readFile(__dirname + '/greet.txt', 'utf8',
    function(err, data) {
     console.log(data); //<Buffer 48 65 6c 6c 6f 20 66 72 6f 6d 20 66 69 6c 65 20 57 6f 72 6c 64>
    });

console.log('Done!');

// Hello from file World
// Done!
// <Buffer 48 65 6c 6c 6f 20 66 72 6f 6d 20 66 69 6c 65 20 57 6f 72 6c 64>
// Hello from file World



// stream: a sequence of pieces of data
// streams are event emitters. they have access to on and emit
// there are now readable (read data) and writable (can only send, nto read) streams,
// duplex (read and write) and transform (change data as it moves through)

// abstract (base) class: a type of constructor you never work directly with, but inherit from

var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greetLoremIpsum.txt',
    { encoding: 'utf8', highwatermark: 16 * 1024 });

var writable = fs.createWriteStream(__dirname + '/greetLoremIpsumCopy.txt');

readable.on('data', function(chunk) {
    console.log(chunk);
    // with no options you get this: <Buffer 4c 6f 72 65 6d 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 74 20 61 6d 65 74 2c 20 63 6f 6e 73 65 63 74 65 74 75 72 20 61 64 69 70
    // 69 73 63 69 6e 67 ... 978 more bytes>
    // with encoding : utf8 you get the text
    // with highwatermark you indicate how big you want the buffer to be. 4 chunks here
    writable.write(chunk);
}); //this method is so common theres a better way to do this in node