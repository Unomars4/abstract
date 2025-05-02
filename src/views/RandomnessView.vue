<script setup lang="ts">
import Sketch from '@/components/sketch.vue';
import { RandomWalker, AdvancedRandomWalker } from '@/sketches/randomness';
</script>

<template>
  <Sketch container-id="container" :sketch="RandomWalker" />
  <Sketch container-id="container-1" :sketch="AdvancedRandomWalker" />
</template>


<style scoped lang="css"></style>
