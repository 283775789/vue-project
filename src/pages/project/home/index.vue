<template>
  <div class="tw-project">
    <tw-design-header>
      <a>项目(P)</a>
      <a>模板(T)</a>
      <router-link to="/project/new">新项目(N)</router-link>
    </tw-design-header>

    <div class="tw-project-body">

    </div>
  </div>
</template>

<script>
import DesignHeader from '@/components/design-header'

export default {
  name: 'tw-project-home',
  components: {
    'tw-design-header': DesignHeader
  }
}
</script>
