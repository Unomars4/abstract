<script setup lang="ts">
import { defineProps } from 'vue';
type SearchBarProps = {
  placeholder?: string
}

const { placeholder = "Search" } = defineProps<SearchBarProps>()
</script>

<template>
  <div class="search-container">
    <input type="search" :placeholder="placeholder" />
  </div>
</template>


<style lang="css"></style>
