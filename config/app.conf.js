// 默认host为本机ipv4地址，以方便在内网中浏览前端页面
const host = require('./utils').getIp() || 'localhost'

module.exports = {
  // 多个入口请增加entry对象的键值对【key:value】
  // 每个key将生成对应的html文件【key.html】
  entry: {
    main: ['./src/main.js'],
    project: ['./src/project.js']
  },
  dev: {
    host: host,
    port: 80,
    // 指定devServer启动时打开的入口页
    openPage: 'main.html',
    cssSourceMap: true
  },
  build: {
    publicPath: '../'
  }
}
