<template>
  <router-view />
</template>

<script>

export default {
  name: 'page-project',
  mounted () {
    document.body.classList.add('xproject')
  },
  beforeDestroy () {
    document.body.classList.remove('xproject')
  }
}
</script>

<style lang="scss">
  @import "./project.scss";
</style>
