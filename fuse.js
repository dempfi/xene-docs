const { Sparky: S, FuseBox, StylusPlugin, CSSPlugin, WebIndexPlugin, JSONPlugin, QuantumPlugin, EnvPlugin } = require('fuse-box');
const isProduction = process.env.NODE_ENV === 'production'

const fuse = FuseBox.init({
  homeDir: 'src',
  hash: isProduction,
  cache: !isProduction,
  output: 'dest/$name$hash.js',
  plugins: [
    [
      StylusPlugin({
        paths: [__dirname + '/src/static/css'],
        compress: isProduction
      }),
      CSSPlugin()
    ],
    WebIndexPlugin({
      bundles: ['static/client', 'static/styles', 'static/vendor'],
      template: 'src/static/index.html',
      target: 'static/index.html'
    }),
    JSONPlugin(),
    EnvPlugin({NODE_ENV: "production"}),
    isProduction && QuantumPlugin({uglify: true, treeshake: true})
  ]
})

const server = fuse.bundle('server').instructions('> [server/index.ts]')
const vendor = fuse.bundle('static/vendor').target('browser').instructions('~ client/index.tsx')
const css = fuse.bundle('static/styles').target('browser').instructions('static/css/index.styl')
const client = fuse.bundle('static/client').target('browser').instructions('> client/index.tsx')

if (!isProduction) {
  fuse.dev({ port: 4445, httpServer: true })
  server.watch('server/**').completed(proc => proc.start())
  client.watch('client/**').hmr()
  css.watch('static/css/**').hmr()
}

S.task('move-images', () => {
  const opts = ['./static/imgs', { base: './src' }]
  return isProduction ? S.src(...opts).dest('dest') : S.watch(...opts).dest('dest')
})

S.task('clean', () => S.src('dest').clean('dest'))
S.task('default', ['clean', 'move-images'], () => fuse.run())
