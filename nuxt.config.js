export default {
  head: {
    titleTemplate: '%s - Site Title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: 'description', name: 'description', content: 'My custom description' }
    ],
    link: [
      { rel: 'shortcut icon', href: '/img/favicon.png', type: 'image/png' },
      { rel: 'apple-touch-icon', href: '/img/apple-touch-icon.png' },
    ]
  },
  css: [
    '~/static/css/main.css'
  ],
  build: {
    extend(config, { isDev, isClient }) {
      // ..
      config.module.rules.push({
        test: /\.md$/,
        loader: 'raw-loader',
      })
      // Sets webpack's mode to development if `isDev` is true.
      if (isDev) { config.mode = 'development' }
    }
  }
}
