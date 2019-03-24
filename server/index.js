const Koa = require('koa');
const app = new Koa();
const { htmlTpl,ejsTpl,pugTpl } = require('./tpl');
const ejs = require('ejs');
const pug = require('pug');
app.use(async (ctx,next) => {
  ctx.type = 'text/html; charset=utf-8';
  // ctx.body = htmlTpl;
  // ctx.body = ejs.render(ejsTpl,{
  //   you:'Luke',
  //   me:'Scott'
  // })
  ctx.body = pug.render(pugTpl,{
      you:'Luke',
      me:'Scott'
    })

});

app.listen(4455);

