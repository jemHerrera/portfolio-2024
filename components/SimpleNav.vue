<script setup lang="ts">
export type SimpleNavProps = {
  links: string[];
  current: number;
};

defineProps<SimpleNavProps>();
</script>

<template>
  <div class="flex gap-4 md:flex-col md:gap-6 items-center">
    <template v-for="(link, index) in links">
      <a
        :href="link"
        :class="{
          'h-2 w-8 md:h-20 md:w-4 rotate-0 bg-turqoise-400': index === current,
          'w-2 h-2 md:w-4 md:h-4 rotate-45 bg-grey-300 hover:bg-grey-400':
            index !== current,
        }"
      ></a>
    </template>
  </div>
</template>
