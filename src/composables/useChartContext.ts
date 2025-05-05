import type { ChartDimensions } from './useChartDimensions';
import { ref } from 'vue';
import type { Ref } from 'vue';

export type ChartId = string;
export type ChartContexts = Ref<Record<ChartId, ChartDimensions>>;
export type AddChartContextArgs = {
  chartId: string;
  chartDimension: ChartDimensions;
};
export type UseChartContext = {
  chartContexts: ChartContexts;
  addChartContext: ({ chartId, chartDimension }: AddChartContextArgs) => void;
  getChartDimensions: (chartId: ChartId) => ChartDimensions | null;
};

export default function useChartContext(): UseChartContext {
  const chartContexts: ChartContexts = ref({});

  const addChartContext = ({ chartId, chartDimension }: AddChartContextArgs) => {
    chartContexts.value[chartId] = chartDimension;
  };

  const getChartDimensions = (chartId: ChartId): ChartDimensions | null => {
    if (Object.keys(chartContexts.value).includes(chartId)) {
      return chartContexts.value[chartId];
    }
    return null;
  };

  return { chartContexts, addChartContext, getChartDimensions };
}
