'use strict';

var config = {
  entry: ['./src/main.js'],
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: {
        presets:['react', 'es2015', 'stage-0']
        }
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules']
  }
};
module.exports = config;
