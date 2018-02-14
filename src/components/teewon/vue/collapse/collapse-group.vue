<template>
  <div @show="showMethod">
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
        const children = this.$children
        children.forEach((child) => {
          if (child.$options.name === 'twCollapse') {
            child.$on('show', () => {

            })
          }
        })
      }
    },
    mounted () {
      const children = this.$children
      children.forEach((child) => {

      })
    }
  }
</script>
