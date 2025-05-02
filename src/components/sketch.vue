<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue';
import p5 from 'p5';

export type SketchProp = {
  containerId: string;
  sketch: (p: p5) => void;
}

const { containerId, sketch } = defineProps<SketchProp>()
const container = useTemplateRef<HTMLDivElement | undefined>(containerId);

onMounted(() => {
  if (!container.value) return;
  new p5(sketch, container.value)
})
</script>

<template>
  <div id="container" :ref="containerId"></div>
</template>

<style scoped lang="css">
#container {
  border: solid 1px var(--muted-foreground);
  border-radius: var(--radius-xl);
  height: fit-content;
  width: fit-content;
  overflow: hidden;
  margin: 5px;
}
</style>
