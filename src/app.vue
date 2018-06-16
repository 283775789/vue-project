<template>
  <div id="app">

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
              <router-link to="/doc/comps/scss">
                <span>组件</span>
              </router-link>
            </li>
            <li>
              <a class="tw-popswitch xheader js-projects"
                 :class="{xactive:/^\/project-/.test($route.path)}">
                <span>项目</span>
              </a>
              <tw-poppane
                class="js-position"
                switch=".js-projects">
                <ul class="tw-header-menu">
                    <li>
                      <router-link to="/project-new">新项目</router-link>
                    </li>
                    <li>
                      <a>项目库</a>
                    </li>
                </ul>
              </tw-poppane>
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
