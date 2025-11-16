<script setup lang="ts">
type LinkProps = {
  href: string;
  blankTarget: boolean;
  text: string;
};

const { href, blankTarget, text } = defineProps<LinkProps>();
</script>

<template>
  <a
    :href="href"
    :target="blankTarget ? '_blank' : ''"
  >
    {{ text }}
  </a>
</template>

<style scoped>
a {
  color: black;
}

a:visited {
  color: orange;
}
</style>
