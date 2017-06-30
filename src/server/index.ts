import * as Koa from 'koa'
import * as send from 'koa-send'
import * as etag from 'koa-etag'
import * as Router from 'koa-router'
import * as compress from 'koa-compress'
import * as path from 'path'
import * as _ from 'lodash'
import docs from './documentation'

const staticRoot = path.resolve(__dirname, '..', 'static')
const serve = (ctx, path) => send(ctx, path, {
  root: staticRoot, index: 'index.html', maxAge: 604800
})

const router = new Router()
  .use('/api', (ctx, next) => {
    ctx.set('Cache-Control', 'max-age=86400')
    return next()
  })
  .get('/api/:module/:article', async (ctx, next) => {
    const markdown = await docs.markdown(ctx.params.module, ctx.params.article)
    const index = await docs.index()
    ctx.body = { index, markdown }
    return next()
  })
  .get('/docs/:module?/:article?/:chapter?', async (ctx, next) => {
    let { module, article } = ctx.params
    if (module && article) await serve(ctx, '/')
    else {
      const index = await docs.index()
      if (!module) module = index[0].module
      if (!article) article = index.find(i => i.module === module).articles[0].id
      ctx.redirect(`/docs/${module}/${article}`)
    }
    return next()
  })

const app = new Koa()
  .use(router.routes())
  .use((ctx, next) => {
    if (ctx.method != 'HEAD' && ctx.method != 'GET') return next();
    if (/(api|docs)/i.test(ctx.path)) return next();
    return serve(ctx, ctx.path).then(next)
  })
  .use(compress())
  .use(etag())
  .listen(process.env.PORT || 3000)
