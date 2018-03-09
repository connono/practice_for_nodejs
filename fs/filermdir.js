var fs = require("fs");
console.log("ready to rmdir: /tmp/test");
fs.rmdir("/tmp/test", function(err){
	if (err) {
		return console.error(err);
	}
	console.log("read /tmp dir");
	fs.readdir('/tmp/', function(err, files){
		if (err) {
			return console.error(err);
		}
		files.forEach( function (file){
			console.log( file );
		});
	});
});

