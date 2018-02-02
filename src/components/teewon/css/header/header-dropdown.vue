<template>
  <tw-popmenu class="xheader">
    <span>菜单导航项</span>
    <ul class="tw-header-menu" slot="popmenu-body">
      <li>
        <router-link class="xactive" to="/url1"><span>导航1</span></router-link>
      </li>
      <li>
        <router-link class="xactive" to="/url2"><span>导航2</span></router-link>
      </li>
      <li>
        <router-link class="xactive" to="/url3"><span>导航3</span></router-link>
      </li>
    </ul>
  </tw-popmenu>
</template>

<script>
export default {
  name: 'twHeaderPopmenu'
}
</script>
