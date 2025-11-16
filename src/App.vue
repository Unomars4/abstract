<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  height: fit-content;
  margin: 0 auto;
  width: fit-content;
  border: 1px solid var(--border);
  padding: 1rem;
}
</style>
