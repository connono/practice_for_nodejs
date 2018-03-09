var fs = require("fs");
//async
console.log("ready to open file!");
fs.open('input.txt', 'r+', function(err, fd){
	if (err) {
		return console.error(err);
	}
	console.log("succeed to open file");
});
