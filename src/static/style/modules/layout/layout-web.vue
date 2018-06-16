<template>
  <div class="tw-demobox">
    <!-- 头部 -->
    <div class="tw-header">
      <div class="tw-header-inner">
        <h1 class="tw-header-left">
          <a href="/">
            <img src="@images/logo.png">
            <span class="tw-header-title">应用标题</span>
          </a>
        </h1>

        <div class="tw-header-body">
          头部主内容
        </div>
        <div class="tw-header-right">
          头部右侧内容
        </div>
      </div>
    </div>
    <!-- 头部 -->

    <!-- 主体 -->
    <div class="tw-body">
      <div class="tw-body-inner">
        页面主内容
      </div>
    </div>
    <!-- /主体 -->

    <!-- 页脚 -->
    <tw-footer />
    <!-- /页脚 -->
  </div>
</template>

<style lang="scss" scoped>
  .tw-demobox {
    position: relative;
    padding-bottom: 50px;
  }

  .tw-header-inner,
  .tw-body-inner {
    max-width: 95%;
  }

  .tw-body-inner {
    border: 1px dashed #ccc;
  }
</style>
