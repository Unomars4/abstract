<script setup lang="ts">
import Link from '@/components/ui/Link.vue';
import Search from '@/components/ui/Search.vue';
</script>

<template>
  <header>
    <div class="header-content">
      <Link
        :href="'/'"
        :blank-target="false"
      >
        <h2>Abstract</h2>
      </Link>
      <nav>
        <div class="nav-btn">
          <Link
            :href="'/docs'"
            :blank-target="false"
            >Docs</Link
          >
        </div>
        <div class="nav-btn">
          <Link
            :href="'/chapters'"
            :blank-target="false"
            >Chapters</Link
          >
        </div>
        <Search />
      </nav>
      <div class="other-items">
        Light
        <button>Github</button>
        <p class="version">2.0.0</p>
      </div>
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
  border-bottom: solid var(--gray-3) 1px;
  padding: 5px;
}

nav,
.header-content,
.other-items {
  display: flex;
  align-self: center;
}

.header-content {
  justify-content: space-between;
}

nav,
.other-items {
  gap: 15px;
}
</style>
