<script setup lang="ts">
import Walker from "@/domains/walker";
import p5 from "p5";
import { onMounted, useTemplateRef } from "vue";

const container = useTemplateRef<HTMLDivElement | undefined>("container");

let sketch = function (p: p5) {
  let walker: Walker;
  const screen_width = 640, screen_height = 240;
  p.setup = function () {
    p.createCanvas(screen_width, screen_height);
    walker = new Walker(p)
    p.background(255)
  }

  p.draw = function () {
    walker.step()
    walker.show()
  }
}

onMounted(() => {
  if (container.value)
    new p5(sketch, container.value)
})
</script>



<template>
  <div id="container" ref="container"></div>
</template>


<style scoped lang="css">
h1 {
  font-weight: 900;
  text-align: center;
}

#container {
  flex-basis: 70%;
  border: dashed 2px var(--gray-3);
  height: fit-content;
  width: fit-content;
}
</style>
