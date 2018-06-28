<template group="功能" type="弹窗" name="基本">
  <div class="tw-demobox">
    <a class="tw-btn xmain" @click="modal.visible=true">打开弹窗</a>
    <!-- 弹窗:名称 -->
    <tw-modal :visible.sync="modal.visible">
      <template slot="header">弹窗标题</template>
      <template class="name" slot="body">内容区</template>
      <template slot="footer">
        <a class="tw-btn xmain xlarge">确定</a>
        <a class="tw-btn xweaking xlarge" @click="modal.visible=false">取消</a>
      </template>
    </tw-modal>
    <!-- /弹窗:名称 -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      modal: {
        visible: false
      }
    }
  }
}
</script>
