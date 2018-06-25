<template>
  <div id="app">
    <div class="design-header" v-if="$route.path==='/project'">
      <router-link to="/">
        <img class="design-header-logo" src="@images/logo.png" alt="SAP">
      </router-link>
      <div class="design-header-menu">
        <a>项目(P)</a>
        <a>模板(T)</a>
        <a>新项目(N)</a>
        <a>保存项目(B)</a>
        <a>保存为模板(M)</a>
        <a>项目设置(C)</a>
        <a>全局样式(G)</a>
        <a>取消</a>
      </div>
      <a class="tw-ico xdc design-header-close"></a>
    </div>

    <template v-if="$route.path!=='/project'">
      <div class="tw-header">
        <div class="tw-header-inner">

          <h1 class="tw-header-left">
            <router-link to="/">
              <img src="@images/logo.png">
            </router-link>
          </h1>

          <div class="tw-header-body">
            <ul class="tw-nav xheader xhorizontal">
              <li>
                <router-link class="js-delegate" to="/doc/guid">
                  <span>规范</span>
                </router-link>
              </li>
              <li>
                <router-link to="/doc/css/mixins">
                  <span>组件</span>
                </router-link>
              </li>
              <li @click="fullScreen">
                <router-link to="/project">
                  <span>项目</span>
                </router-link>
              </li>
            </ul>
          </div>

          <div class="tw-header-right">
            <a class="tw-popswitch xheader xcenter js-rightmenu">右侧内容</a>
            <tw-poppane switch=".js-rightmenu">
              <ul class="tw-header-menu">
                <li><a>菜单项1菜单项1</a></li>
                <li><a>菜单项2</a></li>
                <li><a>菜单项3</a></li>
              </ul>
            </tw-poppane>
          </div>
        </div>
      </div>

      <div class="tw-body" v-tw-to-bottom="80">
        <div class="tw-body-inner">
          <router-view></router-view>
        </div>
      </div>

      <tw-footer @click.native.stop="demoMethod"></tw-footer>
    </template>

    <router-view v-else></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    fullScreen (e) {
      // 全屏浏览器
      const element = e.currentTarget
      const requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen
      if (requestMethod) {
        requestMethod.call(element)
      }
    }
  }
}
</script>

<style lang="scss">
  @import "@style/main.scss";
</style>
