var fetch = require('node-fetch');
/*
Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。

语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。

执行 Generator 函数会返回一个遍历器对象，
也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。
返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。


两个特征:
一是，function关键字与函数名之间有一个星号；
二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）
*/

function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

/*
Generator 函数的调用方法与普通函数一样，也是在函数名后面加上一对圆括号。

不同的是，调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，

而是一个指向内部状态的指针对象，也就是上一章介绍的遍历器对象。

下一步，必须调用遍历器对象的next方法，使得指针移向下一个状态。

也就是说，每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，

直到遇到下一个yield表达式（或return语句）为止。

换言之，Generator 函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行。
*/

var hw = helloWorldGenerator();

console.log(hw.next());	// { value: 'hello', done: false }
console.log(hw.next());	// { value: 'world', done: false }
console.log(hw.next());	// { value: 'ending', done: true }
console.log(hw.next());	// { value: undefined, done: true }
/*

value属性表示当前的内部状态的值，是yield表达式后面那个表达式的值；

done属性是一个布尔值，表示是否遍历结束。

*/
/*
Generator 函数可以不用yield表达式，这时就变成了一个单纯的暂缓执行函数。
*/
function* f() {
  console.log('执行了！')
}

var generator = f();

setTimeout(function () {
  generator.next()
}, 2000);

// next()函数的参数
// 可以传入 Generator 函数，作为上个阶段异步任务的返回结果
function* gen(x){
  var y = yield x + 2;
  return y;
}

var g = gen(1);

g.next() // { value: 3, done: false }
g.next(2) // { value: 2, done: true }




function* gen(){
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);
  console.log(result.bio);
}

var g = gen();
var result = g.next();

result.value.then(function(data){
  return data.json();
}).then(function(data){
  g.next(data);
});




















