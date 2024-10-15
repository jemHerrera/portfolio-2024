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
      <img
        width="32"
        height="32"
        v-if="img?.src"
        v-bind="img"
        class="rounded-full"
      />
      <SimpleNav v-if="nav" v-bind="nav" />
    </div>

    <div class="flex gap-4">
      <UButton
        v-for="link in links"
        v-bind="link"
        size="lg"
        color="grey"
        variant="ghost"
        :padded="false"
      />
    </div>
  </div>
</template>
