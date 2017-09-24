var fs = require('fs');
//readFileSync同步
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("over");
//readFile异步:性能更高、速度更快、没有阻塞
fs.readFile('input.txt', function (err, dat) {
    if (err) {
        return console.error(err);
    }
    console.log(data.toString());
});
console.log("over2");
//open:打开文件,fd是文件描述码
//close：关闭文件
fs.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(er);
    }
    console.log("open");
    fs.close(fd, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("close");
    });
});
//stat:异步获取文件信息
fs.stat('input.txt', function (err, stats) {
    console.log("stats:");
    console.log(stats);
    console.log("isFile?" + stats.isFile());
});
//writeFile:异步写入文件
//第3个参数为对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
//read:异步读取文件
fs.writeFile('input.txt', '通过writeFile写入文件内容', { encoding: 'utf8', 'mode': '0666', flag: 'a' }, function (err) {
    if (err) {
        return console.error(err);
    }
    fs.readFile('input.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("写入数据后文件：" + data.toString());
    });
});