var fs = require("fs");
var buf = new Buffer(1024);
console.log("ready to open file!");
fs.open('sites.txt', 'r+', function(err, fd){
	if (err) {
		return console.error(err);
	}
	console.log('succeed to open file!');
	console.log('begin to ftruncate');
	fs.ftruncate(fd, 10, function(err){
		if (err){
			console.log(err);
		}
		console.log("succeed to ftruncate");
		console.log("read same file.");
		fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
			if (err) {
				console.log(err);
			}
			
			if(bytes > 0){
				console.log(buf.slice(0, bytes).toString());
			}
			
			//close
			fs.close(fd, function(err){
				if (err){
					console.log(err);
				}
				console.log('succeed to close file!');
			});
		});
	});
});

