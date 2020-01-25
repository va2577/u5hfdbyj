<template>
  <ul>
    <li v-for="(v, k) in data">
      <nuxt-link :to="`/posts/${v.slug}/`">
        <article>
          <div><Date v-bind:date="v.date" /></div>
          {{ v.title }}
        </article>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
  import Date from '~/components/Date.vue'

  export default {
    components: {
      Date
    },
    props: ['data']
  }
</script>

<style scoped>
  a {
    color: #2f495e;
  }
  ul {
    list-style: none;
  }
  li {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
</style>
