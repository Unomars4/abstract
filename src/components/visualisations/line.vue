<script setup lang="ts">
import * as d3 from 'd3';

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

</script>

<template>
  <path :class="`line line-type--${type}`" />
</template>

<style lang="css"></style>
