<template>
  <div>
    <h1>Pages & Routing</h1>
    <p>{{message}}</p>
    <nuxt-link to="/">Ga naar: Home Page</nuxt-link>
  </div>
</template>

<script>
export default {
    name: 'PagesAndRouting'
}
</script>

<style scoped>
  p {
    font-size: 14pt;
    color: #222222;
  }
</style>