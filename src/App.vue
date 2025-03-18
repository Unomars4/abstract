<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <a href="/">
      <h1>Abstract</h1>
    </a>
    <nav>
    </nav>
  </header>

  <aside class="sidenav">
    <h1>SideNav</h1>
  </aside>

  <main>
    <RouterView />
    <footer>
      <div class="footer-content">
        <h3>Abstract</h3>
        <p>Copyright © 2024 Une Nyide.</p>
      </div>
    </footer>
  </main>

  <aside class="toc">
    <h1>TOC</h1>
  </aside>
</template>

<style scoped>
.sidenav,
header,
.toc {
  position: fixed;
  background: white;
}

h1,
h3 {
  font-weight: 900;
}

.wrapper {
  flex-grow: 1;
}

.toc {
  height: 45%;
  width: 20%;
  right: 0;
  top: 0;
}

aside {
  z-index: 1;
  width: 20%;
  height: 100%;
  border-right: solid 1px var(--gray-3);
}

aside h1 {
  text-align: center;
  position: relative;
  top: 50%;
}

main {
  height: 100%;
  width: 80%;
  float: right;
}

footer {
  background: var(--gray-4);
}

header {
  z-index: 2;
  height: 5vh;
  width: 100%;
  border-bottom: solid var(--gray-3) 1px;
}
</style>
