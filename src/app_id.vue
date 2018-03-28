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
             <tw-poppane class="xheader">
              <span>下拉菜单</span>
              <ul class="tw-header-menu" slot="poppane-body">
                <li><a>菜单项1</a></li>
                <li><a>菜单项2</a></li>
                <li><a>菜单项3</a></li>
              </ul>
            </tw-poppane>
            </li>
          </ul>
        </div>
        <div class="tw-header-right">
          <tw-poppane class="xheader">
            <span>右侧菜单</span>
            <ul class="tw-header-menu" slot="poppane-body">
              <li><a>菜单项1</a></li>
              <li><a>菜单项2</a></li>
              <li><a>菜单项3</a></li>
            </ul>
          </tw-poppane>
        </div>
      </div>
    </div>

    <div class="tw-body">
      <label class="tw-optbox xradio"><input type="radio" name="radio-demo" /><span>选项文本</span></label>
      <label class="tw-optbox xradio"><input type="radio" name="radio-demo" checked disabled /><span>选项文本</span></label>
      <label class="tw-optbox xcheckbox"><input type="checkbox" disabled checked /><span>选项文本</span></label>
      <label class="tw-optbox xcheckbox"><input type="checkbox" /><span>选项文本</span></label>

      <tw-list id="foo" :items="members" @change="changeHandler" style="max-width:100%; height:100px; overflow:auto; white-space:nowrap; background:pink;">
        <a slot-scope="{text, value, className}"><i :class="['tw-ico', 'x'+className]"></i>{{value}} text:{{text}}</a>
      </tw-list>

      <tw-poppane trigger="click">
        <tw-list slot="poppane-body" :items="members" @change="changeHandler">
          <a slot-scope="{text, value, className}"><i :class="['tw-ico', 'x'+className]"></i>{{value}} text:{{text}}</a>
        </tw-list>
      </tw-poppane>

        <a id="link">link</a>
        <div class="" id="div" style="padding:10px; margin:10px; border:10px solid #ccc;">div</div>
        <div class="" id="div2" style="box-sizing: content-box; padding:10px; margin:10px; border:10px solid #ccc;">div2</div>
        <div id="div3"></div>
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
          text: '陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌陈今斌',
          className: 'abc'
        },
        {
          value: '002',
          text: '荣珍'
        },
        {
          value: '003',
          text: '陈知然'
        },
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
        },
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
        },
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
        },
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
  mounted () {
    /* eslint-disable */
    var foo = document.getElementById('foo')
    var link = document.getElementById('link')
    var div = document.getElementById('div')
    var div2 = document.getElementById('div2')
    var div3 = document.getElementById('div3')
  }
}
</script>
