import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default {
  format: 'iife',
  plugins: [
    resolve(),
    commonjs(),
    replace({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')})
  ],
  entry: './dist/tmp/client/index.js',
  dest: './dist/static/client.js'
};
