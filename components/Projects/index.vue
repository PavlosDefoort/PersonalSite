<template>
  <section
    class="text-white font-inter body-font bg-black border-t-[1px] border-gray-800"
    id="projects"
  >
    <div
      class="container px-5 py-16 md:py-24 mx-auto opacity-0 transition-all duration-1000 ease-out"
      ref="container"
    >
      <div class="w-full mb-12 md:mb-12">
        <div class="md:w-1/2 w-full mb-6">
          <h1
            class="sm:text-5xl text-3xl font-bold title-font mb-4"
            ref="about"
          >
            Projects
          </h1>
          <div class="h-1 w-16 bg-indigo-200 rounded"></div>
        </div>
      </div>
      <div class="sm:text-lg mb-3 font-normal text-base">
        During my spare time, I dive deep into modern technology, constantly
        exploring new tools, frameworks, and methodologies. Whether it's
        experimenting with cutting-edge libraries, enhancing my development
        skills, or working on innovative projects, I am always looking for ways
        to expand my technical expertise and apply it to real-world challenges.
      </div>
      <UCarousel
        :arrows="true"
        v-slot="{ item, index }"
        :items="items"
        :ui="{
          item: 'w-72 sm:w-80 lg:w-96 h-96 m-4 rounded-md ',
        }"
      >
        <UCard
          class="w-full h-full text-white bg-[length:100%_200%] animate-gradient hover:scale-105 transition-all duration-300 ease-in-out"
          :class="item.gradient"
        >
          <template #header>
            <div
              class="h-1 flex flex-row justify-between items-center font-inter"
            >
              <h1 class="font-semibold text-base">
                {{ item.name }}
              </h1>
              <div class="flex flex-row space-x-2 items-center">
                <a
                  v-if="item.production"
                  class="flex flex-row items-center hover:scale-105 transition-all duration-300 ease-in-out"
                  :href="item.github"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                  <p class="font-normal text-xs">Deployment</p>
                </a>
                <a
                  class="flex flex-row items-center"
                  :href="item.github"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                  <p class="font-normal text-xs hover:text-slate-300">GitHub</p>
                </a>
              </div>
            </div>
          </template>

          <div class="h-56 flex flex-col items-center justify-evenly">
            <component :is="item.logo" class="w-20 h-20 mx-auto" />
            <p>
              {{ item.description }}
            </p>
          </div>

          <template
            #footer
            class="h-20 flex flex-row items-center justify-center border-0"
          >
            <div
              class="w-full flex flex-row space-x-2 overflow-x-scroll custom-scrollbar pb-2"
            >
              <div
                class="flex flex-col items-center space-y-1"
                v-for="tech in item.tech"
              >
                <component :is="tech.icon" class="w-6 h-6 mx-auto" />

                <div
                  class="flex items-center justify-center rounded-md min-w-max h-4 px-2"
                  :class="item.tagColour"
                >
                  <p class="text-[10px] font-bold text-center">
                    {{ tech.name }}
                  </p>
                </div>
              </div>
            </div>
          </template>
        </UCard>
      </UCarousel>
    </div>
  </section>
</template>

<script setup lang="ts">
import ReactIcon from "~/assets/css/svg/dark/ReactIcon.vue";
import NextIcon from "~/assets/css/svg/colour/NextIcon.vue";
import FirebaseIcon from "~/assets/css/svg/colour/FirebaseIcon.vue";
import TypeScriptIcon from "~/assets/css/svg/colour/TypeScriptIcon.vue";
import UnityIcon from "~/assets/css/svg/colour/UnityIcon.vue";
import CSharpIcon from "~/assets/css/svg/colour/CSharpIcon.vue";
import Pi from "~/assets/css/svg/dark/Pi.vue";
import LayerIcon from "~/assets/css/svg/dark/LayerIcon.vue";
import PixiIcon from "~/assets/css/svg/colour/PixiIcon.vue";
import GCloudIcon from "~/assets/css/svg/colour/GCloudIcon.vue";
import PhotoShopIcon from "~/assets/css/svg/colour/PhotoShopIcon.vue";
import TailwindIcon from "~/assets/css/svg/colour/TailwindIcon.vue";
import CPPIcon from "~/assets/css/svg/colour/CPPIcon.vue";
import MaterialUIIcon from "~/assets/css/svg/colour/MaterialUIIcon.vue";
import OpenCVIcon from "~/assets/css/svg/colour/OpenCVIcon.vue";
import ElectronIcon from "~/assets/css/svg/colour/ElectronIcon.vue";
import PostgreSQLIcon from "~/assets/css/svg/colour/PostgreSQLIcon.vue";
import PrismaIcon from "~/assets/css/svg/dark/PrismaIcon.vue";
import ShadCnIcon from "~/assets/css/svg/dark/ShadCnIcon.vue";
import JavascriptIcon from "~/assets/css/svg/colour/JavascriptIcon.vue";
import SFMLIcon from "~/assets/css/svg/colour/SFMLIcon.vue";
import SpotifyIcon from "~/assets/css/svg/colour/SpotifyIcon.vue";
import NextAuthIcon from "~/assets/css/svg/colour/NextAuthIcon.vue";
import AlgoIcon from "~/assets/css/svg/colour/AlgoIcon.vue";
import MusicIcon from "~/assets/css/svg/colour/MusicIcon.vue";

import { onMounted, ref } from "vue";

const container = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target); // Stop observing once it fades in
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: "0px 0px -50px 0px", // Adds extra margin for smoother appearance
    }
  );

  // Observe the text and photo elements
  if (container.value) {
    observer.observe(container.value);
  }
});

const items = [
  {
    name: "PhotoProX",
    github: "https://github.com/PavlosDefoort/PhotoProX",
    production: "https://photoprox-dev.vercel.app/",
    description:
      "A free, user-friendly, modern photo editor, easily accessible from the web.",
    gradient: "bg-gradient1",
    logo: LayerIcon,
    tech: [
      {
        name: "Next.js",
        icon: NextIcon,
      },
      {
        name: "PixiJS",
        icon: PixiIcon,
      },
      {
        name: "OpenCV",
        icon: OpenCVIcon,
      },
      {
        name: "Electron",
        icon: ElectronIcon,
      },
      {
        name: "Google Cloud",
        icon: GCloudIcon,
      },
      {
        name: "Firebase",
        icon: FirebaseIcon,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindIcon,
      },
      {
        name: "TypeScript",
        icon: TypeScriptIcon,
      },
      {
        name: "shadcnui",
        icon: ShadCnIcon,
      },
    ],
    tagColour: "bg-[#7C0AAD]",
  },
  {
    name: "PenguLearn",
    github: "https://github.com/PavlosDefoort/pengumath",
    production: "https://pengumath.vercel.app/",
    description:
      "An educational platform for learning a variety of STEM subjects.",
    gradient: "bg-gradient2",
    logo: Pi,
    tech: [
      {
        name: "Next.js",
        icon: NextIcon,
      },
      {
        name: "PostgreSQL",
        icon: PostgreSQLIcon,
      },
      {
        name: "Prisma",
        icon: PrismaIcon,
      },

      {
        name: "Firebase",
        icon: FirebaseIcon,
      },
      {
        name: "Material-UI",
        icon: MaterialUIIcon,
      },

      {
        name: "TypeScript",
        icon: TypeScriptIcon,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindIcon,
      },
    ],
    tagColour: "bg-[#280AAD]",
  },

  // {
  //   name: "Untitled 2025",
  //   github: "https://github.com/PavlosDefoort/pengu-math",
  //   production: "https://pengumath.vercel.app/",
  //   description: "A multi-platform RPG game developed in Unity using C#.",
  //   gradient: "bg-gradient3",
  //   logo: ReactIcon,
  //   tech: [
  //     {
  //       name: "Unity",
  //       icon: UnityIcon,
  //     },
  //     {
  //       name: "C#",
  //       icon: CSharpIcon,
  //     },
  //     {
  //       name: "Photoshop",
  //       icon: PhotoShopIcon,
  //     },
  //   ],
  //   tagColour: "bg-[#AD0A0A]",
  // },
  {
    name: "Visualgo",
    github: "https://github.com/PavlosDefoort/pengu-math",
    production: null,
    description:
      "An intuitive, interactive, and visual algorithm learning tool. Covers sorting, searching, and graph algorithms.",
    gradient: "bg-gradient3",
    logo: AlgoIcon,
    tech: [
      {
        name: "C++",
        icon: CPPIcon,
      },
      {
        name: "SFML",
        icon: SFMLIcon,
      },
    ],
    tagColour: "bg-[#AD0A0A]",
  },

  {
    name: "Tune Sphere",
    github: "https://github.com/PavlosDefoort/pengu-math",
    production: null,
    description:
      "A web-based music analysis tool using the Spotify API. Authenticated using Next Auth (OAuth).",
    gradient: "bg-gradient4",
    logo: MusicIcon,
    tech: [
      {
        name: "Next.js",
        icon: NextIcon,
      },
      {
        name: "TypeScript",
        icon: TypeScriptIcon,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindIcon,
      },
      {
        name: "Next Auth",
        icon: NextAuthIcon,
      },
      {
        name: "Spotify API",
        icon: SpotifyIcon,
      },
    ],
    tagColour: "bg-[#116F33]",
  },
  {
    name: "PenguMath (Legacy)",
    github: "https://github.com/PavlosDefoort/pengu-math",
    production: "https://pengumath.vercel.app/",
    description:
      "The primitive version of PenguLearn, a web-based educational platform for learning mathematics.",
    gradient: "bg-gradient2",
    logo: Pi,
    tech: [
      {
        name: "React",
        icon: ReactIcon,
      },
      {
        name: "JavaScript",
        icon: JavascriptIcon,
      },
      {
        name: "Material-UI",
        icon: MaterialUIIcon,
      },
      {
        name: "Firebase",
        icon: FirebaseIcon,
      },
    ],
    tagColour: "bg-[#280AAD]",
  },
];
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
  height: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f4f4f4;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
