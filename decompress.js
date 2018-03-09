var fs = require("fs");
var zlib = require("zlib");
// input.txt.gz -> input.txt
fs.createReadStream('input.txt.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('input.txt'));
console.log("success");
