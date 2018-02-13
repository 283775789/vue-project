<template>
  <a class="tw-popswitch" :class="[{xopen: visible, xdisabled:disabled, xhover: trigger === 'hover', xclick: trigger === 'click'},['x'+ placement]]" @click="handleClickPoppaneLink" @mouseover="handleHover" @mouseout="handleHover">
    <slot name="link"></slot>
    <slot name="arrow"><i class="tw-arrow" :class="[({a:'xdown',t:'xdown',r:'xright',b:'xdown',l:'xleft'})[placement.substring(0,1)]]"></i></slot>
    <transition name="xpop">
      <div ref="body" v-show="visible" class="tw-poppane" :class="['x'+ placement]" :style="placementStyle" @mouseover="handleHover" @mouseout="handleHover">
        <slot name="body"></slot>
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
