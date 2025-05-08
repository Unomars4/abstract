<script setup lang="ts">
const { height, width } = defineProps<{ width: number; height: number }>()
</script>

<template>
  <svg :width="width" :height="height" class="chart">
    <g :transform="">
      <slot />
    </g>
  </svg>
</template>

<style lang="css"></style>
