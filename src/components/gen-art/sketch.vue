<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue';
import p5 from 'p5';
import { type SketchDetails } from '@/types';

export type SketchProp = {
  containerId: string;
  sketch: SketchDetails;
};

const { containerId, sketch } = defineProps<SketchProp>();
const container = useTemplateRef<HTMLDivElement | undefined>(containerId);

onMounted(() => {
  if (!container.value) return;
  new p5(sketch.sketch, container.value);
});
</script>

<template>
  <p>{{ sketch.title }}</p>
  <div
    id="container"
    :ref="containerId"
  ></div>
</template>

<style scoped lang="css">
#container {
  border: solid 1px hsl(var(--border));
  border-radius: var(--radius-xl);
  height: fit-content;
  width: fit-content;
  overflow: hidden;
  margin: 5px;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px -1px rgba(0, 0, 0, 0.1);
}
</style>
