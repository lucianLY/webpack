const merge = require('webpack-merge')
const webpackConfig = require('./webpack.common.js')
const path = require('path')

module.exports = merge(webpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '/src/'),
        compress: true,
        hot: true
    },
    output: {
        path: path.join(__dirname, "./dist"),
        filename: '[name].js'
    },
});