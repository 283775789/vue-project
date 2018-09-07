# api规范

前后端分离项目，因前后端代码已经完全分离，api文档在项目中的作用变得很重要，往往需要项目开始，api文档先行。

# api设计原则

+ 数据响应: 只提供页面需要的数据，而不是反过来，提供一堆数据由页面挑选。

+ api规范: 前端界现在普通喜欢使用RESTful Api 规范，当然开发也可以使用内部规范。

+ api文档: 前端请直接拒绝任何无api文档的接口，因为在前后端分离项目中，无文档的接口会给其它的前端开发人员带来极高的维护成本。

# api文档范例

| 字段名 | 类型 | 是否必传 | 说明 | 备注 |
| ----- | ----- | ----- | ----- | ----- |
| id | string | 是 | string | - |

# 前端apiURL使用

```
/* ------------------ 不推荐: 前端将apiURL重新定义一次 ------------------ */
// 文件: api.js
axios.defaults.baseURL = 'http://192.168.102.241/api'
const getUser = '/api/manager/user'

// 文件: 某页面
axios.get(api.getUser).then(function(response){
  // ...
})

/* ------------------ 推荐: 保持与后端定义的url一致,减少沟通成本 ------------------ */
// 文件: api.js
axios.defaults.baseURL = 'http://192.168.102.241/api'

// 文件: 某页面
axios.get('/manager/user').then(function(response){
  // ...
})

/* ------------------ 不推荐: 同一系统出现多种不同的命名方式 ------------------ */
apiURL = '/api/getUsers'
apiURL = '/api/queryUserList'
apiURL = '/api/getStudentList'
apiURL = '/api/fetchUserArray'

```
