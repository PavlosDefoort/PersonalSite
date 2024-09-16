<template>
  <section class="text-gray-600 body-font" id="projects">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1
            class="sm:text-6xl text-4xl font-medium title-font mb-2 text-gray-900"
          >
            Projects
          </h1>
          <div class="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        <p
          class="lg:w-1/2 w-full leading-relaxed text-gray-500 font-lato text-md"
        >
          During my spare time, I dive deep into modern technology, constantly
          exploring new tools, frameworks, and methodologies. Whether it's
          experimenting with cutting-edge libraries, enhancing my development
          skills, or working on innovative projects, I am always looking for
          ways to expand my technical expertise and apply it to real-world
          challenges.
        </p>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 font-lato"
      >
        <div
          class="bg-gray-100 p-6 rounded-lg flex flex-col hover:scale-110 transition-transform"
          v-for="item in items"
          :key="item.name"
        >
          <img
            class="h-40 rounded w-full object-cover object-center mb-6"
            :src="`/${item.image}`"
            alt="content"
          />
          <h3
            class="tracking-widest text-indigo-500 text-xs font-medium title-font"
          >
            {{ item.date }}
          </h3>
          <h2 class="text-lg text-gray-900 font-bold title-font mb-4">
            {{ item.name }}
          </h2>
          <p class="leading-relaxed text-base flex-grow h-16">
            {{ item.description }}
          </p>
          <div class="flex flex-row space-x-3">
            <a
              :href="item.github"
              class="flex items-center space-x-1"
              target="_blank"
            >
              <p>Github</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 15 15"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8.5a.5.5 0 0 0-1 0V12H3V3h3.5a.5.5 0 0 0 0-1zm9.854.146a.5.5 0 0 1 .146.351V5.5a.5.5 0 0 1-1 0V3.707L6.854 8.854a.5.5 0 1 1-.708-.708L11.293 3H9.5a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .354.146"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>

            <a
              :href="item.deployment"
              class="flex items-center space-x-1"
              target="_blank"
            >
              <p>Deployment</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 15 15"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8.5a.5.5 0 0 0-1 0V12H3V3h3.5a.5.5 0 0 0 0-1zm9.854.146a.5.5 0 0 1 .146.351V5.5a.5.5 0 0 1-1 0V3.707L6.854 8.854a.5.5 0 1 1-.708-.708L11.293 3H9.5a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .354.146"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <div class="flex flex-row space-x-3 mt-4">
            <UTooltip :text="icon.name" v-for="icon in item.icons">
              <component :is="icon.icon" class="w-12 h-12" />
            </UTooltip>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import NextIcon from "@/assets/css/svg/NextIcon.vue";
import TailwindIcon from "@/assets/css/svg/TailwindIcon.vue";
import TypeScriptIcon from "@/assets/css/svg/TypeScriptIcon.vue";
import FireBaseIcon from "@/assets/css/svg/FirebaseIcon.vue";
import ReactIcon from "@/assets/css/svg/ReactIcon.vue";
import CSharpIcon from "~/assets/css/svg/CSharpIcon.vue";
import UnityIcon from "~/assets/css/svg/UnityIcon.vue";

const items = [
  {
    name: "PenguLearn",
    description:
      "A free educational platform for students to learn a variety of subjects.",
    icons: [
      {
        icon: NextIcon,
        name: "Next.js",
      },
      {
        icon: FireBaseIcon,
        name: "FireBase",
      },
    ],
    github: "https://github.com/PavlosDefoort/pengu-math",
    deployment: "https://pengumath.vercel.app/",
    date: "January 2023-Present",
    image: "Luffy.jpg",
  },
  {
    name: "PhotoProX",

    description:
      "A free, user-friendly, modern photo editor, easily accessible from the web. ",
    icons: [
      {
        icon: NextIcon,
        name: "Next.js",
      },
      {
        icon: TailwindIcon,
        name: "Tailwind CSS",
      },
      {
        icon: TypeScriptIcon,
        name: "TypeScript",
      },
      {
        icon: FireBaseIcon,
        name: "FireBase",
      },
    ],
    github: "https://github.com/PavlosDefoort/PhotoProX",
    deployment: "https://photoprox.vercel.app/",
    date: "June 2023-Present",
    image: "Luffy.jpg",
  },
  {
    name: "Untitled 2025",
    description: "An unannouced project I am working on.",
    icons: [
      {
        icon: CSharpIcon,
        name: "C#",
      },
      {
        icon: UnityIcon,
        name: "Unity",
      },
    ],
    github: "https://github.com/PavlosDefoort/pengu-math",
    deployment: "https://pengumath.vercel.app/",
    date: "Sometime Soon...",
    image: "Cloud.jpg",
  },
];
</script>
