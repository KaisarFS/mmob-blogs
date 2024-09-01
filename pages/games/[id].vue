<template>
   <div :class="['min-h-screen', 'flex', 'flex-col', 'bg-gray-100', isDarkMode ? 'dark:bg-dark-bg' : '']">
    <div v-if="game">
      <div class="container mx-auto">
        <div class="flex items-center justify-between py-6 lg:py-10">
          <a href="/" class="flex items-center">
            <span href="/" class="mr-2">
              <img src="/assets/img/logo.svg" alt="logo" />
            </span>
            <p class="hidden font-body text-2xl font-bold text-primary dark:text-white lg:block">
              KaisarFS
            </p>
          </a>
          <div class="flex items-center lg:hidden">
            <i class="bx mr-8 cursor-pointer text-3xl text-primary dark:text-white" @click="themeSwitch()"
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
          <div class="hidden lg:block">
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
                  class="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary">New
                  Game</a>
              </li>
           
              <li>
                <i class="bx cursor-pointer text-3xl text-primary dark:text-white" @click="themeSwitch"
                  :class="isDarkMode ? 'bxs-sun' : 'bxs-moon'"></i>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="pointer-events-none fixed inset-0 z-50 flex bg-black bg-opacity-80 opacity-0 transition-opacity lg:hidden"
          :class="isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : ''">
          <div class="ml-auto w-2/3 bg-green p-4 md:w-1/3">
            <i class="bx bx-x absolute top-0 right-0 mt-4 mr-4 text-4xl text-white"
              @click="isMobileMenuOpen = false"></i>
            <ul class="mt-8 flex flex-col">
              <li class="">
                <a href="/" class="mb-3 block px-2 font-body text-lg font-medium text-white">Intro</a>
              </li>
              <li class="">
                <a href="/games" class="mb-3 block px-2 font-body text-lg font-medium text-white">Blog</a>
              </li>
              <li class="">
                <a href="/games/new" class="mb-3 block px-2 font-body text-lg font-medium text-white">New Game</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pt-16 lg:pt-20">
          <div class="border-b border-grey-lighter pb-8 sm:pb-12">
            <span
              class="mb-5 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green sm:mb-8">{{
      game?.genre || 'Loading...' }}</span>
            <h2
              class="block font-body text-3xl font-semibold leading-tight text-primary dark:text-white sm:text-4xl md:text-5xl">
              {{ game?.title || 'Loading...' }}
            </h2>
            <div class="flex items-center pt-5 sm:pt-8">
              <p class="pr-2 font-body font-light text-primary dark:text-white">
                {{ game?.release_date || 'Loading...' }}
              </p>
              <span class="vdark:text-white font-body text-grey">//</span>
              <p class="pl-2 font-body font-light text-primary dark:text-white">
                {{ game?.publisher || 'Loading...' }}
              </p>
            </div>
          </div>


          <p><img :src="game?.thumbnail || '/assets/img/post-image-01.png'" class="w-full h-auto" alt="Image" /></p>
          <div class="prose prose max-w-none border-b border-grey-lighter py-8 dark:prose-dark sm:py-12"
            v-html="game?.description || 'Loading...'">
          </div>

          <div class="prose prose max-w-none border-b border-grey-lighter py-8 dark:prose-dark sm:py-12">

            <blockquote>
              <p>Note: Some of the earlier articles may behave an outdated information. please check the official website to get the latest information.</p>
            </blockquote>

            <h3 id="lorem-ipsum-dolor-sit-amet">Minimum System Requirements</h3>

            <ul>
              <li>{{ game?.minimum_system_requirements?.graphics }}</li>
              <li>{{ game?.minimum_system_requirements?.memory }}</li>
              <li>{{ game?.minimum_system_requirements?.os }}</li>
              <li>{{ game?.minimum_system_requirements?.processor }}</li>
              <li>{{ game?.minimum_system_requirements?.storage }}</li>
            </ul>
          </div>

        </div>
        <div class="flex items-center py-10">
          <span class="pr-5 font-body font-medium text-primary dark:text-white">
            Share
          </span>
          <a href="/">
            <i
              class="bx bxl-facebook text-2xl text-primary transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary"></i>
          </a>
          <a href="/">
            <i
              class="bx bxl-twitter text-2xl text-primary transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary"></i>
          </a>
          <a href="/">
            <i
              class="bx bxl-linkedin text-2xl text-primary transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary"></i>
          </a>
          <a href="/">
            <i
              class="bx bxl-pinterest text-2xl text-primary transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary"></i>
          </a>
          <a href="/">
            <i
              class="bx bxl-reddit text-2xl text-primary transition-colors hover:text-secondary dark:text-white dark:hover:text-secondary"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useTheme } from '~/composables/useTheme';

const game = ref(null);
const isMobileMenuOpen = ref(false);
// const isDarkMode = ref(false);
const { isDarkMode, themeSwitch, themeInit } = useTheme();

const route = useRoute();

onMounted(() => {
  themeInit();
});


onMounted(async () => {
  const res = await fetch(`https://cors-anywhere.herokuapp.com/https://www.mmobomb.com/api1/game?id=${route.params.id}`);
  const data = await res.json();
  game.value = data;
});
</script>


<style scoped>
img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>
