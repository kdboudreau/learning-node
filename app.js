var buff = new Buffer('Hello','utf8'); // use unicode utf8 encoding
console.log(buff); // <Buffer 48 65 6c 6c 6f>
console.log(buff.toString()); // Hello
console.log(buff.toJSON()); // { type: 'Buffer', data: [ 72, 101, 108, 108, 111 ] }
console.log(buff[2]); // 108

buff.write('wo');
console.log(buff.toString()); // wollo
//buffers are meant to be a finite piece of data. here, 5 characters