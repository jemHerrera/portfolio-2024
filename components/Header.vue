<script setup lang="ts">
import type { Image } from "~/types/Image";
import type { SimpleNavProps } from "./SimpleNav.vue";
import type { Button } from "#ui/types";

export type HeaderProps = {
  img?: Image;
  nav?: SimpleNavProps;
  links: Button[];
};

defineProps<HeaderProps>();
</script>

<template>
  <div
    class="flex justify-between bg-grey-100 border-b border-grey-200 px-4 py-3"
  >
    <div class="flex gap-4">
      <img v-if="img?.src" v-bind="img" class="rounded-full w-10 h-10" />
      <SimpleNav v-if="nav" v-bind="nav" />
    </div>

    <div class="flex">
      <UButton
        v-for="link in links"
        v-bind="link"
        size="xl"
        color="grey"
        variant="ghost"
      />
    </div>
  </div>
</template>
