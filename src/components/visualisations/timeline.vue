<script setup lang="ts">
import useChartDimensions from '@/composables/useChartDimensions';

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
