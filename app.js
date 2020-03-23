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