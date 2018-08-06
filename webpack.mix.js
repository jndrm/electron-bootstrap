let mix = require('laravel-mix')
let nodeExternals = require('webpack-node-externals')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .setPublicPath('dist')
  .ts('src/renderer/app.ts', 'renderer/app.js')
  .sass('src/renderer/sass/app.scss', 'renderer/app.css')
  .ts('src/main/main.ts', 'main.js')
  .webpackConfig({
    target: 'electron-main',
    node: {
      __dirname: false
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
    },
    externals: [nodeExternals()]
  })