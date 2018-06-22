console.log('Test async');

//1. callback hell 

function doSth(fn){
      setTimeout(fn, 2000);
}

//doSth(()=>console.log('I did'));

// doSth(function(){
//       console.log(1)
//       doSth(function(){
//             console.log(2)
//             doSth(function(){
//                   console.log(3)  
//             })
//       })
// })

// 以上就是所谓回调地狱


// promise 解决了回调地狱的问题
function doSth2(thing){
      return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                  resolve(thing)
            },2000);
      });
}

// 使用Promise 链式的写法
// doSth2('reading')
// .then((v)=>{
//       console.log('result is ', v );
//       return doSth2("riding");
// })
// .then(v=>{
//       console.log('second res is ', v);
      
// });


// 使用async + await 很简单的写法

async function test(){
      const res1 = await doSth2("reading");
      console.log(res1);
      const res2 = await doSth2("walking");
      console.log(res2);
      const res3 = await doSth2("dancing");
      console.log(res3);
}

test();