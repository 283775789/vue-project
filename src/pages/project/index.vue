<template>
  <router-view />
</template>

<script>

export default {
  name: 'page-project',
  mounted () {
    document.body.classList.add('xproject')
    document.documentElement.style.backgroundColor = '#282828'
    document.body.style.backgroundColor = '#282828'
  },
  beforeDestroy () {
    document.body.classList.remove('xproject')
  }
}
</script>

<style lang="scss">
  @import "./project.scss";
</style>
