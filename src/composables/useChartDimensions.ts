import { useTemplateRef, type ShallowRef, watchEffect, reactive } from 'vue';

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

// Regulates the chart boundaries, so it's positioned appropriately
// Get the container's dimensions - width, height
// uses default dimensions to size the graph space, but can also take in dimension options
// Dimensions must be reactive and change according to screen size
export default function useChartDimensions(refName: string): ChartDimensions {
  const ref = useTemplateRef<HTMLElement>(refName),
    dimensions: ChartDimensions = reactive({
      width: window.innerWidth * 0.9,
      height: 400,
      marginTop: 15,
      marginBottom: 40,
      marginLeft: 60,
      marginRight: 15,
      boundedWidth: 0,
      boundedHeight: 0,
    });

  watchEffect(() => {
    if (!ref.value) return;
    const { width, height } = ref.value.getBoundingClientRect();
    dimensions.width = width;
    dimensions.height = height;
    dimensions.boundedHeight =
      dimensions.height - dimensions.marginTop - dimensions.marginBottom;
    dimensions.boundedWidth =
      dimensions.width - dimensions.marginLeft - dimensions.marginRight;
  });

  return dimensions;
}
