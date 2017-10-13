let mysql = require('mysql');
if(!pool){
	//创建连接池
	var pool = mysql.createPool({
		database:'exam',
		user:'root',
		password:'root'
	});
	global.pool = pool;
}else{
	pool = global.pool;
}
//封装获取连接函数
function getConnection(){
	return new Promise(function(resolve,reject){
		//获取连接
		pool.getConnection(function(err,conn){
			if(!err){
				resolve(conn);
			}else{
				reject(err);
			}
		});
	});
}

//封装执行sql语句的函数
function execute(sql){
	return new Promise(function(resolve,reject){
		var connection;
		getConnection().then(function(conn){
			connection = conn;
			conn.query(sql,function(err,results){
				if(!err){
					// console.log(results);
					resolve(results);
				}else{
					reject(err);
				}
			})
		}).catch(function(err){
			reject(err);
		}).finally(function(){
			//释放链接到连接池
			if(connection){
				connection.release();
			}
		});
	});
}

module.exports = {
	getConnection,
	execute
}