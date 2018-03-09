var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	var params = url.parse(req.url, true).query;
	res.write("site: " + params.name);
	res.write("\n");
	res.write("url of site: " + params.url);
	console.log(params);
	res.end();
}).listen(3000);
