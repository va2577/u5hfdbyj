<template>
  <footer>
    <small>&copy; 2020 Site Title</small>
    <a href="https://ja.nuxtjs.org">
      <img alt="BUILT WITH" src="~/assets/built-with-nuxt.svg">
    </a>
  </footer>
</template>

<style scoped>
  footer {
    align-items: center;
    border-top: #e2e8f0 solid 1px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 73px;
    justify-content: space-between;
    margin: 0px auto;
    width: 992px;
  }
  footer small {
    height: 40px;
    line-height: 40px;
  }
  footer img {
    height: 40px;
    vertical-align: middle;
    width: 160px;
  }
  @media screen and (max-width: 992px) {
    footer {
      margin-bottom: 64px;
      padding-left: 1%;
      padding-right: 1%;
      width: 98%;
    }
    footer img {
      width: 100px;
    }
  }
</style>
