<template>
  <ul class="tw-steps">
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
  </ul>
</template>
