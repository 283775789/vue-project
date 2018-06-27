<template>
  <!-- 设计器头部 -->
  <div class="tw-design-header">
    <a @click="returnHome" v-if="false">
      <img class="tw-design-header-logo" src="@images/logo.png" alt="SAP">
    </a>
    <div class="tw-design-header-menu">
      <slot></slot>
    </div>
    <div class="tw-design-header-right">
      <a class="tw-ico xdm"
          @click="toggleFullScreen"
          :class="{xfull:maxScreen}">
      </a>
      <a class="tw-ico xdc"
          @click="closeProject">
      </a>
    </div>
  </div>
  <!-- /设计器头部 -->
</template>

<script>
export default {
  name: 'tw-design-header',
  data () {
    return {
      maxScreen: true
    }
  },
  methods: {
    // 返回主页
    returnHome () {
      this.quitFullScreen()
      this.$router.push('/')
    },
    // 全屏
    fullScreen () {
      const element = document.documentElement
      const requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen
      if (requestMethod) {
        requestMethod.call(element)
      }
      this.maxScreen = true
    },
    // 退出全屏
    quitFullScreen () {
      const element = document
      const exitMethod = element.exitFullscreen || element.mozCancelFullScreen || element.webkitCancelFullScreen
      if (exitMethod) {
        exitMethod.call(element)
      }
      this.maxScreen = false
    },
    // 切换全屏
    toggleFullScreen () {
      if (this.maxScreen) {
        this.quitFullScreen()
      } else {
        this.fullScreen()
      }
    },
    // 返回文档页
    closeProject () {
      // undone: 需要提示
      this.quitFullScreen()

      debugger
      const prevPath = window.sessionStorage.getItem('prevPath')
      if (prevPath) {
        this.$router.push(prevPath)
      }
    }
  }
}
</script>

<style lang="scss">
  @import "./style.scss";
</style>
