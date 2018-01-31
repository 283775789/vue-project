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
              <router-link to="/url2"><i class="tw-ico xname"></i><span>规范</span></router-link>
            </li>
            <li>
              <router-link to="/url3"><i class="tw-ico xname"></i><span>CSS组件</span></router-link>
            </li>
            <li>
              <router-link to="/url3"><i class="tw-ico xname"></i><span>Vue组件</span></router-link>
            </li>
            <li>
             <tw-dropdown class="xheader">
              <span>下拉菜单</span>
              <ul class="tw-header-menu" slot="dropdown-body">
                <li><a>菜单项1</a></li>
                <li><a>菜单项2</a></li>
                <li><a>菜单项3</a></li>
              </ul>
            </tw-dropdown>
            </li>
          </ul>
        </div>
        <div class="tw-header-right">
          <tw-dropdown class="xheader">
            <span>右侧菜单</span>
            <ul class="tw-header-menu" slot="dropdown-body">
              <li><a>菜单项1</a></li>
              <li><a>菜单项2</a></li>
              <li><a>菜单项3</a></li>
            </ul>
          </tw-dropdown>
        </div>
      </div>
    </div>

    <div class="tw-body">
      <label class="tw-optbox xradio"><input type="radio" name="radio-demo" /><span>选项文本</span></label>
      <label class="tw-optbox xradio"><input type="radio" name="radio-demo" checked disabled /><span>选项文本</span></label>
      <label class="tw-optbox xcheckbox"><input type="checkbox" disabled checked /><span>选项文本</span></label>
      <label class="tw-optbox xcheckbox"><input type="checkbox" /><span>选项文本</span></label>

      <tw-dropdown trigger="click">
        <span>下拉菜单</span>
        <tw-menu slot="dropdown-body" :items="members" @change="changeHandler">
          <a slot-scope="{text, value, className}"><i :class="['tw-ico', 'x'+className]"></i>{{value}} text:{{text}}</a>
        </tw-menu>
      </tw-dropdown>
    </div>
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
      ]
    }
  },
  methods: {
    changeHandler (value) {
      console.log(value)
    }
  },
  created () {
    window.members = this.members
  }
}
</script>
