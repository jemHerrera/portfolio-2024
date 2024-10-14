<script setup lang="ts">
export type TechProps = {
  title: string;
  list: string[];
};

defineProps<TechProps>();
</script>

<template>
  <div class="flex flex-col gap-6">
    <h2
      class="inline pr-6 font-bold text-4xl border-purple-700 border-b-4 self-start"
    >
      {{ title }}<span class="text-ribbon-600">.</span>
    </h2>
    <div class="inline-flex flex-wrap text-grey-300 gap-4">
      <UBadge size="lg" color="purple" variant="soft" v-for="item in list">
        {{ item }}
      </UBadge>
    </div>
  </div>
</template>
