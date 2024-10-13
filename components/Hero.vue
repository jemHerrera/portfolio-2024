<script setup lang="ts">
export type HeroProps = {
  title: string;
};
defineProps<HeroProps>();
</script>
<template>
  <div>
    {{ title }}
  </div>
</template>
