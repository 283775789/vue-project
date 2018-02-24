<template>
  <div>
    <slot>collapse group.</slot>
  </div>
</template>

<script>
  import {delegate} from '@tw/utils/event'

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
      },
      initInactiveBtn () {
        const vm = this

        delegate(vm.$el, 'click.' + this._uid, '.jst-close', () => {
          const activeCollapse = vm.activeCollapse

          if (activeCollapse) {
            activeCollapse.closeCollapse()
            vm.activeCollapse = null
          }
        })
      }
    },
    mounted () {
      this.initCollapses()
      this.initInactiveBtn()
    }
  }
</script>
