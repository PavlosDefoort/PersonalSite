<template>
  <section class="text-gray-600 body-font" id="about">
    <div class="container px-5 py-24 mx-auto flex flex-col">
      <div class="lg:w-4/6 mx-auto">
        <div class="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            class="object-cover object-center h-full w-full"
            src="public/Hamilton.jpg"
          />
        </div>
        <div class="flex flex-col sm:flex-row mt-10">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8 space-y-4">
            <UAvatar src="/PavlosDefoort.jpeg" alt="Avatar" size="3xl" />
            <div class="flex flex-col items-center text-center justify-center">
              <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                Pavlos Defoort
              </h2>
              <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
              <a href="https://github.com/PavlosDefoort">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=PavlosDefoort"
                  alt="Pavlos's GitHub stats"
                />
              </a>
            </div>
            <figure><embed src="https://wakatime.com/share/@ef2b3ec6-dedd-4318-ad69-83241131221f/9d88f05a-e0de-45c0-a06f-ab48fe79b58e.svg"></embed></figure>
          </div>
          <div
            class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"
          >
            <p class="leading-relaxed text-2xl mb-4 font-lato">
              Hi! My name is <strong>Pavlos Defoort</strong>, and I am a
              <strong>3rd-year Computer Science student</strong> at
              <strong>McMaster University</strong> in
              <strong>Hamilton, Ontario</strong>. I have a deep passion for
              various aspects of <strong>software development</strong>, ranging
              from <strong>software engineering</strong> and
              <strong>web development</strong> to
              <strong>UI/UX design</strong> and
              <strong>artificial intelligence</strong>.
            </p>
            <p class="leading-relaxed text-xl mb-4 font-lato">
              My academic and personal projects have allowed me to explore these
              areas extensively, and I enjoy applying my
              <strong>technical knowledge</strong> to solve complex problems. I
              am also keen on learning new technologies and best practices to
              stay at the forefront of the rapidly evolving
              <strong>tech landscape</strong>. With a strong foundation in
              <strong>programming</strong>, I aim to contribute to innovative
              projects that improve <strong>user experiences</strong> and push
              the boundaries of what's possible with modern software.
            </p>
            <!-- <a class="text-indigo-500 inline-flex items-center"
              >Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
