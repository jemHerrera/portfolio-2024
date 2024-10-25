<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";

export type ProgressProps = {
  reverse?: boolean;
};

const props = defineProps<ProgressProps>();

const progress = ref();

const { y } = useWindowScroll();

const style = computed(() => {
  const redProgress = Math.floor(
    (y.value * 200) / document.documentElement.scrollHeight + 20
  );

  return `background: linear-gradient(${props.reverse ? "-" : ""}90deg, #00ffee, #00ffee, #2200fd, #f50e43, #f50e43 ${props.reverse ? 200 - redProgress : redProgress}%)`;
});
</script>
<template>
  <div ref="progress" :style="style" aria-hidden="true"></div>
</template>
