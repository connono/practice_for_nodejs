var http = require('http');
var querystring = require('querystring');
http..createServer(function(req, res){
	//define a variable post, for save request
	var post = '';
	req.on('data', function(chunk){
		post += chunk;
	});
	//querystring.parse -> post => true POST REQUEST
	req.on('end', function(){
		post = querystring.parse(post);
		console.log(post);
		res.end(util.inspect(post));
	});
}).listen(3000);
