const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.sass/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        }),
      },
      {
        test: /\.pug/,
        loaders: ['html-loader', 'pug-html-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: __dirname + '/..',
    }),
    new HtmlWebpackPlugin({
      template: 'index.pug',
    }),
    new ExtractTextPlugin('style.css'),
  ],
}
