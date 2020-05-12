function greet(callbackFunction) {
    console.log('Hello!');
    var data = {
        name: 'John Doe'
    }
    callbackFunction(data);
}

greet(function(data) {
    console.log('The callback function was invoked');
    console.log(data);
});

greet(function(data) {
    console.log('A different callback function was invoked');
    console.log(data.name);
});