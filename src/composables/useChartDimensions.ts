import { useTemplateRef, type ShallowRef } from 'vue';

export type ChartDimensions = {
  width: number;
  height: number;
  marginTop: number;
  marginRight: number;
  marginLeft: number;
  marginBottom: number;
  boundedHeight: number;
  boundedWidth: number;
};

export type ChartDimensionsRef = Readonly<ShallowRef<HTMLDivElement | null>>;

export type UseChartTuple = [ChartDimensionsRef, ChartDimensions];

export default function useChartDimensions(): UseChartTuple {
  const ref = useTemplateRef<HTMLDivElement>('timeline'),
    dimensions: ChartDimensions = {};

  if (ref.value) {
    console.log('Ref value:', ref.value);
  }
  return [ref, dimensions];
}
