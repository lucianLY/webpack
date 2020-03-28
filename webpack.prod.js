const merge = require('webpack-merge')
const webpackConfig = require('./webpack.common.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path')

module.exports = merge(webpackConfig, {
    name: "produdtion",
    devtool: 'inline-source-map',
    plugins: [
        new UglifyJSPlugin()
    ],
    output: {
        pathinfo: true,
        path: path.join(__dirname, "./dist"),
        publicPath: 'assets/',
        filename: '[name].js',
    },
})