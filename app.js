// stream: a sequence of pieces of data
// streams are event emitters. they have access to on and emit
// there are now readable (read data) and writable (can only send, nto read) streams,
// duplex (read and write) and transform (change data as it moves through)

// abstract (base) class: a type of constructor you never work directly with, but inherit from

var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greetLoremIpsum.txt',
    { encoding: 'utf8', highwatermark: 16 * 1024 });

readable.on('data', function(chunk) {
    console.log(chunk);
    // with no options you get this: <Buffer 4c 6f 72 65 6d 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 74 20 61 6d 65 74 2c 20 63 6f 6e 73 65 63 74 65 74 75 72 20 61 64 69 70
    // 69 73 63 69 6e 67 ... 978 more bytes>
    // with encoding : utf8 you get the text
    // with highwatermark you indicate how big you want the buffer to be. 4 chunks here
});