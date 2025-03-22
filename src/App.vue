<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from "@/components"
</script>

<template>
  <Header />
  <main>
    <RouterView />
    <footer>
      <div class="footer-content">
        <h3>Abstract</h3>
        <p>Copyright © 2024 Une Nyide.</p>
      </div>
    </footer>
  </main>
</template>

<style scoped>
main {
  height: 100%;
}

footer {
  padding: 5px;
  background: var(--gray-4);
  border-top: 1px solid var(--gray-3);
}

.footer-content {
  display: flex;
  justify-content: space-between;
}
</style>
