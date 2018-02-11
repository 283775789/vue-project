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
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <select style="width:120px;">
        <option value="dd">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</option>
        <option value="dd">aaaa</option>
        <option value="dd">aaaa</option>
      </select>
            <br>
      <br>
      <br>
      <br>
      <a class="js-delegate"  style="float:right; background:#00f; color:#fff;">
        <span>poppane switch</span>
        <span>poppane delegate</span>
      </a>
      <tw-poppane switch=".js-delegate" switchEvent="click" placement="leftcenter">
        <div style="height:160px; background:#f5f5f5; border:1px solid #ccc;">
          <div>delegate</div>
          <div class="js-attribute">delegate</div>
          <tw-poppane switch=".js-attribute" switchEvent="click" placement="leftcenter">
            <div style="height:80px; background:#f5f5f5; border:1px solid #ccc;">
              <div>attribute</div>
            </div>
          </tw-poppane>
        </div>
      </tw-poppane>
      <br>
      <br>
      <a class="js-collapse">
        <div>
          aaa
          <br>
          <span>333</span>
        </div>
      </a>
      <tw-collapse switch=".js-collapse">
        <div style="height:300px; background:#f00;"></div>
      </tw-collapse>

    </div>
    <div ref="test" class="test" @click="testmethod"></div>
    <tw-footer></tw-footer>
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
