<script setup lang="ts">
import Sketch from '@/components/gen-art/sketch.vue';
import randomness from '@/sketches/randomness';
</script>

<template>
  <h1>Randomness</h1>
  <div
    v-for="(sketch, idx) in randomness"
    :key="`container-${idx}`"
    class="sketch-container"
  >
    <Sketch
      :container-id="`container-${idx}`"
      :sketch="sketch"
    />
  </div>
</template>

<style scoped lang="css">
.sketch-container {
  margin-top: 15px;
}
</style>
