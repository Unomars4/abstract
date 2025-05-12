<script setup lang="ts">
import useChartContainer from '@/composables/useChartContainer';
import * as d3 from "d3";
import Chart from './chart.vue';
import Line from './line.vue';
import Axis from './axes/axis.vue';
import type { ClimateDay } from '@/types';
import { inject } from 'vue';
import { dateFormatter } from '@/utils/visualisations';

const { data } = defineProps<{ data: ClimateDay[] }>();

const { height, width, dimensions } = useChartContainer("timeline");

const xAccessor = inject<(dataObj: ClimateDay) => Date | null>("xAccessor")!;
const yAccessor = inject<(dataObj: ClimateDay) => number>("yAccessor")!;

let xScale = d3.scaleTime()
  .domain(d3.extent(data, xAccessor) as [Date, Date])
  .range([0, dimensions.value.boundedWidth]),
  yScale = d3.scaleLinear()
    .domain(d3.extent(data, yAccessor) as [number, number])
    .range([dimensions.value.boundedHeight, 0]);


const xAccessorScaled = (dataObj: ClimateDay) => {
  const convertedDate = xAccessor(dataObj)
  if (convertedDate) {
    return xScale(convertedDate);
  }
},
  yAccessorScaled = (dataObj: ClimateDay) => yScale(yAccessor(dataObj));

const formatTick = (item: any) => {
  return typeof item !== "number" ? dateFormatter(item.toString(), true) : item;
}
</script>

<template>
  <div class="timeline" ref="timeline">
    <Chart :width="width" :height="height" :margin-top="dimensions.marginTop" :margin-left="dimensions.marginLeft">
      <Line :data="data" :x-accessor="xAccessorScaled" :y-accessor="yAccessorScaled" />
      <Axis :format-tick="formatTick" :dimensions="dimensions" dimension="x" :scale="xScale" label="Days" />
      <Axis :format-tick="formatTick" :dimensions="dimensions" dimension="y" :scale="yScale" label="Max Temp" />
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
