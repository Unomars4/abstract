<script setup lang="ts">
import type { ChartDimensions } from '@/composables/useChartDimensions';

const { dimensions, placementAmt, title } = defineProps<{
  dimensions: ChartDimensions;
  placementAmt: number;
  title: string;
  clsName: string;
}>();
</script>

<template>
  <rect
    :class="clsName"
    :title="title"
    x="0"
    :y="placementAmt"
    :width="dimensions.boundedWidth"
    :height="dimensions.boundedHeight - placementAmt"
  />
</template>

<style lang="css"></style>
