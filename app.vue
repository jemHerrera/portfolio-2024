<script setup lang="ts">
import type { SimpleNavProps } from "./components/SimpleNav.vue";
import type { Image } from "./types/Image";
import type { Button } from "#ui/types";
import type { TechProps } from "./components/Tech.vue";
import type { ExperienceProps } from "./components/Experience.vue";
import type { ProjectsProps } from "./components/Projects.vue";

useHead({
  title: "Jem | Dev",
});

const nav: SimpleNavProps = {
  links: ["test", "test", "test"],
  current: 2,
};

const profilePicture: Image = {
  src: "pixelpfp.jpg",
  alt: "Portrait of Jem, in a few pixels.",
};

const social: { icon: string; href: string }[] = [
  {
    icon: "pixelarticons:github",
    href: "https://github.com/jemHerrera",
  },
  {
    icon: "mdi:linkedin",
    href: "https://www.linkedin.com/in/jemherrera/",
  },
  {
    icon: "line-md:instagram",
    href: "https://www.instagram.com/sinchemy_art/",
  },
];

const intro: string[] = [
  "I'm a Software Developer from Canada. I build websites, web applications and API services.",
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
        "In my role at Motiv, I played a pivotal role in developing websites, web apps and api servers.",
      projects: [
        {
          title: "Huddl",
          link: "https://www.huddl.app/",
          blurb:
            "Huddl is an event engagement app for users to network, share photos, join Q&A sessions, and participate in interactive activities to enhance their event experience.",
        },
        {
          title: "Topshelf Hockey",
          link: "https://apps.apple.com/ca/app/topshelf-hockey/id6550889494",
          blurb:
            "Topshelf Hockey is a mobile app for hockey enthusiasts, delivering real-time updates and detailed league standings.",
        },
      ],
    },
    {
      company: "Eylence Group",
      role: "Ecommerce Developer",
      duration: "2018 - 2022",
      blurb:
        "At Eylence, I worked as an in-house developer building custom ecommerce websites for eye-wear companies.",
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
  title: "Personal Projects",
  blurb: "A collection of some random dev hobbies.",
  projects: [
    {
      title: "Scriddish",
      description:
        "Scriddish is a mobile web application for meal planning. The app allows user to select from a variety of recipes and save them.",
      image: {
        src: "/scriddish/scriddish.png",
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
          color: "white",
        },
        {
          to: "https://github.com/jemHerrera/scriddish",
          icon: "pixelarticons:github",
          variant: "ghost",
          color: "white",
        },
      ],
    },
    {
      title: "Blackjack",
      description:
        "A game of Blackjack in the browser. Powered by VueJs and DeckofCards API.",
      image: {
        src: "/blackjack/chip-vue.png",
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
          color: "white",
        },
        {
          to: "https://github.com/jemHerrera/blackjack-game",
          icon: "pixelarticons:github",
          variant: "ghost",
          color: "white",
        },
      ],
    },
  ],
};
</script>

<template>
  <Progress class="fixed top-0 left-0 w-full z-20 h-2 md:h-1" />
  <div
    class="side-navigation hidden fixed top-0 left-0 h-screen md:w-1/6 lg:w-1/4 md:flex flex-col justify-center items-end"
  >
    <SimpleNav v-bind="nav" />
  </div>
  <Header class="md:hidden" :img="profilePicture" :nav="nav" :links="social" />
  <main class="p-10 md:mx-[calc(100vw/6)] lg:mx-[calc(100vw/4)]">
    <Hero :img="profilePicture" :links="social">
      <h1>
        Hi! I'm
        <span class="color-teal">Jem</span>.
      </h1>
      <p>{{ intro[0] }}</p>
      <p>{{ intro[1] }}</p>
    </Hero>
    <Tech v-bind="tech" />
    <Experience v-bind="experience" />
    <Projects v-bind="projects" />
  </main>
</template>
