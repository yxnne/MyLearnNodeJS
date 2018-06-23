/**
 * 这是一个很简单的中间件，
 * 记录一次请求的用时，当然，需要保证的是
 * 它需要作为koa的第一个使用的中间件
 */
module.exports = async (ctx, next) =>{
      const start = new Date().getTime();
      await next();
      const end = new Date().getTime();

      console.log('这个请求用时(毫秒):', end - start );
      console.log('body的长度是', ctx.body.length)
      console.log('ctx is:\n', ctx);
}