import { defineStore } from 'pinia';
import { computed, ref, toValue } from 'vue';
import * as d3 from 'd3';

export const useChartsStore = defineStore('charts', () => {
  const chartContexts = ref({});
  const charts = computed(() => Object.keys(chartContexts.value));

  return { charts };
});
