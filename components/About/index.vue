<template>
  <section
    class="text-white font-inter body-font bg-black border-t-[1px] border-gray-800"
    id="about"
  >
    <div class="container px-5 py-16 md:py-24 mx-auto">
      <div class="w-full mb-12 md:mb-20">
        <div class="md:w-1/2 w-full mb-6">
          <h1
            class="sm:text-5xl text-3xl font-bold title-font mb-4"
            ref="about"
          >
            About
          </h1>
          <div class="h-1 w-16 bg-indigo-200 rounded"></div>
        </div>
        <div
          class="flex flex-col md:flex-row w-full md:space-x-8 space-y-8 md:space-y-0 items-center"
        >
          <!-- Text Section -->
          <div
            ref="text"
            class="flex flex-col space-y-4 w-full md:w-1/2 opacity-0 transition-all duration-1000 ease-out"
          >
            <p
              class="leading-relaxed font-normal text-base sm:text-lg md:text-xl"
            >
              Hi! My name is Pavlos Defoort, and I am a
              <strong>3rd-year Computer Science student</strong> at
              <strong class="text-red-500">McMaster University</strong> in
              Hamilton, Ontario, Canada.
            </p>
            <p
              class="leading-relaxed font-normal text-base sm:text-lg md:text-xl"
            >
              I am deeply passionate about various facets of software
              development. My interests span
              <strong>software engineering</strong> and UI/UX design, as well as
              more <strong>mathematically</strong>-inclined areas such as
              algorithm analysis and deep learning.
            </p>
          </div>

          <!-- Divider -->
          <div
            class="hidden md:block border-l-2 border-gray-400 h-40 w-1"
          ></div>

          <!-- Photo Section -->
          <div
            class="w-full md:w-1/2 flex justify-center opacity-0 transition-all duration-1000 ease-out"
            ref="photo"
          >
            <img
              src="/public/PavlosDefoort.jpeg"
              class="w-3/4 sm:w-2/4 rounded-lg"
              alt="Pavlos Defoort"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    const about = this.$refs.about;
    const text = this.$refs.text;
    const photo = this.$refs.photo;

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
    observer.observe(text);
    observer.observe(photo);
    observer.observe(about);
  },
};
</script>
