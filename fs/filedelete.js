var fs = require('fs');
console.log('ready to delete the file');
fs.unlink('sites.txt', function(err){
	if (err) {
		return console.error(err);
	}
	console.log('succeed to delete the  file');
});
