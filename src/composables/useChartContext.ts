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
};

export default function useChartContext(): UseChartContext {
  const chartContexts: ChartContexts = ref({});

  const addChartContext = ({ chartId, chartDimension }: AddChartContextArgs) => {
    chartContexts.value[chartId] = chartDimension;
  };

  return { chartContexts, addChartContext };
}
