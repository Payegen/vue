<template>
  <div>
    <h1>welcome to here</h1>
    <Login/>
  </div>

</template>

<script>

import Login from './views/Login.vue';
export default {
  name: 'App',
  components: {
    Login
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #409EFF;
}
</style>
