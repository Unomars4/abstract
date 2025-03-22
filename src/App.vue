<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="header-content">
      <a href="/">
        <h1>Abstract</h1>
      </a>
      <nav>
      </nav>
    </div>
  </header>

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
header,
.sidenav {
  background: white;
}

header {
  position: sticky;
  top: 0px;
}

h1,
h3 {
  font-weight: 900;
}

main {
  height: 100%;
}

footer {
  padding: 5px;
  background: var(--gray-4);
  border-top: 1px solid var(--gray-3);
}

header {
  z-index: 2;
  width: 100%;
  border-bottom: solid var(--gray-3) 1px;
  padding: 5px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
}
</style>
