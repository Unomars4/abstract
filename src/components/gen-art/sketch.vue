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
  border: solid 1.2px var(--border);
  border-radius: var(--radius-xl);
  height: fit-content;
  width: fit-content;
  overflow: hidden;
  margin: 5px;
}

#container:hover {
  box-shadow: -3px 6px 42px -21px rgba(0, 0, 0, 0.38);
}
</style>
