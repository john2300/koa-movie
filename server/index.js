const Koa = require('koa');
const app = new Koa();
// const { htmlTpl,ejsTpl,pugTpl } = require('./tpl');
//将模板引擎集成到koa中
const views = require('koa-views');
const ejs = require('ejs');
const pug = require('pug');
const {resolve} = require('path');

app.use(views(resolve(__dirname,'./views'),{
  extension:'pug'
}))
app.use(async (ctx,next) => {
  await ctx.render('index',{
    you:'Luke',
    me:'Scott'
  })
});

app.listen(4455);

