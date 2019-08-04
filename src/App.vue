<template>
  <div id="app" style="height: 100%">
    <navbar/>
    <qrcode/>
    <router-view router-view style="margin-top: 60px"/>
  </div>
</template>

<script>
import navbar from './components/navbar'
import qrcode from './components/qrcode'

export default {
  name: 'App',
  components: {navbar, qrcode}
}
</script>

<style>
  #app {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
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
