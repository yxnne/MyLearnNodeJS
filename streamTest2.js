var fs = require('fs');
//管道流
var readerStream = fs.createReadStream('input.yxnne');

var writerStream = fs.createWriteStream('output.yxnne');

readerStream.pipe(writerStream);

//多个管道流组成链式
var zlib = require('zlib');

var fileOupt = fs.createWriteStream('input.yxnne.gz');
fileOupt.on('finish',function(){
	console.log('file zip is finished');
});

fs.createReadStream('input.yxnne')
	.pipe(zlib.createGzip())
	.pipe(fileOupt);

