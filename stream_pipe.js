var fs = require("fs");
//create a readable stream
var readerStream = fs.createReadStream('input.txt');
//create a writable stream
var writerStream = fs.createWriteStream('output.txt');
//pipe write and read
readerStream.pipe(writerStream);
console.log('END');
