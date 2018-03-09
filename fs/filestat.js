var fs = require('fs');
fs.stat('/home/pythonlearner/practice_for_nodejs/fs/input.txt', function(err, stats){
	console.log(stats.isFile());
})
