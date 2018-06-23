const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next)=>{
      // 不适用koa-router的话，可以通过ctx.request.url来判断路由
      if(ctx.request.url == '/name'){
            ctx.body = '{name:"yxnne"}';
      }else if(ctx.request.url == '/age'){
            ctx.body = '{age:20}';
      }else{
            ctx.body = '<h1>404</h1>';
      }
});

app.listen('9093');

