<script setup lang="ts">
import p5 from "p5";
import { onMounted, useTemplateRef } from "vue";
import { RandomWalker } from "@/sketches/randomness";

const container = useTemplateRef<HTMLDivElement | undefined>("container");

onMounted(() => {
  if (!container.value) return;
  new p5(RandomWalker, container.value)
})
</script>



<template>
  <div id="container" ref="container"></div>
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
