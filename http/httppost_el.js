var http = require('http');
var querystring = require('querystring');

var postHTML = 
	'<html><head><meta charset="utf-8"><title>Node.js</title></head>' + 
	'<body>' +
	'<form method="post">' + 
	'site: <input name="name"><br>' +
	'siteurl: <input name="url"><br>;' +
	'<input type="submit">' + 
	'</form>' +
	'</body></html>';
http.createServer(function (req, res){
	var body = "";
	req.on('data', function(chunk){
		body += chunk;
	});
	req.on('end', function(){
		body = querystring.parse(body);
		res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	if(body.name && body.url) {
		res.write('site: ' + body.name);
		res.write('<br>');
		res.write('site url: ' + body.url);
	} else {
		res.write(postHTML);
	}
	res.end();
	});
}).listen(3000);
