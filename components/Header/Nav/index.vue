<template>
  <nav class="bg-white p-4 shadow-md w-1/3 top-0 z-50 rounded-md">
    <ul class="flex space-x-6 justify-center">
      <li>
        <a
          href="#about"
          class="nav-link"
          @click.prevent="scrollToSection('about')"
          >About Me</a
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
  color: #333;
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #1e3a8a;
}
</style>
