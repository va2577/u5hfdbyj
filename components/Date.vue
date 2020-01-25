<template>
  <time>{{ dateString }}</time>
</template>

<script>
  export default {
    data() {
      return {
        ...this,
        dateString: this.date,
      }
    },
    props: ['date']
  }
</script>
