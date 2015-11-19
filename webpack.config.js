var Clean = require('clean-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
var assetsPath = path.resolve(__dirname, './dist');

module.exports = {
  entry: './app/client.js',
  output: { path: assetsPath, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {stage: 0}
      }
    ]
  },
  resolve: {
    modulesDirectories: [
      'app',
      'node_modules'
    ],
    extensions: ['', '.json', '.js']
  },
  plugins: [
    new Clean(['dist']),
    new webpack.DefinePlugin({
      __SERVER__: false
    })
  ]
}
