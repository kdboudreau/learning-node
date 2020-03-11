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