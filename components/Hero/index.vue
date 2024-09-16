<template>
  <section
    class="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-slate-50 to-sky-100"
    id="hero"
  >
    <h1 class="font-bodoni text-8xl text-black z-10 absolute">
      Pavlos Defoort
    </h1>

    <NuxtParticles
      class="h-full w-full absolute"
      id="tsparticles"
      :options="options"
      @load="onLoad"
    >
    </NuxtParticles>
  </section>
</template>

<script setup lang="ts">
import type { Container } from "tsparticles-engine";

const options = {
  fullScreen: {
    enable: false,
    zIndex: -1,
  },
  background: {
    color: {
      value: "#fff",
    },
  },
  particles: {
    color: {
      value: "#000",
    },
    links: {
      color: "#000",
      enable: true,
    },

    move: {
      enable: true,
    },
    number: {
      value: 100,
    },
  },
};
const onLoad = (container: Container) => {
  // Do something with the container
  container.play();
};
</script>
