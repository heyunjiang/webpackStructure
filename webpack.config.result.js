var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'jk');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEM_PATH = path.resolve(ROOT_PATH, 'templates');

module.exports = {
  entry: {
    jk:  path.resolve(APP_PATH, 'index.js'),
    car:  path.resolve(APP_PATH, 'mycar.js')
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: APP_PATH
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=40000'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: APP_PATH,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new HtmlwebpackPlugin({
      title: '眷客',
      template: path.resolve(TEM_PATH, 'index.html'),
      filename: 'index.html',
      chunks: ['jk'],
      inject: 'body'
    }),
    new HtmlwebpackPlugin({
      title: '购物车',
      template: path.resolve(TEM_PATH, 'index.html'),
      filename: 'car.html',
      chunks: ['car'],
      inject: 'body'
    })
    ]
};