<script setup lang="ts">
import type { ChartDimensions } from '@/composables/useChartDimensions';
import type { ScaleTime } from 'd3';

type AxisProps = {
  dimensions: ChartDimensions;
  label: string;
  formatTick: (d: any) => string;
  scale: ScaleTime<number, number, never>
}

const { dimensions, label, formatTick, scale } = defineProps<AxisProps>();

const numberOfTicks = dimensions.boundedWidth < 600 ?
  dimensions.boundedWidth / 100 :
  dimensions.boundedWidth / 150;

const ticks = scale.ticks(numberOfTicks);
</script>

<template>
  <g class="axis axis-vertical">
    <line class="axis_line" :y2="dimensions.boundedHeight" />
    <text class="axis_tick" v-for="tick of ticks" :key="tick.toString()" :transform="`translate(-18, ${scale(tick)})`">
      {{ formatTick(tick) }}
    </text>
    <text v-if="label" class="axis_label" :style="{
      transform: `translate(-30px,${dimensions.boundedHeight / 2}px) rotate(-90deg)`
    }">
      {{ label }}
    </text>
  </g>
</template>

<style scoped lang="css"></style>
