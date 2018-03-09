var fs = require("fs");
//this is better -- async
fs.readFile('input.txt', function(err, data){
	if (err){
		return console.error(err);
	}
	console.log('async: ' + data.toString());
});
//this is worse -- sync
var data = fs.readFileSync('input.txt');
console.log("sync:" + data.toString());
console.log("program end");
