const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpackConfig = require('./webpack.common.js')
const path = require('path')

const CONFIG = {
    bundleDir: path.join(__dirname, 'src/'),
    mainIndex: 'index.html'
  }

module.exports = merge(webpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '/public/'),
        publicPath: "/",
        compress: true,
        hot: true
    },
    output: {
        path: path.join(__dirname, "./dist"),
        publicPath: '/',
        publicPath: '/assets/', // 相对于服务(server-relative)
        publicPath: 'assets/images', // 相对于 HTML 页面
        publicPath: '../assets/images', // 相对于 HTML 页面
        publicPath: '', // 相对于 HTML 页面（目录相同）
        filename: '[name].js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '我们开始旅行吧',
            template: "./index.html",
            inject: true,
        })
    ],
});