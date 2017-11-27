//引入events模块
var events = require('events');
//创建 eventEmitter对象
var eventEmitter = new events.EventEmitter();

//设置监听事件：yxnne_event，换句话就是注册yxnne_event的监听
eventEmitter.on('yxnne_event',function(){
	console.log('my own event triggered');
});
//三秒后，触发yxnne_event
setTimeout(function(){
	eventEmitter.emit('yxnne_event');
},3000);

//另外，一种事件可以注册很多个监听
eventEmitter.on('yxnne_event',function(){
	console.log('my own event triggered in another function');
});

//三秒后，触发yxnne_event,但是带了参数
setTimeout(function(){
	eventEmitter.emit('yxnne_event',10,20);
},3000);

//实验证明，按照java的想法在以上代码中，并没有注册一个接受参数的‘yxnne_event’事件的回调
//应该是调用不成功的
//但是这里调用成功了，也就是说，参数列表这个东西，有，则用，无，则不用
eventEmitter.on('yxnne_event_param',function(num1,num2){
	var res = num1 + num2;
	if(res){

		var info = '--> ' + num1 + ' and ' + num2 + ' is ' + res  ;
		console.log(info);
	}else{
		console.log('*** yxnne error info : maybe the param is not enough ???');
		//this 就是 eventEmitter对象
		console.log(this);
	}
});
//正常
setTimeout(function(){
	eventEmitter.emit('yxnne_event_param',10,20);
},5000);
//不太正常
setTimeout(function(){
	eventEmitter.emit('yxnne_event_param','jerk',20);
},5000);
//少参数
setTimeout(function(){
	eventEmitter.emit('yxnne_event_param',20);
},5000);
//就这段代码而言，完美的验证了上一段注释

//其他eventEmitter触发下
setTimeout(function(){
	//也注册了‘yxnne_event_param’对象
	var e = new events.EventEmitter();
	e.emit('yxnne_event_param',100,20);
},6000);
//实验证明，一个eventEmitter对象只能触发自己的eventEmitter设置的监听

//EventEmitter类的静态方法: 某一个eventEmitter的某一个事件的注册数量
var counts = events.EventEmitter.listenerCount(eventEmitter,'yxnne_event_param');
console.log('yxnne_event_param 注册的数量：',counts);



