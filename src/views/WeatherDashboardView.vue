<script setup lang="ts">
import Timeline from '@/components/charts/timeline.vue';
import useGetChartData from '@/composables/useGetChartData';
import type { ClimateDay } from '@/types';
import { dateParse } from '@/utils';
import { provide } from 'vue';

const DATA_URL = '../../data/nyc_weather_data.json';
const { data, error, loading } = useGetChartData<ClimateDay>(DATA_URL);

const xAccessor = (dataObj: ClimateDay) => dateParse(dataObj.date);
const yAccessor = (dataObj: ClimateDay) => dataObj.temperatureMax;

provide('xAccessor', xAccessor);
provide('yAccessor', yAccessor);
</script>

<template>
  <p
    v-if="error"
    class="error"
  >
    {{ error }}
  </p>
  <div
    class="dashboard"
    v-if="!loading && !error"
  >
    <Timeline :data="data.data" />
  </div>
</template>

<style lang="css">
h1 {
  font-style: italic;
  font-weight: 600;
}

.dashboard {
  height: 100%;
  width: 100%;
  padding: 15px;
  overflow: hidden;
}

.main-chart {
  height: 25%;
}

.error {
  color: var(--red-2);
}
</style>
