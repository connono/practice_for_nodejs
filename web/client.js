var http = require('http');
var options = {
	host: 'www.baidu.com',
	port: '80',
	path: '/'
};
var callback = function(response){
	var body = '';
	response.on('data', function(data){
		body += data;
	});
	response.on('end', function(){
		console.log(body);
});
}
var req = http.request(options, callback);
req.end();
