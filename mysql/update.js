var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'woshiwangyulin',
	port : '3306',
	database: 'test',
});
connection.connect();

var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
var modSqlParams = ['cainiaoyidongzhan','https://m.runoob.com',6];
//update
connection.query(modSql, modSqlParams, function(err, result){
	if (err) {
		console.log('[UPDATE ERROR] - ', err.message);
		return;
	}
	console.log('------------------------UPDATE-------------------');
	console.log('UPDATE affectedRows', result.affactedRows);
	console.log('------------------------------------------------\n\n');
});
connection.end();
