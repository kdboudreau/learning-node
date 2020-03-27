// js .call and .apply
var obj = {
    name: 'John Doe',
    greet: function() {
        console.log(`Hello ${ this.name }`);
    }
}

obj.greet();

Object.greet.call({ name: 'Jane Doe' });