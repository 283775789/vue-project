# html编码规范

使用HTML5

## HTML模板
```
...
```

## 语义
按语义使用HTML标签

```
<!-- 不推荐 -->
<div onclick="goToRecommendations();">All recommendations</div>
```

```
<!-- 推荐 -->
<a href="recommendations/">All recommendations</a>
```

## 优化长代码行可读性(可选)

```
<!-- 不推荐 -->
<tw-component v-if="visible" class="xsmall" data="users" @change="getUsers"></tw-component>

<!-- 推荐：示例 1 -->
<tw-component 
  v-if="visible"
  class="xsmall"
  data="users"
  @change="getUsers">
</tw-component>

<!-- 推荐：示例 2 -->
<tw-component v-if="visible"
              class="xsmall"
              data="users"
              @change="getUsers">
</tw-component>
```

