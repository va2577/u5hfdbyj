<template>
  <div>
    <Header />
    <main>
      <h1>Site Title</h1>
      <img alt="identicon" src="~/static/img/identicon.png" />
    </main>
    <Footer />
  </div>
</template>

<script>
  import Footer from '~/components/Footer.vue'
  import Header from '~/components/Header.vue'

  export default {
    components: {
      Footer,
      Header,
    },
    head() {
      return {
        title: 'INDEX',
      }
    }
  }
</script>

<style scoped>
  img {
    /* border-radius: 160px; */
    display: block;
    height: 160px;
    margin: 0px auto;
    width: 160px;
  }
</style>
