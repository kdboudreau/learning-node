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
