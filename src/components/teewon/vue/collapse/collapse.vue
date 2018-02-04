<template>
  <div v-show="visible" class="tw-collapse">
    <slot>collapse self.</slot>
  </div>
</template>

<script>
  export default {
    name: 'twCollapse',
    props: {
      switch: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        visible: false
      }
    },
    created () {
      const vm = this
      document.addEventListener('click', function (event) {
        const collapseSwitch = document.querySelector(vm.switch)

        if (collapseSwitch.contains(event.target)) {
          vm.visible = !vm.visible
        }
      })
    }
  }
</script>
