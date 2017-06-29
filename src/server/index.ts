import * as Koa from 'koa'
import * as send from 'koa-send'
import * as Router from 'koa-router'
import * as compress from 'koa-compress'
import * as path from 'path'
import docs from './documentation'

const staticRoot = path.resolve(__dirname, '..', 'static')
const serve = (ctx, path) => send(ctx, path, { root: staticRoot, index: 'index.html' })

const api = new Router({ prefix: '/api' })
  .get('/:module/:article', async (ctx, next) => {
    ctx.body = {
      index: await docs.index(),
      markdown: await docs.markdown(ctx.params.module, ctx.params.article)
    }
    return next()
  })

const app = new Koa()
  .use(api.routes())
  .use((ctx, next) =>{
    if (ctx.method != 'HEAD' && ctx.method != 'GET') return next();
    if (/api/i.test(ctx.path)) return next();
    return serve(ctx, ctx.path).catch(() => serve(ctx, '/')).then(next)
  })
  .use(compress())
  .listen(process.env.PORT || 3000)
