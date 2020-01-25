<template>
  <div>
    <Header />
    <main>
      <article>
        <h1>{{ title }}</h1>
        <div v-html="render"></div>
      </article>
    </main>
    <Footer />
  </div>
</template>

<script>
  import matter from 'gray-matter'
  import Footer from '~/components/Footer.vue'
  import Header from '~/components/Header.vue'
  const md = require('markdown-it')({
    html: true,
  })

  export default {
    components: {
      Footer,
      Header,
    },
    async validate({ params }) {
      try {
        const raw = await import(`~/content/${params.slug}.md`)
        return true
      } catch(error) {
        return false
      }
    },
    async asyncData({ params }) {
      const raw = await import(`~/content/${params.slug}.md`)
      const file = matter(raw.default)
      const render = md.render(file.content)
      return {
        ...params,
        ...file.data,
        render,
      }
    },
    head() {
      return {
        title: this.title,
      }
    }
  }
</script>
