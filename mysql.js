var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'guest',
    password: 'guest',
    database: 'nodejs'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error)
        throw error;
    console.log('result:', results[0].solution);
})
//查询数据
var querySql = 'SELECT * FROM websites';
connection.query(querySql, function (err, result) {
    if (err) {
        console.log('查询失败:' + err.message);
        return;
    }

    console.log(result);
});

//插入数据
var insertQuery = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
var addSqlParams = ['我的git', 'https://github.com/WhiteYin', '123', 'CN'];

connection.query(insertQuery, addSqlParams, function (err, result) {
    if (err) {
        console.log('插入失败：' + err.message);
        return;
    }
    console.log("插入成功：" + result);
})

//更新数据
var updateQuery = "UPDATE websites SET name = ?,url=? WHERE Id = ?";
var updateParams = ['菜鸟', 'www.cainiao.com', 6];

connection.query(updateQuery, updateParams, function (err, result) {
    if (err) {
        console.log("更新失败" + err.message);
    } else {
        console.log("更新成功");
    }
})

//删除数据
var deleteQuery = 'DELETE FROM websites where Id=?';
var deleteParams = [1];

connection.query(deleteQuery, deleteParams, function (err, result) {
    if (err) {
        console.log("删除失败" + err.message);
    } else {
        console.log("删除成功");
    }
})

connection.end();