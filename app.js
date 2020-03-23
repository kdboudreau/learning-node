var Emitter = require('events'); // node's event emitter

var emtr = new Emitter();

emtr.on('greet', function() {  // this is the property name
    console.log('Somewhere, someone said hello.');
})

emtr.on('greet', function() {
    console.log('A greeting occured!');
})

console.log('Hello!');
emtr.emit('greet');

// one problem with the above is that it requires magic strings
// magic string: a string that has a special meaning in our code
// heres a pattern to help avoid these
var eventConfig = require('./config').events;

emtr.on(eventConfig.GREET, function() {
    console.log('Another greeting occured!');
})
// this way vs code can help us, and if we do get an error it will be more descriptve and helpful
// this also allows for one place to change the var name