<template>
  <div class="tw-floater xleft">
    <a v-lift name="group1" data-target="#anchor1">跳到锚点1</a>
    <a v-lift name="group1" data-target="#anchor2">跳到锚点2</a>
    <a v-lift name="group1" data-target="#anchor3">跳到锚点3</a>
    <a v-lift data-target="top">返回顶部</a>
  </div>
</template>

<style lang="scss" scoped>
  a {
    display: block;
    color: #fff;
    margin: 5px 0;
    text-align: center;
    background: $color-main;
  }

  a.xactive {
    background: $color-main-active;
  }
</style>
