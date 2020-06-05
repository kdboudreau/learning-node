// pipe: connecting two streams by writing to one stream what is being read from another
// in node you pipe from a readable stream to a writable

var fsPipe = require('fs');
var zlib = require('zlib');

var readable2 = fsPipe.createReadStream(__dirname + '/greetLoremIpsum.txt',
    { encoding: 'utf8', highwatermark: 16 * 1024 });
var writable2 = fs.createWriteStream(__dirname + '/greetLoremIpsumCopy.txt');
var compressed = fsPipe.createWriteStream(__dirname + '/greetLoremIpsum.txt.gz');
var gzip = zlib.createGzip();

readable2.pipe(writable2); //updates copy file
readable2.pipe(gzip).pipe(compressed);