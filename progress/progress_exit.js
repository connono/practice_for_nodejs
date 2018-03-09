process.on('exit', function(code){
	//never execute
	setTimeout(function(){
		console.log("never execute");
	}, 0);
	console.log('exit code :',code);
});
console.log("END");
