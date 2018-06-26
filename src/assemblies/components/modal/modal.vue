<template>
  <div class="tw-modal">
    <div class="tw-modal-window">
      <div class="tw-modal-window-header">
        <h4><slot name="header"></slot></h4>
        <a class="tw-modal-window-colose">×</a>
      </div>
      <div class="tw-modal-window-body">
        <slot name="body"><br><br><br><br><br><br><br><br></slot>
      </div>
      <div class="tw-modal-window-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tw-modal'
}
</script>

<style lang="scss">
  @import './modal.scss';
</style>
