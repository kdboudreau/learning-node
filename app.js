// more on require lecture
var greetLang = require('./greet'); // with no extension the require funtion first looks for 
    // a file named greet.js, and if there is none it will next look for a folder named
    // greet with a file named index.js

greetLang.english();
greetLang.spanish();


