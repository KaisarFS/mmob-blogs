<template>


  <div>
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
        :class="{ 'opacity-100 pointer-events-auto': isMobileMenuOpen, 'opacity-0 pointer-events-none': !isMobileMenuOpen }">
        <div class="ml-auto w-2/3 bg-green p-4 md:w-1/3">
          <i class="bx bx-x absolute top-0 right-0 mt-4 mr-4 text-4xl text-white" @click="isMobileMenuOpen = false"></i>
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
      <div class="pt-12 pb-12 lg:pt-12 pb-12">

        <div class="flex items-center justify-center">
    <div class="mx-auto w-full max-w-[550px] bg-white">
        <form class="py-4 px-9">
            <div class="mb-5">
                <label for="title" class="mb-3 block text-base font-medium text-[#07074D]">
                    Title
                </label>
                <input type="text" name="title" id="title" placeholder="type title.."
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>

            <div class="mb-5">
                <label for="title" class="mb-3 block text-base font-medium text-[#07074D]">
                    Description
                </label>
                <textarea type="text" name="title" id="title" placeholder="type title.."
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>

            <div class="mb-6 pt-4">
                <label class="mb-5 block text-xl font-semibold text-[#07074D]">
                    Upload File
                </label>

                <div class="mb-8">
                    <input type="file" name="file" id="file" class="sr-only" />
                    <label for="file"
                        class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
                        <div>
                            <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                                Drop files here
                            </span>
                            <span class="mb-2 block text-base font-medium text-[#6B7280]">
                                Or
                            </span>
                            <span
                                class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                                Browse
                            </span>
                        </div>
                    </label>
                </div>

                <div class="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                    <div class="flex items-center justify-between">
                        <span class="truncate pr-3 text-base font-medium text-[#07074D]">
                            img.png
                        </span>
                        <button class="text-[#07074D]">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                                    fill="currentColor" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                                    fill="currentColor" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="rounded-md bg-[#F5F7FB] py-4 px-8">
                    <div class="flex items-center justify-between">
                        <span class="truncate pr-3 text-base font-medium text-[#07074D]">
                            img-2.png
                        </span>
                        <button class="text-[#07074D]">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                                    fill="currentColor" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                                    fill="currentColor" />
                            </svg>
                        </button>
                    </div>
                    <div class="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
                        <div class="absolute left-0 right-0 h-full w-[75%] rounded-lg bg-[#007C85]"></div>
                    </div>
                </div>
            </div>

            <div>
                <button
                    class="hover:shadow-form w-full rounded-md bg-[#007C85] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Publish
                </button>
            </div>
        </form>
    </div>
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
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isMobileMenuOpen = ref(false);
const form = ref({
  title: '',
  description: ''
});

const submitForm = () => {
  console.log('Form submitted:', form.value);
};
</script>
