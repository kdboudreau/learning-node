function Greetr() { //function constructor
    this.greeting = 'Hello World!!';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = new Greetr(); // this requires module.exports to create a brand new object