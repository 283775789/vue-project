<template>
  <div class="tw-editor">
    <div class="tw-editor-body" :contenteditable="!readonly"></div>
    <div class="tw-editor-toolbar">
      <div class="tw-editor-toolbar-left">
        <slot name="toolbar-left"></slot>
      </div>
      <div class="tw-editor-toolbar-right">
        <slot name="toolbar-right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tw-editor',

  props: {
    readonly: {
      type: Boolean,
      default: false
    }
  }
}
</script>
