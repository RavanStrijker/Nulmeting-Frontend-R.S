<template>
  <div>
    <h1>Read messages</h1>
    <p>{{this.$store.state.messages}}</p>
    <nuxt-link to="/message/add">Ga naar: Add Message</nuxt-link>
    <br>
    <nuxt-link to="/">Ga naar: Home Page</nuxt-link>
  </div>
</template>


