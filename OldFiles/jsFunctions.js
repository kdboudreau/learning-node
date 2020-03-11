var a = 1;
var b = 2;
var c = a + b;
console.log(c);

// function statement
function greet () {
    console.log('hi');
}
greet();

// functions are first-class
function logGreeting(fn) {
    fn();
}
logGreeting(greet); // parenthesis runs the function and passes the return, no parenthesis passes the funtion

// function expression
var greetMe = function() {
    console.log("Hey girl!");
}
greetMe();

// it's still first-class
logGreeting(greetMe);

// use a function expression on the fly
logGreeting(function() {
    console.log("Hey girl hey");
});