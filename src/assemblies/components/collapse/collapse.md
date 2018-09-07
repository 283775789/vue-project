# 折叠面板

所有折叠式控件的基础控件，提供灵活的折叠面板功能。

## 折叠面板

{{collapse}}

## 折叠面板组

+ [tw-collapse-group]里面的元素可以任意定制，其包含的所有tw-collapse会自动添加折叠面板组的行为。
+ 可以用[js-close]指定一个折叠面板组的全局开关，来关闭其它已经打开的折叠面板。
<br>
<br>

{{collapse-group}}

## collapse属性

| <div style="width: 120px;">属性名称</div> | 说明 | 类型 | 必须 | 默认值 | 可选值 |
| ----- | ----- | ----- | ----- | ----- | ----- |
| switch | 指定切换折叠面板的按钮 | String | yes | - | css选择器 |
| defaultOpen | 指定最初的折叠状态 | Boolean | no | false | - |

## collapse-group属性

| <div style="width: 120px;">属性名称</div> | 说明 | 类型 | 必须 | 默认值 | 可选值 |
| ----- | ----- | ----- | ----- | ----- | ----- |
| disableToggleSelf | 是否禁止分组内的折叠面板切换自身的折叠状态 | Boolean | no | false | - |


