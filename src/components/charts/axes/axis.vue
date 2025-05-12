<script setup lang="ts">
import type { ScaleTime } from "d3";
import AxisHorizontal from "./horizontal-axis.vue";
import AxisVertical from "./vertical-axis.vue";
import type { PossibleChartType } from "@/types";

const { dimension, label, formatTick, scale } = defineProps<{
  dimension: "x" | "y";
  label: string;
  formatTick: (d: PossibleChartType) => string;
  scale: ScaleTime<number, number, never>;
}>();
</script>

<template>
  <AxisVertical v-if="dimension === 'y'" :scale="scale" :format-tick="formatTick" :label="label" />
  <AxisHorizontal v-else :scale="scale" :format-tick="formatTick" :label="label" />
</template>

<style lang="css">
.axis_line {
  stroke: lightgrey;
  stroke-width: 1px;
}

text {
  font-size: 12px;
}

.axis_tick {
  fill: var(--color-muted-foreground);
}

.axis_label {
  font-weight: bold;
}
</style>
