var fs = require("fs");
console.log("watch /tmp dir");
fs.readdir("/tmp/", function(err, files){
	if (err) {
		return console.error(err);
	}
	files.forEach( function(file){
		console.log( file );
	});
});
