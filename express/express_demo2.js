var express = require('express');
var app = express();
app.get('/', function(req, res){
	console.log("request get from /");
	res.send('Hello GET');
});
app.post('/', function(req, res){
	console.log("request post from /");
	res.send("Hello POST");
});
app.get('/del_user', function(req, res){
	console.log("/del_user -> DELETE");
	res.send("delete");
});
app.get('/list_user', function(req, res){
	console.log('/list_user GET request');
	res.send('the list of users');
});
app.get('/ab*cd', function(req, res){
	console.log("/ab*cd GET request");
	res.send('RegExp');
});
var server = app.listen(8081, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log(server.address());
});
