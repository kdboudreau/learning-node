// pipe: connecting two streams by writing to one stream what is being read from another
// in node you pipe from a readable stream to a writable

var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greetLoremIpsum.txt',
    { encoding: 'utf8', highwatermark: 16 * 1024 });

var writable = fs.createWriteStream(__dirname + '/greetLoremIpsumCopy.txt');

readable.pipe(writable);