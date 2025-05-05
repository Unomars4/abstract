<script setup lang="ts">
import type { ChartDimensions } from '@/composables/useChartDimensions';


type ChartProps = {
  dimensions: ChartDimensions
}

const { dimensions: { width, height } } = defineProps<ChartProps>()

</script>

<template>
  <svg :width="width" :height="height" class="chart">
    <slot />
  </svg>
</template>

<style lang="css"></style>
