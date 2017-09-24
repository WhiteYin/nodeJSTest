//创建10字节的buffer
var buf1 = new Buffer(10);

//通过给定的数组创建Buffer实例
var buf2 = new Buffer([10, 1, 2, 3, 4, 5]);

//通过一个字符串来创建Buffer实例,第一个参数是字符串，第二个参数是编码格式
var buf3 = new Buffer("hello,world", 'utf-8');

//写入缓冲区,超出缓冲区大小的将被舍去
var len = buf1.write('1234567890123');
console.log("数据为：" + buf1.toString('utf-8') + "；长度为" + len);

//转成JSON
var json = buf1.toJSON();
console.log("转换成json：");
console.log(json);

//缓冲区合并
var buf2 = Buffer.concat([buf1, buf3],14);
console.log(buf2.toString());