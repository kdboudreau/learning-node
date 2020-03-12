var english = require('./english');
var spanish = require('./spanish');

// make all this available as a single module
module.exports = {
    english: english,
    spanish: spanish
}
// when we export this, we will have a module with two methods on it