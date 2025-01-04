<template>
  <nav class="p-4 md:w-2/3 w-1/3 lg:w-1/3 top-0 z-50 text-white">
    <ul class="flex space-x-6 justify-center text-white font-inter">
      <li class="text-white font-inter">
        <a
          href="#about"
          class="nav-link text-white"
          @click.prevent="scrollToSection('about')"
          >About</a
        >
      </li>
      <li>
        <a
          href="#projects"
          class="nav-link"
          @click.prevent="scrollToSection('projects')"
          >Projects</a
        >
      </li>
      <li>
        <a
          href="#hobbies"
          class="nav-link"
          @click.prevent="scrollToSection('hobbies')"
          >Hobbies</a
        >
      </li>
      <li>
        <a
          href="#contact"
          class="nav-link"
          @click.prevent="scrollToSection('contact')"
          >Contact</a
        >
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
// Smooth scroll function
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", `#${sectionId}`);
  }
};
</script>

<style scoped>
.nav-link {
  color: #dbdbdb;
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-weight: 400;
  transition: color 0.3s ease;
  font-family: inherit;
}

.nav-link:hover {
  color: rgb(255, 255, 255);
}
</style>
