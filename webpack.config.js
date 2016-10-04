'use strict';

const path = require('path');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');
const ENV = process.env.npm_lifecycle_event;
const AoT = ENV === 'build:aot';
if (!AoT) {
  console.log('AoT: False');
}
module.exports = {
  entry: {
    app: './src/main.ts',
    // and vendor files separate
    vendor: [
      '@angular/core',
      '@angular/router',
      '@angular/platform-browser',
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },

  devtool: process.env.NODE_ENV === 'production' ?
    'source-map' :
    'inline-source-map',

  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js'],
  },

  plugins: plugins,

  devServer: {
    historyApiFallback: { index: '/' },
    proxy: {},
  },

  module: {
    rules: [
      loaders.angular,
      loaders.tslint,
      loaders.ts,
      loaders.angular2_template,
      loaders.html,
      loaders.css,
      loaders.svg,
      loaders.eot,
      loaders.woff,
      loaders.woff2,
      loaders.ttf,
    ],
  },
};
