<template>
  <router-view />
</template>

<script>

export default {
  name: 'page-project',
  methods: {
    setProjectStyle () {
      document.body.classList.add('xproject')
      document.documentElement.style.backgroundColor = '#282828'
      document.body.style.backgroundColor = '#282828'
    },
    recoverNormalStyle () {
      document.body.classList.remove('xproject')
      document.documentElement.style.backgroundColor = ''
      document.body.style.backgroundColor = ''
    }
  },
  mounted () {
    this.setProjectStyle()
  },
  beforeDestroy () {
    this.recoverNormalStyle()
  }
}
</script>

<style lang="scss">
  @import "./project.scss";
</style>
