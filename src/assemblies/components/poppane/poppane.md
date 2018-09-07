# 弹出面板(下拉列表)

所有弹出式列表控件的基础控件，提供极其灵活的弹出式面板功能。

## 弹出面板-基本

{{poppane}}

## 弹出面板-全部属性

{{poppane-all}}

## 弹出面板-指定弹出位置相关元素

弹出面板的弹出位置可以用[positionElement]指定一个选择器，从而可以关联到任何元素。

{{poppane-position}}

## 属性

| <div style="width: 120px;">属性名称</div> | 说明 | 类型 | 必须 | 默认值 | 可选值 |
| ----- | ----- | ----- | ----- | ----- | ----- |
| switch | 指定打开弹出面板的按钮 | String | yes | - | css选择器 |
| placement | 指定从哪个位置弹出面板 | String | no | auto | top-left,<br>top-center,<br>top-right,<br>rig-httop,<br>right-center,<br>right-bottom, bottom-left,<br>bottom-center,<br>bottom-right,<br>left-top,<br>left-center,<br>left-bottom |
| positionElement | 指定参照哪个元素定位 | 指定 | no | auto | css选择器 |
| relatedMinWidth | 指定弹出面板相对于定位元素的宽度百分比 | String | no | 100% | 百分比 |
| noArrow | 是否添加箭头 | Boolean | no | false | - |
| disabled | 是否禁用 | Boolean | no | false | - |

## 事件

| 事件名称 | 说明 | 参数 |
| ----- | ----- | ----- |
| show | 面板显示前触发 | - |
| shown | 面板显示后触发 | - |
| hide | 面板隐藏前触发 | - |
| hidden | 面板隐藏后触发 | - |


