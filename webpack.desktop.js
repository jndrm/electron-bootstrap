const mix = require('laravel-mix')
const proc = require('child_process')
const chokidar = require('chokidar')
const webpack = require('webpack')

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
    let child;

    chokidar.watch("./desktop/main.js").on("change", () => {
        const electron = require("electron")
        if (child) {
            console.log("killing old electron instance")
            child.kill('SIGHUP')
        }
        child = proc.spawn(electron, ["./desktop/main.js"], {
            stdio: 'inherit'
        })
    })
}

mix
    .setPublicPath('desktop')
    .ts('src/main/main.ts', 'main.js')
    .webpackConfig({
        target: 'electron-main',
        node: {
            __dirname: false
        },
        resolve: {
            extensions: ['.js', '.json'],
        },
    })
