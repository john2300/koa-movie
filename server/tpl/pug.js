module.exports = `
DOCTYPE html
html(lang="en")
head
  meta(charset="UTF-8")
  meta(name="viewport" content="width=device-width, initial-scale=1.0")
  meta(http-equiv="X-UA-Compatible" content="ie=edge")
  title koa server Pug
  link(href="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet")
  script(src="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js")
  script(src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js")
  body
    .contanier
      .row
        .col-md-8
          h1 Hi #{you}
          p This is #{me}
        .col-md-4
          p 测试静态 HTML 页面
`
