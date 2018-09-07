# 项目文档

前后端分离项目规范。

# 根目录Readme.md

因前后端分离项目与各个端都会有交互，启动一个项目需要修改多个配置项，所有前后端分离项目，都必须在根目录下有readme.md文档做详细说明。

1. 项目的接口文档地址、需求地址、高保真地址。

2. 启动开发环境的配置向导。

3. 生产打包的配置向导。

4. api验证方式及配置方式。

5. 与接口联调的注意事项。

6. 使用的全局变量及原因。

7. 布署方面的要求，如是否需要服务器设置跨域，需要开放哪些跨域选项。

# 项目配置文件

+ 打包配置相关全部在根目录的/config/index.js中配置

+ 系统级配置项全部在/src/config/index.js中配置，不推荐在分散的文件中配置各个文件的全局配置项。

```
/* -------------------- 不推荐的方式: 配置项分散在多个文件中 -------------------- */

// 文件: i18n.js
import VueI18n from 'vue-i18n'
import lang from '@/i18n'

const locale = 'zh_CN'

const i18n = new VueI18n({
  locale: locale,
  messages: lang
})

// 文件: api.js
const apiURL = 'http://www.hostname.com:8080/api'

axios.defaults.baseURL = baseURL

// 文件: ...

/* -------------------- 推荐的方式: 所有配置项在一个文件中 -------------------- */

// 文件: /src/config/index.js
export default {
  // 系统默认语言
  locale = 'zh_CN',
  // api前缀
  apiURL = 'http://www.hostname.com:8080/api'
}

// 文件: i18n.js
import VueI18n from 'vue-i18n'
import lang from '@/i18n'
import config from '@/config'

const locale = 'zh_CN'

const i18n = new VueI18n({
  locale: config.locale,
  messages: lang
})

// 文件: api.js
import config from '@/config'
axios.defaults.baseURL = config.apiURL

// 文件: ...
import config from '@/config'

```

# 严格用Vuex来进行状态管理

如无特殊原因，所有的状态管理全部用Vuex来维护，禁止使用全局变量来维护状态，当因为某种原因需要定义一个全局变量时，必须在readme.md文件中进行说明。
