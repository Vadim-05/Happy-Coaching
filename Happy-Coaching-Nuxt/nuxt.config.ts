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
    },
  },
  modules: ["@nuxt/image"]
})