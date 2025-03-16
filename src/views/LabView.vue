<script setup lang="ts">
import Walker from "@/domains/walker";
import p5 from "p5";
import { onMounted, useTemplateRef } from "vue";

const container = useTemplateRef<HTMLDivElement | undefined>("container");

let sketch = function (p: p5) {
  let walker: Walker;
  const screen_width = 640, screen_height = 240;
  p.setup = function () {
    walker = new Walker(p)
    p.createCanvas(screen_width, screen_height);
    p.background(255)
  }

  p.draw = function () {
    walker.show()
    walker.step()
  }
}

onMounted(() => {
  if (container.value)
    new p5(sketch, container.value)
})
</script>



<template>
  <div class="main">
    <h1>Lab</h1>
    <div id="container" ref="container"></div>
  </div>
</template>


<style scoped lang="css">
h1 {
  font-weight: 900;
  text-align: center;
}

.main {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  flex-grow: 1;
}

#container {
  border: dashed 6px darkgrey;
  height: fit-content;
  width: fit-content;
}
</style>
