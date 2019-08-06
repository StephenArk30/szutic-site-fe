<template>
  <div>
    <div :style="style" class="cover">
      <div class="motto">
        <p class="h2">深圳大学</p>
        <p class="h1">腾讯创新俱乐部</p>
        <p class="h3">Tencent Innovation Club of Shenzhen University</p>
      </div>
    </div>
    <div class="disc">
      <el-row>
        <el-col :span="8" :offset="8" style="text-align: left">
          <div><a>github: xxxx</a></div>
          <div><a>官方微信: xxxx</a></div>
        </el-col>
        <el-col :span="8" style="text-align: left">
          <div>贡献者</div>
          <div>方舟</div>
          <div>林挺</div>
          <div>黄心怡</div>
          <div>赵咏茵</div>
          <div>赖泽锋</div>
        </el-col>
      </el-row>
      <div>备案号: xxxx</div>
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

  .h2, .h1, .h3 {
    margin: 0;
    font-weight: bold;
  }

  .h2 {
    font-size: 40px;
  }

  .h1 {
    font-size: 60px;
  }

  .h3 {
    font-size: 19.5px;
    font-weight: lighter;
  }

  .disc {
    padding: 10px 40px;
    background-color: #333333;
    color: white;
    font-size: 10px;
  }
</style>
