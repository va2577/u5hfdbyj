<template>
  <div>
    <Header />
    <main>
      <article>
        <h1>{{ title }}</h1>
        <div><Date v-bind:date="date" /></div>
        <div><img v-if="hasImage" alt="" v-bind:src="imageSrc"></div>
        <Ads />
        <div v-html="rendered"></div>
        <Ads />
      </article>
    </main>
    <Footer />
  </div>
</template>

<script>
  import matter from 'gray-matter'
  import Ads from '~/components/Ads.vue'
  import Date from '~/components/Date.vue'
  import Footer from '~/components/Footer.vue'
  import Header from '~/components/Header.vue'
  const md = require('markdown-it')({
    html: true,
  })

  export default {
    components: {
      Ads,
      Date,
      Footer,
      Header,
    },
    async validate({ params }) {
      try {
        const raw = await import(`~/content/post/${params.slug}.md`)
        return true
      } catch(error) {
        return false
      }
    },
    async asyncData({ params }) {
      const raw = await import(`~/content/post/${params.slug}.md`)
      const file = matter(raw.default)
      const rendered = md.render(file.content)
      return {
        ...params,
        ...file.data,
        hasImage: file.data.image ? true : false,
        imageSrc: file.data.image ? `/img/${file.data.image}` : '',
        rendered,
      }
    },
    head() {
      return {
        date: this.date,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'description', name: 'description', content: 'My custom description' }
        ],
        title: this.title,
      }
    }
  }
</script>
