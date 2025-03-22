<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from "@/components/Header.vue"
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  height: 100%;
}
</style>
