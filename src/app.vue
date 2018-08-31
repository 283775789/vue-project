<template>
  <div id="app">
    <!-- 文档相关 -->
    <template v-if="$route.path.indexOf('/project')===-1">
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
                <router-link
                  class="js-delegate"
                  :class="{xactive: $route.path.indexOf('/doc/guid') !== -1}"
                  to="/doc/guid">
                  <span>规范</span>
                </router-link>
              </li>
              <li>
                <router-link
                  :class="{xactive: $route.path.indexOf('/doc/css') !== -1 || $route.path.indexOf('/doc/comps') !== -1}"
                  to="/doc/css/mixins">
                  <span>组件</span>
                </router-link>
              </li>
              <li>
                <a><span>学习</span></a>
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

      <div class="tw-body">
        <div class="tw-body-inner">
          <router-view></router-view>
        </div>
      </div>

      <div class="tw-footer">Copyright © 2008-现在 天闻数媒科技（湖南）有限公司, All Rights Reserved</div>
    </template>
    <!-- /文档相关 -->

    <!-- 项目相关 -->
    <router-view v-else></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import "@style/main.scss";
</style>
