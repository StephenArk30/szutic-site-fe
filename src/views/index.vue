<template>
  <div>
    <div :style="style" class="cover">
      <div class="motto">
        <p class="h2">深圳大学</p>
        <p class="h1">腾讯创新俱乐部</p>
        <p class="h3">Tencent Innovation Club of Shenzhen University</p>
      </div>
    </div>
    <div class="footer">
      <div class="row">
        <div>
          <el-image
            :src="logo"
            class="logo"
            fit="scale-down"></el-image>
        </div>
        <div class="footer-col">
          <div class="title">联系我们</div>
          <div>邮箱: szutic@qq.com</div>
          <div><a href="https://github.com/tic-szu" target="_blank">GitHub: github.com/tic-szu</a></div>
          <div>官方微信: 深大TIC</div>
        </div>
        <div class="footer-col">
          <div class="title">快速链接</div>
          <div><a href="aboutus/intro">关于我们</a></div>
          <div><a href="joinus">加入我们</a></div>
          <div><a href="http://git.szutic.club">代码库</a></div>
          <div><a href="http://cloud.szutic.club">社团云盘</a></div>
        </div>
        <div class="footer-col">
          <div class="title">贡献者</div>
          <div>方舟 | 林挺 | 黄心怡 | 赵咏茵 | 赖泽锋</div>
        </div>
        <div class="footer-col">
          <div class="title">友情链接</div>
          <div><a href="https://www.szu.edu.cn">深圳大学</a></div>
          <div><a href="https://www1.szu.edu.cn/szu.asp">深圳大学内部网</a></div>
          <div><a href="https://www.qq.com">腾讯首页</a></div>
          <div><a href="https://ur.tencent.com/">腾讯高校合作</a></div>
        </div>
      </div>
      <div style="margin: 10px 0 0 0; color: #9b9b9b">
        <a
          href="http://www.beian.miit.gov.cn"
          style="text-decoration: none"
        >粤ICP备19086225号</a>
      </div>
    </div>
  </div>
</template>

<script>
import background from '../assets/background-szu-building.jpg'
import logo from '../assets/logo.png'

export default {
  name: 'index',
  data () {
    return {
      style: {
        height: (document.body.clientHeight - 60) + 'px',
        backgroundImage: 'url(' + background + ')'
      },
      logo
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

  .row {
    display: flex;
    height: 100px;
    align-items: center;
  }

  .footer {
    padding: 10px;
    background-color: #fafafa;
    color: #333333;
    font-size: 12px;
  }
  .logo {
    height: 40px;
    width: 40px;
    margin: 0 20px;
  }
  .footer-col {
    text-align: left;
    height: 100%;
    border-left: 1px solid #cbcbcb;
    padding-left: 20px;
    margin-left: 20px;
    width: 150px;
  }
  .footer-col .title {
    text-align: center;
    color: #9b9b9b;
    font-size: 13px;
  }
  .footer-col div {
    margin-bottom: 3px;
  }
  .footer-col a {
    text-decoration: none;
    color: #333333;
  }
</style>
