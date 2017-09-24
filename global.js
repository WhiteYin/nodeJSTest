//输出全局变量
//__filename:当前执行脚本的文件名
console.log("__filename:" + __filename);
//__dirname：当前执行脚本的所在目录
console.log("__dirname：" + __dirname);
//setTimeout(cb,ms):延时函数
function timeout() {
    console.log("延时函数执行。");
}
var t = setTimeout(timeout, 200);
//clearTimeout(t):停止一个延时函数
clearTimeout(t);
//setInterval(cb, ms):永久定时器
//这个不写了，估计跟js里一样，用setTimeout调用自己代替。
