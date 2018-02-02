<template>
  <div class="tw-popmenu" :class="[{xactive: visible, xhover: trigger === 'hover', xclick: trigger === 'click'}, 'x'+ placement]" @mouseover="handleHover" @mouseout="handleHover">
    <a class="tw-popmenu-link" @click="handleClickPopmenuLink"><slot></slot><i class="tw-arrow xdown"></i></a>
    <transition name="xpop">
      <div ref="body" v-show="visible" class="tw-poppane" :style="placementStyle" @click="name">
        <slot name="popmenu-body"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
  import popper from '@tw/mixins/popper'

  export default {
    name: 'twPopmenu',
    mixins: [popper],
    methods: {
      name (e) {
        console.log(1)
      }
    }
  }
</script>
