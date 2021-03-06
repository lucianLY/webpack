const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'


module.exports = {
    entry: './src/Index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // 这里可以指定一个 publicPath
                // 默认使用 webpackOptions.output中的publicPath
                // publicPath的配置，和plugins中设置的filename和chunkFilename的名字有关
                // 如果打包后，background属性中的图片显示不出来，请检查publicPath的配置是否有误
                publicPath: './',  
                // publicPath: devMode ? './' : '../',   // 根据不同环境指定不同的publicPath
                hmr: devMode, // 仅dev环境启用HMR功能
              },
            },
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(eot|woff2?|ttf|svg)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name]-[hash:5].min.[ext]",
                limit: 1024, 
                publicPath: "asstes/fonts/",
                outputPath: "asstes/fonts/"
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader:"file-loader",
              // loader: 'url-loader?limit=8192&name=assets/images/[hash:8].[name].[ext]',
              options: {
                esModule: false,
                name: "./[hash:8].[ext]",
                limit: 1024, 
                outputPath: "./asstes/images/",
                publicPath: "asstes/images/",
                publicPath: "../asstes/images/",
              },
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[name].[hash:5].css',
        chunkFilename: 'css/[id].[hash:5].css'
      })
    ]
}