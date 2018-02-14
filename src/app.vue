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
              <router-link class="xactive" to="/url1"><i class="tw-ico xname"></i><span>概要</span></router-link>
            </li>
            <li>
              <router-link class="js-delegate" to="/url2"><i class="tw-ico xname"></i><span>规范</span></router-link>
            </li>
            <li>
              <router-link to="/url3"><i class="tw-ico xname"></i><span>CSS组件</span></router-link>
            </li>
            <li>
              <router-link to="/url3"><i class="tw-ico xname"></i><span>Vue组件</span></router-link>
            </li>
            <li>
              <router-link class="tw-popswitch xheader js-menu1" to="/url3"><i class="tw-ico xname"></i><span>导航菜单</span></router-link>
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
             <!-- <tw-poppane class="xheader" trigger="click">
              <span slot="link">下拉菜单</span>
              <ul slot="body" class="tw-header-menu">
                <li><a>菜单项1</a></li>
                <li>
                  <tw-poppane class="xheader" placement="righttop" type="horizontal" trigger="click">
                    <span slot="link">二级</span>
                    <ul class="tw-header-menu" slot="body">
                      <li><a>菜单项1</a></li>
                      <li><a>菜单项2</a></li>
                      <li><a>菜单项3</a></li>
                    </ul>
                  </tw-poppane>
                </li>
                <li><a>菜单项3</a></li>
              </ul>
            </tw-poppane> -->
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
          <!-- <tw-poppane class="xheader xcenter">
            <span slot="link">右侧菜单</span>
            <ul class="tw-header-menu" slot="body">
              <li><a>菜单项1菜单项1</a></li>
              <li><a>菜单项2</a></li>
              <li><a>菜单项3</a></li>
            </ul>
          </tw-poppane> -->
        </div>

      </div>
    </div>

    <div class="tw-body" style="min-height:600px;">
      <label class="tw-optbox xradio"><input type="radio" name="radio-demo" /><span slot="link">选项文本</span></label>
      <label class="tw-optbox xradio"><input type="radio" name="radio-demo" checked disabled /><span slot="link">选项文本</span></label>
      <label class="tw-optbox xcheckbox"><input type="checkbox" disabled checked /><span slot="link">选项文本</span></label>
      <label class="tw-optbox xcheckbox"><input type="checkbox" /><span slot="link">选项文本</span></label>
      <a class="js-collapse">下拉列表</a>
      <tw-collapse switch=".js-collapse">
        <div style="height:300px; background:#f00;"></div>
      </tw-collapse>
      <br>
      <br>
      <br>
      <a class="tw-popswitch js-auto">auto</a>
      <tw-poppane switch=".js-auto" style="border:1px solid #ccc;">
        <ul>
          <li><a>子菜单项1</a></li>
          <li><a>子菜单项2</a></li>
          <li><a>子菜单项3</a></li>
          <li><a>子菜单项4</a></li>
          <li><a>子菜单项5</a></li>
          <li><a>子菜单项6</a></li>
        </ul>
      </tw-poppane>
      <br>
      <a class="tw-popswitch js-topleft">topleft</a>
      <tw-poppane switch=".js-topleft" placement="topleft" style="border:1px solid #ccc;">
        <ul>
          <li><a>子菜单项1</a></li>
          <li><a>子菜单项2</a></li>
          <li><a>子菜单项3</a></li>
          <li><a>子菜单项4</a></li>
          <li><a>子菜单项5</a></li>
          <li><a>子菜单项6</a></li>
        </ul>
      </tw-poppane>
      <br>
      <a class="tw-popswitch js-topcenter">topcenter</a>
      <tw-poppane switch=".js-topcenter" placement="topcenter" style="border:1px solid #ccc;">
        <ul>
          <li><a>子菜单项1</a></li>
          <li><a>子菜单项2</a></li>
          <li><a>子菜单项3</a></li>
          <li><a>子菜单项4</a></li>
          <li><a>子菜单项5</a></li>
          <li><a>子菜单项6</a></li>
        </ul>
      </tw-poppane>
      <br>
      <a class="tw-popswitch js-topright">topright</a>
      <tw-poppane switch=".js-topright" placement="topright" style="border:1px solid #ccc;">
        <ul>
          <li><a>子菜单项1</a></li>
          <li><a>子菜单项2</a></li>
          <li><a>子菜单项3</a></li>
          <li><a>子菜单项4</a></li>
          <li><a>子菜单项5</a></li>
          <li><a>子菜单项6</a></li>
        </ul>
      </tw-poppane>
      <br>
      <a class="tw-popswitch js-righttop">righttop</a>
      <tw-poppane switch=".js-righttop" placement="righttop" style="border:1px solid #ccc;">
        <ul>
          <li><a>子菜单项1</a></li>
          <li><a>子菜单项2</a></li>
          <li><a>子菜单项3</a></li>
          <li><a>子菜单项4</a></li>
          <li><a>子菜单项5</a></li>
          <li><a>子菜单项6</a></li>
        </ul>
      </tw-poppane>
      <br>
      <a class="tw-popswitch js-rightcenter">rightcenter</a>
      <tw-poppane switch=".js-rightcenter" placement="rightcenter" style="border:1px solid #ccc;">
        <ul>
          <li><a>子菜单项1</a></li>
          <li><a>子菜单项2</a></li>
          <li><a>子菜单项3</a></li>
          <li><a>子菜单项4</a></li>
          <li><a>子菜单项5</a></li>
          <li><a>子菜单项6</a></li>
        </ul>
      </tw-poppane>
      <br>
      <a class="tw-popswitch js-rightbottom">rightbottom</a>
      <tw-poppane switch=".js-rightbottom" placement="rightbottom" style="border:1px solid #ccc;">
        <ul>
          <li><a>子菜单项1</a></li>
          <li><a>子菜单项2</a></li>
          <li><a>子菜单项3</a></li>
          <li><a>子菜单项4</a></li>
          <li><a>子菜单项5</a></li>
          <li><a>子菜单项6</a></li>
        </ul>
      </tw-poppane>
      <br>
      <a class="tw-popswitch js-bottomleft">bottomleft</a>
      <tw-poppane switch=".js-bottomleft" placement="bottomleft" style="border:1px solid #ccc;">
        <ul>
          <li><a>子菜单项1</a></li>
          <li><a>子菜单项2</a></li>
          <li><a>子菜单项3</a></li>
          <li><a>子菜单项4</a></li>
          <li><a>子菜单项5</a></li>
          <li><a>子菜单项6</a></li>
        </ul>
      </tw-poppane>
      <br>
      <a class="tw-popswitch js-bottomcenter">bottomcenter</a>
      <tw-poppane switch=".js-bottomcenter" placement="bottomcenter" style="border:1px solid #ccc;">
        <ul>
          <li><a>子菜单项1</a></li>
          <li><a>子菜单项2</a></li>
          <li><a>子菜单项3</a></li>
          <li><a>子菜单项4</a></li>
          <li><a>子菜单项5</a></li>
          <li><a>子菜单项6</a></li>
        </ul>
      </tw-poppane>
      <br>
      <a class="tw-popswitch js-bottomright">bottomright</a>
      <tw-poppane switch=".js-bottomright" placement="bottomright" style="border:1px solid #ccc;">
        <ul>
          <li><a>子菜单项1</a></li>
          <li><a>子菜单项2</a></li>
          <li><a>子菜单项3</a></li>
          <li><a>子菜单项4</a></li>
          <li><a>子菜单项5</a></li>
          <li><a>子菜单项6</a></li>
        </ul>
      </tw-poppane>
      <br>
      <a class="tw-popswitch js-lefttop">lefttop</a>
      <tw-poppane switch=".js-lefttop" placement="lefttop" style="border:1px solid #ccc;">
        <ul>
          <li><a>子菜单项1</a></li>
          <li><a>子菜单项2</a></li>
          <li><a>子菜单项3</a></li>
          <li><a>子菜单项4</a></li>
          <li><a>子菜单项5</a></li>
          <li><a>子菜单项6</a></li>
        </ul>
      </tw-poppane>
      <br>
      <a class="tw-popswitch js-leftcenter">leftcenter</a>
      <tw-poppane switch=".js-leftcenter" placement="leftcenter" style="border:1px solid #ccc;">
        <ul>
          <li><a>子菜单项1</a></li>
          <li><a>子菜单项2</a></li>
          <li><a>子菜单项3</a></li>
          <li><a>子菜单项4</a></li>
          <li><a>子菜单项5</a></li>
          <li><a>子菜单项6</a></li>
        </ul>
      </tw-poppane>
      <br>
      <a class="tw-popswitch js-leftbottom">leftbottom</a>
      <tw-poppane switch=".js-leftbottom" placement="leftbottom" :no-arrow="true" style="border:1px solid #ccc;">
        <ul>
          <li><a>子菜单项1</a></li>
          <li><a>子菜单项2</a></li>
          <li><a>子菜单项3</a></li>
          <li><a>子菜单项4</a></li>
          <li><a>子菜单项5</a></li>
          <li><a>子菜单项6</a></li>
        </ul>
      </tw-poppane>
    </div>

    <div ref="test" class="test" @click="testmethod"></div>
    <tw-footer @click.native.stop="demo"></tw-footer>
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

