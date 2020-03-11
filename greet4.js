function Greetr() { //function constructor
    this.greeting = 'Hello World!!!';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greetr; // this gives the module the ability to create a new object