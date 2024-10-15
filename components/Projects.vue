<script setup lang="ts">
import type { Image } from "~/types/Image";
import type { Button } from "#ui/types";

export type ProjectsProps = {
  title: string;
  blurb?: string;
  projects: Project[];
};

type Project = {
  title: string;
  description: string;
  image: Image;
  tags: string[];
  links: Button[];
};

defineProps<ProjectsProps>();
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-col gap-6">
      <h2
        class="inline md:pr-6 font-bold text-4xl border-purple-700 border-b-4 self-start"
      >
        {{ title }}<span class="text-ribbon-600">.</span>
      </h2>
      <p class="text-grey-300 mb-4" v-if="blurb">{{ blurb }}</p>
    </div>
    <ul class="flex flex-col gap-8">
      <li v-for="project in projects" class="flex gap-8">
        <img class="w-14 h-14 md:w-20 md:h-20" v-bind="project.image" />
        <div class="flex flex-col gap-2">
          <div class="flex flex-col md:flex-row gap-4">
            <h3 class="font-bold text-2xl">{{ project.title }}</h3>
            <div class="flex flex-row gap-4 flex-wrap">
              <UBadge v-for="tag in project.tags" color="purple" variant="soft">
                {{ tag }}
              </UBadge>
            </div>
          </div>
          <p class="text-grey-500 mb-2">
            {{ project.description }}
          </p>
          <div class="flex gap-3">
            <UButton v-for="button in project.links" v-bind="button" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
