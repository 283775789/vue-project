# SCSS相关

全局可用的mixins, functions, 及功能样式

## mixins

### 媒体查询相关
媒体查询关键字与断点为：pc: 1200px, lpad: 992px, pad: 768px, lphone: 554px, phone: 0
<br>

| 名称 | 描述 |
| ----- | ----- |
| media-down($key[, $breakpoints]) | 生成的样式小于等于媒体关键字所在范围 |
| media-up($key[, $breakpoints]) | 生成的样式大于等于媒体关键字所在范围 |
| media-only($key[, $breakpoints]) | 生成的样式仅包含在媒体关键字所在范围 |
| make-container([, $breakpoints]) | 生成内容包含容器 |

用法举例：
```
/* 在手机端隐藏div.tw-box */
.tw-box {
  @include media-down(lphone) {
    display: none;
  }
}
```

生成的CSS为:
```
@media (max-width: 767px) {
  .tw-box {
      display: none;
  }
}
```

### 工具类
| 名称 | 描述 |
| ----- | ----- |
| cutoff | 单行字符超出省略 |
| center-y | 垂直居中对齐 |
| clearfix | 清除当前元素浮动 |
| disable | 生成禁用样式 |
| triangle([$direction,$size]) | 生成小三角形<br>$direction:[top,left,bottom,right] |


## 组件说明
在前台系统中，头部内容分为两种尺寸：
1. 浏览器大于1200px分辨率时，内容宽度为:1200px
2. 浏览器小于1200px分辨率时，内容宽度为:960px

## 基本用法

## data属性

| 列标题 | 列标题 | 列标题 |
| ----- | ----- | ----- |
| 内容 | 内容 | 内容 |

## 事件

| 列标题 | 列标题 | 列标题 |
| ----- | ----- | ----- |
| 内容 | 内容 | 内容 |

## 方法

| 列标题 | 列标题 | 列标题 |
| ----- | ----- | ----- |
| 内容 | 内容 | 内容 |

