<script setup lang="ts">
import Timeline from '@/components/visualisations/timeline.vue';
</script>

<template>
  <h1>Weather Dashboard</h1>
  <div class="dashboard">
    <section class="main-chart">
      <Timeline />
    </section>
    <section class="side-charts">
      <div class="scatterplot-container">
      </div>
      <div class="histogram-container"></div>
    </section>
  </div>
</template>

<style lang="css">
h1 {
  font-style: italic;
  font-weight: 600;
}

.dashboard {
  height: 100%;
}

.main-chart,
.side-charts {
  height: 50%;
}
</style>
