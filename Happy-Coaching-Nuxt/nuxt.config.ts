export default defineNuxtConfig({
  plugins: [
    '~/plugins/vuetify',
  ],
  build: {
    transpile: ['vuetify']
  },
  css: ['vuetify/lib/styles/main.sass'],
  app: {
    head: {
      title: 'Happy Coaching',
      link: [
        { rel: 'icon', href: '/logo.png' }
      ],
    },
  },
  modules: ["@nuxt/image"]
})