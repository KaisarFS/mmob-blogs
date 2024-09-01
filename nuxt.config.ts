// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Homepage',
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        { property: 'og:title', content: 'Homepage' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:url', content: 'https://atlas.tailwindmade.com/' },
        { name: 'description', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { property: 'og:site_name', content: 'Game Blogs' },
        { property: 'og:image', content: 'https://atlas.tailwindmade.com/assets/img/social.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@tailwindmade' }
      ],
      link: [
        // { rel: 'icon', type: 'image/png', href: '/assets/img/favicon.png' },
        { rel: 'canonical', href: 'https://atlas.tailwindmade.com/' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap' },
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/styles/atom-one-dark.min.css' },
        // { rel: 'stylesheet', href: '/assets/styles/main.min.css', media: 'screen', crossorigin: 'anonymous' }
        { rel: 'stylesheet', href: '/assets/styles/main.min.css', media: 'screen', crossorigin: 'anonymous' }
        // { rel: 'stylesheet', href: './assets/styles/main.min.css', media: 'screen', crossorigin: 'anonymous' }
      ],
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/highlight.min.js', defer: true },
        { src: 'https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js', defer: true },
        { innerHTML: 'hljs.initHighlightingOnLoad();', type: 'text/javascript' }
      ],
      noscript: [{ innerHTML: 'JavaScript is required to view this site.' }]
    }
  }
})