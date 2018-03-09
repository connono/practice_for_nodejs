var fs = require('fs');
console.log('mkdir: /tmp/test/');
fs.mkdir("/tmp/test/", function(err){
	if (err){
		return console.error(err);
	}
	console.log("dir is created");
});
