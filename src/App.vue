<template>
  <div id="app" style="height: 100%">
    <navbar/>
    <router-view router-view style="margin-top: 60px"/>
  </div>
</template>

<script>
  import navbar from './components/navbar'

  export default {
    name: 'App',
    components: {navbar}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    position: fixed;
  }
</style>
