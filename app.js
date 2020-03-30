util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function() {
    console.log(this.greeting);
    this.emit('greet');
}

var greeter1 = new Greeter();
greeter1.on('greet', function() {
    console.log('Someone greeted!');
});

greeter1.greet();

Greeter.prototype.greet2 = function(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}

var greeter2 = new Greeter();
greeter2.on('greet', function(data) {
    console.log('Someone greeted named: ' + data);
});

greeter2.greet('Kat');