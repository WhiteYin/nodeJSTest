var fs = require('fs');
var data = "写入流";
//创建一个可以写入的流，写入到文件output.txt
var writeStram = fs.createWriteStream('output.txt');
//使用utf8格式编码
writeStram.write(data, 'UTF8');
//标记文件末尾?如果不标记会怎么样
writeStram.end();

//处理流事件
writeStram.on('finish', function () {
    console.log("写入完成");

    //数据获取写在写入流的finish事件中。具体优化暂时不考虑。
    var fs2 = require('fs');
    var data = '';
    //创建可读流
    var readerStream = fs2.createReadStream('output.txt');
    //创建另一个可写流
    var writeStram2 = fs.createWriteStream('output2.txt');
    //设置编码为utf8
    readerStream.setEncoding('utf8');
    //处理流事件
    readerStream.on('data', function (chunk) {
        data += chunk;
    });

    readerStream.on('end', function () {
        console.log("获取到的数据："+data);
    });

    readerStream.on('error', function (err) {
        console.log(err.stack);
    });

    //使用管道流
    readerStream.pipe(writeStram2);
});

writeStram.on('error', function (err) {
    console.log(err.stack);
});

