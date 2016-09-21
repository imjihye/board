'use strict';

var webpack = require('webpack');

var config = {
  entry: [
    './src/index.js',
    'webpack-dev-server/client?http://localhost:8123', // webpackDevServer host adn port
    'webpack/hot/only-dev-server' // only prevents reload on syntax errors
  ],
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  devServer: {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    historyApiFallback: true,
    contentBase: './dist',
    proxy: {
      "*": "http://localhost:3000"
    }
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel?' + JSON.stringify({
          cacheDirectory: true,
          presets: ['stage-0', 'es2015', 'react']
        })],
        exclude: /node_modules/
      }
    ]
  }
}

module.exports = config;
