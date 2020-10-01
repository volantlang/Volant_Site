export default {
  server: {
    host: '0.0.0.0'
  },
  head: {
    title: 'Volant',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Volant is a general-purpose data-oriented high-level programming language with a focus on speed, power, asynchronicity, and concurrency.' },
      { hid: 'image', name: 'og:image', content: '~/assets/logoWhite.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [],
  components: true,
  buildModules: [],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
  ],
  axios: {},
  content: {},
  build: {}
}
