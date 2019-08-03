<template>
  <div :style="style" class="cover">
    <div class="motto">
      <p class="h2">深圳大学</p>
      <p class="h1">腾讯创新俱乐部</p>
    </div>
  </div>
</template>

<script>
  import background from '../assets/background-szu-building.jpg'

  export default {
    name: 'index',
    data () {
      return {
        style: {
          height: (document.body.clientHeight - 60) + 'px',
          backgroundImage: 'url(' + background + ')'
        }
      }
    }
  }
</script>

<style scoped>
  .cover {
    background: no-repeat center top;
    background-size: cover;
  }

  .motto {
    text-align: left;
    margin-left: 60px;
    padding-top: 240px;
    color: #FFFFFF;
  }

  .h2, .h1 {
    margin: 0;
  }

  .h2 {
    font-size: 40px;
  }

  .h1 {
    font-size: 60px;
  }
</style>
