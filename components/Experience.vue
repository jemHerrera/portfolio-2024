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
  <div>
    <h2>{{ title }}</h2>
    <div v-for="e in experience">
      <h3>{{ e.company }}</h3>
      <div>
        <p>{{ e.role }}</p>
        <p>{{ e.duration }}</p>
      </div>
      <p>{{ e.blurb }}</p>
      <div>
        <h4>Projects</h4>
        <ul>
          <li v-for="p in e.projects">
            <UButton
              :to="p.link"
              variant="link"
              color="white"
              target="_blank"
              icon="pixelarticons:external-link"
              :trailing="true"
              :label="p.title"
              :padded="false"
            />
            <p>{{ p.blurb }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
