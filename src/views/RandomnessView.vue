<script setup lang="ts">
import Sketch from '@/components/sketch.vue';
import p5 from 'p5';
import { RandomWalker, AdvancedRandomWalker, NormalDistributionGraph } from '@/sketches/randomness';

const sketches: (p: p5) => void[] = [
  RandomWalker,
  AdvancedRandomWalker,
  NormalDistributionGraph
];
</script>

<template>
  <div v-for="(sketch, idx) in sketches" :key="`container-${idx}`">
    <Sketch :container-id="`container-${idx}`" :sketch="sketch" />
  </div>
</template>


<style scoped lang="css"></style>
