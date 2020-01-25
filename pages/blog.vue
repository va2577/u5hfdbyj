<template>
  <div>
    <Header />
    <main>
      <h1>BLOG</h1>
      <Ads />
      <Articles v-bind:data="data" />
      <Ads />
    </main>
    <Footer />
  </div>
</template>

<script>
  import matter from 'gray-matter'
  import Ads from '~/components/Ads.vue'
  import Articles from '~/components/Articles.vue'
  import Footer from '~/components/Footer.vue'
  import Header from '~/components/Header.vue'

  export default {
    components: {
      Ads,
      Articles,
      Footer,
      Header,
    },
    asyncData({ params }) {
      const posts = (context => {
        const keys = context.keys()
        const values = keys.map(context)
        const data = keys.map((key, index) => {
          const slug = key
            .replace(/^.*[\\\/]/, '')
            .split('.')
            .slice(0, -1)
            .join('.')
          const value = values[index]
          const document = matter(value.default)
          return {
            document,
            date: document.data.date,
            title: document.data.title,
            slug,
          }
        })
        .sort((a, b) => {
          if (a.document.data.date < b.document.data.date) return -1
          if (a.document.data.date > b.document.data.date) return 1
          return 0
        })
        .reverse()
        return data
      })(require.context('../content/post', true, /\.md$/))
      return {
        ...params,
        data: posts,
      }
    },
    head() {
      return {
        title: 'BLOG',
      }
    }
  }
</script>

<style scoped>
  ul {
    list-style: none;
  }
  li {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
</style>
