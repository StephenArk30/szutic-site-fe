<template>
    <div class="slogan">
      <div class="line1">
        腾飞梦想
      </div>
      <div class="line2">
        创造未来
      </div>
      <div class="line3">
        {{year}}年腾创招新
      </div>
    </div>
</template>

<script>
export default {
  name: 'slogan',
  computed: {
    year: function () {
      let date = new Date()
      return date.getFullYear()
    }
  }
}
</script>

<style scoped>
  .slogan {
    text-align: right;
    padding-right: 30px;
  }
  .line1 {
    color: #0d2f58;
    font-size: 40px;
    margin-bottom: 0;
    font-weight: 600;
  }
  .line2 {
    margin-top: -10px;
    font-size: 50px;
    color: #0e70ff;
    font-weight: 600;
  }
  .line3 {
    background-color: #0e70ff;
    color: #FFFFFF;
    padding: 10px;
    border-radius: 5px;
    width: 175px;
    float: right;
    text-align: center;
  }
</style>
