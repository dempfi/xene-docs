import json from 'rollup-plugin-json'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import visualizer from 'rollup-plugin-visualizer'
import uglify from 'rollup-plugin-uglify'

export default {
  format: 'iife',
  dest: './dest/static/client.js',
  entry: './dest/tmp/client/index.js',
  external: [ 'react', 'react-dom'],
  globals: { react: 'React', 'react-dom': 'ReactDOM' },
  plugins: [
    resolve({jsnext: true, main: true, browser: true}),
    commonjs(),
    json(),
    replace({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')}),
    visualizer({filename: './dest/stats.html'}),
    process.env.NODE_ENV === 'production' && uglify()
  ]
};
