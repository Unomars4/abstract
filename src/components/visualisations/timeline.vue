<script setup lang="ts">
import useChartDimensions from '@/composables/useChartDimensions';
import Chart from './chart.vue';

type TimeLineProps<T> = {
  data: Array<T>;
  xAccessor: (item: T) => void;
  yAcessor: (item: T) => void;
  label: string;
}


const { data, xAccessor, yAcessor, label } = defineProps<TimeLineProps>();
useChartDimensions("timeline");
</script>

<template>
  <div class="timeline" ref="timeline">
    <Chart chartId="timeline">
    </Chart>
  </div>
</template>

<style scoped lang="css">
.timeline {
  border: solid 1px hsl(var(--border));
  border-radius: 15px;
  overflow: hidden;
  height: 100%;
}
</style>
