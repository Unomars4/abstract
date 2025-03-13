<script setup lang="ts">
import p5 from "p5";
import { onMounted, useTemplateRef } from "vue";

const main = useTemplateRef<HTMLElement | undefined>("main");

let sketch = function (p: p5) {
  p.setup = function () {
    p.createCanvas(500, 410);
  }

  p.draw = function () {
    p.background(170, 0, 0);
    p.fill(255);
    p.rect(100, 100, 50, 50);
  }
}

onMounted(() => {
  if (main.value)
    new p5(sketch, main.value)
})
</script>



<template>
  <main ref="main">
    <h1>Lab</h1>
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

.p5Canvas {
  border: solid 4px black;
  margin: auto;
}
</style>
