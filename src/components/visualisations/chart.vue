<script setup lang="ts">
import useChartContext from '@/composables/useChartContext';
import type { ChartId } from '@/composables/useChartContext';

type ChartProps = {
  chartId: ChartId
}

const { chartId } = defineProps<ChartProps>()
const { getChartDimensions } = useChartContext();

const { width, height } = getChartDimensions(chartId)
</script>

<template>
  <svg :width="width" :height="height" class="chart">
    <slot />
  </svg>
</template>

<style lang="css"></style>
