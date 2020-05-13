var fs = require('fs');

var greetFS = fs.readFileSync(__dirname + '/greet.txt', 'utf8'); // sync = synchronous
    // __dirname gives path to directory. also, 'utf8' is default encoding

console.log(greetFS); // Hello from file World

// typically dont want this to be synchronous, can take a long time if there are a lot of users trying
    // to access a large file
    // below function takes care of this 

var greetFS2 = fs.readFile(__dirname + '/greet.txt', 
    function(err, data) {
     console.log(data);
    }); // error-first callback for an asynchronous method
    // this is a popular pattern in node, "error-first callback" 
    // error-first callback: callbacks take an error object as their first parameter
    // aka null if no error, otherwise it will contain an object defining the error