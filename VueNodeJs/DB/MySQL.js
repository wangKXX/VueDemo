var mysql = require('mysql');
exports.conntentMySQL = function(){
    var connection = mysql.createConnection({
		  host     : 'localhost',
		  user     : 'root',
		  password : 'root123',
		  database : 'puductdb'
		});
		connection.connect();
		console.log("数据库链接成功！！！！！");
		return connection;
}
