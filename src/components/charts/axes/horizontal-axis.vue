<script setup lang="ts">
import type { ChartDimensions } from '@/composables/useChartDimensions';
import type { ScaleTime } from 'd3';

type AxisProps = {
  label: string;
  formatTick: (d: any) => string;
  scale: ScaleTime<number, number, never>;
  dimensions: ChartDimensions;
}

const { label, formatTick, scale, dimensions } = defineProps<AxisProps>();

const numberOfTicks = dimensions.boundedWidth < 600 ?
  dimensions.boundedWidth / 100 :
  dimensions.boundedWidth / 150;
const ticks = scale.ticks(numberOfTicks);
</script>

<template>
  <g class="axis axis-horzontal" :transform="`translate(0, ${dimensions.boundedHeight})`">
    <line class="axis_line" :x2="dimensions.boundedWidth" />
    <text class="axis_tick" v-for="tick of ticks" :key="tick.toString()" :transform="`translate(${scale(tick)}, 13)`">
      {{ formatTick(tick) }}
    </text>
    <text v-if="label" class="axis_label" :transform="`translate(${dimensions.boundedWidth
      / 2}, 36)`">
      {{ label }}
    </text>
  </g>
</template>

<style scoped lang="css"></style>
