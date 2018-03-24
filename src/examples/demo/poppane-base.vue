<template>
  <div>
    <a class="tw-popswitch js-popbtn"><span>下拉菜单</span></a>
    <tw-poppane switch=".js-popbtn">
      <div>下拉菜单内容</div>
    </tw-poppane>
  </div>
</template>

<script>
  export default {
    name: 'twPoppaneBase'
  }
</script>
