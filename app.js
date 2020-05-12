var buff = new Buffer('Hello','utf8'); // use unicode utf8 encoding
console.log(buff); // <Buffer 48 65 6c 6c 6f>
console.log(buff.toString()); // Hello
console.log(buff.toJSON()); // { type: 'Buffer', data: [ 72, 101, 108, 108, 111 ] }
console.log(buff[2]); // 108

buff.write('wo');
console.log(buff.toString()); // wollo
//buffers are meant to be a finite piece of data. here, 5 characters


var buffer = new ArrayBuffer(8)  // a byte is 8 bits; here, we're storing 8 bytes aka 64 bits
// this is coming from v8 js engine
var view = new Int32Array(buffer); // this is a way to deal with binary data in buffer
    // if we change the array we change the buffer, if we read from the array we read from the buffer
    // iint32array is array of integers stored with 32 bits, so we can only store 2 numebrs
view[0] = 5;
view[1] = 15;
console.log(view); // Int32Array [ 5, 15 ]