<template>
  <div>
    <!-- Header Section -->
    <header class="flex items-center justify-between py-6 lg:py-10 container mx-auto">
      <NuxtLink to="/" class="flex items-center">
        <span class="mr-2">
          <img src="/assets/img/logo.svg" alt="logo" />
        </span>
        <p class="hidden font-body text-2xl font-bold text-primary dark:text-white lg:block">
          KaisarFS
        </p>
      </NuxtLink>
      <div class="flex items-center lg:hidden">
        <i
          class="bx mr-8 cursor-pointer text-3xl text-primary dark:text-white"
          @click="themeSwitch()"
          :class="isDarkMode ? 'bxs-sun' : 'bxs-moon'"
        ></i>
        <svg
          width="24"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
          @click="isMobileMenuOpen = true"
          class="fill-current text-primary dark:text-white"
        >
          <g fill-rule="evenodd">
            <rect width="24" height="3" rx="1.5" />
            <rect x="8" y="6" width="16" height="3" rx="1.5" />
            <rect x="4" y="12" width="20" height="3" rx="1.5" />
          </g>
        </svg>
      </div>
      <nav class="hidden lg:block">
        <ul class="flex items-center">
          <li v-for="item in navItems" :key="item.text" class="relative mr-6">
            <div
              class="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"
            ></div>
            <NuxtLink
              :to="item.href"
              class="relative z-30 block px-2 py-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
            >
              {{ item.text }}
            </NuxtLink>
          </li>
          <li>
            <i
              class="bx cursor-pointer text-3xl text-primary dark:text-white"
              @click="themeSwitch()"
              :class="isDarkMode ? 'bxs-sun' : 'bxs-moon'"
            ></i>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Mobile Menu -->
    <div
      class="fixed inset-0 z-50 flex bg-black bg-opacity-80 opacity-0 transition-opacity lg:hidden"
      :class="isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : ''"
    >
      <div class="ml-auto w-2/3 bg-green p-4 md:w-1/3">
        <i
          class="bx bx-x absolute top-0 right-0 mt-4 mr-4 text-4xl text-white"
          @click="isMobileMenuOpen = false"
        ></i>
        <ul class="mt-8 flex flex-col">
          <li v-for="item in navItems" :key="item.text">
            <NuxtLink
              :to="item.href"
              class="mb-3 block px-2 py-2 font-body text-lg font-medium text-white"
            >
              {{ item.text }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <!-- Main Content -->
    <main class="container mx-auto py-16 lg:py-20">
      <div>
        <img src="/assets/img/icon-blog.png" alt="icon envelope" />
        <h1 class="pt-5 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
          Blog
        </h1>
        <p class="pt-3 sm:w-3/4 font-body text-xl font-light text-primary dark:text-white">
          All about game news that you could find!
        </p>

        <form class="flex flex-col py-12 sm:flex-row">
          <input
            type="email"
            id="subscribe"
            placeholder="Drop your email here…"
            class="w-full border border-primary bg-grey-lightest px-5 py-4 font-body font-light text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary dark:border-secondary sm:w-1/2"
          />
          <button
            type="submit"
            class="mt-5 bg-secondary px-10 py-4 font-body text-xl font-semibold text-white hover:bg-green sm:mt-0 md:text-2xl"
          >
            Subscribe
          </button>
        </form>

        <!-- Blog Posts -->
        <!-- <div class="pt-8 lg:pt-12">
          <div v-for="post in posts" :key="post.id" class="border-b border-grey-lighter pt-10 pb-8">
            <span
              class="mb-4 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green"
            >
              {{ post.category }}
            </span>
            <NuxtLink
              :to="`/post/${post.id}`"
              class="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary"
            >
              {{ post.title }}
            </NuxtLink>
            <div class="flex items-center pt-4">
              <p class="pr-2 font-body font-light text-primary dark:text-white">
                {{ post.date }}
              </p>
              <span class="font-body text-grey dark:text-white">//</span>
              <p class="pl-2 font-body font-light text-primary dark:text-white">
                {{ post.readTime }} min read
              </p>
            </div>
          </div>
        </div>
         -->
        <div class="pt-8 lg:pt-12">
          <div v-for="game in games" :key="game.id" class="border-b border-grey-lighter pt-10 pb-8">
            <span
              class="mb-4 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green"
            >
              {{ game.genre }}
            </span>
            <NuxtLink
              :to="`/games/${game.id}`"
              class="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary"
            >
              {{ game.title }}
            </NuxtLink>
            <div class="flex items-center pt-4">
              <p class="pr-2 font-body font-light text-primary dark:text-white">
                | Publisher: {{ game.publisher }} | Release Date: {{ new Date(game.release_date).toLocaleDateString() }}
              </p>
              <!-- <span class="font-body text-grey dark:text-white">//</span> -->
              <p class="pl-2 font-body font-light text-primary dark:text-white">
                <!-- {{ post.readTime }} min read -->
                <!-- <p class="font-body text-sm text-grey dark:text-white">
                | Publisher: {{ game.publisher }} | Release Date: {{ new Date(game.release_date).toLocaleDateString() }}
                </p> -->
              </p>
            </div>
          </div>
        </div>

        <!-- Game Section -->
        <!-- <div class="pt-8 lg:pt-12">
          <h2 class="font-body text-3xl font-semibold text-primary dark:text-white">
            Featured Games
          </h2>
          <div class="grid gap-6 pt-6 md:grid-cols-2 lg:grid-cols-3">
            <div v-for="game in games" :key="game.id" class="border rounded-lg p-4">
              <img :src="game.thumbnail" alt="game thumbnail" class="w-full h-auto mb-4 rounded-lg" />
              <h3 class="font-body text-xl font-semibold text-primary dark:text-white">
                <a :href="game.game_url" target="_blank">{{ game.title }}</a>
              </h3>
              <p class="font-body text-md text-primary dark:text-white">
                {{ game.short_description }}
              </p>
              <p class="font-body text-sm text-grey dark:text-white">
                Genre: {{ game.genre }} | Publisher: {{ game.publisher }} | Release Date: {{ new Date(game.release_date).toLocaleDateString() }}
              </p>
            </div>
          </div>
        </div> -->

        <!-- Pagination -->
        <div class="flex pt-8 lg:pt-16">
          <span
            class="cursor-pointer border-2 border-secondary px-3 py-1 font-body font-medium text-secondary"
          >
            1
          </span>
          <span
            class="ml-3 cursor-pointer border-2 border-primary px-3 py-1 font-body font-medium text-primary transition-colors hover:border-secondary hover:text-secondary dark:border-green-light dark:text-white dark:hover:border-secondary dark:hover:text-secondary"
          >
            2
          </span>
          <span
            class="ml-3 cursor-pointer border-2 border-primary px-3 py-1 font-body font-medium text-primary transition-colors hover:border-secondary hover:text-secondary dark:border-green-light dark:text-white dark:hover:border-secondary dark:hover:text-secondary"
          >
            3
          </span>
          <span
            class="group ml-3 flex cursor-pointer items-center border-2 border-primary px-3 py-1 font-body font-medium text-primary transition-colors hover:border-secondary hover:text-secondary dark:border-green-light dark:text-white dark:hover:border-secondary dark:hover:text-secondary"
          >
            Next
            <i
              class="bx bx-right-arrow-alt ml-1 text-primary transition-colors group-hover:text-secondary dark:text-white"
            ></i>
          </span>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="container mx-auto flex flex-col items-center justify-between border-t border-grey-lighter py-10 sm:flex-row sm:py-12">
      <a href="/" class="mr-auto sm:mr-6">
        <img src="/assets/img/logo.svg" alt="logo" />
      </a>
      <p class="pt-5 font-body font-light text-primary dark:text-white sm:pt-0">
        ©2024 KaisarFS.
      </p>
      <div class="mr-auto flex items-center pt-5 sm:mr-0 sm:pt-0">
        <a href="https://github.com/" target="_blank">
          <i class="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-github"></i>
        </a>
       
        <a href="https://www.linkedin.com/" target="_blank">
          <i class="text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors bx bxl-linkedin"></i>
        </a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const posts = ref([]);
const navItems = [
  { href: '/', text: 'Intro' },
  { href: '/blog', text: 'Blog' },
  { href: '/games/new', text: 'New Game' },
];

const isMobileMenuOpen = ref(false);
const isDarkMode = ref(false);
const games = ref([]);

const themeSwitch = () => {
  isDarkMode.value = !isDarkMode.value;
};

onMounted(() => {
  // Mock data for posts
  posts.value = [
    { id: 1, title: 'Understanding Vue 3', category: 'Tutorial', date: 'August 30, 2024', readTime: '5' },
    { id: 2, title: 'Tailwind CSS Tips and Tricks', category: 'Tips', date: 'August 25, 2024', readTime: '7' },
    { id: 3, title: 'Building Modern Web Apps', category: 'Guide', date: 'August 20, 2024', readTime: '6' }
  ];
});

onMounted(async () => {
  // Fetch game data
  const res = await fetch('https://cors-anywhere.herokuapp.com/https://www.mmobomb.com/api1/games?platform=pc');
  const data = await res.json();
  games.value = data;
});
</script>

<style scoped>
/* Add your CSS here */
</style>
