
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier')


module.exports = merge(common, {
  plugins: [
    new WebpackBuildNotifierPlugin({
      title: "BoneCss Webpack Build",
      suppressSuccess: true
    }),
  ],
})
