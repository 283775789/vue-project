<template>
  <div>
    <a class="tw-popswitch js-popbtn3">
      <span>下拉菜单</span>
    </a>
    <a class="float-right js-postion">位置元素</a>
    <tw-poppane
      switch=".js-popbtn3"
      positionElement=".js-postion">
      <div>下拉菜单内容</div>
    </tw-poppane>
  </div>
</template>
