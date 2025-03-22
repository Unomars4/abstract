<script setup lang="ts">
import Link from "@/components/Link.vue"
</script>

<template>
  <header>
    <div class="header-content">
      <Link href="/">
      <h2>Abstract </h2>
      </Link>
      <nav>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="css">
h2 {
  font-weight: 900;
}

header {
  position: sticky;
  top: 0px;
  background: white;
  z-index: 2;
  width: 100%;
  border-bottom: solid var(--gray - 3) 1px;
  padding: 5px;
}
</style>
