# 固定显示区域

给任何元素添加指令[v-fix]，会使指令元素成为固定显示区域组件，使用该组件注意点:

该组件在fix时会对元素设置[position:fixed;]属性，有可能影响其它的元素的布局，所以指令在fix时会插入一个相同宽高的占位元素，这在大多数情况下会运行良好，但并不一定满足所有情况，<b>当样式出现问题时,请手动调整样式，占位元素会多一个[xplaceholder]的class, 而指令元素在被fix时，会添加[xfixed]的class，可用于定制样式。</b>

# 指令

| 指令项 | 说明 | 备注 |
| ----- | ----- | ----- |
| v-fix | 在头部固定显示,头部偏移量为0px | - |
| v-fix="100" | 在头部固定显示,头部偏移量为100px | - |
| v-fix:bottom | 在底部固定显示,底部偏移量为0px | - |
| v-fix="100" | 在底部固定显示,底部偏移量为100px | - |

# 示例-顶部固显

{{fix}}

<div style="height: 1000px;"></div>

# 示例-底部固显

{{fix-bottom}}