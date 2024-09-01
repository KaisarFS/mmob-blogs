<!-- <template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="text-center">
      <h1 class="text-4xl font-bold">Welcome to Nuxt & Tailwind!</h1>
      <p class="mt-4 text-lg">Explore the world of PC Games with our list and details pages.</p>
    </div>
  </div>
</template> -->


<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <header class="flex items-center justify-between py-6 lg:py-10 container mx-auto">
      <a href="/" class="flex items-center">
        <span class="mr-2">
          <img src="~/assets/img/logo.svg" alt="logo" />
        </span>
        <p class="hidden font-body text-2xl font-bold text-primary dark:text-white lg:block">
          KaisarFS
        </p>
      </a>
      <div class="flex items-center lg:hidden">
        <i class="bx mr-8 cursor-pointer text-3xl text-primary dark:text-white" @click="themeSwitch"
          :class="isDarkMode ? 'bxs-sun' : 'bxs-moon'"></i>

        <svg width="24" height="15" xmlns="http://www.w3.org/2000/svg" @click="isMobileMenuOpen = true"
          class="fill-current text-primary dark:text-white">
          <g fill-rule="evenodd">
            <rect width="24" height="3" rx="1.5" />
            <rect x="8" y="6" width="16" height="3" rx="1.5" />
            <rect x="4" y="12" width="20" height="3" rx="1.5" />
          </g>
        </svg>
      </div>
      <nav class="hidden lg:block">
        <ul class="flex items-center">
          <li class="group relative mr-6 mb-1">
            <div
              class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow">
            </div>
            <a href="/"
              class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary">Intro</a>
          </li>
          <li class="group relative mr-6 mb-1">
            <div
              class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow">
            </div>
            <a href="/games"
              class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary">Blog</a>
          </li>
          <li class="group relative mr-6 mb-1">
            <div
              class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow">
            </div>
            <a href="/games/new"
              class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary">New Game</a>
          </li>
          <!-- <li class="group relative mr-6 mb-1">
            <div
              class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow">
            </div>
            <a href="/contact"
              class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary">Contact</a>
          </li> -->
          <li>
            <i class="bx cursor-pointer text-3xl text-primary dark:text-white" @click="themeSwitch"
              :class="isDarkMode ? 'bxs-sun' : 'bxs-moon'"></i>
          </li>
        </ul>
      </nav>
    </header>

    <div :class="{ 'opacity-100 pointer-events-auto': isMobileMenuOpen, 'opacity-0 pointer-events-none': !isMobileMenuOpen }"
      class="pointer-events-none fixed inset-0 z-50 flex bg-black bg-opacity-80 opacity-0 transition-opacity lg:hidden">
      <div class="ml-auto w-2/3 bg-green p-4 md:w-1/3">
        <i class="bx bx-x absolute top-0 right-0 mt-4 mr-4 text-4xl text-white" @click="isMobileMenuOpen = false"></i>
        <ul class="mt-8 flex flex-col">
          <li><a href="/" class="mb-3 block px-2 font-body text-lg font-medium text-white">Intro</a></li>
          <li><a href="/blog" class="mb-3 block px-2 font-body text-lg font-medium text-white">Blog</a></li>
          <li><a href="/uses" class="mb-3 block px-2 font-body text-lg font-medium text-white">Uses</a></li>
          <li><a href="/contact" class="mb-3 block px-2 font-body text-lg font-medium text-white">Contact</a></li>
        </ul>
      </div>
    </div>

    <main>
      <div class="container mx-auto">
        <section class="border-b border-grey-lighter py-16 lg:py-20">
          <div>
            <img src="/assets/img/author.jpg" class="h-16 w-16" alt="author" />
          </div>
          <h1 class="pt-3 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
            Hi 👋, I’m Kai.
          </h1>
          <p class="pt-3 font-body text-xl font-light text-primary dark:text-white">
            I break down complex user experinece problems to create integritiy focussed solutions that connects people
          </p>
          <a href="/"
            class="mt-12 block bg-secondary px-10 py-4 text-center font-body text-xl font-semibold text-white transition-colors hover:bg-green sm:inline-block sm:text-left sm:text-2xl">
            Say Hello!
          </a>
        </section>
        <!-- <section class="border-b border-grey-lighter py-16 lg:py-20">
          <div class="flex items-center pb-6">
            <img src="/assets/img/icon-story.png" alt="icon story" />
            <h3 class="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">Blogs</h3>
          </div>
          <div>
            <p class="font-body font-light text-primary dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </section> -->
        
         <!-- Blog Section with API Data -->
         <section class="py-16 lg:py-20">
          <div class="flex items-center pb-6">
            <img src="/assets/img/icon-story.png" alt="icon story" />
            <h3 class="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">Blogs</h3>
            <a href="/games"
              class="flex items-center pl-10 font-body italic text-green transition-colors hover:text-secondary dark:text-green-light dark:hover:text-secondary">
              All posts
              <img src="/assets/img/long-arrow-right.png" class="ml-3" alt="arrow right" />
            </a>
          </div>
          <div class="pt-8">
            <div v-for="(article, index) in articles.slice(0, 2)" :key="index" class="border-b border-grey-lighter pt-8 pb-8">
              <span
                class="mb-4 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green">{{ article.genre }}</span>
              <!-- <a :href="article.url"
                class="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary">
                {{ article.title }}
              </a> -->
              <NuxtLink
              :to="`/games/${article.id}`"
              class="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary"
            >
              {{ article.title }}
            </NuxtLink>
              <div class="flex items-center pt-4">
                <!-- <p class="pr-2 font-body font-light text-primary dark:text-white">{{ article.date }}</p> -->
                <!-- <span class="font-body text-grey dark:text-white">//</span> -->
                <p class="font-body font-light text-primary dark:text-white">{{ article.short_description }}</p>
              </div>
            </div>
          </div>
        </section>
        <!-- <section class="pb-16 lg:pb-20">
          <div class="flex items-center pb-6">
            <img src="/assets/img/icon-project.png" alt="icon story" />
            <h3 class="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">My Projects</h3>
          </div>
          <div>
            <a href="/" class="mb-6 flex items-center justify-between border border-grey-lighter px-4 py-4 sm:px-6">
              <span class="w-9/10 pr-8">
                <h4 class="font-body text-lg font-semibold text-primary dark:text-white">TailwindCSS</h4>
                <p class="font-body font-light text-primary dark:text-white">Rapidly build modern websites without ever
                  leaving your HTML.</p>
              </span>
              <span class="w-1/10">
                <img src="/assets/img/chevron-right.png" class="mx-auto" alt="chevron right" />
              </span>
            </a>
            <a href="/" class="mb-6 flex items-center justify-between border border-grey-lighter px-4 py-4 sm:px-6">
              <span class="w-9/10 pr-8">
                <h4 class="font-body text-lg font-semibold text-primary dark:text-white">Maizzle</h4>
                <p class="font-body font-light text-primary dark:text-white">Framework for Rapid Email Prototyping</p>
              </span>
              <span class="w-1/10">
                <img src="/assets/img/chevron-right.png" class="mx-auto" alt="chevron right" />
              </span>
            </a>
          </div>
        </section> -->
      </div>
    </main>

    <footer
      class="container mx-auto flex flex-col items-center justify-between border-t border-grey-lighter py-10 sm:flex-row sm:py-12">
      <div class="mr-auto flex flex-col items-center sm:flex-row">
        <a href="/" class="mr-auto sm:mr-6">
          <img src="/assets/img/logo.svg" alt="logo" />
        </a>
        <p class="pt-5 font-body font-light text-primary dark:text-white sm:pt-0">
          ©  KaisarFS.
        </p>
      </div>
      <div class="mr-auto flex items-center pt-5 sm:mr-0 sm:pt-0">
        <a href="https://github.com/kaisarfs" target="_blank">
          <i
            class="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/kaisarfs" target="_blank">
          <i
            class="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-linkedin"></i>
        </a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isMobileMenuOpen = ref(false);
const isDarkMode = ref(false);
const articles = ref([]);

const themeSwitch = () => {
  isDarkMode.value = !isDarkMode.value;
};

// Fetch articles from API
const fetchArticles = async () => {
  try {
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://www.mmobomb.com/api1/games?platform=pc'); // Replace with your API URL
    const data = await response.json();
    articles.value = data.slice(0, 2); // Only take the first 2 articles
  } catch (error) {
    console.error('Error fetching articles:', error);
  }
};

onMounted(() => {
  fetchArticles();
});
</script>


<style scoped>
/* Add any scoped styles here if needed */
</style>
