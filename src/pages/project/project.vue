<template>
  <div class="tw-project">
    <!-- 设计器头部 -->
    <div class="tw-project-header">
      <a @click="returnHome" v-if="false">
        <img class="tw-project-header-logo" src="@images/logo.png" alt="SAP">
      </a>
      <div class="tw-project-header-menu">
        <template v-if="$route.path.indexOf('/project/new')===-1">
          <a>项目(P)</a>
          <a>模板(T)</a>
          <router-link to="/project/new">新项目(N)</router-link>
        </template>
        <template v-else>
          <a>保存项目(B)</a>
          <a>保存为模板(M)</a>
          <a>项目设置()</a>
          <a>选择组件(C)</a>
          <a>全局样式(G)</a>
          <a @click="cancelNewProject">取消</a>
        </template>
      </div>
      <div class="tw-project-header-right">
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

    <router-view ref="child" />
  </div>
</template>

<script>
export default {
  name: 'page-project',
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
    cancelNewProject () {
      // undone: 需要提示
      this.$router.push('/project')
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
  },
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
