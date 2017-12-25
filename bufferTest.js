//新建一个buffer:给定字节数
var buf = new Buffer(10);

buf = new Buffer(256);

//write方法 写入缓冲区，方法返回的是字节数
len = buf.write("jerk");

console.log("写入字节数 : "+  len);

len = buf.write("小小书童","utf-8");

console.log("写入字节数 : "+  len);

//完整语法：
//buf.write(string[, offset[, length]][, encoding])

//从缓冲区读取
str = buf.toString('utf-8');
console.log(str);

str = buf.toString('utf-8',0,6);
console.log(str);

str = buf.toString('utf-8',0,4);
console.log(str);

//so完整语法
//buf.toString([encoding[, start[, end]]])

//to JSON
//另一个构造方法
buf = new Buffer("可笑可笑","utf-8");
var json = buf.toJSON(buf);
console.log('the json is :',json);

//静态方法：合并两个缓冲区成新的缓冲区
var buf1 = new Buffer('yxnne : ');
var buf2 = new Buffer('not a jerk');
var bufConcat = Buffer.concat([buf1 , buf2]);
console.log('after concat is', bufConcat.toString());

//比较缓冲区 方法返回一个比较结果

var buffer1 = new Buffer('FF');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
   console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
   console.log(buffer1 + " 在 " + buffer2 + "之后");
}

//拷贝缓冲区
var bufOld = new Buffer('to_be_copied');
var bufTarget = new Buffer(5);
bufOld.copy(bufTarget);
console.log('copied is :',bufTarget.toString());

//完整语法
//buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])

//缓冲区裁剪
var buffer1 = new Buffer('j_e_r_k');
// 剪切缓冲区
var buffer2 = buffer1.slice(0,2);
console.log("buffer2 content: " + buffer2.toString());
buffer1.write('n_o_t');
console.log("buffer2 content: " + buffer2.toString());
//so 通过结果看出来，buffer1 和 buffer2 实际指向的是同一个缓冲区，只是buffer2 是其中的片段

console.log('buffer1 lenght is :',buffer1.length);
console.log('buffer2 lenght is :',buffer2.length);
