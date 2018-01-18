const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = merge(common, {
  plugins: [
    new ExtractTextPlugin('../docs/style.css'),
  ]
})
