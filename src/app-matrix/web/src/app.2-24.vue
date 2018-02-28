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
              <router-link to="/url3"><i class="tw-font xico"></i><span>CSS组件</span></router-link>
            </li>
            <li>
              <router-link to="/url3"><i class="tw-font xico"></i><span>Vue组件</span></router-link>
            </li>
            <li>
              <router-link class="tw-popswitch xheader js-menu1" to="/url3"><i class="tw-font xico"></i><span>导航菜单</span></router-link>
              <tw-poppane class="js-position" switch=".js-menu1">
                <ul class="tw-header-menu">
                    <li><a>菜单项1</a></li>
                    <li><a>菜单项2</a></li>
                    <li>
                      <a class="tw-popswitch xheader js-submenu1">菜单项3</a>
                      <tw-poppane class="js-position2" switch=".js-submenu1" placement="righttop" positionElement=".js-position">
                        <ul class="tw-header-menu">
                          <li><a>子菜单项1</a></li>
                          <li><a>子菜单项2</a></li>
                          <li><a>子菜单项3</a></li>
                          <li>
                            <a class="tw-popswitch xheader js-submenu2">菜单项3</a>
                            <tw-poppane class="js-position3" switch=".js-submenu2" placement="righttop" positionElement=".js-position2">
                              <ul class="tw-header-menu">
                                <li><a>子菜单项1</a></li>
                                <li><a>子菜单项2</a></li>
                                <li>
                                  <a class="tw-popswitch xheader js-submenu3">菜单项3</a>
                                  <tw-poppane switch=".js-submenu3" placement="righttop" positionElement=".js-position3">
                                    <ul class="tw-header-menu">
                                      <li><a>子菜单项3</a></li>
                                      <li><a>子菜单项3</a></li>
                                      <li><a>子菜单项3</a></li>
                                      <li><a>子菜单项3</a></li>
                                      <li><a>子菜单项3</a></li>
                                      <li><a>子菜单项9</a></li>
                                    </ul>
                                  </tw-poppane>
                                </li>
                                <li>
                                  <a class="tw-popswitch xheader js-submenu4">用户中心</a>
                                  <tw-poppane switch=".js-submenu4" placement="righttop" positionElement=".js-position3">
                                    <ul class="tw-header-menu">
                                      <li><a>个人信息</a></li>
                                      <li><a>个人积分</a></li>
                                      <li><a>个人排名</a></li>
                                      <li><a>操作日志</a></li>
                                      <li><a>子菜单项3</a></li>
                                      <li><a>子菜单项9</a></li>
                                    </ul>
                                  </tw-poppane>
                                </li>
                                <li><a>子菜单项4</a></li>
                                <li><a>子菜单项5</a></li>
                                <li><a>子菜单项6</a></li>
                              </ul>
                            </tw-poppane>
                          </li>
                          <li><a>子菜单项5</a></li>
                          <li><a>子菜单项6</a></li>
                        </ul>
                      </tw-poppane>
                      </li>
                    <li><a>菜单项4</a></li>
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

