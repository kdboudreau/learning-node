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