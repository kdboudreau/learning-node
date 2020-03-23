function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function(type, listener) {  // here we are adding methods to the prototype for any
        // object created with this function constructor
        // on is common word for listener
    this.events[type] = this.events[type] || []; // making sure this is an array
    this.events[type].push(listener); // adding event to array
}

Emitter.prototype.emit = function(type) {  // emit is common work for event
    if (this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

module.exports = Emitter;