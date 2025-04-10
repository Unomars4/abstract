<script setup lang="ts">
type LinkProps = {
  href: string
  blankTarget: boolean
}

const { href, blankTarget } = defineProps<LinkProps>();
</script>

<template>
  <a :href="href" :target="blankTarget ? '_blank' : ''">
    <slot></slot>
  </a>
</template>
