<template>
  <ul class="tw-menu">
    <tw-menu-item class="tw-menu-item" v-for="item in items" :value="item.value" :text="item.text" :key="item.key">
      <slot v-bind="item">{{ item.text }}</slot>
    </tw-menu-item>
  </ul>
</template>

<script>
import MenuItem from './menu-item'

export default {
  name: 'twMenu',
  props: {
    items: {
      type: Array,
      default: []
    }
  },
  components: {
    'twMenuItem': MenuItem
  }
}
</script>
