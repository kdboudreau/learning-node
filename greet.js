var greet = function() {
    console.log("Hey friend!");
};

// this allows the function indicated available outside this module
module.exports = greet;

// node wraps this inside a function expression to create this function on the fly
// this FE expects  parameters: exports, require, module, _filename, _dirname
// remember object are passed by ref, so whatever is done to module.exports in will affect it outside, 
//    because it points to the same object in memory. thats how it can be protected, but also reused 
//    since that function is available outside

// require is a function that you pass a path to
// module.exports is what the require function returns
// this works because your code is actually wrapped in a function that is 
//    given these things as function parameters
