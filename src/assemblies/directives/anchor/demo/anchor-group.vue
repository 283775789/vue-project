<template>
  <div class="tw-floater xleft">
    <a name="group1" v-anchor data-target="#anchor1" data-top="150">跳到锚点1</a>
    <a name="group1" v-anchor data-target="#anchor2" data-top="150">跳到锚点2</a>
    <a name="group1" v-anchor data-target="#anchor3" data-top="150">跳到锚点3</a>
    <a name="group1" v-anchor data-target="body">返回顶部</a>
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
</style>
