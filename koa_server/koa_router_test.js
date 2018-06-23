const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
router.get('/', async (ctx, next )=>{
      ctx.body = '123456789, router';
});
router.get('/abc', async (ctx, next )=>{
      ctx.body = 'visiting ... /abc';
});
app.use(router.routes())
.use(router.allowedMethods());
app.listen('9093');

