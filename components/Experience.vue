<script setup lang="ts">
export type ExperienceProps = {
  title: string;
  experience: Experience[];
};

type Experience = {
  company: string;
  role: string;
  duration: string;
  blurb: string;
  projects: Project[];
};

type Project = {
  title: string;
  link: string;
  blurb?: string;
};

defineProps<ExperienceProps>();
</script>

<template>
  <div class="flex flex-col gap-6">
    <h2
      class="inline pr-6 font-bold text-4xl border-purple-700 border-b-4 self-start"
    >
      {{ title }}<span class="text-ribbon-600">.</span>
    </h2>
    <div class="flex flex-col pb-4 mb-4" v-for="e in experience">
      <h3 class="text-2xl mb-2 font-bold">{{ e.company }}</h3>
      <div class="flex flex-wrap gap-4 items-center mb-4">
        <p class="text-grey-300">{{ e.role }}</p>
        <UBadge color="grey" variant="soft">{{ e.duration }}</UBadge>
      </div>
      <p class="text-grey-500 mb-4">{{ e.blurb }}</p>
      <h4 class="text-lg mb-2">Projects</h4>
      <ul class="flex flex-wrap gap-4 md:gap-0">
        <li v-for="p in e.projects" class="md:basis-1/2 md:pr-4">
          <UButton
            :to="p.link"
            variant="link"
            color="grey"
            target="_blank"
            icon="pixelarticons:external-link"
            :trailing="true"
            :label="p.title"
            :padded="false"
            class="hover:text-turqoise-400 mb-4"
          />
          <p class="text-grey-300">{{ p.blurb }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
