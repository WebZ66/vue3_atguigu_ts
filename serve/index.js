const Koa = require('koa')
const serve = new Koa()
const Router = require('koa-router')
const router = new Router()
const koaBody = require('koa-bodyparser')
const user = require('./data/user.json')

router.post('/api/user', ctx => {
  const postData = ctx.request.body
  ctx.type = 'json'
  ctx.body = user
  console.log(postData)
})

serve.use(
  koaBody({
    multipart: true
  })
)
serve.use(router.routes())
serve.listen(9000, () => {})
