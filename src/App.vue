<template>
  <div>
    <h1>hello</h1>
    <!-- <Login/> -->
    <HomeVue/>
  </div>

</template>

<script lang="ts">

// import Login from './views/Login.vue';

import HomeVue from './views/Home.vue';
export default {
  name: 'App',
  components: {
    // Login,
    HomeVue
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f8f8f9;
  background-color: #606266;
  height: 100%;
}
</style>
