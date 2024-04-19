<template>
  <div>
    <h1>Voeg een bericht toe</h1>
    <input type="text" v-model="input">
    <button @click="addMessage">Toevoegen</button>
    <br>
    <nuxt-link to="/message/read">Ga naar: Lees berichten</nuxt-link>
    <br>
    <nuxt-link to="/">Ga naar: Home Page</nuxt-link>
  </div>
</template>

<script>
export default {
  data(){
    return {
        input: ""
    }
  },

  methods: {
    addMessage() {
      this.$store.commit('addMessage', this.input)
      this.input = ""
    }
  }
}
</script>