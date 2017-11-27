//引入模块使用require()方法
//实例化http对象
var http = require("http");
//创建服务器，并监听8888端口
http.createServer(function(request ,response){

	//发送Http 头，包括状态值：200，内容类型 text/plain 
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	//响应数据
	response.end('Hello World\n');


}).listen(8888);

// 在控制台上输出
console.log("the server has started");
