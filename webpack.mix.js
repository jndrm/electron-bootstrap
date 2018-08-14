const proc = require('child_process')
const chokidar = require('chokidar')
const mix = require('laravel-mix')

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

if (global.Mix.isWatching()) {
  let child

  chokidar.watch("./dist/main.js").on("change", () => {
    const electron = require("electron")
    if (child) {
      console.log("killing old electron instance")
      child.kill('SIGHUP')
    }
    child = proc.spawn(electron, ["./dist/main.js"], {
      stdio: 'inherit'
    })
  })
}

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
  })
