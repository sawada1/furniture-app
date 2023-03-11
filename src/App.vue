<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <navbar/>
  
  </nav>
  <router-view/>
  <footter/>
</template>



<script>
import navbar from './components/navbar.vue'
import footter from './components/footer.vue'

export default {
  components:{
    navbar,
    footter,
  }
}
</script>
<style lang="scss">



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

// nav {
//   padding: 30px;


// }
</style>
