# 编辑器设置

统一前端的编码工具，让所有前端工程师有一样的格式化代码

## 编辑器
天闻前端的代码编辑器为：[VS Code](https://code.visualstudio.com/)

## 编辑器插件
+ EditorConfig for VS Code
+ ESLint
+ stylelint
+ SCSS IntelliSense
+ IntelliSense for CSS class names in HTML
+ Vetur
+ Vue VSCode Snippets
+ Vue 2 Snippets

## VSCode设置
按Ctrol+P打开文件快捷搜索框，输入settings.json,添加以下代码，会自动检测JS，CSS，html是否符合代码规范，不符合规范，将自动修复：

```
{
    "editor.wordWrap": "on",
    "editor.fontSize": 12,
    "eslint.autoFixOnSave": true,
    "css.validate": false,
    "scss.validate": false,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "html",
            "autoFix": true
        },
        {
            "language": "vue",
            "autoFix": true
        }
    ],
    "editor.quickSuggestions": {
        "other": true,
        "comments": true,
        "strings": true
    },
    "html-css-class-completion.excludeGlobPattern": "**/node_modules",
    "html-css-class-completion.includeGlobPattern": "**/*.{css,scss,html}",
    "scss.scannerExclude": [
        "**/.git",
        "**/node_modules",
        "**/bower_components"
    ],
    "scss.scannerDepth": 5,
    "workbench.colorTheme": "Dracula",
    "stylelint.configOverrides": {
        "ignoreFiles": [
            "**/dist/**",
            "**/_sprite.scss",
            "**/_reset-vendor.scss",
            "**/*.vue"
        ]
    },
    "emmet.includeLanguages": {
        "vue-html": "html"
    },
    "window.zoomLevel": 0
}
```

## 文档格式规范
+ 项目根目录添加.editorconfig文件
+ 为使Window、Mac、Linux下有相同的文件格式，设置值如下：
<br>
<br>

| 项 | 值 |
| ----- | ----- |
| 文档编码 | utf-8 |
| 代码缩进 | 2个空格 |
| 行尾 | 换行符lf(无回车cr) |
| 文档最后保留一个空白行 | ture |

```
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true

```
