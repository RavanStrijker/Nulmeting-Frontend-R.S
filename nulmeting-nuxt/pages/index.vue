<template>
  <div>
    <h1>Home Page</h1>
    <nuxt-link to="/mypage">Ga naar: Pages & Routing</nuxt-link><br>
    <nuxt-link to="/count">Ga naar: Counter</nuxt-link><br>
    <nuxt-link to="/message/add">Ga naar: Voeg een bericht toe</nuxt-link><br>
    <nuxt-link to="/message/read">Ga naar: Lees berichten</nuxt-link><br>
    <nuxt-link to="/api-call">Ga naar: Formulier</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>