<template>
  <div id="app">
    <router-view/>
    <div v-for="(item, index) in names" :key="index">
      <chips :countryName="item" />
    </div>
  </div>
</template>

<script>
import chips from './components/atoms/chips/chips.vue'
export default {
  components: {
    chips
  },
  data() {
    return {
      name: "Brazil",
      names: [
        "ARG",
        "BRA",
        "HOL",
      ]
    }
  },
  
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
