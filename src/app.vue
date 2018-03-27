<template>
  <div id="app">
    <div class="tw-header" v-tw-sticky="0">
      <div class="tw-header-inner">
        <h1 class="tw-header-left">
          <router-link to="/">
            <img src="/static/images/logo-3d8eedb.png">
          </router-link>
        </h1>
        <div class="tw-header-body">
          <ul class="tw-nav xheader xhorizontal">
            <li>
              <router-link to="/doc/summary"><span>概要</span></router-link>
            </li>
            <li>
              <router-link class="js-delegate" to="/doc/guid"><span>规范</span></router-link>
            </li>
            <li>
              <router-link to="/doc/component"><span>组件</span></router-link>
            </li>
            <li>
              <a class="tw-popswitch xheader js-projects" :class="{xactive:/^\/project-/.test($route.path)}"><span>项目</span></a>
              <tw-poppane class="js-position" switch=".js-projects">
                <ul class="tw-header-menu">
                    <li><router-link to="/project-new">新项目</router-link></li>
                    <li><a>项目库</a></li>
                </ul>
              </tw-poppane>
            </li>
            <li>
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
      <router-view></router-view>
      <tw-menu :items="members" multiple v-model="currentMember" @change="changeMember">
        <a slot-scope="item"><i>3</i>{{ item.text }}</a>
      </tw-menu>
    </div>
    <tw-footer @click.native.stop="demoMethod"></tw-footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      members: [
        {
          value: '001',
          text: '陈今斌',
          className: 'abc'
        },
        {
          value: '002',
          text: '荣珍'
        },
        {
          value: '003',
          text: '陈知然'
        }
      ],
      currentMember: [],
      classDemo: ''
    }
  },
  methods: {
    changeMember (value, item) {
      debugger
      console.log(this.currentMember)
    },
    changeHandler (value) {
      console.log(value)
    },
    demoMethod () {
      console.log('The method is called.')
    },
    testmethod () {
      window.test = this.$refs.test
      window.test.classList.add('xstart')
    }
  },
  created () {
    window.app = this
    window.members = this.members
  }
}
</script>

