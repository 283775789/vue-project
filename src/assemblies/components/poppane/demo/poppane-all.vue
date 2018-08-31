<template>
  <div>
    <a class="tw-popswitch js-popbtn2">
      <span>下拉菜单</span>
    </a>
    <tw-poppane
      class="js-position"
      switch=".js-popbtn2"
      placement="top-left"
      positionElement=".js-popbtn2"
      relatedMinWidth="150%">
      <div>下拉菜单内容</div>
    </tw-poppane>
  </div>
</template>
