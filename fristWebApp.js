var http = require("http");
http.createServer(function(request ,response){

	response.writeHead(200, {'Content-Type' : 'text/plain'});

	response.end('Hello World\n');


}).listen(8888);

// print in terminal 

console.log("the server has started");