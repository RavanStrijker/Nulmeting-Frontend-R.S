<template>
  <div>
    <p>Het getal is: {{count}}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
        count: 0
    }
  },

  methods: {
    increment() {
      this.count++
    }
  }
}
</script>