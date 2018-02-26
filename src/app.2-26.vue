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
              <router-link class="xactive" to="/url1"><i class="tw-font xico"></i><span>概要</span></router-link>
            </li>
            <li>
              <router-link class="js-delegate" to="/url2"><i class="tw-font xico"></i><span>规范</span></router-link>
            </li>
            <li>
              <router-link to="/url3"><i class="tw-font xico"></i><span>组件</span></router-link>
            </li>
            <li>
              <router-link class="tw-popswitch xheader js-menu1" to="/url3"><i class="tw-font xico"></i><span>项目</span></router-link>
              <tw-poppane class="js-position" switch=".js-menu1">
                <ul class="tw-header-menu">
                    <li><a>新项目</a></li>
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
      <div class="tw-multicol">
        <div class="tw-multicol-left">
          <tw-collapse-group class="tw-sidebar">
            <ul class="tw-nav xsidebar">
              <li>
                <a class="js-sidenav1"><i class="tw-font xico"></i>导航项<i class="tw-arrow xright"></i></a>
                <tw-collapse class="xsidebar" switch=".js-sidenav1">
                  <ul class="tw-nav xsidebar">
                    <li><a>子导航</a></li>
                    <li><a>子导航</a></li>
                    <li><a>子导航</a></li>
                  </ul>
                </tw-collapse>
              </li>
              <li>
                <a class="js-sidenav2"><i class="tw-font xico"></i>导航项<i class="tw-arrow xright"></i></a>
                <tw-collapse class="xsidebar" switch=".js-sidenav2">
                  <ul class="tw-nav xsidebar">
                    <li><a>子导航</a></li>
                    <li><a>子导航</a></li>
                    <li><a>子导航</a></li>
                  </ul>
                </tw-collapse>
              </li>
              <li>
                <a class="js-sidenav3"><i class="tw-font xico"></i>导航项<i class="tw-arrow xright"></i></a>
                <tw-collapse class="xsidebar" switch=".js-sidenav3">
                  <ul class="tw-nav xsidebar">
                    <li><a>子导航</a></li>
                    <li><a>子导航</a></li>
                    <li><a>子导航</a></li>
                  </ul>
                </tw-collapse>
              </li>
              <li><a class="jst-close"><i class="tw-font xico"></i>侧边导航项</a></li>
              <li><a class="jst-close"><i class="tw-font xico"></i>侧边导航项</a></li>
            </ul>
          </tw-collapse-group>
        </div>
        <div class="tw-multicol-cell">
          <div class="tw-multicol-cell-table">
            <div class="tw-multicol-cell-cell">
              3321
            </div>
          </div>
        </div>
      </div>
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
      classDemo: ''
    }
  },
  methods: {
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
    window.members = this.members
  }
}
</script>

