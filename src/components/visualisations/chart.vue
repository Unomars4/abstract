<script setup lang="ts">
import useChartDimensions from '@/composables/useChartDimensions';

const { height, width } = defineProps<{ width: number; height: number }>()
const dimensions = useChartDimensions(width, height)
</script>

<template>
  <svg :width="width" :height="height" class="chart">
    <g :transform="`translate(${dimensions.state.marginLeft}, ${dimensions.state.marginTop})`">
      <slot />
    </g>
  </svg>
</template>

<style lang="css"></style>
