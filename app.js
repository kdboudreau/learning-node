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