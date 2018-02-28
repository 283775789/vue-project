const merge = require('webpack-merge')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.common.conf')
const config = require('./app.conf')
const cssSourceMap = config.dev.cssSourceMap
const portfinder = require('portfinder')

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: cssSourceMap
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: cssSourceMap
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: cssSourceMap
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: cssSourceMap
            }
          }
        ]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    host: config.dev.host,
    open: true,
    openPage: `${config.dev.openPage}`,
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = config.dev.port
  // 当指定端口(默认80)被占用时,获取一个可用的端口
  portfinder.getPort((err, port) => {
    if (!err) {
      devWebpackConfig.devServer.port = port
      resolve(devWebpackConfig)
    }
  })
})
