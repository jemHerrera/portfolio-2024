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
  <div>
    <img class="h-32 w-32 rounded-full mb-4" v-bind="img" />
    <slot />
    <div class="flex gap-2">
      <UButton
        v-for="link in links"
        v-bind="link"
        size="lg"
        color="grey"
        variant="ghost"
      />
    </div>
  </div>
</template>
