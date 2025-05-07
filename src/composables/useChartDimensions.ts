import { reactive } from 'vue';

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

// Regulates the chart boundaries, so it's positioned appropriately
// Get the container's dimensions - width, height
// uses default dimensions to size the graph space, but can also take in dimension options
// Dimensions must be reactive and change according to screen size
export default function useChartDimensions(
  containerWidth: number,
  containerHeight: number,
  options,
): ChartDimensions {
  const dimensions: ChartDimensions = reactive({
    width: containerWidth * 0.9,
    height: containerHeight,
    marginTop: 15,
    marginBottom: 40,
    marginLeft: 60,
    marginRight: 15,
    boundedWidth: 0,
    boundedHeight: 0,
  });

  return dimensions;
}
