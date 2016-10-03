'use strict';
const webpackConfig = require('./webpack.config.js');
webpackConfig.entry.app = './src/main.aot.ts';
webpackConfig.entry.vendor = [
  '@angular/core',
  '@angular/router',
  '@angular/platform-browser',
  'reflect-metadata',
  'zone.js',
  'ts-helpers',
];
module.exports = webpackConfig;
