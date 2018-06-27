<template group="容器" type="弹窗" name="其它所有">
  <div class="tw-demobox">
    <a class="tw-btn xmain" @click="modal1Visible=true">不可拖动</a>
    <a class="tw-btn xmain" @click="modal2Visible=true">摭罩层无背景</a>
    <a class="tw-btn xmain" @click="modal3Visible=true">弱化弹窗</a>
    <a class="tw-btn xmain" @click="modal4Visible=true">尺寸演示</a>

    <!-- 弹窗:不可拖动 -->
    <tw-modal
      :visible.sync="modal1Visible"
      :draggable="false">
      <template slot="header">不可拖动</template>
      <template class="name" slot="body">内容区</template>
      <template slot="footer">
        <a class="tw-btn xmain xlarge">确定</a>
        <a class="tw-btn xweaking xlarge" @click="modal1Visible=false">取消</a>
      </template>
    </tw-modal>
    <!-- /弹窗:不可拖动 -->

    <!-- 弹窗:摭罩层无背景 -->
    <tw-modal
      class="xnomask"
      :visible.sync="modal2Visible">
      <template slot="header">摭罩层无背景</template>
      <template class="name" slot="body">内容区</template>
      <template slot="footer">
        <a class="tw-btn xmain xlarge">确定</a>
        <a class="tw-btn xweaking xlarge" @click="modal2Visible=false">取消</a>
      </template>
    </tw-modal>
    <!-- /弹窗:摭罩层无背景 -->

    <!-- 弹窗:弱化弹窗 -->
    <tw-modal
      :visible.sync="modal3Visible"
      weaking>
      <template slot="header">弱化弹窗</template>
      <template class="name" slot="body">内容区</template>
      <template slot="footer">
        <a class="tw-btn xmain xlarge">确定</a>
        <a class="tw-btn xweaking xlarge" @click="modal3Visible=false">取消</a>
      </template>
    </tw-modal>
    <!-- /弹窗:弱化弹窗 -->

    <!-- 弹窗:大尺寸 -->
    <tw-modal
      class="xlarge"
      :visible.sync="modal4Visible">
      <template slot="header">大尺寸</template>
      <template class="name" slot="body">内容区</template>
      <template slot="footer">
        <a class="tw-btn xmain xlarge">确定</a>
        <a class="tw-btn xweaking xlarge" @click="modal4Visible=false">取消</a>
      </template>
    </tw-modal>
    <!-- /弹窗:大尺寸 -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      modal1Visible: false,
      modal2Visible: false,
      modal3Visible: false,
      modal4Visible: false
    }
  }
}
</script>
