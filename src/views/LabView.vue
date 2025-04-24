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
  <div class="page-content">
    <div id="container" ref="container"></div>
  </div>
</template>


<style scoped lang="css">
.page-content {}

#container {
  border: dashed 2px var(--gray-3);
  height: fit-content;
  width: fit-content;
}
</style>
