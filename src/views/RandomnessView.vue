<script setup lang="ts">
import Sketch from '@/components/sketch.vue';
import { RandomWalker } from '@/sketches/randomness';
</script>

<template>
  <Sketch container-id="container" :sketch="RandomWalker" />
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
