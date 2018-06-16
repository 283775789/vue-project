# CSS编码规范

规范CSS编码

## 命名规范：采用<a href="http://www.getbem.com/" target="_blank">BEM</a>的一种变体规范(NUX命名法)
.namespace-unit.xmodifier

### 名词解释
+ 样式单元：指页面中有明显视觉边界的视觉单元或完整的功能模块(如:导航，布局结构等);
+ 功能单元：指整站通用的单一功能性样式;
+ 命名空间：指项目采用的统一css前缀,分为两种：
   + `.tw-`：表示一个样式单元前缀;
   + `.u-`：表示一个功能单元前缀。

### 命名方式
1. 样式单元：命名空间-单元名称(如: `.tw-nav` )；
2. 后代元素：样式单元-后代元素类名(如: `.tw-nav-link`  或  `.tw-nav-linkico` )。
3. 功能单元：命名空间-x功能名称(如: `.tw-xhide` )

### 修饰符
1. 使用场景：当一个样式单元类某些小细节需要修改时，加修饰符来控制需要修改部份的样式；
2. 用法限制：修饰符不能单独使用，必须配合组件或组件后代元素一起使用；
3. 命名原则：修饰符统一以x字母开头，后面跟修饰符名；
4. "x"解析：避免与引入的其它样式库的类名冲突，英文中以x开头的字母最少，为中文修饰符【修】字的拼音首字母。

### 选择器
+ 禁止使用ID选择器；
+ 慎用标签选择器,除非能够保证其唯一性；
+ 慎用后代选择器，只有当存在修饰符时，或后代为唯一的标签选择器时，才允许使用后代选择器。

### 代码示例
```
/* 头部:通用 */ 
.tw-header { height:60px; }
.tw-header-logo { padding-top:12px;  }
.tw-header-logotext { font-size:16px; }

/* 头部:小尺寸(用修饰符更改细节) */ 
.tw-header.xsmall { height:45px; }
.tw-header-logo.xsmall { padding-top:8px;  }
.tw-header-logotext.xsmall { font-size:14px; }
```

### 错误示例

| 错误写法 | 正确写法 | 错误说明 |
| ------- | -------- | --- |
| `#tw-card` | `.tw-card` | 禁止使用ID选择器 |
| `.card` | `.tw-card` | 必须有命名空间前缀 |
| `.tw-card li` | `.tw-list > li` | 污染性大，不能确定后代li选择器的唯一性 |
| `.tw-card > .tw-card-header` | `.tw-card-header` | 无意义的父类限定 |
| `.tw-card-header-text` | `.tw-card-headertext` | 样式单元所有后代元素的类名:样式单元-后代类名 |
| `.xblue` | `.tw-card.xblue` | 修饰符不能单独使用 |
| `.tw-card.blue` | `.tw-card.xblue` | 修饰符必须以字母x开头 |
| `.tw-hide {distway:none;}` | `.u-hide {distway:none;}` | 功能单元命名空间前缀必须以命名空间+"x"字母开头 |


## 验证
验证插件:	<a target="_blank" href="https://stylelint.io/">style-lint</a>
<br>
验证规范: .stylelintrc.json文件
<br>
通过标准:	style-lint插件无报错提示
## 配置方法
### 安装插件
```
npm install stylelint --save-dev
npm install stylelint-order --save-dev
```

### 根目录添加.stylelintrc.json文件
```
{
  "twugins": [
    "stylelint-order"
  ],
  "rules": {
    "indentation": 2,
    "max-empty-lines": 1,
    "color-no-invalid-hex": true,
    "function-calc-no-unspaced-operator": true,
    "string-no-newline": true,
    "property-no-unknown": true,
    "block-no-empty": true,
    "no-descending-specificity": true,
    "no-dutwicate-at-import-rules": true,
    "no-dutwicate-selectors": true,
    "no-extra-semicolons": true,
    "declaration-block-no-dutwicate-properties": [
      true,
      {
        "ignore": [
          "consecutive-dutwicates"
        ]
      }
    ],
    "function-comma-space-after": "always",
    "value-list-comma-space-after": "always",
    "media-query-list-comma-space-after": "always",
    "declaration-block-single-line-max-declarations": 1,
    "selector-class-pattern": "((tw|u)(-\\w+){1,3}$)|(x\\w+(-\\w+){0,2}$)",
    "selector-nested-pattern": "^(&:(hover|focus|active|checked|disabled|before|after))|(&.x\\w*)$",
    "max-nesting-depth": 4,
    "color-hex-case": "lower",
    "string-quotes": "double",
    "length-zero-no-unit": true,
    "declaration-block-trailing-semicolon": "always",
    "declaration-empty-line-before": "never",
    "declaration-block-semicolon-newline-after": "always",
    "declaration-colon-space-after": "always",
    "declaration-block-semicolon-space-after": "always-single-line",
    "block-closing-brace-newline-before": "always",
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-empty-line-before": "never",
    "selector-attribute-quotes": "always",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-list-comma-newline-after": "always",
    "comment-empty-line-before": [
      "always",
      {
        "ignore": [
          "after-comment",
          "stylelint-commands"
        ]
      }
    ],
    "comment-whitespace-inside": "always",
    "order/properties-order": [
      "content",
      "position",
      "z-index",
      "top",
      "right",
      "bottom",
      "left",
      "box-sizing",
      "distway",
      "flex",
      "flex-align",
      "flex-basis",
      "flex-direction",
      "flex-wrap",
      "flex-flow",
      "flex-grow",
      "flex-order",
      "flex-pack",
      "align-items",
      "align-self",
      "justify-content",
      "order",
      "float",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "line-height",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "overflow",
      "overflow-x",
      "overflow-y",
      "-webkit-overflow-scrolling",
      "-ms-overflow-x",
      "-ms-overflow-y",
      "-ms-overflow-style",
      "clip",
      "clear",
      "font",
      "font-family",
      "font-size",
      "font-style",
      "font-weight",
      "font-variant",
      "font-size-adjust",
      "font-stretch",
      "font-effect",
      "font-emphasize",
      "font-emphasize-position",
      "font-emphasize-style",
      "font-smooth",
      "hyphens",
      "color",
      "text-align",
      "text-align-last",
      "text-emphasis",
      "text-emphasis-color",
      "text-emphasis-style",
      "text-emphasis-position",
      "text-decoration",
      "text-indent",
      "text-justify",
      "text-outline",
      "-ms-text-overflow",
      "text-overflow",
      "text-overflow-ellipsis",
      "text-overflow-mode",
      "text-shadow",
      "text-transform",
      "text-wrap",
      "-webkit-text-size-adjust",
      "-ms-text-size-adjust",
      "letter-spacing",
      "-ms-word-break",
      "word-break",
      "word-spacing",
      "-ms-word-wrap",
      "word-wrap",
      "overflow-wrap",
      "tab-size",
      "white-space",
      "vertical-align",
      "list-style",
      "list-style-position",
      "list-style-type",
      "list-style-image",
      "pointer-events",
      "-ms-touch-action",
      "touch-action",
      "cursor",
      "visibility",
      "zoom",
      "table-layout",
      "empty-cells",
      "caption-side",
      "border-spacing",
      "border-collapse",
      "quotes",
      "counter-reset",
      "counter-increment",
      "resize",
      "user-select",
      "nav-index",
      "nav-up",
      "nav-right",
      "nav-down",
      "nav-left",
      "background",
      "background-color",
      "background-image",
      "filter",
      "background-repeat",
      "background-attachment",
      "background-position",
      "background-position-x",
      "background-position-y",
      "background-clip",
      "background-origin",
      "background-size",
      "border",
      "border-color",
      "border-style",
      "border-width",
      "border-top",
      "border-top-color",
      "border-top-style",
      "border-top-width",
      "border-right",
      "border-right-color",
      "border-right-style",
      "border-right-width",
      "border-bottom",
      "border-bottom-color",
      "border-bottom-style",
      "border-bottom-width",
      "border-left",
      "border-left-color",
      "border-left-style",
      "border-left-width",
      "border-radius",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-bottom-right-radius",
      "border-bottom-left-radius",
      "border-image",
      "border-image-source",
      "border-image-slice",
      "border-image-width",
      "border-image-outset",
      "border-image-repeat",
      "outline",
      "outline-width",
      "outline-style",
      "outline-color",
      "outline-offset",
      "box-shadow",
      "opacity",
      "-ms-interpolation-mode",
      "transition",
      "transition-delay",
      "transition-timing-function",
      "transition-duration",
      "transition-property",
      "transform",
      "transform-origin",
      "animation",
      "animation-name",
      "animation-duration",
      "animation-tway-state",
      "animation-timing-function",
      "animation-delay",
      "animation-iteration-count",
      "animation-direction"
    ]
  }
}
```

