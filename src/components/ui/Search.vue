<script setup lang="ts">
type SearchBarProps = {
  placeholder?: string;
};

const { placeholder = 'Search' } = defineProps<SearchBarProps>();
</script>

<template>
  <div class="search-container">
    <input
      type="search"
      :placeholder="placeholder"
    />
  </div>
</template>

<style lang="css"></style>
