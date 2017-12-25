var fs = require('fs');
function readFile(){
	var readData = '';
	//可读流创建
	var readerStream = fs.createReadStream('test_stream_file.yxnne');

	readerStream.setEncoding('UTF8');

	//监听事件
	//data事件
	readerStream.on('data',function(chunk){

		readData += chunk;
	});

	//end事件
	readerStream.on('end',function(){
		console.log('file read is finish');
		console.log(readData);
	});

	readerStream.on('error',function(err){
		console.log(err.stack);
	});

}
// var readData = '';
// //可读流创建
// var readerStream = fs.createReadStream('test_stream_file.yxnne');

// readerStream.setEncoding('UTF8');

// //监听事件
// //data事件
// readerStream.on('data',function(chunk){

// 	readData += chunk;
// });

// //end事件
// readerStream.on('end',function(){
// 	console.log('file read is finish');
// 	console.log(readData);
// });

// readerStream.on('error',function(err){
// 	console.log(err.stack);
// });

// console.log('Reader\'s Here');
//so this first to run

//写入流
var toBeWriterStream = "\n I'll write this line ";

var writerStream = fs.createWriteStream('test_stream_file.yxnne');
writerStream.write(toBeWriterStream , 'UTF8');
//标记文件末尾
writerStream.end();
writerStream.on('finish',function(){
	console.log("finish write");
	readFile();
});

writerStream.on('error',function(err){
	console.log(err.stack);
});

console.log('writter\'s Here');
