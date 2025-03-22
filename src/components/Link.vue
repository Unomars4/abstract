<script setup lang="ts">
import { defineProps } from 'vue';

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
