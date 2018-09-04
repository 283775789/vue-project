<template>
  <div v-fix:bottom class="tw-fixdemo">底部固显用[v-fix:bottom]</div>
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
