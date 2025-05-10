<script setup lang="ts">
const { height, width } = defineProps<{
  width: number;
  height: number;
  marginLeft: number;
  marginTop: number;
}>()
</script>

<template>
  <svg :width="width" :height="height" class="chart">
    <g :transform="`translate(${marginLeft}, ${marginTop})`">
      <slot />
    </g>
  </svg>
</template>

<style lang="css"></style>
