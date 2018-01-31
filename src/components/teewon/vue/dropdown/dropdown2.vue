<template>
  <div class="tw-dropdown" :class="{xactive: visible, xhover: trigger === 'hover', xclick: trigger === 'click'}" @mouseover="handleHover" @mouseout="handleHover">
    <a class="tw-dropdown-link" @click="handleClickDropdownLink"><slot></slot><i class="tw-arrow xdown"></i></a>
    <transition name="xslide">
      <div ref="body" v-show="visible" class="tw-dropdown-body">
        <slot name="dropdown-body"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
  import popper from '@tm/popper'

  export default {
    name: 'twDropdown',
    mixins: [popper],
    props: {
      trigger: {
        type: String,
        default: 'hover'
      }
    }
  }
</script>
