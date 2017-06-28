import * as Koa from 'koa'
import * as send from 'koa-send'
import * as Router from 'koa-router'
import * as compress from 'koa-compress'
import * as path from 'path'

const staticRoot = path.resolve(__dirname, '..', 'static')
const serve = (ctx, path) => send(ctx, path, { root: staticRoot, index: 'index.html' })

const api = new Router({ prefix: '/api' })
  .get('/', (ctx, n) => {
    ctx.body = 'hola'
    return n()
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
