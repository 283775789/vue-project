<template>
  <div class="tw-dropdown" :class="{xactive: visible, xhover: trigger === 'hover', xclick: trigger === 'click'}" @mouseover="handleHover" @mouseout="handleHover">
    <a class="tw-dropdown-link" @click="handleClickDropdownLink"><slot></slot><i class="tw-arrow xdown"></i></a>
    <div ref="body" class="tw-dropdown-body" :class="{xhorizontal: type === 'horizontal'}">
      <slot name="dropdown-body"></slot>
    </div>
  </div>
</template>

<script>
  import popper from '@tm/popper'

  export default {
    name: 'twDropdown',
    mixins: [popper]
  }
</script>
