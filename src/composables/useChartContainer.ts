import { onMounted, onUnmounted, ref, useTemplateRef } from 'vue';
import useChartDimensions from './useChartDimensions';

export default function useChartContainer(refId: string) {
  const el = useTemplateRef<HTMLDivElement>(refId);
  const width = ref(0);
  const height = ref(0);
  const { calibrateDimensions, dimensions } = useChartDimensions();

  function update() {
    if (el.value) {
      width.value = el.value.clientWidth;
      height.value = el.value.clientHeight;
      calibrateDimensions(width, height);
    }
  }

  onMounted(() => {
    window.addEventListener('resize', update);
    update();
  });
  onUnmounted(() => window.removeEventListener('resize', update));

  return { width, height, refId, dimensions };
}
