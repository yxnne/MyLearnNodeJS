const Koa = require('koa');
const app = new Koa();

// use 是使用中间件
app.use(async (ctx, next)=> {
      // ctx context 上下文
      // 封装了很多东西，比如什么request ，response等 
      ctx.body = '1';  
      
      // next函数去执行下一个中间件
      // koa 的中间件是洋葱圈模型
      // 遇到next了就直接执行下一个中间件了
      // 那么next之后的代码呢？
      // 等到最后一级中间件执行完毕后，一层一层的向上反
      next();
      ctx.body += '2';
});

app.use(async (ctx, next)=> {
      ctx.body += '3';  
      next();
      ctx.body += '4';
});

app.use(async (ctx, next)=> {
      ctx.body += '5';  
      next();
      ctx.body += '6';
});

app.listen('9093')