/**
 * Created by DUAN on 2017/4/2.
 */

// require 指令载入 http 模块
var http = require("http");

// createServer 创建服务器
// request, response 参数接受和响应数据
http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello, NodeJs !");
}).listen(8888);        // listen 绑定端口

console.log("Service is started at http://127.0.0.1:8888/");
