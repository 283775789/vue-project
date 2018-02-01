<template>
  <div class="tw-poppane" :class="{xactive: visible, xhover: trigger === 'hover', xclick: trigger === 'click'}" @mouseover="handleHover" @mouseout="handleHover">
    <a class="tw-poppane-link" @click="handleClickPoppaneLink"><slot></slot><i class="tw-arrow xdown"></i></a>
    <div ref="body" class="tw-poppane-body" :class="{xhorizontal: type === 'horizontal'}">
      <slot name="poppane-body"></slot>
    </div>
  </div>
</template>

<script>
  import popper from '@tm/popper'

  export default {
    name: 'twPoppane',
    mixins: [popper]
  }
</script>
