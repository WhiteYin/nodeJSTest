var express = require('express');
var app = express();
//主页输出HELLO WORLD
app.get('/', function (req, res) {
    console.log("主页GET请求");
    res.send('Hello Get');
});
//POST请求
app.post('/', function (req, res) {
    console.log("主页POST请求");
    res.send('Hello POST');
});
// /del_user页面响应
app.get('/del_user', function (req, res) {
    console.log("/del_user响应DELETE请求");
    res.send('删除页面'); 
});
// /list_user 页面get请求
app.get('/list_user', function (req, res) {
    console.log('/list_user GET请求');
    res.send('用户列表页面');
});
// 对页面abcd,abxcd,ab123cd等响应GET请求
app.get('/ab*cd', function (req, res) {
    console.log("/ab*cd GET请求");
    res.send('正则匹配');
});
app.get('/index', function (req, res) {
    res.sendFile(__dirname + "/html/index.html");
});
//表单get响应
app.get('/process_get', function (req, res) {
    var response = {
        "first_name": req.query.first_name,
        "second_name": req.query.second_name
    }
    console.log(response);
    res.send(JSON.stringify(response));
});
//对post请求进行编码解析
//如果报Cannot find module 'body-parser' 就在项目目录下cnpm install body-parser
var bodyParser = require('body-parser');
var urlencodedParse = bodyParser.urlencoded({ extended: false });
//表单post响应
app.post('/process_post', urlencodedParse, function (req, res) {
    var response = {
        "first_name2": req.body.first_name2,
        "second_name2": req.body.second_name2
    }
    console.log(response);
    res.send(JSON.stringify(response));
});
//引入fs模块
var fs = require('fs');
var multer = require('multer');
app.use(multer({ dest: '/tmp/' }).array('image'));
//文件上传
//路由相同但是get和post不同，不会路由到相同页面
app.get('/file_upload', function (req, res) {
    res.sendFile(__dirname + "/html/file.html"); 
});
app.post('/file_upload', function (req, res) {
    var reqFile = req.files[0];
    console.log(reqFile);//上传的文件信息
    //文件描述？
    var des_file = __dirname + '/' + reqFile.originalname;
    fs.readFile(reqFile.path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if (err) {
                console.log(err);
            } else {
                var response = {
                    message: 'File uploaded successfully',
                    filename: reqFile.originalname
                };
            }
            console.log(response);
            res.send(JSON.stringify(response));
        });
    });
});
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为http://%s:%s", host, port);
});
