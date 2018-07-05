const Koa = require('koa');
const app = new Koa();


app.use(async (ctx, next) => {
  await next();
  console.log('one');
});

// logger

app.use(async (ctx, next) => {
  await next();
  console.log(`two`);
});

// response

app.use(async ctx => {
  ctx.body = 'Hello World';
});
app.listen(3000);