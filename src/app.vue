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
             <tw-popmenu class="xheader" trigger="click">
              <span>下拉菜单</span>
              <ul class="tw-header-menu" slot="popmenu-body">
                <li><a>菜单项1</a></li>
                <li>
                  <tw-popmenu class="xheader" placement="righttop" type="horizontal" trigger="click">
                    <span>二级</span>
                    <ul class="tw-header-menu" slot="popmenu-body">
                      <li><a>菜单项1</a></li>
                      <li><a>菜单项2</a></li>
                      <li><a>菜单项3</a></li>
                    </ul>
                  </tw-popmenu>
                </li>
                <li><a>菜单项3</a></li>
              </ul>
            </tw-popmenu>
            </li>
          </ul>
        </div>
        <div class="tw-header-right">
          <tw-popmenu class="xheader xcenter">
            <span>右侧菜单</span>
            <ul class="tw-header-menu" slot="popmenu-body">
              <li><a>菜单项1菜单项1</a></li>
              <li><a>菜单项2</a></li>
              <li><a>菜单项3</a></li>
            </ul>
          </tw-popmenu>
        </div>
      </div>
    </div>

    <div class="tw-body">
      <label class="tw-optbox xradio"><input type="radio" name="radio-demo" /><span>选项文本</span></label>
      <label class="tw-optbox xradio"><input type="radio" name="radio-demo" checked disabled /><span>选项文本</span></label>
      <label class="tw-optbox xcheckbox"><input type="checkbox" disabled checked /><span>选项文本</span></label>
      <label class="tw-optbox xcheckbox"><input type="checkbox" /><span>选项文本</span></label>

      <tw-popmenu trigger="click" style="float:right;" placement="topleft">
        <span>下拉菜单</span>
        <tw-menu slot="popmenu-body" :items="members" @change="changeHandler" style="width:300px; background: #f2f2f2; border: 1px solid #ccc; white-space: nowrap;">
          <a slot-scope="{text, value, className}"><i :class="['tw-ico', 'x'+className]"></i>{{value}} text:{{text}}</a>
        </tw-menu>
      </tw-popmenu>
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

      <tw-popmenu trigger="click" style="float:left;">
        <span>auto</span>
        <tw-menu slot="popmenu-body" :items="members" @change="changeHandler" style="width:120px; background: #f2f2f2; border: 1px solid #ccc; white-space: nowrap;">
          <a slot-scope="{text, value, className}"><i :class="['tw-ico', 'x'+className]"></i>{{value}} text:{{text}}</a>
        </tw-menu>
      </tw-popmenu>
      <tw-popmenu trigger="click" style="float:left;" placement="topleft">
        <span>topleft</span>
        <tw-menu slot="popmenu-body" :items="members" @change="changeHandler" style="width:120px; background: #f2f2f2; border: 1px solid #ccc; white-space: nowrap;">
          <a slot-scope="{text, value, className}"><i :class="['tw-ico', 'x'+className]"></i>{{value}} text:{{text}}</a>
        </tw-menu>
      </tw-popmenu>
      <tw-popmenu trigger="click" style="float:left;" placement="topcenter">
        <span>topcenter</span>
        <tw-menu slot="popmenu-body" :items="members" @change="changeHandler" style="width:120px; background: #f2f2f2; border: 1px solid #ccc; white-space: nowrap;">
          <a slot-scope="{text, value, className}"><i :class="['tw-ico', 'x'+className]"></i>{{value}} text:{{text}}</a>
        </tw-menu>
      </tw-popmenu>
      <tw-popmenu trigger="click" style="float:left;" placement="topright">
        <span>topright</span>
        <tw-menu slot="popmenu-body" :items="members" @change="changeHandler" style="width:120px; background: #f2f2f2; border: 1px solid #ccc; white-space: nowrap;">
          <a slot-scope="{text, value, className}"><i :class="['tw-ico', 'x'+className]"></i>{{value}} text:{{text}}</a>
        </tw-menu>
      </tw-popmenu>
      <tw-popmenu trigger="click" style="float:left;" placement="righttop">
        <span>righttop</span>
        <tw-menu slot="popmenu-body" :items="members" @change="changeHandler" style="width:120px; background: #f2f2f2; border: 1px solid #ccc; white-space: nowrap;">
          <a slot-scope="{text, value, className}"><i :class="['tw-ico', 'x'+className]"></i>{{value}} text:{{text}}</a>
        </tw-menu>
      </tw-popmenu>
      <tw-popmenu trigger="click" style="float:left;" placement="rightcenter">
        <span>rightcenter</span>
        <tw-menu slot="popmenu-body" :items="members" @change="changeHandler" style="width:120px; background: #f2f2f2; border: 1px solid #ccc; white-space: nowrap;">
          <a slot-scope="{text, value, className}"><i :class="['tw-ico', 'x'+className]"></i>{{value}} text:{{text}}</a>
        </tw-menu>
      </tw-popmenu>
      <tw-popmenu trigger="click" style="float:left;" placement="rightbottom">
        <span>rightbottom</span>
        <tw-menu slot="popmenu-body" :items="members" @change="changeHandler" style="width:120px; background: #f2f2f2; border: 1px solid #ccc; white-space: nowrap;">
          <a slot-scope="{text, value, className}"><i :class="['tw-ico', 'x'+className]"></i>{{value}} text:{{text}}</a>
        </tw-menu>
      </tw-popmenu>
      <tw-popmenu trigger="click" style="float:left;" placement="bottomleft">
        <span>bottomleft</span>
        <tw-menu slot="popmenu-body" :items="members" @change="changeHandler" style="width:120px; background: #f2f2f2; border: 1px solid #ccc; white-space: nowrap;">
          <a slot-scope="{text, value, className}"><i :class="['tw-ico', 'x'+className]"></i>{{value}} text:{{text}}</a>
        </tw-menu>
      </tw-popmenu>
      <tw-popmenu trigger="click" style="float:left;" placement="bottomcenter">
        <span>bottomcenter</span>
        <tw-menu slot="popmenu-body" :items="members" @change="changeHandler" style="width:120px; background: #f2f2f2; border: 1px solid #ccc; white-space: nowrap;">
          <a slot-scope="{text, value, className}"><i :class="['tw-ico', 'x'+className]"></i>{{value}} text:{{text}}</a>
        </tw-menu>
      </tw-popmenu>
      <tw-popmenu trigger="click" style="float:left;" placement="bottomright">
        <span>bottomright</span>
        <tw-menu slot="popmenu-body" :items="members" @change="changeHandler" style="width:120px; background: #f2f2f2; border: 1px solid #ccc; white-space: nowrap;">
          <a slot-scope="{text, value, className}"><i :class="['tw-ico', 'x'+className]"></i>{{value}} text:{{text}}</a>
        </tw-menu>
      </tw-popmenu>
      <tw-popmenu trigger="click" style="float:left;" placement="lefttop">
        <span>lefttop</span>
        <tw-menu slot="popmenu-body" :items="members" @change="changeHandler" style="width:120px; background: #f2f2f2; border: 1px solid #ccc; white-space: nowrap;">
          <a slot-scope="{text, value, className}"><i :class="['tw-ico', 'x'+className]"></i>{{value}} text:{{text}}</a>
        </tw-menu>
      </tw-popmenu>
      <tw-popmenu trigger="click" style="float:left;" placement="leftcenter">
        <span>leftcenter</span>
        <tw-menu slot="popmenu-body" :items="members" @change="changeHandler" style="width:120px; background: #f2f2f2; border: 1px solid #ccc; white-space: nowrap;">
          <a slot-scope="{text, value, className}"><i :class="['tw-ico', 'x'+className]"></i>{{value}} text:{{text}}</a>
        </tw-menu>
      </tw-popmenu>
      <tw-popmenu trigger="click" style="float:left;" placement="leftbottom">
        <span>leftbottom</span>
        <tw-menu slot="popmenu-body" :items="members" @change="changeHandler" style="width:120px; background: #f2f2f2; border: 1px solid #ccc; white-space: nowrap;">
          <a slot-scope="{text, value, className}"><i :class="['tw-ico', 'x'+className]"></i>{{value}} text:{{text}}</a>
        </tw-menu>
      </tw-popmenu>
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
