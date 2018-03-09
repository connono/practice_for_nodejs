var fs = require("fs");
console.log("ready to write file");
fs.writeFile('input_writed.txt', 'writed by others!', function(err){
	if (err) {
		return console.error(err);
	}
	console.log("success to write data");
	console.log("---------a line here----------")
	console.log("read the thing I write");
	fs.readFile('input_writed.txt', function(err, data){
		if (err) {
			return console.error(err);
		}
		console.log("async: " + data.toString());
	});
});
