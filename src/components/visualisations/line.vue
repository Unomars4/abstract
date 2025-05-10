<script setup lang="ts">
import type { PossibleChartType } from '@/types';
import * as d3 from 'd3';

type LineProps = {
  type?: 'line' | 'area';
  data: PossibleChartType[]
  interpolation?: d3.CurveFactory | d3.CurveFactoryLineOnly;
  xAccessor: (dataObj: PossibleChartType) => any;
  yAccessor: (dataObj: PossibleChartType) => any;
  y0Accessor?: (dataObj: PossibleChartType) => any;
};

const {
  type = 'line',
  interpolation = d3.curveNatural,
  data,
  xAccessor,
  yAccessor
} = defineProps<LineProps>();


const lineGenerator = d3[type]()
  .x(xAccessor)
  .y(yAccessor)
  .curve(interpolation);

if (type === "area") {
  lineGenerator
    .y0Accessor(y0Accessor)
    .y1(yAccessor);
}
</script>

<template>
  <path v-bind="$attrs" :class="`line line-type--${type}`" :d="lineGenerator(data)" />
</template>

<style lang="css">
.line-type--line {
  fill: none;
  stroke: var(--orange-1);
  stroke-width: 2px;
}
</style>
