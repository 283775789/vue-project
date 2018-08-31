<template>
  <ul class="tw-steps">
    <!-- arrow steps -->
    <template v-for="(item, index) in list">
      <li class="tw-steps-item"
          :key="index">
          <i class="tw-steps-no">{{index+1}}</i>
          <slot :item="item">
            <span>步骤{{index+1}}</span>
          </slot>
      </li>
      <li v-if="index < list.length-1"
          class="tw-steps-arrow"
          :key="'arrow'+index">
      </li>
    </template>
    <!-- /arrow steps -->
  </ul>
</template>

<script>
export default {
  name: 'tw-steps',

  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>
