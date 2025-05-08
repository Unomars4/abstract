import { onMounted, reactive } from 'vue';

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

export type ChartDimensionsOption =
  | Omit<ChartDimensions, 'width' | 'height' | 'boundedHeight' | 'boundedWidth'>
  | {};

export default function useChartDimensions(
  containerWidth: number,
  containerHeight: number,
  options: ChartDimensionsOption = {},
): { state: ChartDimensions } {
  const dimensionState: { state: ChartDimensions } = reactive({
    state: {
      width: containerWidth * 0.9,
      height: containerHeight,
      marginTop: 15,
      marginBottom: 40,
      marginLeft: 60,
      marginRight: 15,
      boundedWidth: 0,
      boundedHeight: 0,
    },
  });

  if (Object.keys(options).length > 0) {
    dimensionState.state = { ...dimensionState.state, ...options };
  }

  function calculateBoundedProperties() {
    dimensionState.state.boundedHeight =
      dimensionState.state.height -
      dimensionState.state.marginTop -
      dimensionState.state.marginBottom;
    dimensionState.state.boundedWidth =
      dimensionState.state.width -
      dimensionState.state.marginLeft -
      dimensionState.state.marginRight;
  }

  onMounted(() => {
    calculateBoundedProperties();
  });

  return dimensionState;
}
