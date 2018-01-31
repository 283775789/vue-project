const path = require('path')
const config = require('./app.conf')
const merge = require('webpack-merge')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.common.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')

const buildWebpackConfig = merge(baseWebpackConfig, {
  output: {
    filename: 'js/[name].[chunkhash:8].js',
    publicPath: config.build.publicPath
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?sourceMap&minimize!postcss-loader?sourceMap!sass-loader?sourceMap'
        })
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // new UglifyWebpackPlugin(),
    new ExtractTextPlugin('static/css/main.[contenthash:8].css'),
    // 提取所有位于node_modules文件夹的项目依赖到vendor
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context && module.context.includes('node_modules')
      }
    }),
    // 提取webpack的runtime及module相关输出，避免每次更改项目文件影响vendor的输出
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    })
  ]
})

module.exports = buildWebpackConfig
