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
    <div class="view-container">
      <aside class="sidenav">
        <h1>SideNav</h1>
      </aside>
      <RouterView />
      <aside class="toc">
        <h1>TOC</h1>
      </aside>
    </div>
    <footer>
      <div class="footer-content">
        <h3>Abstract</h3>
        <p>Copyright © 2024 Une Nyide.</p>
      </div>
    </footer>
  </main>
</template>

<style scoped>
.sidenav,
header,
.toc {
  position: sticky;
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
  float: right;
  right: 0;
  top: 30px;
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
  top: 30px;
}

main {
  height: 100%;
  width: 80%;
  float: right;
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
