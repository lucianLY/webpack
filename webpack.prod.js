const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpackConfig = require('./webpack.common.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

module.exports = merge(webpackConfig, {
    name: "production",
    devtool: 'inline-source-map',
    plugins: [
        new UglifyJSPlugin()
    ],
    output: {
        path: path.join(__dirname, "./dist"),
        filename: '[name].[hash:5].js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '我们开始旅行吧',
            template: "./index.html",
            inject: true,
        })
    ],
})