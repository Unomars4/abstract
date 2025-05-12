import { ref, toValue, type Ref } from 'vue';

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

export type ChartDimensionsOption = Omit<
  ChartDimensions,
  'width' | 'height' | 'boundedHeight' | 'boundedWidth'
>;

const defaultDimensions: ChartDimensions = {
  width: window.innerWidth * 0.9,
  height: 400,
  marginTop: 15,
  marginBottom: 40,
  marginLeft: 60,
  marginRight: 15,
  boundedWidth: window.innerWidth * 0.9 - 75,
  boundedHeight: 400 - 55,
};

export default function useChartDimensions(options?: ChartDimensionsOption): {
  calibrateDimensions: (w: Ref<number>, h: Ref<number>) => void;
  dimensions: Ref<ChartDimensions>;
} {
  const dimensions = ref(defaultDimensions);

  if (options && Object.keys(options).length > 0) {
    dimensions.value = { ...dimensions.value, ...options };
  }

  function calibrateDimensions(
    containerWidth: Ref<number>,
    containerHeight: Ref<number>,
  ) {
    dimensions.value.width = Math.floor(toValue(containerWidth) * 0.9);
    dimensions.value.height = toValue(containerHeight);

    dimensions.value.boundedHeight =
      dimensions.value.height -
      dimensions.value.marginTop -
      dimensions.value.marginBottom;

    dimensions.value.boundedWidth =
      dimensions.value.width -
      dimensions.value.marginLeft -
      dimensions.value.marginRight;
  }

  return { calibrateDimensions, dimensions };
}
