import { defineStore } from 'pinia';
import { computed, ref, toValue } from 'vue';
import * as d3 from 'd3';

export const useChartsStore = defineStore('charts', () => {
  const chartContexts = ref({});
  const charts = computed(() => Object.keys(chartContexts.value));

  async function initChartCtx({
    url,
    chartId,
  }: {
    url: string;
    chartId: string;
  }) {
    try {
      console.log('creating a new chart');
      const data = await d3.json(url);
      if (data) {
        console.log('data came back:', data);
        chartContexts.value[chartId] = { url, data };
      }
    } catch (err) {
      console.log('Issue fetching and assiging the data, you required.', err);
    }
  }

  function getChartData(chartId: string) {
    console.log('Looking for:', chartId, ' data');
    if (charts.value.includes(chartId)) {
      console.log('Found it!!!');
      return chartContexts.value[chartId].data;
    } else {
      console.log("Couldn't find it:", toValue(chartContexts));
      return [];
    }
  }

  return { charts, chartContexts, initChartCtx, getChartData };
});
