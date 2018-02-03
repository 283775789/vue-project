<template>
  <a class="tw-popbtn" :class="[{xopen: visible, xhover: trigger === 'hover', xclick: trigger === 'click'}]" @click="handleClickPoppaneLink" @mouseover="handleHover" @mouseout="handleHover">
    <slot></slot><i class="tw-arrow xdown"></i>
    <transition name="xpop">
      <div ref="body" v-show="visible" class="tw-poppane" :class="['x'+ placement]" :style="placementStyle" @mouseover="handleHover" @mouseout="handleHover">
        <slot name="poppane-body"></slot>
      </div>
    </transition>
  </a>
</template>

<script>
  import popper from '@tw/mixins/popper'

  export default {
    name: 'twPoppane',
    mixins: [popper]
  }
</script>
