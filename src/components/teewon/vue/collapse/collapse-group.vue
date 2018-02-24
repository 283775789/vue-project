<template>
  <div>
    <slot>collapse group.</slot>
  </div>
</template>

<script>
  export default {
    name: 'twCollapseGroup',
    data () {
      return {
        activeCollapse: null
      }
    },
    methods: {
      initCollapses () {
        const vm = this
        const children = this.$children
        children.forEach((child) => {
          if (child.$options.name === 'twCollapse') {
            child.$on('show', () => {
              if (vm.activeCollapse && vm.activeCollapse !== child) {
                vm.activeCollapse.closeCollapse()
              }
              vm.activeCollapse = child
            })

            child.$on('hide', () => {
              vm.activeCollapse === child && (vm.activeCollapse = null)
            })
          }
        })
      }
    },
    mounted () {
      this.initCollapses()
    }
  }
</script>
