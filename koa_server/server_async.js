const Koa = require('koa');
const app = new Koa();
const mylogger = require("./my_logger");

// 模拟延迟
function delay(){
      return new Promise((resolve, reject)=>{
            setTimeout(()=>resolve(), 1000);
      });
}
// use 是使用中间件
app.use(mylogger);
app.use(async (ctx, next)=> {

      ctx.body = '1';  
      await next();
      ctx.body += '2';
});

app.use(async (ctx, next)=> {
      ctx.body += '3';  
      await delay();
      
      await next();
      ctx.body += '4';
});

app.use(async (ctx, next)=> {
      ctx.body += '5';  
      await next();
      ctx.body += '6';
});

app.listen('9093')