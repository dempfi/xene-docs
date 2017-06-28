import * as Koa from 'koa'
import * as serve from 'koa-static'
import * as Router from 'koa-router'
import * as compress from 'koa-compress'
import * as path from 'path'

const api = new Router({ prefix: 'api' })
  .get('/', ctx => ctx.body = 'HI')

const app = new Koa()
  // Serve static files
  .use(serve(path.resolve(__dirname, '..', 'static')))
  .use(compress())
  .use(api.routes())
  .listen(process.env.PORT || 3000)
