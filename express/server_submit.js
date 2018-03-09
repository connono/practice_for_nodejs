var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));

app.get('/form.html', functiom(req, res){
	res.sendFile( __dirname + "/" + "form.html" );
});

app.post('/file_upload', function(req, res){
	console.log(req.files[0]);
	var des_file = __dirname + "/" + req.files[0].originalname;
	fs.readFile( req.files[0].path, function(err, data){
		fs.writefile(des_file, data, function(err){
			if (err) {
				console.error(err);
			} else {
				response = {
					message: 'File uploaded successfully',
					filename:req.files[0].originalname
				};
			}
			console.log( response );
			res.end( JSON.stringify( response ) );
		});
	});
});

var server = app.listen(8081, function(){
	var host = server.address().address;
	var port = server.address().port;
});