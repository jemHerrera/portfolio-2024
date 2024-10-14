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
  <div>
    <div>
      <h2>{{ title }}</h2>
      <p v-if="blurb">{{ blurb }}</p>
    </div>
    <ul>
      <li v-for="project in projects">
        <button onclick="openProject('scriddish')" class="project-handle">
          <img v-bind="project.image" />
          <div>
            <div>
              <h3>{{ project.title }}</h3>
              <span v-for="tag in project.tags">{{ tag }}</span>
            </div>
            <p>
              {{ project.description }}
            </p>
            <div>
              <UButton v-for="button in project.links" v-bind="button" />
            </div>
          </div>
        </button>
      </li>
    </ul>
  </div>
</template>
