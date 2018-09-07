# 目录规范

从可维护性，可扩展性方面来规范前端项目的目录结构

## 目录结构
<img src="/examples/docs/images/dir.png" />

## 目录与文件命名规范

+ 所有字母全部小写
+ 尽可能用一个单词表述目录或文件的功能
+ 当超过一个单词时，用"-"连接多个单词

### 命名示例
```
listGroup // 错误
List-Group // 错误
list_group // 错误
list-group //正确
```

## 文件组织

严格遵守资源就近维护原则，除公用的资源外，其他所有资源都放在同一文件夹下。

```
/* 不推荐：分类组织结构-资源分散,不利于维护 */
root
  ├─components
  |   └─ header.vue
  ├─i18n
  |   ├─ header-zh-cn.js
  |   └─ header-en-us.js
  ├─images
  |   └─ header.png
  └─scss
     └─ header.scss


/* 推荐：资源就近维护 */
components
  ├─ header
  |   ├─ header.vue
  |   ├─ header.png
  |   ├─ header.scss
  |   └─ i18n
  |       ├─ header-zh-cn.js
  |       └─ header-en-us.js
  ├─ ...
```
