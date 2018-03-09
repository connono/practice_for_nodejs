var fs = require("fs");
console.log("ready to file!");
fs.stat('input.txt', function(err, stats){
	if (err) {
		return console.error(err);
	}
	console.log(stats);
	console.log("read file information");
	//test the file
	console.log("isFile?"+stats.isFile());
	console.log("isDirectory)?"+stats.isDirectory());
});
