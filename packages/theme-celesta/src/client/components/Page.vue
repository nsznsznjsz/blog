<template>
  <article class="page prose max-w-none">
    <Content :pageKey="props.pageKey" />
  </article>
</template>

<script setup lang="ts">
import { defineProps } from "vue"

const props = defineProps<{
  pageKey?: string
}>()
</script>

<style lang="postcss">
.page {
  @apply p-10;

  & a.header-anchor {
    @apply text-primary-500;

    font-size: 0.85em;
    float: left;
    margin-left: -0.87em;
    padding-right: 0.23em;
    margin-top: 0.125em;
    opacity: 0;

    &:hover {
      text-decoration: none;
    }
  }

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    &:hover .header-anchor {
      opacity: 1;
    }
  }

  & img {
    margin: auto;
  }
}
</style>
