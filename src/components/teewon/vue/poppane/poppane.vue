<template>
  <div class="tw-poppane" :class="{xactive: visible, xhover: trigger === 'hover', xclick: trigger === 'click'}" @mouseover="handleHover" @mouseout="handleHover">
    <a class="tw-poppane-link" @click="handleClickPoppaneLink"><slot></slot><i class="tw-arrow xdown"></i></a>
    <transition name="xpop">
      <div ref="body" v-show="visible" class="tw-poppane-body">
        <slot name="poppane-body"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
  import popper from '@tm/popper'

  export default {
    name: 'twPoppane',
    mixins: [popper],
    props: {
      trigger: {
        type: String,
        default: 'hover'
      }
    }
  }
</script>
