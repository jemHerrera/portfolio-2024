<script setup lang="ts">
import type { Image } from "~/types/Image";
import type { Button } from "#ui/types";

export type HeroProps = {
  img: Image;
  links: Button[];
};

defineProps<HeroProps>();
</script>
<template>
  <div class="h-screen flex flex-col justify-end md:pb-[calc(100vh/4)]">
    <img class="h-32 w-32 rounded-full mb-8" v-bind="img" />
    <slot />
    <div class="flex gap-2 mt-6">
      <UButton v-for="link in links" v-bind="link" size="xl" variant="ghost" />
    </div>
  </div>
</template>
