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

  <main>
    <aside>
      <h1>SideNav</h1>
    </aside>

    <RouterView />
  </main>

  <footer>
  </footer>
</template>

<style scoped>
h1 {
  font-weight: 900;
}

aside {
  width: 20%;
  border-right: solid 1px darkgrey;
}

aside h1 {
  text-align: center;
  position: relative;
  top: 50%;
}

main {
  height: 90vh;
  width: 100vw;
  display: flex;
}

footer {
  width: 100%;
  height: 5vh;
  background: lightgrey;
  border-top: darkgrey solid 1px;
}

header {
  height: 5vh;
  width: 100%;
  border-bottom: solid darkgrey 1px;
  background: lightgrey;
}
</style>
