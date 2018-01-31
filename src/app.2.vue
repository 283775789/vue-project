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
          <ul class="tw-nav xhorizontal">
            <li>
              <router-link to="/url1"><i class="tw-ico xname"></i><span>概要</span></router-link>
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
              <router-link to="/url3"><i class="tw-ico xname"></i><span>jQuery组件</span></router-link>
            </li>
            <li>
              <router-link to="/url3"><i class="tw-ico xname"></i><span>项目</span></router-link>
            </li>
          </ul>
        </div>
        <div class="tw-header-right">
          <div class="tw-dropdown">
            <a class="tw-dropdown-label">下拉菜单标签</a>
            <div class="tw-dropdown-body">
              <li><a>菜单项1</a></li>
              <li><a>菜单项2</a></li>
              <li><a>菜单项3</a></li>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tw-body">
      <label class="tw-optbox xradio"><input type="radio" name="radio-demo" /><span>选项文本</span></label>
      <label class="tw-optbox xradio"><input type="radio" name="radio-demo" checked disabled /><span>选项文本</span></label>
      <label class="tw-optbox xcheckbox"><input type="checkbox" disabled checked /><span>选项文本</span></label>
      <label class="tw-optbox xcheckbox"><input type="checkbox" /><span>选项文本</span></label>
      <br />
      <pre style="display:inline-block; width:45%;">
        &lt;div class=&quot;tw-parent&quot;&gt;
          &lt;slot name=&quot;header&quot;&gt;header.&lt;/slot&gt;
          &lt;div class=&quot;tw-parent-body&quot;&gt;
            &lt;slot&gt;body content.&lt;/slot&gt;
          &lt;/div&gt;
          &lt;slot :user=&quot;user&quot;&gt;&lt;/slot&gt;
        &lt;/div&gt;
      </pre>
      <pre style="display:inline-block; width:45%;">
        &lt;tw-parent&gt;
          &lt;div slot=&quot;header&quot;&gt;demo header&lt;/div&gt;
          &lt;div&gt;demo body&lt;/div&gt;
          &lt;template slot-scope=&quot;user&quot;&gt;
            &lt;span&gt;{ user.name }&lt;/span&gt;
            &lt;span&gt;{ user.age }&lt;/span&gt;
          &lt;/template&gt;
        &lt;/tw-parent&gt;
      </pre>

      <tw-menu :items="members">
      </tw-menu>
    </div>
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
          text: '陈今斌'
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
  }
}
</script>
