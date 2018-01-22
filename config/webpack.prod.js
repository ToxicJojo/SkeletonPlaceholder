
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
  plugins: [
    new OptimizeCssAssetsPlugin(),
  ],
})
