<script setup lang="ts">
export type TechProps = {
  title: string;
  list: string[];
};

defineProps<TechProps>();
</script>

<template>
  <h2>{{ title }}</h2>
  <p clas="inline-flex flex-wrap">
    <span
      class="[&:not(:last-child)]:after:content-[',\00a0']"
      v-for="item in list"
    >
      {{ item }}
    </span>
  </p>
</template>
