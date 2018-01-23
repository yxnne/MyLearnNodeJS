console.log("This is test about Promise Object in ES6");

/*
// 构造一个Promise对象
const promise = new Promise(function(resolve, reject) {

  console.log("in promise obj")

  if (true){
    resolve(value);
  } else {
    reject(error);
  }
});

// Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。

// 它们是两个函数，由 JavaScript 引擎提供，不用自己部署。

// resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），
// 在异步操作成功时调用，并将异步操作的结果，作为  参数传递出去；

// reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），
// 在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

// Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。

*/
/*简单例子 1 */
/*
function timeout(ms) {
	//
	console.log("产生promise对象");

  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

//
console.log("这里是程序的开始，调用一个函数来产生promise");

timeout(5000).then((value) => {
	console.log("promise 对象的状态改变了 现在在，在then()函数中");
  console.log(value);
});

*/

/*
// so, 可以用then()方法分别指定resolved状态和rejected状态的回调函数。

// 第一个回调函数是Promise对象的状态变为resolved时调用，第二个回调函数是Promise对象的状态变为rejected时调用。
// 其中，第二个函数是可选的，不一定要提供。
// 这两个函数都接受Promise对象传出的值作为参数。

// then方法返回的是一个新的Promise实例
*/

/*异步加载图片的例子*/
/*在node里面因为没有Image对象是不行的哦
function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    const image = new Image();

    //如果加载成功,平台会调用onload方法，所以先将onload设置成转换resolve状态
    image.onload = function() {
      resolve(image);
    };

    //同理失败是一样的
    image.onerror = function() {
      reject(new Error('Could not load image at ' + url));
    };

    image.src = url;
  });
}

loadImageAsync("https://www.baidu.com/img/bd_logo1.png");

*/

// 因为then()返回了一个新的promise，那么就能多个then写成链式

function timeout_promise(ms,value) {

  return new Promise((resolve, reject) => {
  	if (value == "no_need"){
  		reject("Promise is rejected ~");
  	}

    setTimeout(resolve, ms, value);
  });
}

console.log("start ...");
timeout_promise(2000, '1st_promise')
.then((v)=>{

	console.log("this time value is ",v);

	return timeout_promise(2000, '2ed_promise');
})
.then((v)=>{

	console.log("this time value is ",v);
	return timeout_promise(2000, 'no_need');
})
.then((v)=>{
	console.log("this time value is ",v);
},(err)=>{
	console.log("what happened??? ",err);
});

/*
上述then()函数中的第二个参数是错误时的回调，所以可用,例如
timeout_promise(2000, '1st_promise').then(function(posts) {
  // ...
}).catch(function(error) {
  // 回调函数运行时发生的错误
  console.log('发生错误！', error);
});

// 一般来说，不要在then方法里面定义 Reject 状态的回调函数（即then的第二个参数），
// 总是使用catch方法。
*/


/*
Promise.all()
Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。

const p = Promise.all([p1, p2, p3]);

（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。

（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。

*/

/*
done()
Promise 对象的回调链，不管以then方法或catch方法结尾，要是最后一个方法抛出错误，
都有可能无法捕捉到（因为 Promise 内部的错误不会冒泡到全局）。
因此，我们可以提供一个done方法，总是处于回调链的尾端，保证抛出任何可能出现的错误。

asyncFunc()
  .then(f1)
  .catch(r1)
  .then(f2)
  .done();
*/

/*
finally()
finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。
它与done方法的最大区别，它接受一个普通的回调函数作为参数，该函数不管怎样都必须执行。
*/






