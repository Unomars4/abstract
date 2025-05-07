<script setup lang="ts">
import * as d3 from 'd3';
import { useChartsStore } from '@/stores/charts';
import type { ClimateDay } from '@/types';

type LineProps = {
  type?: 'line' | 'area';
  interpolation?: d3.CurveFactory | d3.CurveFactoryLineOnly;
  chartCtx: string;
  xAccessor: (item) => void;
  yAccessor: (item) => void;
  y0Accessor?: (item) => void;
};

const {
  chartCtx,
  type = 'line',
  interpolation = d3.curveStep,
  xAccessor,
  yAccessor,
  y0Accessor,
} = defineProps<LineProps>();
const store = useChartsStore<ClimateDay>()(), data = store.getChartData(chartCtx);

const lineGenerator = d3[type]().x(xAccessor).y(yAccessor).curve(interpolation);

console.log(lineGenerator(data))

if (type === 'area') {
  lineGenerator.y0(y0Accessor).y1(yAccessor);
}
</script>

<template>
  <path :class="`line line-type--${type}`" />
</template>

<style lang="css"></style>
