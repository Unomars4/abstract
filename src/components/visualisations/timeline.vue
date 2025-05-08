<script setup lang="ts">
import useChartContainer from '@/composables/useChartContainer';
import Chart from './chart.vue';
import type { ClimateDay } from '@/types';
import { inject } from 'vue';

const { data } = defineProps<{ data: ClimateDay[] }>();
const { height, width, refId } = useChartContainer("timeline");

const xAccessor = inject<(dataObj: ClimateDay) => Date | null>("xAccessor")!;
const yAccessor = inject<(dataObj: ClimateDay) => number>("yAccessor")!;
</script>

<template>
  <p>{{ refId.toUpperCase() }}, H: {{ height }}px W:{{ width }}px</p>
  <div class="timeline" ref="timeline">
    <Chart :width="width" :height="height">
      <p>{{ xAccessor(data[0]) }} {{ yAccessor(data[0]) }}</p>
    </Chart>
  </div>
</template>

<style scoped lang="css">
.timeline {
  border: solid 1px hsl(var(--border));
  border-radius: 15px;
  overflow: hidden;
  height: 50%;
}
</style>
