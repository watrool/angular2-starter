'use strict';
const webpackConfig = require('./webpack.config.js');
const ENV = process.env.npm_lifecycle_event;
const JiT = ENV === 'build:jit';
webpackConfig.entry.app = './src/main.aot.ts';
webpackConfig.entry.vendor = [
  '@angular/core',
  '@angular/router',
  '@angular/platform-browser',
  'reflect-metadata',
  'zone.js',
  'ts-helpers',
];
if (!JiT) {
  console.log('AoT: True');
}
module.exports = webpackConfig;
