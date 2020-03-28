const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// const ExtractTextPlugin = require("extract-text-webpack-plugin")

// Production
const PROD_URL = path.join(__dirname, "./dist");
const PROD_ASSETS_DIR = PROD_URL+'/assets';

module.exports = {
    entry: './src/Index.js',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '我们开始旅行吧',
            template: "./index.html"
        })
    ],
  module: {
    rules: [
      {
　　　　　　test: /\.html$/,
　　　　　　loader: 'html-withimg-loader'
　　　　},
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(eot|woff2?|ttf|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name]-[hash:5].min.[ext]",
              limit: 3000, // size <= 3000B, 改成5000B试试?  
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
            loader:"url-loader",
            // loader: 'url-loader?limit=8192&name=assets/images/[hash:8].[name].[ext]',
            options: {
              publicPath: "asstes/images/",
              outputPath: "asstes/images/"
            },
          }
        ]
      }
    ]
  }
}