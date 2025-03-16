<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Abstract</h1>
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

aside {}

footer {
  width: 100%;
  height: 30px;
  background: lightgrey;
  border-top: darkgrey solid 1px;
}

header {
  width: 100%;
  border-bottom: solid darkgrey 1px;
}
</style>
