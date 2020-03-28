const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 尝试使用环境变量，否则使用根路径
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  mode: 'development',
  entry: './src/Index.js',
  // assetsRoot: path.resolve(__dirname,'./dist'),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '/src/'),
    compress: true,
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'react',
      template: "./index.html"
    })
  ],
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
            loader: 'url-loader?limit=8192&name=assets/images/[hash:8].[name].[ext]',
            options: {
              name: 'images/[name].[hash:8].[ext]',
              limit: 8192,
              outputPath: "asstes/",
              publicPath: "./asstes"
            },
          }
        ]
      }
    ]
  }
}
