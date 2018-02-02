<template>
  <div class="tw-popmenu" :class="{xactive: visible, xhover: trigger === 'hover', xclick: trigger === 'click'}" @mouseover="handleHover" @mouseout="handleHover">
    <a class="tw-popmenu-link" @click="handleClickPopmenuLink"><slot></slot><i class="tw-arrow xdown"></i></a>
    <div ref="body" class="tw-popmenu-body" :class="{xhorizontal: type === 'horizontal'}">
      <slot name="popmenu-body"></slot>
    </div>
  </div>
</template>

<script>
  import popper from '@tw/mixins/popper'

  export default {
    name: 'twPopmenu',
    mixins: [popper]
  }
</script>
