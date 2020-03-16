exports = function() {
    console.log('Hello');
} // this creates a new object, and breaks the reference to module.exports
console.log(exports); // logs " [Function: exports] "
console.log(module.exports); // logs " {} "

exports.greet = function() {
    console.log('Hello');
} // this mutates the existing object

console.log(exports); // logs " { greet: [Function] } "
console.log(module.exports); // logs "{ greet: [Function] } "

// the easiest way to remember, always just use module.exports 

// ecma6 javascript now has modules without node
export function greet() {
    console.log('Hello');
}