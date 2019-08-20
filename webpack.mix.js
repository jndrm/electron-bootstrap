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

mix
    .setPublicPath('www/dist')
    .setResourceRoot('../')

    .ts('src/renderer/app.ts', 'js/app.js')

    .sass('src/sass/app.scss', 'css/app.css')
