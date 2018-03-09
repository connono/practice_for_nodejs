//console
process.stdout.write("Hello World!" + "\n");
//get data
process.argv.forEach(function(val, index, array){
	console.log(index + ': ' + val);
});
//get execute path
console.log(process.execPath);
//platform information
console.log(process.platform);
