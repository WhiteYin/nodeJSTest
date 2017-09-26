var express = require('express');
var app = express();
var fs = require('fs');

//读取已有文件
app.get('/listenUsers', function (req, res) {
    fs.readFile(__dirname + "/users.json", 'utf-8', function (err, data) {
        console.log(data);
        res.end(data);
    });
})

//添加用户
var user = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "professor": "teacher",
        "id": 4
    }
};

app.get('/addUser', function (req, res) {
    fs.readFile(__dirname + "/users.json", 'utf-8', function (err, data) {
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

//删除指定用户信息
app.get('/delete', function (req, res) {
    fs.readFile(__dirname + '/users.json', 'utf-8', function (err, data) {
        data = JSON.parse(data);
        delete data["user2"];
        console.log(data);
        res.end(JSON.stringify(data));
    });    
})

//获取指定用户信息
app.get('/:id', function (req, res) {
    fs.readFile(__dirname + '/users.json', 'utf-8', function (err, data) {
        data = JSON.parse(data);
        var user = data["user" + req.params.id];
        console.log(user);
        res.end(JSON.stringify(user));
    });    
})

var server = app.listen(8082, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为http://%s:%s", host, port);
})