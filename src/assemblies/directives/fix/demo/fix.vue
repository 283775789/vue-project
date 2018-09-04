<template>
  <div v-fix class="tw-fixdemo">默认为顶部固显区域</div>
</template>

<style lang="scss" scoped>
  .tw-fixdemo {
    line-height: 80px;
    text-align: center;
    background: rgba(255,255,255,.95);
    border: 1px dashed #ccc;
  }

  .tw-fixdemo.xfixed {
    z-index: 10000;
  }
</style>
