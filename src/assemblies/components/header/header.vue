<template>
  <div class="tw-header">
    <div class="tw-header-inner">
      <h1 class="tw-header-left">
        <router-link to="/">
          <img src="@images/logo.png">
          <span class="tw-header-title">应用标题</span>
        </router-link>
      </h1>



      <div class="tw-header-body">
        主内容
      </div>
      <div class="tw-header-right">
        右侧内容
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'twHeader'
}
</script>
