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
  height: 100vh;
  width: 60%;
  margin: 0 auto;
  border: solid 2px black;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
