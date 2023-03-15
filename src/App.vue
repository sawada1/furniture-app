<template>
  <nav>
 
    <navbar/>
  
  </nav>

  <router-view v-slot="{Component}">
  <transition name="fade">
       <component :is="Component"></component>
  </transition>
  </router-view>

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

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from{
  opacity: 0;
  transform: translateX(100px);
}
.fade-leave-to{
  opacity: 0;
  transform: translateX(-100px);
}
</style>
