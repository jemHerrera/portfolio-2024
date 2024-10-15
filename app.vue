<script setup lang="ts">
import type { SimpleNavProps } from "./components/SimpleNav.vue";
import type { Image } from "./types/Image";
import type { Button } from "#ui/types";
import type { TechProps } from "./components/Tech.vue";
import type { ExperienceProps } from "./components/Experience.vue";
import type { ProjectsProps } from "./components/Projects.vue";

import { useIntersectionObserver } from "@vueuse/core";

useHead({
  title: "Jem | Dev",
  link: [{ rel: "icon", type: "image/x-icon", href: "pixelpfp.jpg" }],
});

const social: Button[] = [
  {
    icon: "pixelarticons:github",
    to: "https://github.com/jemHerrera",
    target: "_blank",
  },
  {
    icon: "mdi:linkedin",
    to: "https://www.linkedin.com/in/jemherrera/",
    target: "_blank",
  },
  {
    icon: "line-md:instagram",
    to: "https://www.instagram.com/sinchemy_art/",
    target: "_blank",
  },
];

const intro: string[] = [
  "I'm a Full Stack Developer from Canada. I like building web-based products and software.",
  "I also like studying Japanese, practicing Brazilian Jiu Jitsu, and creating random cool stuff.",
];

const tech: TechProps = {
  title: "Tech Stack",
  list: [
    "Node.js",
    "TypeScript",
    "Nuxt",
    "Vue",
    "Tailwind",
    "tRPC",
    "Zod",
    "Postgres",
    "MikroORM",
    "AWS",
    "Docker",
  ],
};

const experience: ExperienceProps = {
  title: "Experience",
  experience: [
    {
      company: "Motiv",
      role: "Full Stack Developer",
      duration: "2023 - Present",
      blurb:
        "In my role at Motiv, I worked on developing websites, apps and API services.",
      projects: [
        {
          title: "Huddl",
          link: "https://www.huddl.app/",
          blurb:
            "Huddl is an app for event attendees to network and participate in gamified activities to enhance their experience.",
        },
        {
          title: "Topshelf Hockey",
          link: "https://apps.apple.com/ca/app/topshelf-hockey/id6550889494",
          blurb:
            "Topshelf Hockey is a mobile app for hockey enthusiasts, delivering real-time league updates.",
        },
      ],
    },
    {
      company: "Eylence Group",
      role: "Ecommerce Developer",
      duration: "2018 - 2022",
      blurb:
        "At Eylence, I worked in building custom ecommerce websites for eye-wear companies.",
      projects: [
        {
          title: "Vue Optix",
          link: "https://vueoptix.com/",
        },
        {
          title: "Doctor's Optical Lab",
          link: "https://doctorsopticallab.com/",
        },
      ],
    },
  ],
};

const projects: ProjectsProps = {
  title: "Hobby Projects",
  blurb: "A collection of random dev hobbies.",
  projects: [
    {
      title: "Scriddish",
      description:
        "Scriddish is a mobile web application for meal planning. The app allows user to select from a variety of recipes and save them.",
      image: {
        src: "scriddish.jpg",
        alt: "Scriddish Logo",
      },
      tags: [".vue", ".scss"],
      links: [
        {
          label: "View project",
          to: "https://jemherrera.github.io/scriddish/",
          icon: "pixelarticons:external-link",
          variant: "link",
          trailing: true,
          padded: false,
        },
        {
          to: "https://github.com/jemHerrera/scriddish",
          icon: "pixelarticons:github",
          variant: "ghost",
        },
      ],
    },
    {
      title: "Blackjack",
      description:
        "A game of Blackjack in the browser. Powered by VueJs and DeckofCards API.",
      image: {
        src: "chip-vue.jpg",
        alt: "Vue chip logo",
      },
      tags: [".vue", ".scss"],
      links: [
        {
          label: "View project",
          to: "https://jemherrera.github.io/blackjack-game/",
          icon: "pixelarticons:external-link",
          variant: "link",
          trailing: true,
          padded: false,
        },
        {
          to: "https://github.com/jemHerrera/blackjack-game",
          icon: "pixelarticons:github",
          variant: "ghost",
        },
      ],
    },
  ],
};

const profilePicture: Image = {
  src: "pixelpfp.jpg",
  alt: "Portrait of Jem, in a few pixels.",
};

const nav = ref<SimpleNavProps>({
  links: ["#intro", "#tech", "#xp", "#hobby"],
  current: 0,
});

const sectionRefs = [ref(null), ref(null), ref(null), ref(null)];

sectionRefs.forEach((sectionRef, index) => {
  useIntersectionObserver(
    sectionRef,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        nav.value.current = index;
      }
    },
    { threshold: 0.5 }
  );
});
</script>

<template>
  <div class="bg-grey-50">
    <Progress class="fixed top-0 left-0 w-full z-20 h-2 md:h-1" />
    <div
      class="side-navigation hidden pr-20 fixed top-0 left-0 h-screen md:w-1/6 lg:w-1/4 md:flex flex-col justify-center items-end"
    >
      <SimpleNav v-bind="nav" />
    </div>
    <Header
      class="md:hidden fixed top-2 left-0 w-full z-40"
      :img="profilePicture"
      :nav="nav"
      :links="social"
    />
    <main class="px-6 pt-20 pb-40 md:mx-[calc(100vw/6)] lg:mx-[calc(100vw/4)]">
      <Hero
        id="intro"
        :ref="sectionRefs[0]"
        :img="profilePicture"
        :links="social"
      >
        <h1 class="font-bold text-7xl mb-6">
          Hi! I'm
          <span class="text-turqoise-400">Jem</span>
          <span class="text-ribbon-600">.</span>
        </h1>
        <p class="leading-6 text-white mb-6">{{ intro[0] }}</p>
        <p class="leading-6 text-grey-300">{{ intro[1] }}</p>
      </Hero>
      <Tech id="tech" :ref="sectionRefs[1]" v-bind="tech" class="pt-20" />
      <Experience
        id="xp"
        :ref="sectionRefs[2]"
        v-bind="experience"
        class="pt-20"
      />
      <Projects
        id="hobby"
        :ref="sectionRefs[3]"
        v-bind="projects"
        class="pt-20"
      />
    </main>
  </div>
</template>
