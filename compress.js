var fs = require("fs");
var zlib = require('zlib');
// input.txt -> input.txt.gz
fs.createReadStream('input.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('input.txt.gz'));
console.log('success for compress');
