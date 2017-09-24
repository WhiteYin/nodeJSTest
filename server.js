var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello Wrold\n');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("接收到来自" + pathname + "的请求");
        
        route(pathname);

        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Hello world");
        response.end();
    }

    http.createServer(onRequest).listen(8988);
    console.log("第二个服务启动");
}

exports.start = start;