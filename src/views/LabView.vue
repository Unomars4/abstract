<script setup lang="ts">
import p5 from "p5";
import { onMounted, useTemplateRef } from "vue";

const container = useTemplateRef<HTMLDivElement | undefined>("container");

let sketch = function (p: p5) {
  let circle_x = 5;
  const screen_width = 500, screen_height = 410;
  p.setup = function () {
    p.createCanvas(screen_width, screen_height);
  }

  p.draw = function () {
    if (circle_x > screen_width) circle_x = 5;
    p.background(255);
    p.fill(125);
    p.circle(circle_x++, 100, 50);
  }
}

onMounted(() => {
  if (container.value)
    new p5(sketch, container.value)
})
</script>



<template>
  <main ref="main">
    <h1>Lab</h1>
    <div id="container" ref="container"></div>
  </main>
</template>


<style scoped lang="css">
h1 {
  font-weight: 900;
  text-align: center;
}

main {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
}

#container {
  border: dashed 6px darkgrey;
  height: fit-content;
  width: fit-content;
}
</style>
