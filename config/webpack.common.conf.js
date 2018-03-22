const path = require('path')
const config = require('./app.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const webpackConfig = {
  context: path.resolve(__dirname, '../'),
  entry: config.entry,
  output: {
    path: resolve('dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      '@tw': resolve('src/components/teewon'),
      '@css': resolve('src/static/css'),
      '@font': resolve('src/static/font'),
      '@pages': resolve('src/pages'),
      '@images': resolve('src/static/images')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: 'static/images/[name]-[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: 'static/fonts/[name]-[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: 'static/media/[name]-[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: []
}

// 按入口文件输出相对应的html文件
for (const entry in config.entry) {
  const option = {
    filename: `html/${entry}.html`,
    template: './src/html/index.html',
    chunks: ['manifest', 'vendor', `${entry}`]
  }

  webpackConfig.plugins.push(new HtmlWebpackPlugin(option))
}

module.exports = webpackConfig
