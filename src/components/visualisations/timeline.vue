<script setup lang="ts">
type TimeLineProps<T> = {
  data: Array<T>;
  xAccessor: (item: T) => void;
  yAcessor: (item: T) => void;
  label: string;
}
const { data, xAccessor, yAcessor, label } = defineProps<TimeLineProps>()
</script>

<template>
  <div class="timeline"></div>
</template>

<style scoped lang="css"></style>
