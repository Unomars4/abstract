<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Abstract</h1>
      <nav>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>
  </footer>
</template>

<style scoped>
h1 {
  font-weight: 900;
}

footer {
  width: 100%;
  height: 30px;
  background: lightgrey;
  border-top: darkgrey solid 1px;
}
</style>
