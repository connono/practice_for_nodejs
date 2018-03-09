var mysql = require('mysql');
var connection = mysql.createaConnection({
	host : 'localhost',
	user : 'root',
	password : 'woshiwangyulin',
	port: '3306',
	database: 'test',
});
connection.connect();
var sql = 'SELECT * FORM websites';
connection.query(sql, function(err, result){
	if (err) {
		console.log('[SELECT ERROR] - ',err.message);
		return;
	}
	console.log('--------------SELECT--------------------');
	console.log(result);
	console.log('----------------------------------------\n\n');
});
connection.end();
