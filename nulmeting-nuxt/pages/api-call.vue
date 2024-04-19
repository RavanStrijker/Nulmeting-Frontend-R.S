<template>
<div>
  <h1>Vul het formulier in</h1>
  <label>Voornaam:</label><br>
  <input type="text" v-model="formData.firstName"><br>
  <label>Achternaam:</label><br>
  <input type="text" v-model="formData.surName"><br>
  <label>Lievelingskleur:</label><br>
  <input type="text" v-model="formData.color"><br>
  <button @click="submit">Submit</button><br>
  <h2>Resultaat:</h2>
  <label>Voornaam:</label>
  <p>{{this.$store.state.responseData.firstName}}</p>
  <label>Achternaam:</label>
  <p>{{this.$store.state.responseData.surName}}</p>
  <label>Lievelingskleur:</label>
  <p>{{this.$store.state.responseData.color}}</p><br>
  <nuxt-link to="/"> Ga naar: Home Page</nuxt-link>
</div>  
</template>

<script>
export default {
  data(){
    return {
      formData: {
        firstName: "",
        surName: "",
        color: ""
      }   
    }
  },

  methods: {
    submit() {
      this.$store.dispatch("echo", this.formData);
      this.formData.firstName = ""
      this.formData.surName = ""
      this.formData.color = ""
    }
  }
}
</script>

<style>
label{
  font-weight: bold;
}
</style>